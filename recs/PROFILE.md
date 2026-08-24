# Perfil de gustos — recomendador de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — DIARIO desde 20/08 (reemplaza el semanal del 05/08)
**DOS fichas por día, todos los días**: UNA para Andy y UNA para Sofi, cada
una elegida por SU perfil y SU feedback. Entre las dos del día: **UNA de
libro nuevo y UNA de la biblioteca de la casa**, alternando cada día quién
recibe la nueva (mirar en `recommended.json` qué recibió cada uno el día
anterior). Push personal a cada uno, ambos ~19:00 -03:00
(`"to":"Andy"` / `"to":"Sofi"`). Si el día ya tiene fichas pre-armadas,
cuentan para su destinatario (una `todos` cuenta para ambos) y solo se
construye lo que falte, manteniendo el par nuevo+biblioteca.
Cine/series NO cambia (viernes ~19:00, `todos`, fuera del par).
**⚠️ Nota de mantenimiento (vigente desde 21/08):**
`.claude/commands/recomendacion.md` sigue describiendo el régimen SEMANAL
del 05/08 (Gate de día domingo) — quedó desactualizado al restablecerse el
diario el 20/08. Esta sección de PROFILE manda hasta que alguien
sincronice el comando; no es territorio que yo pueda tocar.

## 🎧 REGLA NUEVA — Google Play Books en TODAS las fichas (desde 24/08)
Pedido explícito de Andy (rec-nota, 24/08 06:24, prioridad máxima): de acá
en más, TODA ficha nueva (de Andy y de Sofi) suma, si existen, un link a
**audiolibro** de Google Play Books y, si no hay audiolibro completo, un
link a **resumen** (ebook o audiolibro) de Google Play Books. Aplicado
retroactivamente a la ficha de Walker (23/08: sumado ebook + audiolibro-
resumen de tercero, sin audiolibro narrado completo en español) y ya
integrado en las dos de hoy (24/08). Verificación: Google Play devuelve
403 a cualquier bot/curl en CUALQUIER ficha — se verifica por búsqueda
cruzada título+autor(+narrador) contra resultados reales de play.google.com,
nunca por click directo. Si no existe ninguna opción, se dice explícitamente
(no se omite en silencio).

## 📅 24/08 — hoy
4 eventos nuevos, todos de Andy (Sofi sigue en silencio total, van 4 fichas
suyas mudas: Klune-Puerta 20/08, Heap House 21/08, Café de las leyendas
22/08, Windsor Knot 23/08). Andy clickeó el push de Walker y votó
**me_tienta** — ROMPE LA RACHA MUDA de 9 fichas sin voto desde Holiday
(02/08). Además dejó una rec-nota (ver regla nueva arriba). Régimen: ayer
Andy tuvo nuevo (Walker) → hoy redescub; Sofi tuvo redescub (Bennett) → hoy
nuevo. Elegido para Andy: **Charlie Mackesy, *El niño, el topo, el zorro y
el caballo*** (L4-022) — vuelve al combo más sólido y ya confirmado dos
veces (fábula corta ilustrada, mismo tipo que los dos Bach), rotando de
veta (ayer cuerpo/sueño, hoy fábula/positividad). Para Sofi, **cambio
fuerte** aplicado (regla de 3+ fichas sin feedback, ya son 4): en vez de un
quinto nombre nuevo en misterio/gótico, vuelvo al único dato duro que tengo
de ella en toda la fantasía cálida — **TJ Klune, *Somewhere Beyond the
Sea*** (secuela directa de *La casa en el mar más azul*, su único
me_tienta+love). Se agrega un micro-CTA de diagnóstico directo
(`rec-que-paso`) preguntándole qué pasó con las últimas 4 fichas — push,
tiempo o desinterés — para saber si el problema es de entrega o de
contenido. Pushes `2026-08-24-rec-andy` / `-rec-sofi` (19:00) +
`2026-08-24-rec-andy-audio` (19:05, avisándole que el pedido de audiolibro
ya está resuelto en la ficha de Walker).

### Log resumido 20–23/08
20/08 Andy→Brewer *Ansiedad* (redescub L4-028) / Sofi→Klune-Puerta (nuevo).
21/08 Andy→Nestor *Respira* (nuevo, dwell 350s/99%, sin voto) / Sofi→Carey
*Heap House* (redescub). 22/08 Andy→Raspall *Calmar la mente* (redescub
L4-025) / Sofi→Baldree *Café de leyendas* (nuevo). 23/08 Andy→Walker (nuevo,
ver arriba) / Sofi→Bennett *Windsor Knot* (redescub M5-025). Ninguna de las
4 de Sofi tuvo feedback.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id de
siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json` cada
corrida (437 volúmenes hoy). Suscripción: Andy y Sofi `active` (24/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5, 50 libros), **salón del crimen** (M5), **rincón
Valeria** (M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero`, banco AGOTADO.
Oscuro/thriller: Dicker `lo_quiero`, King `ya_lo_lei`. Romance contemporáneo
(Henry x2): **descartado**. **Fantasía cálida: su ÚNICO dato duro real —
Klune 05/08 `me_tienta`+`love`** — usado hoy (24/08) con la secuela directa,
tras 4 fichas mudas seguidas de misterio/gótico (Klune-Puerta, Heap House,
Café de leyendas, Windsor Knot). Si Somewhere Beyond the Sea tampoco genera
nada, el problema no es de veta — es de entrega o de formato: mirar la
respuesta del micro-CTA `rec-que-paso` antes de seguir gastando "nuevos".
**🚨 GUARDIA MÁXIMA misterio/cozy:** 5 fichas dieron `ya_lo_lei` (King,
Katzenbach, Carlisle, Benavent, Henry) — autores/sagas masivos ya devorados
por Kindle. Sigue en pausa para esos autores puntuales.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011.
- Sin señal (4+ días, nada de feedback): Osman t.3/t.4, Dicker Baltimore,
  Minix, Delany M5-014, Thorogood Marlow, Book Lovers, Coyle (16/08),
  Klune-Puerta (20/08), Heap House M5-007, Baldree (22/08), Bennett-Windsor
  M5-025 (23/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022 *Ciudades de papel* ni M5-009 *Alice: Return to Wonderland* sin
  confirmar en persona (marcados "no visto"). Evitar también M5-008
  (Bridgerton), M5-002 (Alas de Sophie), M6 entero (romance, no visto).
  Limpios sin usar en M5: Sherlock Holmes x5 (Doyle/DK), Christie x2, Peters
  *Misterio en Egipto*, S.J. Bennett libro 2 (*A Three Dog Problem*, si el 1
  funciona).
- Banco NUEVO (agotándose, reponer <5): resto de TJ Klune (*In the Lives of
  Puppets* — mismo universo, más oscuro; verificar stock), Backman *Un
  hombre llamado Ove* (riesgo "ya la vi", película 2022), Haig (revisar
  stock antes). Si Somewhere Beyond the Sea acierta: seguir con *In the
  Lives of Puppets* antes que autores sin señal previa.

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco: Piranesi,
Un verdor terrible, El curioso incidente del perro a medianoche, Recursion
— NINGUNO está en el catálogo físico, son candidatos "nuevo" a comprar/
investigar. 27/07 ACIERTO PLENO: Haig (Sofi). Weir sin veredicto aún.

## 👤 Andy — datos duros
Estante L4 (28 libros + 5 nuevos de agosto). Gustos: wellness,
autosuperación, positividad, astronomía, neurociencia, espiritualidad
oriental, finanzas, fábulas. Idioma indistinto. Regla confirmada x3
(Bach Ilusiones→Gaviota, Holiday Obstáculo): autor identitario/ya-en-casa >
clásico consagrado sin dueño. **Fábula corta (Bach, Hesse, ahora Mackesy)
es su combo más seguro** — 2/2 con Bach, probado un tercer autor hoy.
- Aciertos: Rovelli Siete breves lecciones, Bach Ilusiones, Holiday Obstáculo
  (plenos); Cosmos, Bach Gaviota (redescub). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño — patrón resuelto).
- **Racha muda de 9 fichas ROTA el 24/08**: Walker (23/08) sacó `me_tienta`.
  El patrón previo ("lee/mira pero no clickea el botón grande") sigue siendo
  válido como hipótesis para explicar el bache — no hace falta el plan de
  respaldo de 2 botones, ya está resuelto con voto real. Seguir ofreciendo
  el micro-CTA de un toque una corrida más por si el bache vuelve.
- Astronomía en pausa: quedan L5-024 Hoyle, L5-021 Whipple. Rovelli
  identitario: si Orden del Tiempo acierta, próximo Helgoland. Estoicismo
  confirmado — banco: Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con
  primer voto real, sin confirmar aún el segundo nivel (esperar veredicto
  final o repetir la veta si vuelve a haber señal fuerte).

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida (Andy y Sofi `active`; hay un tercer
device `C-test` que no es de la casa — no tocar). `read_status` de
enrichment NO es confiable para Sofi (Kindle paralelo); para Andy sí.
**Google Play devuelve 403 a curl/WebFetch en CUALQUIER ficha, incluso con
id válido** — verificar por búsqueda cruzada título+autor+narrador antes de
linkear (ver regla nueva de audiolibros arriba). Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`. **Re-catalogación de agosto**: varios
libros de M5/M6 quedaron marcados `note: "no visto"` — tratarlos como NO
confirmados en el estante hasta verificar en persona.

## 🆕 Banco NUEVO — Andy (reponer si <5)
Astronomía (pausa): Katie Mack, Sean Carroll. Neurociencia: Sapolsky
*Behave*, Anil Seth. Mindfulness: Thich Nhat Hanh, Tolle, Pema Chödrön,
Kabat-Zinn. Oriental nivel 2: *Tao Te Ching*, Alan Watts, Suzuki, *Bhagavad
Gita*. Psicología positiva: Csikszentmihalyi *Flow*, Haidt, Seligman.
Cuerpo: Walker usado 23/08 (me_tienta, ver arriba) — si pide más de esta
veta, próximo sería su *The Craving Mind* o *The Hunger Habit* (Brewer),
ninguno en casa. Hábitos (veta abierta 20/08 con Brewer, sin confirmar aún).

## 🔁 Banco REDESCUB — Andy
Usado 24/08: L4-022 Mackesy. Usado 22/08: L4-025 Raspall. Próxima prioridad:
L4-010 *Zen tiro con arco*, L4-014 *Doors of Perception*, L4-016 *Budismo
para principiantes*, L4-021 *Art of Happiness*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 25/08, régimen diario)
Hoy (24/08) Andy tuvo redescub y Sofi nuevo → **mañana se invierte: Andy
nuevo, Sofi redescub**. Prioridad de lectura del feedback: (1) ¿Mackesy
sostiene el voto real de Andy o fue un salto puntual de Walker? Si vota de
nuevo, la racha muda queda cerrada del todo. (2) ¿Somewhere Beyond the Sea
rompe el silencio de Sofi? Mirar primero la respuesta del micro-CTA
`rec-que-paso` — decide si el próximo movimiento es de contenido (probar
otra veta) o de formato/entrega (pushes, horario, largo de ficha). (3) Antes
de armar la próxima ficha de Andy, buscar y linkear audiolibro/resumen de
Google Play Books desde el arranque, no como parche. Seguir sin señal:
Coyle (16/08), Delany M5-014, Rovelli 04/08, Rojas 05/08, Thorogood,
vuelo-ebooks.

## 🎬 CINE + 🧳 viaje (fuera del ciclo, no cuentan el par del día)
Cine: 1/semana, `audience:"todos"`, `kind:"cine"`, viernes ~19:00. Sofi evita
gore/violencia explícita, subtítulos siempre; Andy evita "triste", nunca
doblado. Nº1 (31/07): OMitB "ya la vimos" ambos; Arrival "no va" a Sofi
(ciencia dura sin trama humana, no repetir ese ángulo con ella); Severance
"me tienta" Andy — candidata fuerte Nº2. Curaduría: icónico/importante >
relleno. **⚠️ Sin Función Nº2 desde el 31/07** — fuera del alcance de esta
corrida (foco en libros); Severance ya tiene demanda confirmada de Andy
para cuando se retome.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
