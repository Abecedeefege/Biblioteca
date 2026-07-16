/* engage.js — tracking de feedback de Bibliotequeando, sin backend.
   Patrón no negociable: OUTBOX. Cada evento se guarda SINCRÓNICO en
   localStorage ANTES de intentar mandarlo (en mobile, un fetch disparado al
   minimizar la app no completa). El flush reintenta al cargar, al volver a
   foco y al recuperar red, con dedup por id. El badge de sync dice la verdad.

   Ownership: este archivo solo escribe sync/engagement.json (y, si el usuario
   pausa los pushes, el status de notifications/subscription.json). La cola de
   pushes y las páginas son de otros actores. */
(function () {
  'use strict';

  var REPO = 'Abecedeefege/Biblioteca';
  var BRANCH = 'main';
  var SYNC_PATH = 'sync/engagement.json';
  var SETUP_URL = 'setup.html';

  var K = {
    pat: 'biblioteca_gh_pat',
    device: 'biblioteca_device_name',
    outbox: 'biblioteca_engage_outbox',
    nidSeen: 'biblioteca_engage_nids_seen',
    lastVisit: 'biblioteca_engage_last_visit:',
  };

  /* ---------- utilidades ---------- */
  function now() { return new Date().toISOString(); }
  function uid() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); }
  function page() { return location.pathname.split('/').slice(-1)[0] || 'index.html'; }
  function readLS(key, fb) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; }
  }
  function writeLS(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); return true; } catch (e) { return false; }
  }

  /* ---------- badge de sync honesto ---------- */
  var badge = null;
  function ensureBadge() {
    if (badge || !document.body) return;
    badge = document.createElement('div');
    badge.setAttribute('style',
      'position:fixed;left:.5rem;bottom:.5rem;z-index:9999;font:italic .72rem Georgia,serif;' +
      'padding:.2rem .55rem;border-radius:9px;background:rgba(42,31,18,.85);color:#f1e8d4;' +
      'pointer-events:none;transition:opacity .4s;opacity:0;');
    document.body.appendChild(badge);
  }
  var badgeTimer = null;
  function setBadge(text, sticky) {
    ensureBadge(); if (!badge) return;
    clearTimeout(badgeTimer);                  // un timer viejo no apaga un mensaje nuevo
    badge.textContent = text;
    badge.style.opacity = text ? '1' : '0';
    if (!sticky && text) badgeTimer = setTimeout(function () { badge.style.opacity = '0'; }, 4000);
  }
  function refreshBadge(state) {
    var n = outbox().length;
    if (state === 'error') setBadge('⚠️ No se pudo guardar (' + n + ' pendientes — reintenta solo)', true);
    else if (state === 'mem') setBadge('⚠️ Almacenamiento lleno: ' + n + ' en memoria — no cierres aún', true);
    else if (state === 'nopat') setBadge('⚠️ ' + n + ' sin guardar — falta configurar (setup)', true);
    else if (n > 0) setBadge('⏳ Sincronizando ' + n + '…', true);
    else setBadge('✓ Sincronizado');
  }

  /* ---------- outbox ---------- */
  var memBox = [];                             // respaldo si localStorage falla (cuota)
  function outbox() { return readLS(K.outbox, []).concat(memBox); }
  function saveOutbox(list) {
    if (writeLS(K.outbox, list)) { memBox = []; return true; }
    var ls = readLS(K.outbox, []), seen = {};
    ls.forEach(function (e) { seen[e.id] = 1; });
    memBox = list.filter(function (e) { return !seen[e.id]; });
    return false;
  }

  function record(type, fields) {
    var ev = { id: uid(), type: type, ts: now(), page: page(),
               device: localStorage.getItem(K.device) || 'sin-nombre' };
    for (var k in fields) if (fields[k] !== undefined) ev[k] = fields[k];
    var box = outbox(); box.push(ev);
    var saved = saveOutbox(box);               // sincrónico, ANTES de red
    refreshBadge(saved ? undefined : 'mem');   // el badge no miente
    flushSoon();
    return ev;
  }

  /* ---------- persistencia vía GitHub API (PAT solo en localStorage) ---------- */
  function ghHeaders() {
    var t = localStorage.getItem(K.pat);
    if (!t) return null;
    return { Authorization: 'Bearer ' + t, Accept: 'application/vnd.github+json' };
  }
  function b64encodeUtf8(s) { return btoa(unescape(encodeURIComponent(s))); }
  function b64decodeUtf8(s) { return decodeURIComponent(escape(atob(s.replace(/\n/g, '')))); }

  var flushing = false, flushAgain = false, flushTimer = null;
  function flushSoon() { clearTimeout(flushTimer); flushTimer = setTimeout(flush, 400); }

  function flush() {
    if (flushing) { flushAgain = true; return; }  // lo re-agenda el flush en vuelo
    var box = outbox();
    if (!box.length) { refreshBadge(); return; }
    var headers = ghHeaders();
    if (!headers) { refreshBadge('nopat'); return; }
    flushing = true;
    refreshBadge();
    var api = 'https://api.github.com/repos/' + REPO + '/contents/' + SYNC_PATH;

    fetch(api + '?ref=' + BRANCH + '&_=' + Date.now(), { cache: 'no-store', headers: headers })
      .then(function (r) {
        if (r.status === 404) return { obj: null, sha: null };
        if (!r.ok) throw new Error('GET HTTP ' + r.status);
        return r.json().then(function (doc) {
          return { obj: JSON.parse(b64decodeUtf8(doc.content)), sha: doc.sha };
        });
      })
      .then(function (cur) {
        var doc = cur.obj || { _comment: 'Feedback del dueño. Lo escribe SOLO el browser (engage.js); el agente /engagement lo lee y compacta.', events: [] };
        doc.events = doc.events || [];
        var seen = {};
        doc.events.forEach(function (e) { seen[e.id] = 1; });
        var box2 = outbox();                       // releer: pudo crecer durante el GET
        var fresh = box2.filter(function (e) { return !seen[e.id]; });
        if (!fresh.length) {
          saveOutbox(outbox().filter(function (e) { return !seen[e.id]; }));
          return null;
        }
        doc.events = doc.events.concat(fresh);
        doc._updated_at = now();
        doc.device_last = localStorage.getItem(K.device) || 'sin-nombre';
        var body = { message: 'engage: ' + fresh.length + ' evento(s)', branch: BRANCH,
                     content: b64encodeUtf8(JSON.stringify(doc, null, 2) + '\n') };
        if (cur.sha) body.sha = cur.sha;
        return fetch(api, { method: 'PUT',
          headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
          body: JSON.stringify(body),
        }).then(function (r) {
          if (!r.ok) throw new Error('PUT HTTP ' + r.status);
          // solo se vacía lo efectivamente subido; lo que llegó después queda
          var sent = {}; fresh.forEach(function (e) { sent[e.id] = 1; });
          saveOutbox(outbox().filter(function (e) { return !sent[e.id] && !seen[e.id]; }));
        });
      })
      .then(function () {
        flushing = false; refreshBadge();
        if (flushAgain || outbox().length) { flushAgain = false; flushSoon(); }
      })
      .catch(function () {
        flushing = false; flushAgain = false; refreshBadge('error');
        setTimeout(flush, 30000);                  // reintento con backoff simple
      });
  }

  /* ---------- eventos automáticos ---------- */
  var t0 = Date.now(), visibleSince = t0, dwellAccum = 0, maxScroll = 0, dwellLogged = 0;

  function onScroll() {
    var doc = document.documentElement;
    var total = Math.max(1, doc.scrollHeight - window.innerHeight);
    var pct = Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / total) * 100));
    if (pct > maxScroll) maxScroll = pct;
  }
  function logDwell() {
    if (visibleSince) { dwellAccum += Date.now() - visibleSince; visibleSince = null; }
    var secs = Math.round(dwellAccum / 1000);
    if (secs - dwellLogged < 3) return;            // no spamear micro-dwells
    dwellLogged = secs;
    record('dwell', { dwell_s: secs, scroll_pct: maxScroll });
  }

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') logDwell();
    else { visibleSince = Date.now(); flushSoon(); }
  });
  window.addEventListener('pagehide', logDwell);
  window.addEventListener('focus', flushSoon);
  window.addEventListener('online', flushSoon);
  window.addEventListener('scroll', onScroll, { passive: true });

  function logArrival() {
    var params = new URLSearchParams(location.search);
    var nid = params.get('nid');
    if (nid) {
      var seen = readLS(K.nidSeen, []);
      if (seen.indexOf(nid) === -1) {
        seen.push(nid); writeLS(K.nidSeen, seen.slice(-100));
        record('notification_clicked', { nid: nid, src: params.get('src') || 'push' });
      }
      record('page_visit', { nid: nid });
    } else {
      var key = K.lastVisit + page();
      var last = parseInt(localStorage.getItem(key) || '0', 10);
      if (Date.now() - last > 3600000) {           // visita directa: máx 1/hora
        localStorage.setItem(key, String(Date.now()));
        record('page_visit', {});
      }
    }
  }

  /* ---------- API pública para las páginas de experiencia ---------- */
  function mark(btn, txt) {
    // En iOS Safari un tap no enfoca el <button>: si llega body/otro nodo, no marcar nada.
    if (!btn || btn.tagName !== 'BUTTON' || !btn.parentElement) return;
    var box = btn.parentElement.querySelector('.react-hint, .q-hint');
    Array.prototype.forEach.call(btn.parentElement ? btn.parentElement.querySelectorAll('button') : [],
      function (b) { b.disabled = true; b.style.opacity = (b === btn) ? '1' : '.35'; });
    if (box) box.textContent = txt || '✓ anotado';
  }
  window.engageReact = function (slug, value, btn) {
    record('reaction', { slug: slug, value: value });
    mark(btn, '✓ gracias');
  };
  window.engageAnswer = function (qid, value, btn) {
    record('answer', { qid: qid, value: value });
    mark(btn, '✓ anotado');
  };
  window.engageApprove = function (proposalId, btn) {
    record('proposal_approved', { proposal: proposalId });
    mark(btn, '✓');
    setBadge('✅ Anotado: esta experiencia se queda', false);
  };
  window.engageRejected = function (proposalId, btn) {
    record('proposal_rejected', { proposal: proposalId });
    mark(btn, '✓');
    setBadge('Anotado: no se repite', false);
  };

  /* ---------- control de desuscripción (fatiga se respeta YA) ---------- */
  function injectUnsub() {
    if (!document.body || document.getElementById('engage-unsub')) return;
    var div = document.createElement('div');
    div.id = 'engage-unsub';
    div.setAttribute('style', 'margin:2.2rem 0 0;text-align:center;font:italic .8rem Georgia,serif;opacity:.65;');
    div.innerHTML = '<a href="#" id="engage-unsub-a" style="color:inherit">🔕 Pausar estas notificaciones</a>' +
      ' · <a href="' + SETUP_URL + '" style="color:inherit">ajustes</a>';
    document.body.appendChild(div);
    document.getElementById('engage-unsub-a').addEventListener('click', function (ev) {
      ev.preventDefault();
      record('push_unsubscribe', {});
      // pausar SOLO este dispositivo: capturar su endpoint antes de desuscribir
      var epPromise = ('serviceWorker' in navigator)
        ? navigator.serviceWorker.ready
            .then(function (reg) { return reg.pushManager.getSubscription(); })
            .then(function (sub) {
              if (!sub) return null;
              var ep = sub.endpoint;
              return sub.unsubscribe().then(function () { return ep; }, function () { return ep; });
            })
            .catch(function () { return null; })
        : Promise.resolve(null);
      var headers = ghHeaders();
      if (headers) {
        var api = 'https://api.github.com/repos/' + REPO + '/contents/notifications/subscription.json';
        epPromise.then(function (ep) {
          return fetch(api + '?ref=' + BRANCH + '&_=' + Date.now(), { cache: 'no-store', headers: headers })
            .then(function (r) { if (!r.ok) throw 0; return r.json(); })
            .then(function (doc) {
              var obj = JSON.parse(b64decodeUtf8(doc.content));
              var devs = obj.devices || (obj.subscription ? [obj] : []);
              var target = null, myName = localStorage.getItem(K.device);
              for (var i = 0; i < devs.length; i++) {
                if (ep && devs[i].subscription && devs[i].subscription.endpoint === ep) { target = devs[i]; break; }
              }
              if (!target && myName) {
                for (var j = 0; j < devs.length; j++) { if (devs[j].device === myName) { target = devs[j]; break; } }
              }
              if (!target && devs.length === 1) target = devs[0];
              if (target) { target.status = 'paused'; target.updated_at = now(); }
              else { obj.status = 'paused'; }
              obj.updated_at = now();
              return fetch(api, { method: 'PUT',
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                body: JSON.stringify({ message: 'push: pausado (' + (target && target.device || 'dispositivo') + ')', branch: BRANCH,
                  content: b64encodeUtf8(JSON.stringify(obj, null, 2) + '\n'), sha: doc.sha }) });
            });
        }).catch(function () {});
      }
      div.innerHTML = '🔕 Pausado en este dispositivo. Para reactivar: <a href="' + SETUP_URL + '" style="color:inherit">ajustes</a>';
    });
  }

  /* ---------- arranque ---------- */
  function boot() { ensureBadge(); injectUnsub(); logArrival(); onScroll(); flushSoon(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
