#!/usr/bin/env python3
"""Arma los datos de /sala/ — el demo 3D de la biblioteca.

Lee el catálogo canónico (index.html → inline-catalog) y el overlay de años
(data/enrichment.json), busca tapas reales en Open Library y las baja a
sala/covers/<id>.jpg. Escribe sala/data/catalog.json (lo que consume el demo)
y sala/data/covers.json (manifiesto de procedencia de cada tapa).

Idempotente: no vuelve a bajar una tapa que ya está, ni a consultar un libro
ya resuelto (hit o miss) salvo que se pase --recheck.

  python3 tools/sala_covers.py [--limit N] [--recheck]
"""
import argparse, difflib, io, json, os, re, sys, time, unicodedata
import urllib.parse, urllib.request
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COVERS_DIR = os.path.join(ROOT, 'sala', 'covers')
DATA_DIR = os.path.join(ROOT, 'sala', 'data')
UA = 'Bibliotequeando/sala (https://github.com/abecedeefege/biblioteca)'
SEARCH = 'https://openlibrary.org/search.json?'
COVER = 'https://covers.openlibrary.org/b/id/%d-L.jpg'
MAX_W = 280          # ancho final de la textura: legible en proyector, liviano en teléfono


def norm(s):
    s = unicodedata.normalize('NFKD', s or '').encode('ascii', 'ignore').decode()
    s = re.sub(r'[^a-z0-9 ]+', ' ', s.lower())
    return re.sub(r'\s+', ' ', s).strip()


def main_title(t):
    """Primer segmento de un título compuesto ('Eugénie Grandet / Le Père Goriot')."""
    t = re.sub(r'\s*\([^)]*\)', ' ', t)      # el fichado trae el título original entre paréntesis
    for sep in (' / ', ' — ', ' - ', ' – ', ': ', ', Tomo', ' I-II'):
        if sep in t:
            t = t.split(sep)[0]
    return re.sub(r'\s+', ' ', t).strip()


def alt_title(t):
    """Lo que va entre paréntesis suele ser el título original ('La Zona Muerta (The Dead Zone)')."""
    m = re.search(r'\(([^)]{4,})\)', t)
    if not m:
        return None
    alt = m.group(1).strip()
    return None if re.fullmatch(r'[\d\s.,-]+', alt) else alt


def get_json(url, tries=3):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=25) as r:
                return json.load(r)
        except Exception:
            if i == tries - 1:
                return None
            time.sleep(2 * (i + 1))


def plausible(book, doc, title=None):
    """¿La edición que devolvió Open Library es de verdad este libro?"""
    qt, dt = norm(title or main_title(book['title'])), norm(doc.get('title', ''))
    if not qt or not dt:
        return False
    ratio = difflib.SequenceMatcher(None, qt, dt).ratio()
    title_ok = ratio >= 0.72 or (len(qt) >= 8 and (qt in dt or dt in qt))
    if not title_ok:
        return False
    author = book.get('author_canonical') or book.get('author')
    if not author:
        return ratio >= 0.86       # sin autor el título tiene que ser casi exacto
    surname = norm(author).split()[-1]
    names = norm(' '.join(doc.get('author_name') or []))
    return len(surname) > 2 and surname in names


def find_cover(book):
    title = main_title(book['title'])
    alt = alt_title(book['title'])
    author = book.get('author_canonical') or book.get('author')
    attempts = []
    if author:
        attempts.append((title, {'title': title, 'author': author}))
        if alt:
            attempts.append((alt, {'title': alt, 'author': author}))
    attempts.append((title, {'title': title}))
    if alt:
        attempts.append((alt, {'title': alt}))
    for used, params in attempts:
        params.update({'limit': 5, 'fields': 'key,title,author_name,cover_i,first_publish_year'})
        data = get_json(SEARCH + urllib.parse.urlencode(params))
        time.sleep(0.35)           # cortesía con la API pública de Open Library
        for doc in (data or {}).get('docs') or []:
            if doc.get('cover_i') and plausible(book, doc, used):
                return doc
    return None


def download_cover(cover_id, dest):
    try:
        req = urllib.request.Request(COVER % cover_id, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=40) as r:
            raw = r.read()
    except Exception:
        return None
    if len(raw) < 2500:            # Open Library devuelve un placeholder diminuto
        return None
    try:
        img = Image.open(io.BytesIO(raw)).convert('RGB')
    except Exception:
        return None
    if img.width < 120 or img.height < 120:
        return None
    if img.width > MAX_W:
        img = img.resize((MAX_W, round(img.height * MAX_W / img.width)), Image.LANCZOS)
    img.save(dest, 'JPEG', quality=82, optimize=True)
    return {'w': img.width, 'h': img.height}


def load_catalog():
    html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    cat = json.loads(re.search(r'<script id="inline-catalog"[^>]*>(.*?)</script>', html, re.S).group(1))
    enrich = json.load(open(os.path.join(ROOT, 'data', 'enrichment.json'), encoding='utf-8'))['books']
    return cat, enrich


def load_editorial():
    """El mismo contenido editorial que lee El Fichero: descripciones, datos y bios."""
    path = os.path.join(ROOT, 'concepts', 'editorial.json')
    if not os.path.exists(path):
        return {'books': {}, 'authors': {}, 'topics': {}}
    ed = json.load(open(path, encoding='utf-8'))
    return {'books': ed.get('books', {}), 'authors': ed.get('authors', {}), 'topics': ed.get('topics', {})}


def is_family(book):
    """Autoría familiar: el criterio de El Fichero, palabra por palabra."""
    return re.search(r'apolant|villar', (book.get('author_canonical') or book.get('author') or ''), re.I)


def collection_of(book, shelf_id, cols, by_shelf):
    """El cajón de El Fichero al que cae este libro (primero que lo contiene)."""
    for col in cols:
        f = col.get('filter') or {}
        kind, value = f.get('type'), f.get('value')
        if kind == 'shelf' and shelf_id == value:
            return col
        if kind == 'shelves' and shelf_id in (value or []):
            return col
        if kind == 'topic' and value in (book.get('topics') or []):
            return col
        if kind == 'family' and is_family(book):
            return col
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--limit', type=int, default=0, help='procesar solo N libros sin tapa (prueba)')
    ap.add_argument('--recheck', action='store_true', help='reintentar los que ya dieron miss')
    args = ap.parse_args()

    os.makedirs(COVERS_DIR, exist_ok=True)
    os.makedirs(DATA_DIR, exist_ok=True)
    manifest_path = os.path.join(DATA_DIR, 'covers.json')
    manifest = {}
    if os.path.exists(manifest_path):
        manifest = json.load(open(manifest_path, encoding='utf-8')).get('books', {})

    cat, enrich = load_catalog()
    books = [(s, b) for s in cat['shelves'] for b in s.get('books', [])]
    done = 0
    for shelf, book in books:
        bid = book['id']
        entry = manifest.get(bid)
        if entry and (entry.get('cover') or not args.recheck):
            continue
        if args.limit and done >= args.limit:
            break
        done += 1
        if re.match(r'^UNK-', book['title']) or '???' in book['title']:
            manifest[bid] = {'cover': None, 'reason': 'título incierto'}
            continue
        doc = find_cover(book)
        if not doc:
            manifest[bid] = {'cover': None, 'reason': 'sin match en open library'}
            print('..', bid, book['title'][:50], flush=True)
            continue
        size = download_cover(doc['cover_i'], os.path.join(COVERS_DIR, bid + '.jpg'))
        if not size:
            manifest[bid] = {'cover': None, 'reason': 'tapa no descargable'}
            print('..', bid, book['title'][:50], '(sin imagen)', flush=True)
            continue
        manifest[bid] = {
            'cover': bid + '.jpg',
            'w': size['w'], 'h': size['h'],
            'ol_key': doc.get('key'),
            'ol_title': doc.get('title'),
            'ol_authors': doc.get('author_name'),
            'ol_first_published': doc.get('first_publish_year'),
        }
        print('OK', bid, book['title'][:50], '→', (doc.get('title') or '')[:40], flush=True)

    hits = sum(1 for v in manifest.values() if v.get('cover'))
    json.dump({
        '_comment': 'Procedencia de las tapas de /sala/. Lo escribe tools/sala_covers.py '
                    'contra la API pública de Open Library; el browser nunca lo escribe.',
        '_source': 'https://openlibrary.org',
        '_books_with_cover': hits,
        'books': manifest,
    }, open(manifest_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    # catálogo compacto para el demo (sin tocar el canónico de index.html)
    ed = load_editorial()
    cols_path = os.path.join(ROOT, 'concepts', 'collections.json')
    cols = json.load(open(cols_path, encoding='utf-8'))['collections'] if os.path.exists(cols_path) else []
    shelves = []
    for s in cat['shelves']:
        out = []
        for b in s.get('books', []):
            e = enrich.get(b['id'], {})
            m = manifest.get(b['id'], {})
            edb = ed['books'].get(b['id']) or {}
            col = collection_of(b, s['id'], cols, None)
            out.append({k: v for k, v in {
                'id': b['id'], 'title': b['title'], 'author': b.get('author'),
                'author_canonical': b.get('author_canonical'),
                'publisher': b.get('publisher'), 'binding': b.get('binding'),
                'series': b.get('series'), 'language': b.get('language'),
                'format': b.get('format'), 'topics': b.get('topics') or [],
                'note': b.get('note'), 'price': b.get('price'),
                'price_note': b.get('price_note'), 'buy_url': b.get('buy_url'),
                'year': e.get('first_published'), 'year_confidence': e.get('year_confidence'),
                'year_note': e.get('note'),
                'desc': edb.get('desc'), 'dato': edb.get('dato'),
                'family': bool(is_family(b)) or None,
                'col': {'key': col['key'], 'title': col['title']} if col else None,
                'cover': m.get('cover'), 'cw': m.get('w'), 'ch': m.get('h'),
            }.items() if v not in (None, [], '')})
        shelves.append({'id': s['id'], 'label': s['label'], 'theme': s.get('theme'), 'books': out})

    json.dump({
        '_comment': 'Catálogo compacto para el demo 3D de /sala/. Derivado: el canónico sigue '
                    'siendo inline-catalog en index.html, el contenido editorial sigue siendo '
                    'concepts/editorial.json y los cajones concepts/collections.json. '
                    'Se regenera con tools/sala_covers.py.',
        'library': cat['library'],
        'generated_at': time.strftime('%Y-%m-%dT%H:%M:%S%z'),
        'books_total': sum(len(s['books']) for s in shelves),
        'books_with_cover': hits,
        'authors': {k: v.get('bio') for k, v in ed['authors'].items() if v.get('bio')},
        'topics': {k: v.get('label') or k for k, v in ed['topics'].items()},
        'topic_desc': {k: v['desc'] for k, v in ed['topics'].items() if v.get('desc')},
        'shelves': shelves,
    }, open(os.path.join(DATA_DIR, 'catalog.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    print(f'\ntapas: {hits} / {sum(len(s["books"]) for s in shelves)}')


if __name__ == '__main__':
    main()
