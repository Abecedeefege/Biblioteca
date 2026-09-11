#!/usr/bin/env python3
"""Empaqueta /sala/ en un solo archivo HTML, para mandar por link o mensaje.

Mete adentro three.js, el catálogo y las tapas (reducidas y en base64). El
resultado no pide red salvo la tipografía, así que anda desde el escritorio,
un adjunto o un artifact.

  python3 tools/sala_bundle.py [salida.html] [--ancho 220]
"""
import argparse, base64, io, json, os, re
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SALA = os.path.join(ROOT, 'sala')


def cover_data_uri(path, width, quality):
    img = Image.open(path).convert('RGB')
    if img.width > width:
        img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, 'JPEG', quality=quality, optimize=True)
    return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()


def three_inline():
    """El módulo de three.js, con su `export {...}` final convertido en un objeto THREE."""
    src = open(os.path.join(SALA, 'vendor', 'three.module.min.js'), encoding='utf-8').read()
    m = re.search(r'export\{([^}]*)\};?\s*$', src)
    if not m:
        raise SystemExit('no encontré el export final de three.js')
    pares = []
    for parte in m.group(1).split(','):
        parte = parte.strip()
        if ' as ' in parte:
            interno, publico = [x.strip() for x in parte.split(' as ')]
        else:
            interno = publico = parte
        pares.append(f'{publico}:{interno}')
    return src[:m.start()] + '\nconst THREE = {' + ','.join(pares) + '};\n'


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('salida', nargs='?', default=os.path.join(SALA, 'sala-en-un-archivo.html'))
    ap.add_argument('--ancho', type=int, default=220, help='ancho de las tapas embebidas')
    ap.add_argument('--calidad', type=int, default=78)
    args = ap.parse_args()

    html = open(os.path.join(SALA, 'index.html'), encoding='utf-8').read()
    js = open(os.path.join(SALA, 'sala.js'), encoding='utf-8').read()
    js = re.sub(r"^import \* as THREE from.*$", '', js, flags=re.M)

    catalogo = json.load(open(os.path.join(SALA, 'data', 'catalog.json'), encoding='utf-8'))
    tapas = {}
    for shelf in catalogo['shelves']:
        for book in shelf['books']:
            if not book.get('cover'):
                continue
            ruta = os.path.join(SALA, 'covers', book['cover'])
            if os.path.exists(ruta):
                tapas[book['id']] = cover_data_uri(ruta, args.ancho, args.calidad)

    # el envoltorio del artifact pone <head> y <body>: acá va solo el contenido
    cuerpo = re.search(r'<body>(.*)</body>', html, re.S).group(1)
    cuerpo = re.sub(r'<script type="module" src="sala\.js"></script>', '', cuerpo)
    estilo = re.search(r'<style>.*?</style>', html, re.S).group(0)
    titulo = '<title>La Sala de Lectura</title>'
    fuentes = ('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
               'family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700'
               '&display=swap">')

    partes = [
        titulo, fuentes, estilo, cuerpo,
        '<script id="catalogo-inline" type="application/json">',
        json.dumps(catalogo, ensure_ascii=False, separators=(',', ':')),
        '</script>',
        '<script>window.SALA_COVERS=',
        json.dumps(tapas, separators=(',', ':')),
        ';</script>',
        # el código de la sala va en su propio bloque: three.js minificado usa
        # nombres cortos ($ entre ellos) que chocarían con los de acá
        '<script type="module">', three_inline(), '{', js, '}', '</script>',
    ]
    out = '\n'.join(partes)
    open(args.salida, 'w', encoding='utf-8').write(out)
    print(f'{args.salida} — {len(out) / 1e6:.1f} MB, {len(tapas)} tapas embebidas')


if __name__ == '__main__':
    main()
