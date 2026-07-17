# El Fichero · TV — Bibliotequeando en 10 pies

**URL final (estable, para cablear el bridge de voz):**

```
https://abecedeefege.github.io/Biblioteca/tv/
```

Versión de El Fichero para Google TV vía Fully Kiosk Browser: lienzo lógico
1920×1080, navegable **solo con el control remoto** (D-pad + OK + Back).
No toca la versión mobile/desktop ni duplica datos.

## Fase 0 — sonda de teclas

```
https://abecedeefege.github.io/Biblioteca/tv/?debug=keys
```

Muestra en un panel cada `keydown` (key / code / keyCode) y a qué acción se
mapeó. La navegación sigue viva debajo, así que sirve también para verificar
el foco con el control real.

Tabla de teclas del control **a completar en la tele real** (la primera vez,
abrir la sonda y anotar lo que llega):

| Botón del control | key | code | keyCode | Acción |
|---|---|---|---|---|
| ↑ ↓ ← → | _anotar_ | | | mover foco |
| OK | _anotar_ | | | abrir / activar |
| Back | _anotar_ | | | volver (historia real) |
| Play/Pause | _anotar_ | | | reservado (v2 vitrina) |

El mapa implementado es defensivo y cubre lo que mandan los WebView de
Android TV: flechas (`ArrowUp/Down/Left/Right`, keyCodes 37–40), OK
(`Enter`, 13/23), Back (`Escape`/`Backspace`/`GoBack`, 27/8/4/461/10009) y
Play/Pause (179/85).

**Si Back no aparece en la sonda:** Fully lo está capturando. Cada vista
tiene un botón enfocable «← Volver» como plan B, y en Fully conviene revisar
Settings → Advanced Web Settings y el mapeo del botón Back (opción de usar
Back para navegar el historial web) para que llegue al WebView.

## Cómo probar en la tele (loop de cada iteración)

```
# mandar la build a la tele
http://192.168.1.21:2323/?cmd=loadUrl&password=<PWD>&url=https%3A%2F%2Fabecedeefege.github.io%2FBiblioteca%2Ftv%2F

# sacar captura real de lo que muestra la tele
http://192.168.1.21:2323/?cmd=getScreenshot&password=<PWD>
```

Recorrer TODO solo con el control: home → cajón → ficha → volver.
El WebView cachea: ante la duda, Reload desde el panel de Fully
(`http://192.168.1.21:2323`). El catálogo parseado se cachea 24 h en
`localStorage` (`tv-cat-v1`); para forzar catálogo fresco, borrar datos web
en Fully o esperar el TTL.

## Buscar (voz o teclado de la tele)

Botón «⌕ Buscar» arriba a la derecha en todas las vistas (también: apretar
**↑** cuando no hay nada más arriba lleva al buscador). Dentro de la vista:

- **OK sobre el campo** abre el teclado en pantalla de Google TV, que trae
  **micrófono para dictar** (no se usa Web Speech API: el WebView no la
  soporta; el dictado lo pone el teclado del sistema).
- Los resultados aparecen en vivo (título, autor o signatura, máx. 12);
  **↓** baja a los resultados y OK abre la ficha.
- La consulta sobrevive al ir y volver de una ficha.

## Experiencias

Las experiencias diarias de las recomendaciones (`recs/*.html`) se leen en
la tele: OK sobre una recomendación abre su experiencia completa en un
visor con marco de papel (la página se renderiza a ancho de teléfono y se
escala ×1.7 para leerse a 3 m). **↑/↓ scrollean la lectura**, ←/→ mueven el
foco entre «Volver» y «Ficha del catálogo» (si la rec apunta a un libro de
la casa). Las fichas del catálogo que tienen experiencia asociada muestran
el botón «Abrir experiencia».

## Datos: compartidos, nunca duplicados

- **Catálogo canónico**: se lee por streaming desde `../index.html`
  (`<script id="inline-catalog">`). El stream se corta apenas aparece el
  catálogo (~1.1 MB de 5 MB): las fotos embebidas nunca se descargan.
- **Cajones**: `../concepts/collections.json` (los mismos del Fichero).
- **Prosa** (notas del archivista, datos abrochados): `../concepts/editorial.json`.
- **Años y estado de lectura** (sellos LEÍDO / EN LECTURA / PRESTADO):
  `../data/enrichment.json`.
- **Cajón Recomendaciones y experiencias**: `../recs/recommended.json`
  (campos `page` → experiencia, `book_ref` → ficha del catálogo).

## Presupuesto 10 pies (medido)

- Primera visita: ~950 KB por la red (stream gzip 704 KB + página 12 KB +
  nogal WebP 57 KB + fuentes ~180 KB). Visitas siguientes: ~250 KB.
- Interactiva muy por debajo de 2.5 s (en LAN de pruebas: <300 ms primera
  visita, <100 ms con caché).
- Solo se animan `transform` y `opacity`; sin `backdrop-filter` ni blurs.
- Safe area 5 % perimetral; rótulos ≥34 px, cuerpo ≥26 px, metadatos ≥20 px.
- `prefers-reduced-motion`: sin intro, scroll instantáneo, sin fades.

## Dirección de arte

Una sola placa de nogal book-matched (`assets/walnut.webp`, generada
proceduralmente, 57 KB) se reparte entre todos los frentes por posición
calculada: la veta fluye continua a través del mueble. Luz cenital única
(canto superior claro, inferior en sombra), latón con banda especular
angosta, interior oscuro visible en las juntas y viñeta perimetral en la
sala. Fondo nunca más oscuro que `#2a211a`, blancos en crema `#f2e9d4`.

## v2 (hueco dejado)

- **Modo vitrina**: tras 2 min sin input, rotación lenta de fichas
  destacadas. El botón Play/Pause ya está mapeado y reservado en
  `mapKey()` → acción `playpause` (hoy no-op).
