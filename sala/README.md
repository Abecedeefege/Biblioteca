# La Sala de Lectura

Demo 3D del catálogo: el mueble de tres columnas × ocho estantes con los 437
libros parados donde están de verdad, y una mesa donde se despliega el estante
que uno elige. Se abre en `sala/` — es estático, no compila nada, y anda igual
en un teléfono, en una notebook y en un proyector.

Está inspirado en [reading-room](https://github.com/transitive-bullshit/reading-room)
de Travis Fischer (MIT): la idea de mirar una biblioteca personal como objetos
físicos en una habitación. El código es propio y las decisiones son otras —
aquel es una app Next.js con física Rapier sobre una foto de escritorio; esta es
una página suelta que dibuja el mueble real de la casa.

## Cómo se mira

| Gesto | Qué hace |
| --- | --- |
| Tocar un lomo | saca ese estante a la mesa y abre la ficha del libro |
| Chips de abajo | elegir estante (L2 … R8, TOP) |
| Arrastrar | girar un poco la vista |
| Rueda / pellizco | acercarse y alejarse |
| Recorrido | seis paradas que cuentan la casa, con la cámara sola |
| Esc | cerrar la ficha / volver a la sala |

## De dónde salen los datos

- **Catálogo**: `sala/data/catalog.json`, derivado del catálogo canónico
  (`index.html` → `inline-catalog`) más el overlay de años de
  `data/enrichment.json`. Es una copia de lectura: el canónico no se toca.
- **Tapas**: `sala/covers/<id>.jpg`, bajadas de [Open Library](https://openlibrary.org)
  cuando hay match verosímil de título y autor. La procedencia de cada una queda
  en `sala/data/covers.json`. Los libros sin tapa no quedan en blanco: se les
  compone una con lo que dice la ficha (color según encuadernación y tema,
  título, autor, editorial).
- **three.js**: fijo en `sala/vendor/`, versión r170 (MIT). Nada de CDN en vivo:
  una demo no se cae porque el wifi de la sala ande mal.

Para regenerar datos y tapas después de fichar libros nuevos:

```sh
python3 tools/sala_covers.py          # solo lo que falta
python3 tools/sala_covers.py --recheck # reintenta los que no tenían tapa
```

El script es idempotente y no consulta de nuevo lo ya resuelto.

## Cómo está hecho por dentro

Lo que permite que 437 libros anden en un teléfono:

- **Un atlas de lomos**: los 437 lomos se dibujan en un único canvas de 2048²,
  y todos los libros del mueble son **una sola geometría** con un grupo por
  estante — un draw call para la biblioteca entera.
- **Dos materiales según la distancia**: de lejos manda un color plano por libro
  (los mipmaps del atlas mezclan celdas vecinas y embarran todo en un marrón
  único); de cerca entra la textura con el título del lomo.
- **Sin motor de física**: los libros vuelan del estante a la mesa con una curva
  y una sombra de contacto. Es predecible, liviano y no depende de WASM.
- **Texturas de mesa bajo demanda**: solo el estante abierto arma tapas
  (512 px en escritorio, 320 px en teléfono) y las libera al cerrarlo.

`sala/` es de solo lectura: no escribe en el catálogo, no usa `localStorage` ni
toca la cola de notificaciones ni a los agentes.
