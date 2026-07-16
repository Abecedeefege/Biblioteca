#!/usr/bin/env node
/* Sincronizador del relay público de Bibliotequeando.
   Los teléfonos SIN credenciales (p.ej. el de Sofi) registran su suscripción
   push y su feedback en Supabase (tabla con INSERT anónimo). Este script
   corre en el workflow push-dispatch ANTES del envío y baja esas novedades
   al repo:
     - dispositivos nuevos → notifications/subscription.json (devices[])
     - la primera vez que aparece "Sofi" → encola su push de bienvenida
     - eventos de feedback → sync/engagement.json (merge por id)
   La anon/publishable key es pública por diseño (RLS limita a insert+select).
   Best effort: si Supabase no responde, avisa y sigue (los envíos del día no
   se bloquean). */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SUB_PATH   = path.join(ROOT, 'notifications/subscription.json');
const QUEUE_PATH = path.join(ROOT, 'notifications/queue.json');
const SYNC_PATH  = path.join(ROOT, 'sync/engagement.json');

const SUPA = 'https://jhdwpxttgnravhlnmdgg.supabase.co';
const KEY  = 'sb_publishable_phJdQOO7PUdidexaeUI4vQ_WJpKOgDM';

const ALLOWED_DEVICES = ['Sofi', 'Andy'];
const WELCOME = {
  device: 'Sofi',
  id: 'sofi-bienvenida',
  title: '🫖 Sofi, tu primera ficha llegó',
  body: 'Cuatro jubilados ingleses, té con bizcochos y un crimen fresquito. Elegida para vos. Tocá y abrila.',
  url: 'https://abecedeefege.github.io/Biblioteca/recs/2026-07-24-osman-club-crimen.html',
};
// eventos del relay más viejos que esto no se re-mergean (el agente de
// engagement compacta los >14 días; así no resucitan)
const EVENT_WINDOW_DAYS = 13;

const readJson  = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fb; } };
const writeJson = (p, d)  => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');

async function supaGet(pathAndQuery) {
  const r = await fetch(SUPA + '/rest/v1/' + pathAndQuery, {
    headers: { apikey: KEY, Authorization: 'Bearer ' + KEY },
  });
  if (!r.ok) throw new Error('Supabase GET ' + pathAndQuery.split('?')[0] + ': HTTP ' + r.status);
  return r.json();
}

async function main() {
  let rows, events;
  try {
    const since = new Date(Date.now() - EVENT_WINDOW_DAYS * 86400000).toISOString();
    [rows, events] = await Promise.all([
      supaGet('biblioteca_devices?select=device,subscription,created_at&order=created_at.asc&limit=200'),
      supaGet('biblioteca_events?select=id,payload&order=created_at.asc&created_at=gte.' + encodeURIComponent(since) + '&limit=2000'),
    ]);
  } catch (e) {
    console.log('Relay inaccesible (' + e.message + ') — sigo sin sincronizar.');
    return;
  }

  /* ---- dispositivos ---- */
  const subDoc = readJson(SUB_PATH, null) || { devices: [] };
  if (!Array.isArray(subDoc.devices)) {
    subDoc.devices = subDoc.subscription ? [{
      device: subDoc.device, subscription: subDoc.subscription, status: subDoc.status,
      updated_at: subDoc.updated_at, invalidated_at: subDoc.invalidated_at || null,
      invalid_reason: subDoc.invalid_reason || null,
    }] : [];
    delete subDoc.subscription; delete subDoc.device; delete subDoc.status;
    delete subDoc.updated_at; delete subDoc.invalidated_at; delete subDoc.invalid_reason;
  }
  let subChanged = false;
  const added = [];
  for (const row of rows || []) {
    if (!ALLOWED_DEVICES.includes(row.device)) continue;
    if (!row.subscription || !row.subscription.endpoint) continue;
    const existing = subDoc.devices.find((d) => d.device === row.device);
    const entry = {
      device: row.device, subscription: row.subscription, status: 'active',
      updated_at: new Date().toISOString(), invalidated_at: null, invalid_reason: null,
    };
    if (!existing) {
      subDoc.devices.push(entry); subChanged = true; added.push(row.device);
      console.log('Dispositivo nuevo desde el relay: ' + row.device);
    } else if (existing.status === 'invalid' &&
               (!existing.subscription || existing.subscription.endpoint !== row.subscription.endpoint)) {
      // re-suscripción tras endpoint muerto: el relay trae el reemplazo
      Object.assign(existing, entry); subChanged = true;
      console.log('Dispositivo re-suscripto desde el relay: ' + row.device);
    }
    // si existe y está active/paused: primera-gana (no pisar con filas del relay)
  }
  if (subChanged) writeJson(SUB_PATH, subDoc);

  /* ---- bienvenida de Sofi (solo cuando su dispositivo entra por primera vez) ---- */
  if (added.includes(WELCOME.device)) {
    const queue = readJson(QUEUE_PATH, { notifications: [] });
    queue.notifications = queue.notifications || [];
    const ya = queue.notifications.some((n) => n.id === WELCOME.id);
    if (!ya) {
      const now = Date.now();
      queue.notifications.push({
        id: WELCOME.id, title: WELCOME.title, body: WELCOME.body, url: WELCOME.url,
        to: WELCOME.device,
        send_at: new Date(now - 60000).toISOString(),
        expires_at: new Date(now + 24 * 3600000).toISOString(),
        status: 'pending', sent_at: null, fail_reason: null,
        created_by: 'sync_devices.js (bienvenida)',
      });
      queue._updated_at = new Date().toISOString();
      writeJson(QUEUE_PATH, queue);
      console.log('Bienvenida de Sofi encolada.');
    }
  }

  /* ---- eventos de feedback ---- */
  if (events && events.length) {
    const doc = readJson(SYNC_PATH, null) ||
      { _comment: 'Feedback del dueño. Lo escribe el browser (engage.js) o el relay (sync_devices.js); el agente /engagement lo lee y compacta.', events: [] };
    doc.events = doc.events || [];
    const seen = new Set(doc.events.map((e) => e.id));
    let n = 0;
    for (const row of events) {
      if (!row.payload || !row.id || seen.has(row.id)) continue;
      doc.events.push(row.payload); seen.add(row.id); n++;
    }
    if (n) {
      doc._updated_at = new Date().toISOString();
      writeJson(SYNC_PATH, doc);
      console.log(n + ' evento(s) de feedback bajados del relay.');
    }
  }
}
main().catch((e) => { console.error('sync_devices:', e.message); });
