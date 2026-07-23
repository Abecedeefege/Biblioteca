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

// Piso horario duro: ninguna notificación sale antes de las 11:00 en
// Uruguay (UTC-3 fijo, sin DST), sin importar qué send_at haya puesto la
// fuente de contenido. Protege contra un send_at mal calculado (corrida
// tardía, error de zona horaria, prueba manual) que mandaría un push a
// deshora.
const MONTEVIDEO_UTC_OFFSET = -3;
const MIN_LOCAL_HOUR = 11;
function montevideoHour(date) {
  return (date.getUTCHours() + MONTEVIDEO_UTC_OFFSET + 24) % 24;
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

  const pastFloor = montevideoHour(new Date(now)) >= MIN_LOCAL_HOUR;
  const vencidas = queue.notifications.filter(
    (n) => n.status === 'pending' && n.send_at && Date.parse(n.send_at) <= now
  );
  const due = pastFloor ? vencidas : [];
  if (vencidas.length && !pastFloor) {
    console.log(`${vencidas.length} vencidas pero antes de las 11:00 UY — se posponen hasta el piso horario.`);
  }

  const subDoc = readJson(SUB_PATH, null);
  const devices = deviceList(subDoc);

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
