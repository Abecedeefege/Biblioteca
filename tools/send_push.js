#!/usr/bin/env node
/* Dispatcher de Web Push para Bibliotequeando.
   Lee notifications/queue.json, manda lo vencido a las suscripciones guardadas
   y actualiza estados + send_log.json. Es deliberadamente tonto: NO decide
   contenido — eso es de la fuente (los agentes o el dueño).

   Multi-dispositivo (2026-07-15): notifications/subscription.json guarda
   devices[] (una entrada por teléfono de la casa). Cada notificación puede
   traer "to" (nombre de dispositivo, o lista) — sin "to" va a todos los
   dispositivos activos. Compat: si el archivo aún tiene el esquema viejo de
   suscripción única, se trata como un devices[] de uno.

   El sitio se publica desde la raíz del repo, así que el directorio publicado
   es ROOT mismo. */
const fs = require('fs');
const path = require('path');
const webpush = require('web-push');

const ROOT = path.join(__dirname, '..');            // raíz del repo = dir publicado
const QUEUE_PATH    = path.join(ROOT, 'notifications/queue.json');
const SEND_LOG_PATH = path.join(ROOT, 'notifications/send_log.json');
const SUB_PATH      = path.join(ROOT, 'notifications/subscription.json');
const VAPID_PUB     = path.join(ROOT, 'notifications/vapid_public.txt');
// El subject VAPID admite mailto: o URL; se usa la URL del sitio para no
// publicar un email en el repo.
const VAPID_SUBJECT = 'https://abecedeefege.github.io/Biblioteca/';

const readJson  = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fb; } };
const writeJson = (p, d)  => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');

// Piso horario duro POR DISPOSITIVO: ninguna notificación sale antes de las
// 11:00 en la zona horaria local de su destinatario, sin importar qué
// send_at haya puesto la fuente de contenido. Protege contra un send_at mal
// calculado (corrida tardía, error de zona horaria, prueba manual) que
// mandaría un push a deshora. Andy y Sofi viven en Montevideo (UTC-3 fijo);
// C vive en París (CET/CEST — Intl maneja el DST). Un dispositivo nuevo sin
// entrada acá cae en Montevideo, el default histórico.
const MIN_LOCAL_HOUR = 11;
const DEVICE_TZ = { andy: 'America/Montevideo', sofi: 'America/Montevideo', c: 'Europe/Paris' };
// Dispositivos de prueba: sin piso horario, para poder validar el canal a
// cualquier hora sin tocar el resguardo de los teléfonos reales.
const NO_FLOOR_DEVICES = ['c-test'];
const DEFAULT_TZ = 'America/Montevideo';
function localHour(date, tz) {
  return parseInt(new Intl.DateTimeFormat('en-GB', {
    timeZone: tz, hour: 'numeric', hourCycle: 'h23',
  }).format(date), 10);
}
// El piso se calcula con lo que sepamos del dispositivo, en este orden:
//   dev.tz            → zona informada por su propio teléfono (viaja con ella)
//   DEVICE_TZ[nombre] → zona por defecto conocida de ese dispositivo
//   DEFAULT_TZ        → Montevideo, el histórico de la casa
// dev.min_local_hour permite bajar/subir el piso cuando el dueño de ese
// teléfono eligió explícitamente un horario de entrega (ver rec-time).
function pastFloorFor(dev, date) {
  const key = String((dev && dev.device) || '').toLowerCase();
  if (NO_FLOOR_DEVICES.includes(key)) return true;
  const tz = (dev && dev.tz) || DEVICE_TZ[key] || DEFAULT_TZ;
  const floor = Number.isInteger(dev && dev.min_local_hour) &&
                dev.min_local_hour >= 0 && dev.min_local_hour <= 23
    ? dev.min_local_hour : MIN_LOCAL_HOUR;
  return localHour(date, tz) >= floor;
}

function deviceList(subDoc) {
  if (!subDoc) return [];
  if (Array.isArray(subDoc.devices)) return subDoc.devices;
  if (subDoc.subscription) return [subDoc];         // esquema viejo: un solo dispositivo
  return [];
}
function targetsFor(n, actives) {
  if (!n.to) return actives;
  const wanted = (Array.isArray(n.to) ? n.to : [n.to]).map((s) => String(s).toLowerCase());
  return actives.filter((d) => wanted.includes(String(d.device || '').toLowerCase()));
}

async function main() {
  const queue = readJson(QUEUE_PATH, null);
  if (!queue || !Array.isArray(queue.notifications)) { console.log('Cola vacía.'); return; }

  const now = Date.now();
  let queueChanged = false, subChanged = false;

  // Expirar vencidos aunque no haya suscripción (evita backlog a deshora).
  for (const n of queue.notifications) {
    if (n.status === 'pending' && n.expires_at && Date.parse(n.expires_at) < now) {
      n.status = 'expired'; queueChanged = true;
    }
  }

  const subDoc = readJson(SUB_PATH, null);
  const devices = deviceList(subDoc);

  const nowDate = new Date(now);
  const vencidas = queue.notifications.filter(
    (n) => n.status === 'pending' && n.send_at && Date.parse(n.send_at) <= now
  );
  // El piso se evalúa contra los destinatarios reales de cada notificación:
  // solo entra a `due` la que tiene a TODOS sus targets pasado su piso local
  // (sin targets activos entra igual, para conservar el log de "sin
  // dispositivos" del loop de envío).
  const activesNow = devices.filter((d) => d.status === 'active' && d.subscription);
  // `ignore_floor` salta el piso horario: es para las confirmaciones que el
  // usuario acaba de pedir con un tap (la bienvenida al suscribirse). Si tocó
  // el botón a las 23:00, la confirmación tiene que llegar ahí, no a la
  // mañana siguiente. Las notificaciones proactivas nunca lo llevan.
  const due = vencidas.filter((n) => {
    if (n.ignore_floor === true) return true;
    const targets = targetsFor(n, activesNow);
    return !targets.length || targets.every((d) => pastFloorFor(d, nowDate));
  });
  if (vencidas.length > due.length) {
    console.log(`${vencidas.length - due.length} vencidas pero antes del piso horario local de su destinatario — se posponen.`);
  }

  if (due.length && devices.length) {
    const priv = process.env.VAPID_PRIVATE_KEY;
    if (!priv) { console.error('Falta VAPID_PRIVATE_KEY'); process.exitCode = 1; return; }
    webpush.setVapidDetails(VAPID_SUBJECT, fs.readFileSync(VAPID_PUB, 'utf8').trim(), priv);

    const log = readJson(SEND_LOG_PATH, { events: [] });
    for (const n of due) {
      const actives = devices.filter((d) => d.status === 'active' && d.subscription);
      const targets = targetsFor(n, actives);
      if (!targets.length) {
        console.log(`[${n.id}] sin dispositivos activos para ${n.to ? JSON.stringify(n.to) : 'todos'} — queda pending`);
        continue;                                   // reintenta la próxima corrida; expires_at acota
      }
      const payload = JSON.stringify({ nid: n.id, title: n.title, body: n.body, url: n.url });
      let delivered = 0;
      for (const dev of targets) {
        try {
          // urgency 'high': sin esto Android retiene/descarta las de prioridad
          // normal con la pantalla apagada aunque el POST devuelva 201.
          // TTL 4h: si el teléfono está apagado llega al prender, pero no
          // trasnochada al día siguiente.
          const res = await webpush.sendNotification(dev.subscription, payload, { TTL: 14400, urgency: 'high' });
          delivered++;
          log.events.push({ type: 'sent', nid: n.id, device: dev.device || null, ts: new Date().toISOString(), status_code: res.statusCode });
          console.log(`[${n.id}] enviada a ${dev.device || 'sin-nombre'} (HTTP ${res.statusCode})`);
        } catch (err) {
          const code = err.statusCode || 0;
          log.events.push({ type: 'failed', nid: n.id, device: dev.device || null, ts: new Date().toISOString(), status_code: code });
          if (code === 404 || code === 410) {       // endpoint muerto → invalidar SOLO ese dispositivo
            dev.status = 'invalid';
            dev.invalidated_at = new Date().toISOString();
            dev.invalid_reason = `HTTP ${code}`;
            subChanged = true;
            console.error(`[${n.id}] endpoint muerto de ${dev.device || 'sin-nombre'} — dispositivo invalidado`);
          } else {
            console.error(`[${n.id}] error transitorio HTTP ${code} en ${dev.device || 'sin-nombre'}`);
          }
        }
      }
      if (delivered > 0) {
        n.status = 'sent'; n.sent_at = new Date().toISOString(); queueChanged = true;
      } else {
        // nadie la recibió: queda pending y la próxima corrida (cron cada 30
        // min) reintenta; expires_at acota los reintentos al día.
        n.fail_reason = 'sin entregas (se reintenta)'; queueChanged = true;
      }
    }
    writeJson(SEND_LOG_PATH, log);
    if (subChanged) writeJson(SUB_PATH, subDoc);
  } else if (due.length) {
    console.log(`${due.length} vencidas pero sin dispositivos suscriptos — quedan pending.`);
  }

  if (queueChanged) { queue._updated_at = new Date().toISOString(); writeJson(QUEUE_PATH, queue); }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
