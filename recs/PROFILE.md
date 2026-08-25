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

## 📅 25/08 — hoy
6 eventos nuevos procesados, TODOS de Andy otra vez (dwell de 376s/100%
scroll en la ficha de Walker del 23/08, más click + 3 dwells crecientes
121s→135s→140s/80% scroll en la de Mackesy del 24/08 — la leyó casi
entera pero sigue sin apretar el botón de veredicto grande). **Cero
eventos de Sofi**: Somewhere Beyond the Sea (24/08) tampoco tuvo ni un
click — van **5 fichas mudas seguidas** (Klune-Puerta 20/08, Heap House
21/08, Café de leyendas 22/08, Windsor Knot 23/08, Somewhere Beyond the
Sea 24/08), sin un solo `page_visit` registrado. Ya no es señal de veta:
**aplicado el "cambio de raíz" prometido ayer** — hoy la ficha de Sofi es
deliberadamente más corta (sin sección interactiva de personajes, sin
honestidad/ficha largas) y la pregunta de diagnóstico `rec-que-paso` se
movió al FRENTE, justo después del hero, en vez de enterrada al final
junto al veredicto. Régimen: ayer Andy tuvo redescub (Mackesy) → hoy
nuevo; Sofi tuvo nuevo (Klune) → hoy redescub. Elegido para Andy:
**Anil Seth, *Being You*** — rota a neurociencia/mente, veta declarada
por él el primer día (15/07) y nunca antes probada; suma micro-CTA
preguntando cómo va Mackesy. Para Sofi: **Arthur Conan Doyle, *El Perro
de los Baskerville*** (M5-004) — del set Sherlock confirmado físicamente
en la re-catalogación de agosto, nunca usado, NO es de los 50 King.
Pushes `2026-08-25-rec-andy` / `-rec-sofi` (19:00).

**🚨 Si esta ficha de Sofi tampoco genera nada, la próxima corrida el
diagnóstico deja de ser una pregunta dentro de la ficha — hay que asumir
que el canal de push de Sofi está roto y decírselo a Andy explícito en el
reporte, no seguir gastando libros a ciegas.**

### Log resumido 20–24/08
20/08 Andy→Brewer *Ansiedad* (redescub L4-028) / Sofi→Klune-Puerta (nuevo).
21/08 Andy→Nestor *Respira* (nuevo, dwell 350s/99%, sin voto) / Sofi→Carey
*Heap House* (redescub). 22/08 Andy→Raspall *Calmar la mente* (redescub
L4-025) / Sofi→Baldree *Café de leyendas* (nuevo). 23/08 Andy→Walker
(nuevo, me_tienta + dwell 376s/100%) / Sofi→Bennett *Windsor Knot*
(redescub M5-025). 24/08 Andy→Mackesy *El niño, el topo...* (redescub
L4-022, dwell 140s/80%, sin voto) / Sofi→Klune *Somewhere Beyond the Sea*
(nuevo, muda). Ninguna de las 5 fichas de Sofi tuvo feedback.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id de
siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json` cada
corrida (437 volúmenes hoy). Suscripción: Andy y Sofi `active` (24/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5, 50 libros), **salón del crimen** (M5), **rincón
Valeria** (M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero`, banco AGOTADO.
Oscuro/thriller: Dicker `lo_quiero`, King `ya_lo_lei`. Romance contemporáneo
(Henry x2): **descartado**. **Fantasía cálida: su ÚNICO dato duro real —
Klune 05/08 `me_tienta`+`love`** — la secuela (Somewhere Beyond the Sea,
24/08) tampoco tuvo NINGÚN evento. **5 fichas mudas seguidas ya confirmadas
(20 al 24/08) — el problema dejó de tratarse como de veta.** 25/08:
cambio de raíz de formato (ver arriba) + vuelta a redescub confirmado
(Doyle, M5-004) en vez de gastar otro "nuevo" sin datos.
**🚨 GUARDIA MÁXIMA misterio/cozy:** 5 fichas dieron `ya_lo_lei` (King,
Katzenbach, Carlisle, Benavent, Henry) — autores/sagas masivos ya devorados
por Kindle. Sigue en pausa para esos autores puntuales.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011.
- Sin señal (4+ días, nada de feedback): Osman t.3/t.4, Dicker Baltimore,
  Minix, Delany M5-014, Thorogood Marlow, Book Lovers, Coyle (16/08),
  Klune-Puerta (20/08), Heap House M5-007, Baldree (22/08), Bennett-Windsor
  M5-025 (23/08), Klune-Somewhere (24/08), Doyle-Baskerville M5-004 (25/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO usar
  M5-022 *Ciudades de papel* ni M5-009 *Alice: Return to Wonderland* sin
  confirmar en persona (marcados "no visto"). Evitar también M5-008
  (Bridgerton), M5-002 (Alas de Sophie), M6 entero (romance, no visto).
  Usado 25/08: M5-004 (Doyle, Baskerville). Quedan limpios sin usar en M5:
  Sherlock Holmes x4 más (M5-033 DK, M5-006, M5-034, M5-035, M5-036),
  Christie x2 (M5-020, M5-021), Peters *Misterio en Egipto* (M5-019),
  S.J. Bennett libro 2 (*A Three Dog Problem*, si el 1 da señal — sigue sin
  ninguna).
- Banco NUEVO (agotándose, reponer <5): resto de TJ Klune (*In the Lives of
  Puppets* — mismo universo, más oscuro; verificar stock), Backman *Un
  hombre llamado Ove* (riesgo "ya la vi", película 2022), Haig (revisar
  stock antes). **NO usar ninguno más hasta tener respuesta del
  `rec-que-paso` — si el problema es de entrega, un nuevo nombre no lo
  arregla.**

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
clásico consagrado sin dueño. **Fábula corta (Bach, Hesse, Mackesy)
es su combo más seguro** — 2/2 con Bach; Mackesy (24/08) con dwell alto
(140s/80%) pero todavía sin voto.
- Aciertos: Rovelli Siete breves lecciones, Bach Ilusiones, Holiday Obstáculo
  (plenos); Cosmos, Bach Gaviota (redescub). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño — patrón resuelto).
- **Racha muda de 9 fichas ROTA el 24/08**: Walker (23/08) sacó `me_tienta`
  (dwell confirmado 376s/100% el 24/08 madrugada). El patrón "lee/mira
  antes de votar" se repitió con Mackesy (140s/80%, sin voto) — sigue
  siendo la hipótesis vigente, no hace falta plan de respaldo.
- Astronomía en pausa: quedan L5-024 Hoyle, L5-021 Whipple. Rovelli
  identitario: si Orden del Tiempo acierta, próximo Helgoland. Estoicismo
  confirmado — banco: Séneca Cartas a Lucilio. Cuerpo/sueño: Walker con
  primer voto real, sin confirmar aún el segundo nivel. **Neurociencia/mente
  abierta 25/08 con Anil Seth (Being You)** — veta declarada el 15/07,
  nunca antes probada; sin veredicto todavía.

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
*Behave* (Anil Seth usado 25/08, ver arriba). Mindfulness: Thich Nhat Hanh,
Tolle, Pema Chödrön, Kabat-Zinn. Oriental nivel 2: *Tao Te Ching*, Alan
Watts, Suzuki, *Bhagavad Gita*. Psicología positiva: Csikszentmihalyi
*Flow*, Haidt, Seligman. Cuerpo: Walker usado 23/08 (me_tienta) — si pide
más de esta veta, próximo sería su *The Craving Mind* o *The Hunger Habit*
(Brewer), ninguno en casa. Hábitos (veta abierta 20/08 con Brewer, sin
confirmar aún).

## 🔁 Banco REDESCUB — Andy
Usado 24/08: L4-022 Mackesy. Usado 22/08: L4-025 Raspall. Próxima prioridad:
L4-010 *Zen tiro con arco*, L4-014 *Doors of Perception*, L4-016 *Budismo
para principiantes*, L4-021 *Art of Happiness*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 26/08, régimen diario)
Hoy (25/08) Andy tuvo nuevo (Seth) y Sofi redescub (Doyle) → **mañana se
invierte: Andy redescub, Sofi nuevo** (si `rec-que-paso` sigue en blanco,
evaluar seriamente saltear el "nuevo" de Sofi y quedarse en redescub hasta
tener señal — un nuevo nombre no arregla un problema de entrega). Prioridad
de lectura del feedback: (1) **Sofi — la más urgente**: ¿algo, lo que sea,
en Baskerville? Si sigue en cero, esto ya son 6 fichas mudas — dejar de
tratarlo como experimento de contenido y reportárselo a Andy explícito
(revisar `subscription.json`, sugerir reinstalar en `engage/sofi.html` o
lo que exista). (2) ¿Being You genera voto o vuelve el patrón de dwell sin
click? (3) ¿Mackesy vota tarde, como Walker? Seguir sin señal: Coyle
(16/08), Delany M5-014, Rovelli 04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

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
