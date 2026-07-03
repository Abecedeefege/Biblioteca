#!/usr/bin/env node
/* Dispatcher de Web Push para Bibliotequeando.
   Lee notifications/queue.json, manda lo vencido a la suscripción guardada y
   actualiza estados + send_log.json. Es deliberadamente tonto: NO decide
   contenido — eso es del agente /engagement (la fuente).
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

async function main() {
  const queue = readJson(QUEUE_PATH, null);
  if (!queue || !Array.isArray(queue.notifications)) { console.log('Cola vacía.'); return; }

  const now = Date.now();
  let changed = false;

  // Expirar vencidos aunque no haya suscripción (evita backlog a deshora).
  for (const n of queue.notifications) {
    if (n.status === 'pending' && n.expires_at && Date.parse(n.expires_at) < now) {
      n.status = 'expired'; changed = true;
    }
  }

  const due = queue.notifications.filter(
    (n) => n.status === 'pending' && n.send_at && Date.parse(n.send_at) <= now
  );

  const subDoc = readJson(SUB_PATH, null);
  const subscription = subDoc && subDoc.status === 'active' ? subDoc.subscription : null;

  if (due.length && subscription) {
    const priv = process.env.VAPID_PRIVATE_KEY;
    if (!priv) { console.error('Falta VAPID_PRIVATE_KEY'); process.exitCode = 1; return; }
    webpush.setVapidDetails(VAPID_SUBJECT, fs.readFileSync(VAPID_PUB, 'utf8').trim(), priv);

    const log = readJson(SEND_LOG_PATH, { events: [] });
    for (const n of due) {
      const payload = JSON.stringify({ nid: n.id, title: n.title, body: n.body, url: n.url });
      try {
        // urgency 'high': sin esto Android retiene/descarta las de prioridad
        // normal con la pantalla apagada aunque el POST devuelva 201.
        // TTL 4h: si el teléfono está apagado llega al prender, pero no
        // trasnochada al día siguiente.
        const res = await webpush.sendNotification(subscription, payload, { TTL: 14400, urgency: 'high' });
        n.status = 'sent'; n.sent_at = new Date().toISOString(); changed = true;
        log.events.push({ type: 'sent', nid: n.id, ts: n.sent_at, status_code: res.statusCode });
        console.log(`[${n.id}] enviada (HTTP ${res.statusCode})`);
      } catch (err) {
        const code = err.statusCode || 0;
        changed = true;
        log.events.push({ type: 'failed', nid: n.id, ts: new Date().toISOString(), status_code: code });
        if (code === 404 || code === 410) {       // endpoint muerto → terminal + invalidar
          n.status = 'failed';
          n.fail_reason = 'subscription_gone';
          console.error(`[${n.id}] falló: subscription_gone`);
          subDoc.status = 'invalid';
          subDoc.invalidated_at = new Date().toISOString();
          subDoc.invalid_reason = `HTTP ${code}`;
          writeJson(SUB_PATH, subDoc);
          break;                                  // no insistir contra un endpoint muerto
        }
        // 5xx/429/red (code 0): transitorio — queda pending y la próxima corrida
        // (cron cada 30 min) reintenta; expires_at acota los reintentos al día.
        n.fail_reason = `HTTP ${code} (transitorio, se reintenta)`;
        console.error(`[${n.id}] error transitorio HTTP ${code} — queda pending`);
      }
    }
    writeJson(SEND_LOG_PATH, log);
  } else if (due.length) {
    console.log(`${due.length} vencidas pero sin suscripción activa — quedan pending.`);
  }

  if (changed) { queue._updated_at = new Date().toISOString(); writeJson(QUEUE_PATH, queue); }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
