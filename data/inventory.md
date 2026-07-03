# Inventario de assets — Bibliotequeando

Auditoría inicial del catálogo para el sistema de experiencias diarias.
Fecha: 2026-07-03. Este archivo es **estable** (no se reescribe a diario como
`engage/learnings.md`): es el mapa de materia prima del agente `/engagement`.

## 0. Dónde viven los datos

- **Catálogo canónico**: embebido en `index.html` como
  `<script id="inline-catalog" type="application/json">` — `library.structure`
  (3 columnas × 8 estantes, notación L/M/R + número, estante 1 = tazas) y
  `shelves[25]`, cada uno con `id`, `label`, `theme`, `books[]`.
- **Campos por libro**: `id` (ej. `R4-001`), `title` (400/400), `confidence`
  (400), `topics` (400), `buy_url` (400), `price` (396), `price_note` (380),
  `author` + `author_canonical` (295), `language` (233), `publisher` (124),
  `series` (71), `binding` (59), `note` (28), `format` (21).
- **Índices**: `<script id="inline-indices">` — topics (16), authors con 2+
  obras (26), collections (15), languages (10).
- **Lo que NO tiene el catálogo**: año y estado de lectura → overlay aditivo
  en `data/enrichment.json` (136 libros sembrados con año de primera
  publicación de la obra + nivel de confianza; estado de lectura: todo
  `unknown` hasta que el dueño responda con botones).

## 1. Entidades (400 volúmenes, 25 estantes, 22 con libros)

| Bloque | Estantes | Volúmenes | Notas |
|---|---|---|---|
| Stephen King en español | R4 (lomo blanco) + R5 (tapa negra) | 50 | La colección más grande; dos "ediciones rivales" conviviendo |
| Shakespeare + Harry Potter | L3 | 51 | Obras, crítica, ediciones alemanas, un Macbeth ilustrado por Dalí, y un libro anti-Stratford |
| Uruguay y Montevideo | L6 (34) + L8 (7) + parte de L7 | ~45 | Historia edilicia, nomenclatura de calles, Graf Spee, fotolibros |
| Viajes y geografía | R2 (24) + R3 (19) | 43 | Incluye un lomo en griego (ΑΚΡΟΠΟΛΙΣ) |
| Arte | M2 + M3 + M4 | 38 | Serie Mentor UNESCO casi completa (22), Picasso en hebreo, Vincent van Gogh |
| Astronomía y cosmología | L5 | 33 | Gamow ×3, Hoyle, Sagan, Hawking, Asimov, el matrimonio Bok |
| Misterio y cozy mystery | M5 | 32 | Conan Doyle, Christie, Fitzek, cozys de ediciones Alma |
| Antiguos (drama, historia, idiomas) | M7 (31) + M8 + R8 | ~41 | Los menos identificados del catálogo |
| Autoayuda y filosofía | L4 | 24 | De Sun Tzu a Timothy Leary |
| Genealogía + química familiar | R7 | 17 | Apolant (Génesis de la Familia Uruguaya) + G.E. Villar — **obra de autoría familiar** |
| Clásicos encuadernados | L2 | 10 | Balzac en vitela (Œuvres Complètes) + Keats en cuero |
| Elísabet Benavent | M6 | 9 | Saga Valeria completa + 5 más |
| Latinoamericana y antiguos | L7 | 8 | Martín Fierro escondido atrás del set de Quiroga |
| National Geographic | R6 | 100+ revistas | 1976–2000, catalogadas como un solo ítem |
| Exhibición | TOP | 2 | Don Quijote I y II en cuero rojo, con figuras talladas de Quijote y Sancho |

**Autores con masa crítica**: King (50), Shakespeare (21 + crítica),
Apolant (10), Benavent (9), Balzac (6), Villar (6), Cervantes (5),
Rowling (4), Hernández (4), Gamow (3), Conan Doyle (3), Christie (2),
Bucay (3), John Green (2), Fitzek (2), Quiroga (2).

## 2. Datos verificables por entidad (materia prima de chisme/récords)

Vetas ya identificadas (todo dato con ✱ verificar antes de publicar):

- **King/Bachman**: el estante R5 tiene 3 libros publicados bajo el seudónimo
  Richard Bachman (`La Larga Marcha`, `El Fugitivo`, `Blaze`) — el escándalo
  del seudónimo descubierto en 1985 es chisme canónico. `Carrie` fue rescatada
  de la basura por Tabitha King. `La Milla Verde` salió por fascículos.
  `Bellas Durmientes` está coescrita con su hijo Owen.
- **Conan Doyle**: mató a Holmes en 1893 por hartazgo y lo resucitó por
  presión (y dinero) — y las tres piezas de ese drama están en M5
  (`Estudio en Escarlata` 1887, `El Perro de los Baskerville` 1902,
  `El Regreso de Sherlock Holmes` 1905).
- **Christie**: su desaparición de 11 días en 1926 es el misterio real más
  famoso de la autora de misterio ✱fecha exacta.
- **Shakespeare**: `Bacon-Shakespeare Anatomy` (L3-032) es literalmente un
  libro de la teoría conspirativa de autoría — convive en el estante con las
  obras completas. El Macbeth ilustrado por **Salvador Dalí** (L3-041, ed.
  Doubleday 1946 ✱). Ediciones en alemán (traducciones Schlegel-Tieck ✱).
- **Balzac**: escribía de noche a fuerza de café (se citan ~50 tazas/día ✱cifra
  legendaria, presentarla como leyenda); murió 5 meses después de casarse con
  Ewelina Hańska tras 18 años de cartas ✱.
- **Keats**: murió a los 25; el volumen L2-001 junta toda su obra poética.
- **Dumas y Montevideo**: `Rosas y Montevideo` (L6-019) — Dumas escribió
  sobre el sitio de Montevideo por encargo del gobierno sitiado
  (✱ verificar: *Montevideo ou une nouvelle Troie*, 1850) sin haber pisado
  el Río de la Plata. Chisme rioplatense de primera.
- **Graf Spee**: `The Battle of the River Plate` (L6-016) — la batalla fue
  frente a Punta del Este, diciembre 1939; el barco se hundió a la vista de
  Montevideo. Efeméride local perfecta.
- **Leary**: `Your Brain is God` (L4-005) — echado de Harvard, prófugo,
  llamado "el hombre más peligroso de América" por Nixon ✱cita.
- **Timothy Leary junto a Sun Tzu, el Dalai Lama y Kiyosaki en L4**: el
  estante más esquizofrénico de la casa — ángulo "romances/peleas de estante".
- **Apolant (R7)**: 10 volúmenes de genealogía uruguaya de autoría familiar,
  más su período alemán previo a la emigración (`Die wirtschaftsfriedliche
  Arbeitnehmerbewegung`). Dimensión posesiva máxima: no es "un libro que
  tengo", es "un libro que hicimos" ✱confirmar parentesco con el dueño.
- **Villar (R7)**: química uruguaya 1940–1967, apuntes encuadernados +
  ~20 folletos abrochados. Mismo carácter familiar ✱.
- **Récords medibles del catálogo**: obra más antigua (Sun Tzu ~s. V a.C.;
  edición física más vieja: candidatos en M7/M8/R8 sin identificar), el más
  valioso según `price` (Don Quijote TOP USD 60, NatGeo USD 60), la saga más
  completa (King 50), el estante más políglota, los 21 libros UNK-* que ni
  el catálogo sabe qué son.

## 3. Dimensión temporal

- **Efemérides de MIS autores**: nacimientos/muertes/publicaciones (King
  21/9/1947; Shakespeare bautizado 26/4/1564, muerto 23/4/1616; Cervantes
  muerto 22/4/1616 — "murieron la misma fecha pero no el mismo día" por los
  calendarios juliano/gregoriano, chisme calendárico canónico; Graf Spee
  13-17/12/1939; Christie 15/9/1890 ✱). El agente calcula "un día como hoy"
  contra la fecha de la corrida.
- **Estaciones**: julio = invierno en Montevideo → "noche larga, libro largo",
  King y misterio son de invierno.
- **Aniversarios de publicación**: `first_published` en `data/enrichment.json`
  permite "Carrie cumple N años este año".

## 4. Dimensión posesiva (acá es máxima: TODO es del dueño)

- "**Tu** Balzac en vitela", "**tus** 50 King", "**tu** estante de astronomía".
- La estantería física es suya: L/M/R + número mapean a lugares reales de su
  casa. "El estante 3 de la izquierda" es un lugar que puede tocar esta noche.
- R7 es directamente **historia familiar publicada**.
- Los 21 UNK-* son "los desconocidos de tu propia casa" — nadie más puede
  resolverlos.

## 5. Preguntas engageAnswer (el usuario como sensor)

Cada respuesta enriquece `data/enrichment.json` vía el agente:

1. **"¿Este lo leíste?"** → `read_status` (leido / no_leido / abandonado). La
   pregunta madre: 400 datos que solo él tiene.
2. **"¿Lo vas a leer esta noche? Sí / Ya lo leí / No"** → el CTA estrella
   (objetivo físico: agarrar el libro).
3. **"¿Sigue en este estante?"** → valida el catálogo de mayo 2026.
4. **"¿Lo prestaste?"** → `read_status: prestado` + chisme futuro ("hace N
   días que X no vuelve").
5. **"¿Qué es este lomo?"** (foto/descripción de un UNK-*) → identificación.
6. **"¿Apolant/Villar son familia tuya?"** → desbloquea el ángulo familiar.
7. **"¿Cuál King te falta?"** → completismo (50 de ~65+ novelas publicadas).

## 6. Inventario × ángulos = mesa de contenido

| Ángulo | Combustible concreto |
|---|---|
| 📱 Feed 1ª persona | Cualquier libro con datos ricos; culpa cómica de los nunca-abiertos (sin afirmar: preguntando) |
| 🍷 Chusmerío | Bachman 1985, Doyle mata a Holmes, Christie 1926, Bacon-vs-Shakespeare, Dumas mercenario de Montevideo, Balzac y el café |
| 🏆 Récords | 50 King, Sun Tzu como obra más vieja, Dalí-Macbeth como edición más rara, precios del catálogo, 21 UNK |
| 🎤 Confesiones del estante N | L4 (el estante esquizofrénico), M5 (los cozys), R6 (100 revistas sin catalogar) |
| 🔮 Horóscopo lector | 400 personalidades disponibles; mapear estados de ánimo a estantes |
| 🕯️ Un día como hoy | Efemérides §3 contra la fecha de corrida |
| 💘 Romances de estantería | Keats (romántico) + Benavent (romance contemporáneo); Sun Tzu vs. Dalai Lama; los Bok (matrimonio que escribió junto) |

## 7. Huecos de datos (no afirmar — preguntar)

- **Estado de lectura: 100% desconocido.** Ninguna experiencia puede decir
  "nunca lo leíste" como hecho; se pregunta o se frasea condicional/en broma
  evidente.
- 105 libros sin autor; 51 con confidence media/baja/unknown; 21 UNK-*.
- `R5-023 No tengas miedo`: la propia ficha duda de qué obra de King es.
- Años: solo 136/400 sembrados; los `aprox` se verifican antes de publicarse.
- El catálogo se fotografió el 2026-05-19: todo "sigue ahí" es presunción
  razonable, no certeza — para afirmaciones fuertes, preguntar (§5.3).
