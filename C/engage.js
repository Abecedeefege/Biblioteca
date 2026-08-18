/* engage.js — feedback tracking for My library (C's site), no backend.
   Relay-only adaptation of ../engage/engage.js: C's phone has no GitHub PAT,
   so every event goes to the public Supabase relay (anonymous INSERT, RLS
   limited by design) and the repo workflow (tools/sync_devices.js) merges it
   into sync/engagement.json for the agents to read.

   Non-negotiable pattern: OUTBOX. Every event is saved SYNCHRONOUSLY to
   localStorage BEFORE any network attempt (on mobile, a fetch fired while
   the app minimizes never completes). Flush retries on load, on focus and on
   regained connectivity, with per-id dedup. The sync badge tells the truth. */
(function () {
  'use strict';

  var SUPA = 'https://jhdwpxttgnravhlnmdgg.supabase.co';
  var SUPA_KEY = 'sb_publishable_phJdQOO7PUdidexaeUI4vQ_WJpKOgDM'; // public by design (RLS)
  var DEVICE = 'C';

  var K = {
    outbox: 'c_library_engage_outbox',
    nidSeen: 'c_library_engage_nids_seen',
    lastVisit: 'c_library_engage_last_visit:',
  };

  /* ---------- utilities ---------- */
  function now() { return new Date().toISOString(); }
  function uid() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); }
  function page() { return location.pathname.split('/').slice(-1)[0] || 'index.html'; }
  function readLS(key, fb) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; } catch (e) { return fb; }
  }
  function writeLS(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); return true; } catch (e) { return false; }
  }

  /* ---------- honest sync badge ---------- */
  var badge = null;
  function ensureBadge() {
    if (badge || !document.body) return;
    badge = document.createElement('div');
    badge.setAttribute('style',
      'position:fixed;left:.5rem;bottom:.5rem;z-index:9999;font:italic .72rem Georgia,serif;' +
      'padding:.2rem .55rem;border-radius:9px;background:rgba(11,20,37,.88);color:#dcb680;' +
      'pointer-events:none;transition:opacity .4s;opacity:0;');
    document.body.appendChild(badge);
  }
  var badgeTimer = null;
  function setBadge(text, sticky) {
    ensureBadge(); if (!badge) return;
    clearTimeout(badgeTimer);                  // a stale timer must not hide a fresh message
    badge.textContent = text;
    badge.style.opacity = text ? '1' : '0';
    if (!sticky && text) badgeTimer = setTimeout(function () { badge.style.opacity = '0'; }, 4000);
  }
  function refreshBadge(state) {
    var n = outbox().length;
    if (state === 'error') setBadge('⚠️ Could not save (' + n + ' pending — will retry by itself)', true);
    else if (state === 'mem') setBadge('⚠️ Storage full: ' + n + ' held in memory — don’t close yet', true);
    else if (n > 0) setBadge('⏳ Syncing ' + n + '…', true);
    else setBadge('✓ Synced');
  }

  /* ---------- outbox ---------- */
  var memBox = [];                             // fallback if localStorage fails (quota)
  function outbox() { return readLS(K.outbox, []).concat(memBox); }
  function saveOutbox(list) {
    if (writeLS(K.outbox, list)) { memBox = []; return true; }
    var ls = readLS(K.outbox, []), seen = {};
    ls.forEach(function (e) { seen[e.id] = 1; });
    memBox = list.filter(function (e) { return !seen[e.id]; });
    return false;
  }

  function record(type, fields) {
    var ev = { id: uid(), type: type, ts: now(), page: page(), device: DEVICE };
    for (var k in fields) if (fields[k] !== undefined) ev[k] = fields[k];
    var box = outbox(); box.push(ev);
    var saved = saveOutbox(box);               // synchronous, BEFORE network
    refreshBadge(saved ? undefined : 'mem');
    flushSoon();
    return ev;
  }

  /* ---------- flush to the public relay (server-side dedup by id) ---------- */
  var flushing = false, flushAgain = false, flushTimer = null;
  function flushSoon() { clearTimeout(flushTimer); flushTimer = setTimeout(flush, 400); }

  function flush() {
    if (flushing) { flushAgain = true; return; }
    var box = outbox();
    if (!box.length) { refreshBadge(); return; }
    flushing = true;
    refreshBadge();
    var rows = box.map(function (e) { return { id: e.id, payload: e }; });
    fetch(SUPA + '/rest/v1/biblioteca_events', {
      method: 'POST',
      headers: { apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY,
                 'Content-Type': 'application/json',
                 Prefer: 'resolution=ignore-duplicates,return=minimal' },
      body: JSON.stringify(rows),
    }).then(function (r) {
      if (!r.ok && r.status !== 409) throw new Error('HTTP ' + r.status);
      var sent = {}; box.forEach(function (e) { sent[e.id] = 1; });
      saveOutbox(outbox().filter(function (e) { return !sent[e.id]; }));
      flushing = false; refreshBadge();
      if (flushAgain || outbox().length) { flushAgain = false; flushSoon(); }
    }).catch(function () {
      flushing = false; flushAgain = false; refreshBadge('error');
      setTimeout(flush, 30000);                // simple backoff retry
    });
  }

  /* ---------- automatic events ---------- */
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
    if (secs - dwellLogged < 3) return;        // no micro-dwell spam
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
      if (Date.now() - last > 3600000) {       // direct visit: max 1/hour
        localStorage.setItem(key, String(Date.now()));
        record('page_visit', {});
      }
    }
  }

  /* ---------- public API for the pages ---------- */
  function mark(btn, txt) {
    // On iOS Safari a tap doesn't focus the <button>: if body/another node
    // arrives, mark nothing.
    if (!btn || btn.tagName !== 'BUTTON' || !btn.parentElement) return;
    var box = btn.parentElement.querySelector('.react-hint, .q-hint');
    Array.prototype.forEach.call(btn.parentElement ? btn.parentElement.querySelectorAll('button') : [],
      function (b) { b.disabled = true; b.style.opacity = (b === btn) ? '1' : '.35'; });
    if (box) box.textContent = txt || '✓ noted';
  }
  window.engageReact = function (slug, value, btn) {
    record('reaction', { slug: slug, value: value });
    mark(btn, '✓ thank you');
  };
  window.engageAnswer = function (qid, value, btn) {
    record('answer', { qid: qid, value: value });
    mark(btn, '✓ noted');
  };
  window.engageRecord = record;                // for the onboarding flow (recs/)

  /* ---------- pause control (fatigue is respected NOW) ---------- */
  function injectUnsub() {
    if (!document.body || document.getElementById('engage-unsub')) return;
    // only on rec experience pages — the catalog stays clean
    if (!/\/recs\//.test(location.pathname)) return;
    var div = document.createElement('div');
    div.id = 'engage-unsub';
    div.setAttribute('style', 'margin:2.2rem 0 0;text-align:center;font:italic .8rem Georgia,serif;opacity:.65;');
    div.innerHTML = '<a href="#" id="engage-unsub-a" style="color:inherit">🔕 Pause these notifications</a>';
    document.body.appendChild(div);
    document.getElementById('engage-unsub-a').addEventListener('click', function (ev) {
      ev.preventDefault();
      record('push_unsubscribe', {});
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then(function (reg) { return reg.pushManager.getSubscription(); })
          .then(function (sub) { if (sub) return sub.unsubscribe(); })
          .catch(function () {});
      }
      div.innerHTML = '🔕 Paused on this device. To turn them back on: open Recommendations → settings.';
    });
  }

  /* ---------- boot ---------- */
  function boot() { ensureBadge(); injectUnsub(); logArrival(); onScroll(); flushSoon(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
