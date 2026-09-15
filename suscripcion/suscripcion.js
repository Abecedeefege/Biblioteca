/* suscripcion.js — motor compartido de las páginas de suscripción.

   Qué hace: lee notifications/preferences.json del sitio publicado, y guarda
   lo que elige el dueño por DOS caminos, en este orden:

     1. relay público (Supabase, sin credenciales) — siempre. El workflow
        push-dispatch corre cada 10 min, baja el evento con
        tools/sync_devices.js y lo aplica al archivo. Es el camino que anda
        en cualquier teléfono de la casa.
     2. GitHub API — solo si ESE navegador tiene PAT guardado (engage/setup.html
        paso 1). Aplica el cambio al toque, así el dueño lo ve reflejado sin
        esperar los 10 minutos. Si falla, el relay ya se lo llevó igual.

   No depende de engage.js a propósito: ese inyecta su propio control de
   "pausar notificaciones" al final del body, que acá sería redundante. */
(function (global) {
  'use strict';

  var REPO = 'Abecedeefege/Biblioteca';
  var BRANCH = 'main';
  var PREFS_PATH = 'notifications/preferences.json';
  var SUPA = 'https://jhdwpxttgnravhlnmdgg.supabase.co';
  var SUPA_KEY = 'sb_publishable_phJdQOO7PUdidexaeUI4vQ_WJpKOgDM';
  var K_PAT = 'biblioteca_gh_pat';
  var K_DEV = 'biblioteca_device_name';

  /* Mapa por defecto de "cuántas por semana" → qué días (ISO 1=lun … 7=dom).
     Repartidos parejo, no los primeros N de la semana. Se puede pisar a mano
     desde la página (los días mandan; per_week queda como lo que se eligió). */
  var DAYS_FOR = {
    0: [],
    1: [7],
    2: [3, 7],
    3: [2, 4, 7],
    4: [1, 3, 5, 7],
    5: [1, 2, 3, 4, 5],
    6: [1, 2, 3, 4, 5, 6],
    7: [1, 2, 3, 4, 5, 6, 7]
  };
  var DIA_CORTO = { 1: 'lun', 2: 'mar', 3: 'mié', 4: 'jue', 5: 'vie', 6: 'sáb', 7: 'dom' };
  var DIA_LARGO = { 1: 'lunes', 2: 'martes', 3: 'miércoles', 4: 'jueves', 5: 'viernes', 6: 'sábado', 7: 'domingo' };
  var MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
               'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];

  function uid() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8); }
  function nowISO() { return new Date().toISOString(); }
  function bust(url) { return url + (url.indexOf('?') < 0 ? '?' : '&') + '_=' + Date.now(); }

  function deviceName() {
    try { return localStorage.getItem(K_DEV) || ''; } catch (e) { return ''; }
  }
  function setDeviceName(name) {
    try { localStorage.setItem(K_DEV, name); return true; } catch (e) { return false; }
  }
  function hasPat() {
    try { return !!localStorage.getItem(K_PAT); } catch (e) { return false; }
  }

  /* ---------- lectura ---------- */
  function getJson(path) {
    return fetch(bust(path), { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' en ' + path);
      return r.json();
    });
  }
  function loadPrefs() {
    return getJson('../notifications/preferences.json').catch(function () {
      return { streams: {}, devices: {} };
    });
  }

  /* Preferencia efectiva de un stream para un dispositivo:
     override del dispositivo → default del stream → todo abierto. */
  function effective(prefs, stream, device) {
    var base = (prefs && prefs.streams && prefs.streams[stream]) || {};
    var ov = device && prefs && prefs.devices && prefs.devices[device] &&
             prefs.devices[device][stream];
    var src = ov ? 'dispositivo' : ((prefs && prefs.streams && prefs.streams[stream]) ? 'casa' : 'sin configurar');
    var merged = {
      enabled: base.enabled !== false,
      per_week: typeof base.per_week === 'number' ? base.per_week : 7,
      days: Array.isArray(base.days) ? base.days.slice() : [1, 2, 3, 4, 5, 6, 7],
      updated_at: base.updated_at || null,
      updated_by: base.updated_by || null,
      scope: src
    };
    if (ov) {
      if (typeof ov.enabled === 'boolean') merged.enabled = ov.enabled;
      if (typeof ov.per_week === 'number') merged.per_week = ov.per_week;
      if (Array.isArray(ov.days)) merged.days = ov.days.slice();
      merged.updated_at = ov.updated_at || merged.updated_at;
      merged.updated_by = ov.updated_by || merged.updated_by;
    }
    if (!merged.enabled) merged.days = [];
    return merged;
  }

  /* ---------- escritura ---------- */
  function relaySave(ev) {
    return fetch(SUPA + '/rest/v1/biblioteca_events', {
      method: 'POST',
      headers: {
        apikey: SUPA_KEY, Authorization: 'Bearer ' + SUPA_KEY,
        'Content-Type': 'application/json',
        Prefer: 'resolution=ignore-duplicates,return=minimal'
      },
      body: JSON.stringify([{ id: ev.id, payload: ev }])
    }).then(function (r) {
      if (!r.ok && r.status !== 409) throw new Error('relay HTTP ' + r.status);
      return true;
    });
  }

  function ghHeaders() {
    var t;
    try { t = localStorage.getItem(K_PAT); } catch (e) { t = null; }
    if (!t) return null;
    return { Authorization: 'Bearer ' + t, Accept: 'application/vnd.github+json' };
  }
  function b64decodeUtf8(b64) { return decodeURIComponent(escape(atob(b64.replace(/\n/g, '')))); }
  function b64encodeUtf8(str) { return btoa(unescape(encodeURIComponent(str))); }

  /* PUT con un reintento si otro actor tocó el archivo entre GET y PUT. */
  function ghApply(mutate, message) {
    var headers = ghHeaders();
    if (!headers) return Promise.resolve(false);
    var api = 'https://api.github.com/repos/' + REPO + '/contents/' + PREFS_PATH;
    function once() {
      return fetch(bust(api + '?ref=' + BRANCH), { cache: 'no-store', headers: headers })
        .then(function (r) {
          if (r.status === 404) return { obj: null, sha: null };
          if (!r.ok) throw new Error('GET HTTP ' + r.status);
          return r.json().then(function (doc) {
            return { obj: JSON.parse(b64decodeUtf8(doc.content)), sha: doc.sha };
          });
        })
        .then(function (cur) {
          var body = {
            message: message, branch: BRANCH,
            content: b64encodeUtf8(JSON.stringify(mutate(cur.obj), null, 2) + '\n')
          };
          if (cur.sha) body.sha = cur.sha;
          return fetch(api, {
            method: 'PUT',
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            body: JSON.stringify(body)
          });
        })
        .then(function (r) {
          if (!r.ok) throw new Error('PUT HTTP ' + r.status);
          return true;
        });
    }
    return once().catch(function (e) {
      if (!/409|422/.test(e.message)) throw e;
      return once();
    });
  }

  function applyToDoc(doc, choice) {
    doc = doc || {};
    doc.streams = doc.streams || {};
    doc.devices = doc.devices || {};
    var patch = {
      enabled: choice.enabled,
      per_week: choice.per_week,
      days: choice.days.slice(),
      updated_at: nowISO(),
      updated_by: (choice.device || 'la casa') + ' · suscripcion/' + choice.stream + '.html'
    };
    if (choice.scope === 'device' && choice.device) {
      doc.devices[choice.device] = doc.devices[choice.device] || {};
      doc.devices[choice.device][choice.stream] = patch;
    } else {
      var prev = doc.streams[choice.stream] || {};
      doc.streams[choice.stream] = Object.assign({}, prev, patch);
    }
    doc._updated_at = nowISO();
    return doc;
  }

  /* choice = {stream, scope:'device'|'stream', device, enabled, per_week, days} */
  function save(choice) {
    var ev = {
      id: uid(), type: 'pref', ts: nowISO(),
      page: location.pathname.split('/').slice(-1)[0] || 'suscripcion',
      device: choice.device || 'sin-nombre',
      stream: choice.stream, scope: choice.scope,
      target: choice.scope === 'device' ? (choice.device || null) : null,
      enabled: choice.enabled, per_week: choice.per_week, days: choice.days.slice()
    };
    var out = { relay: false, repo: false, error: null };
    return relaySave(ev)
      .then(function () { out.relay = true; })
      .catch(function (e) { out.error = e.message; })
      .then(function () {
        if (!hasPat()) return false;
        return ghApply(function (doc) { return applyToDoc(doc, choice); },
          'suscripcion: ' + choice.stream + ' → ' +
          (choice.enabled ? choice.per_week + '/semana' : 'en pausa') +
          ' (' + (choice.scope === 'device' ? choice.device : 'la casa') + ')')
          .then(function (ok) { out.repo = !!ok; })
          .catch(function (e) { if (!out.error) out.error = e.message; });
      })
      .then(function () {
        if (!out.relay && !out.repo) throw new Error(out.error || 'no se pudo guardar');
        return out;
      });
  }

  /* Nota libre para el agente. Usa el MISMO canal que las fichas
     (qid con prefijo 'rec-nota:'), que /recomendacion está obligado a leer al
     empezar cada corrida. Viaja por el relay; sync_devices.js la baja a
     sync/engagement.json en la corrida siguiente. */
  function nota(qid, texto) {
    return relaySave({
      id: uid(), type: 'answer', ts: nowISO(),
      page: location.pathname.split('/').slice(-1)[0] || 'suscripcion',
      device: deviceName() || 'sin-nombre',
      qid: qid, value: String(texto || '').slice(0, 1200)
    });
  }

  /* ---------- últimos envíos ---------- */
  var STREAM_MATCH = {
    libros: function (id) { return /^\d{4}-\d{2}-\d{2}-rec(-|$)/.test(id); },
    cine: function (id) { return /(^|-)cine(-|$)/.test(id); }
  };
  function streamOf(id) {
    id = String(id || '');
    if (STREAM_MATCH.cine(id)) return 'cine';
    if (STREAM_MATCH.libros(id)) return 'libros';
    return null;
  }
  /* Devuelve los envíos REALES de un stream (status 'sent'), del más nuevo al
     más viejo. La verdad de "qué te llegó" vive en la cola, no en el hub. */
  function sentOf(queue, stream) {
    var list = (queue && queue.notifications) || [];
    return list.filter(function (n) {
      return n.status === 'sent' && streamOf(n.id) === stream;
    }).sort(function (a, b) {
      return String(b.sent_at || b.send_at || '').localeCompare(String(a.sent_at || a.send_at || ''));
    });
  }
  function loadQueue() { return getJson('../notifications/queue.json'); }
  function loadRecs() {
    return getJson('../recs/recommended.json').catch(function () { return { recommendations: [] }; });
  }

  /* ---------- formato ---------- */
  function fechaCorta(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d)) return String(iso).slice(0, 10);
    var p = new Intl.DateTimeFormat('es-UY', {
      timeZone: 'America/Montevideo', day: 'numeric', month: 'numeric', year: 'numeric'
    }).formatToParts(d).reduce(function (a, x) { a[x.type] = x.value; return a; }, {});
    return p.day + '/' + p.month + '/' + p.year;
  }
  function fechaLarga(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d)) return String(iso).slice(0, 10);
    var p = new Intl.DateTimeFormat('es-UY', {
      timeZone: 'America/Montevideo', weekday: 'long', day: 'numeric', month: 'numeric'
    }).formatToParts(d).reduce(function (a, x) { a[x.type] = x.value; return a; }, {});
    return p.weekday + ' ' + p.day + '/' + p.month;
  }
  function diasAtras(iso) {
    if (!iso) return null;
    var t = Date.parse(iso);
    if (isNaN(t)) return null;
    return Math.floor((Date.now() - t) / 86400000);
  }
  function listaDias(days) {
    if (!days || !days.length) return 'ningún día (en pausa)';
    if (days.length === 7) return 'todos los días';
    return days.slice().sort().map(function (d) { return DIA_LARGO[d]; }).join(', ');
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  global.SUB = {
    DAYS_FOR: DAYS_FOR, DIA_CORTO: DIA_CORTO, DIA_LARGO: DIA_LARGO, MESES: MESES,
    deviceName: deviceName, setDeviceName: setDeviceName, hasPat: hasPat,
    loadPrefs: loadPrefs, loadQueue: loadQueue, loadRecs: loadRecs,
    effective: effective, save: save, nota: nota, streamOf: streamOf, sentOf: sentOf,
    fechaCorta: fechaCorta, fechaLarga: fechaLarga, diasAtras: diasAtras,
    listaDias: listaDias, esc: esc
  };
})(window);
