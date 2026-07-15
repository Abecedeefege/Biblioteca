# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento
Fijada 2026-07-15 (bootstrap; el dueño pidió "mezcla" sin proporción — ajustar
con datos). Push diario único a las ~12:30 -03:00.

## 👤 El lector (datos duros, 2026-07-15)
- Libros personales = **estante L4** (el de *Jonathan Livingston Seagull*).
  El resto de los ~400 comparten casa pero no son su colección núcleo.
- Gustos declarados por chat: wellness, autosuperación, positividad,
  astronomía, neurociencia y mente, espiritualidad oriental, finanzas y
  negocios, fábulas inspiradoras. Idioma: **indistinto** (L4 real: 46% ES /
  54% EN, sin patrón por subtema).
- Perfil fino (del análisis de L4): busca transformación práctica pero
  envuelta en **narrativa o ciencia, nunca sermón**; oscila entre el
  ingeniero (Gawdat, Clear, Doidge) y el contemplativo (zen, fábulas);
  prefiere **libros cortos y releíbles**; entra a la espiritualidad por la
  puerta accesible (no erudito); el par Leary+Huxley delata interés por los
  bordes de la mente. Mitad del estante es post-2015: comprador activo.
- Astronomía = estante L5 entero (32 títulos, divulgación vintage 1940-1965;
  joyas: Sagan *Cosmos*, Hawking, Gamow ×3, el matrimonio Bok). **Cero
  astronomía post-1990** → veta moderna virgen.
- CONTEXTO julio 2026: está leyendo *El monje que vendió su Ferrari*
  (Sharma) — iba por el cap. 7 a mediados de julio. NO recomendarlo como
  nuevo; secuelas de Sharma = candidatos futuros. Julio = invierno en
  Montevideo (lecturas de una sentada, comfort books).

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media —
  no construir sobre él.
- `read_status` desconocido para TODO L4 — nunca afirmar "lo leíste" /
  "nunca lo abriste": preguntar con botones.
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — el
  dueño YA los tiene aunque estén fuera de lugar.

## 🆕 Banco de candidatos — NUEVOS (por veta; reponer cuando queden <5)
- **Estoicismo** (hueco más obvio: solo 1 Holiday, ningún clásico):
  *Meditaciones* (Marco Aurelio), *El Obstáculo es el Camino* / *Diario
  para Estoicos* (Holiday), Séneca (*Cartas a Lucilio*).
- **Astronomía moderna** (post-1990 virgen): *Siete breves lecciones de
  física* (Rovelli — corto+poético+ciencia, SU mezcla exacta),
  *Astrophysics for People in a Hurry* (Tyson), *The End of Everything*
  (Katie Mack), Sean Carroll, algo de James Webb/exoplanetas.
- **Neurociencia reciente** (Doidge 2007 es lo más nuevo): *Pensar rápido,
  pensar despacio* (Kahneman), *Behave* (Sapolsky), *Incógnito* (Eagleman),
  *Why We Sleep* (Walker), *Being You* (Anil Seth).
- **Conciencia moderna**: *How to Change Your Mind* (Pollan) — el puente
  exacto entre su Huxley y su Doidge.
- **Mindfulness práctico** (solo tiene a Puig): *El milagro de mindfulness*
  (Thich Nhat Hanh), *El Poder del Ahora* (Tolle), Pema Chödrön,
  Kabat-Zinn.
- **Oriental nivel 2** (todo lo suyo es introductorio): *Tao Te Ching*,
  *The Way of Zen* (Watts), *Mente zen, mente de principiante* (Suzuki),
  *Bhagavad Gita*.
- **Finanzas conductuales** (solo Kiyosaki 1997): *The Psychology of Money*
  (Housel) — finanzas+psicología, match doble.
- **Psicología positiva con base científica**: *Flow* (Csikszentmihalyi),
  *The Happiness Hypothesis* (Haidt — ciencia + sabiduría antigua),
  Seligman.
- **Cuerpo/wellness físico** (veta vacía): *Breath* (Nestor) — respiración
  + zen + ciencia, cruza tres gustos.
- **Fábulas contemporáneas / autor favorito / completismo**: *The Midnight
  Library* (Haig), *Tuesdays with Morrie* (Albom), *Ilusiones* (Bach — su
  autor identitario), *El Camino de la Autodependencia* (Bucay, tomo 1 que
  le falta a la serie de M5 — recomendación con historia incorporada).

## 🔁 Banco de candidatos — REDESCUBRIMIENTOS
- L4-017 *Jonathan Livingston Seagull* — SU libro; relectura identitaria.
- L4-023 *Siddhartha* — fábula + oriental, sus dos vetas en 100 páginas.
- L4-018 *The Prophet* — recomendar UN capítulo (amor/trabajo) como micro-dosis.
- L4-010 *Zen en el arte del tiro con arco* — zen como práctica; conecta
  con L4-003 (mindfulness) y L4-002 (hábitos).
- L4-014 *The Doors of Perception* — doble programa con L4-005 (Leary).
- L4-021 *The Art of Happiness* — psiquiatra pregunta, monje responde.
- L4-022 *The Boy, the Mole...* — comfort book de 40 min para día gris.
- L5-032 *Cosmos* (Sagan) — el cap. 1 solo ya es una experiencia de asombro.
- L5-007 *A Brief History of Time* — ángulo "¿hasta qué capítulo llegaste?"
  (pregunta con botones, nunca afirmación).
- L5-026 *Of Time and Space...* (Asimov) — "hoy leé UN ensayo de un libro TUYO".
- L5-019 *La Vía Láctea* (los Bok, matrimonio de astrónomos) — ángulo
  romántico-astronómico único.
- M5-029 *El Camino de la Felicidad* (Bucay) — "tu libro de felicidad está
  escondido entre los policiales".

## 📊 Historial de señales (números, no vibes)
- Todo es PRIOR todavía — cero feedback medido.
- 2026-07-15 · `2026-07-15-frankl-sentido` · nuevo · positividad/
  espiritualidad · push enviado 18:13 (201). Sin datos aún.
- 2026-07-16 · `2026-07-16-rovelli-siete-lecciones` · nuevo · astronomía
  moderna · PRE-ARMADA (regla "día pre-armado" del comando: no crear otra).
- 2026-07-17 · `2026-07-17-bucay-camino-felicidad` · redescubrimiento
  (M5-029) · PRE-ARMADA. Mezcla de los 3 primeros días: 2 nuevos + 1
  redescubrimiento ✓.

## 🔭 Qué mirar en las próximas corridas
- 16 y 17/07 son días PRE-ARMADOS: solo procesar feedback y verificar que
  el push del día esté `pending` en la cola. La primera elección libre es
  el 2026-07-18.
- Señales por interpretar: veredicto de Frankl, `rec-via:*` (el "modo" del
  lector), `rec-leccion:*` (qué física lo tienta), `rec-camino:*` y
  `rec-tomo1:*=si` (si pide el tomo 1 de Bucay → *El Camino de la
  Autodependencia* sube al tope del banco de nuevos).
- Para el 18/07: si Frankl/Rovelli midieron bien → seguir vetas fuertes
  (estoicismo: *Meditaciones* o Housel). Si el redescubrimiento ganó →
  subir su proporción en la mezcla.
