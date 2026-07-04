/* ExtReviews — reseñas y puntajes de plataformas externas para cada libro.
   Fuentes en vivo (APIs abiertas con CORS): Open Library y Apple Books.
   Goodreads cerró su API pública en 2020, así que se linkea directo a sus
   reseñas (búsqueda profunda por título+autor). Los resultados se cachean
   en localStorage 7 días (fallos: 1 día) para no golpear las APIs.
   Uso: ExtReviews.render(book, containerElement)
   El host estiliza las clases .xr-* ; este módulo solo pone estructura. */
(function () {
  'use strict';
  const CACHE_KEY = 'xr-cache-v1';
  const TTL_OK = 7 * 24 * 3600e3, TTL_FAIL = 24 * 3600e3;
  const TIMEOUT = 8000;

  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch (e) {}
  const saveCache = () => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e) {} };

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* Título buscable: si el paréntesis trae el título original (ediciones en
     español de obras inglesas), se prefiere para buscar; si es nota de
     edición ("deluxe", "Tomo I", años…), se descarta. */
  function titleVariants(b) {
    const raw = String(b.title || '');
    const main = raw.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
    const m = raw.match(/\(([^)]{3,60})\)/);
    const out = [];
    if (m && !/edici[oó]n|edition|vol\.|tomo|libro|book\s*\d|part|deluxe|collector|illustrated|copy|volume|red |paper|\d{4}|—|figurine|set\b/i.test(m[1])) {
      out.push(m[1].replace(/^(the\s+)?/i, x => x).trim());
    }
    if (main && !out.includes(main)) out.push(main);
    return out.length ? out : [raw];
  }
  function authorQuery(b) {
    const a = b.author_canonical || (b.author || '').split(/[;&]/)[0].trim();
    return a.replace(/\s*\(.*?\)\s*/g, '').trim();
  }
  const surname = a => (a.split(/\s+/).pop() || '').toLowerCase();

  function withTimeout(p) {
    return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT))]);
  }

  async function fetchOL(title, author) {
    const u = 'https://openlibrary.org/search.json?limit=5&fields=key,title,ratings_average,ratings_count'
      + '&title=' + encodeURIComponent(title) + (author ? '&author=' + encodeURIComponent(author) : '');
    const d = await withTimeout(fetch(u)).then(r => r.json());
    const docs = d.docs || [];
    const hit = docs.find(x => x.ratings_count > 0) || docs[0];
    if (!hit) return null;
    return {
      rating: hit.ratings_average ? +hit.ratings_average.toFixed(2) : null,
      count: hit.ratings_count || 0,
      url: 'https://openlibrary.org' + hit.key
    };
  }

  async function fetchApple(title, author) {
    const u = 'https://itunes.apple.com/search?entity=ebook&limit=8&country=us&term='
      + encodeURIComponent(title + (author ? ' ' + author : ''));
    const d = await withTimeout(fetch(u)).then(r => r.json());
    let rs = d.results || [];
    if (author) {
      const sn = surname(author);
      const byA = rs.filter(x => (x.artistName || '').toLowerCase().includes(sn));
      if (byA.length) rs = byA;
    }
    const hit = rs.find(x => x.averageUserRating) || rs[0];
    if (!hit) return null;
    return {
      rating: hit.averageUserRating ? +hit.averageUserRating.toFixed(2) : null,
      count: hit.userRatingCount || 0,
      url: hit.trackViewUrl || null
    };
  }

  async function trySource(fn, variants, author) {
    for (const t of variants) {
      try {
        const r = await fn(t, author);
        if (r && (r.rating || r.url)) return r;
      } catch (e) { /* probar la siguiente variante */ }
    }
    return null;
  }

  async function getData(b) {
    const k = b.id;
    const c = cache[k];
    const now = Date.now();
    if (c && now - c.t < (c.fail ? TTL_FAIL : TTL_OK)) return c.d;
    const variants = titleVariants(b), author = authorQuery(b);
    const [ol, ap] = await Promise.all([
      trySource(fetchOL, variants, author),
      trySource(fetchApple, variants, author)
    ]);
    const d = { ol, ap };
    cache[k] = { t: now, d, fail: !ol && !ap };
    saveCache();
    return d;
  }

  function stars(r) {
    const f = Math.max(0, Math.min(5, Math.round(r)));
    return '<span class="xr-stars">' + '★'.repeat(f) + '☆'.repeat(5 - f) + '</span>';
  }
  function valHTML(r, searchUrl) {
    if (!r) return '<span class="xr-none">sin registros</span> · <a href="' + esc(searchUrl) + '" target="_blank" rel="noopener">buscar ↗</a>';
    let h = '';
    if (r.rating) h += stars(r.rating) + ' <b>' + r.rating.toFixed(2) + '</b>' + (r.count ? ' · ' + r.count.toLocaleString('es-UY') + ' puntajes' : '');
    else h += '<span class="xr-none">sin puntajes</span>';
    if (r.url) h += ' · <a href="' + esc(r.url) + '" target="_blank" rel="noopener">ver ↗</a>';
    return h;
  }

  function render(b, el) {
    if (!el) return;
    const variants = titleVariants(b), author = authorQuery(b);
    const q = encodeURIComponent(variants[0] + (author ? ' ' + author : ''));
    const grUrl = 'https://www.goodreads.com/search?q=' + q;
    const olSearch = 'https://openlibrary.org/search?q=' + q;
    const apSearch = 'https://www.google.com/search?q=' + q + '+site%3Abooks.apple.com';
    el.innerHTML =
      '<div class="xr">' +
      '<div class="xr-row"><span class="xr-name">Goodreads</span><span class="xr-val"><a href="' + esc(grUrl) + '" target="_blank" rel="noopener">leer reseñas y puntajes ↗</a></span></div>' +
      '<div class="xr-row" data-xr="ol"><span class="xr-name">Open Library</span><span class="xr-val"><span class="xr-load">consultando…</span></span></div>' +
      '<div class="xr-row" data-xr="ap"><span class="xr-name">Apple Books</span><span class="xr-val"><span class="xr-load">consultando…</span></span></div>' +
      '<div class="xr-foot">Puntajes en vivo de plataformas externas; pueden referir a otra edición de la misma obra.</div>' +
      '</div>';
    getData(b).then(d => {
      const ol = el.querySelector('[data-xr="ol"] .xr-val');
      const ap = el.querySelector('[data-xr="ap"] .xr-val');
      if (ol) ol.innerHTML = valHTML(d.ol, olSearch);
      if (ap) ap.innerHTML = valHTML(d.ap, apSearch);
    }).catch(() => {
      el.querySelectorAll('.xr-load').forEach(x => { x.textContent = 'no disponible ahora'; });
    });
  }

  window.ExtReviews = { render };
})();
