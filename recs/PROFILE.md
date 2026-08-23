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
**⚠️ Nota de mantenimiento (21/08, sigue vigente 23/08):**
`.claude/commands/recomendacion.md` sigue describiendo el régimen SEMANAL
del 05/08 (Gate de día domingo) — quedó desactualizado al restablecerse el
diario el 20/08. Esta sección de PROFILE manda hasta que alguien
sincronice el comando; si volvés a ver este aviso en varias corridas
seguidas, valdría la pena confirmar con Andy cuál de los dos regímenes
quiere de verdad y, si es el diario, pedirle que edite el .md — no es algo
que yo pueda tocar (está fuera de mi territorio de escritura).
- **23/08 (domingo)**: 4 eventos nuevos desde el cutoff anterior, todos de
  Andy — nada de Sofi (sus 3 fichas de fantasía calida siguen mudas).
  Dwell altísimo (350s, 99% scroll) en Respira (Nestor, 21/08) sin voto; y
  esta madrugada (04:36) sí clickeó el push de Raspall y visitó la ficha,
  con dwell bajo (55s, 11%) y tampoco votó. No se cumplió la condición
  "ni click" que hubiera activado el plan de respaldo de 2 botones — se
  mantiene el CTA completo, pero se sumó un micro-CTA de un solo toque
  ("¿ya le diste una mirada?") en la ficha de hoy para bajar la fricción
  sin tocar la estructura obligatoria. Andy venía de redescub (Raspall
  22/08) → hoy **nueva**; Sofi venía de nuevo (Baldree 22/08) → hoy
  **redescub**. Andy: **Matthew Walker, *¿Por qué dormimos?*** — mismo
  perfil de autoridad real que Rovelli/Raspall (neurocientífico, UC
  Berkeley, director del Center for Human Sleep Science), profundiza la
  veta cuerpo que generó el dwell más alto hasta ahora; ya había sido
  MENCIONADO de pasada el 06/08 en la lista de vuelo — se declaró esa
  continuidad de frente, junto con la crítica de Guzey (2019) ya avisada
  entonces. Sofi: **S.J. Bennett, *The Windsor Knot*** (M5-025,
  redescub) — comparada de frente por la crítica con *The Thursday Murder
  Club* (su único 3/3 lo_quiero), protagonista y autora nuevas, para
  separar "Osman puntual" de "detective improbable con humor británico en
  general"; se descartaron M5-022/M5-009 (marcados "no visto" en la
  re-catalogación, riesgo real de que no estén en el estante) y M5-016
  (pide esperar señal de M5-014, todavía sin votos). Pushes
  `2026-08-23-rec-andy` / `-rec-sofi`, ambos 19:00 -03:00, `pending`.
- **22/08**: Andy → Raspall *Calmar la mente* (redescub L4-025). Sofi →
  Baldree *El café de las leyendas* (nuevo). Sin feedback de Sofi;
  Andy con click a Raspall recién el 23/08 madrugada (ver arriba).
- **21/08**: Andy → Nestor *Respira* (nuevo), push adelantado a 17:30 →
  dwell 350s/99% el mismo día, sin voto (ver arriba). Sofi → Carey *Los
  secretos de Heap House* (redescub M5-007). Ninguno votó formalmente.
- **20/08**: Andy → Brewer *Deshacer la ansiedad* (redescub L4-028). Sofi →
  Klune *Bajo la puerta de los susurros* (nuevo, identitario). Sin
  feedback aún.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id de
siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json` cada
corrida (437 volúmenes hoy). Suscripción: Andy y Sofi `active` (20/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5, 50 libros), **salón del crimen** (M5), **rincón
Valeria** (M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero`, banco AGOTADO
— sigue siendo su ÚNICO acierto pleno confirmado. Oscuro/thriller: Dicker
`lo_quiero`, King `ya_lo_lei`. Romance contemporáneo (Henry x2):
**descartado**. Fantasía cálida: única veta con señal viva pero ahora en
pausa de datos — Klune 05/08 `me_tienta`+`love` sigue siendo el único voto
real; Heap House (21/08) y El café de las leyendas (22/08) sin ninguna
señal todavía, 3 fichas seguidas mudas de Sofi.
**🚨 GUARDIA MÁXIMA misterio/cozy:** 5 fichas dieron `ya_lo_lei` (King,
Katzenbach, Carlisle, Benavent, Henry) — autores/sagas masivos que
probablemente ya devoró por Kindle. Sigue en pausa para ESOS autores
puntuales; el 23/08 se probó Bennett *Windsor Knot* como experimento
distinto (autora nueva, comp directa con Osman) — NO reabre la pausa de
los autores quemados, es una prueba aparte.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011.
- Sin señal (3+ días): Osman t.3/t.4, Dicker Baltimore, Minix, Delany M5-014,
  Thorogood Marlow, Book Lovers, Coyle (16/08), Heap House M5-007 (21/08),
  Klune-Puerta (20/08), Baldree (22/08), Bennett-Windsor (23/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014). NO
  usar M5-022 *Ciudades de papel* ni M5-009 *Alice: Return to Wonderland*
  sin confirmar antes en persona — ambos marcados "no visto" en la
  re-catalogación de agosto (riesgo real de que no estén en el estante).
  Otros no-vistos a evitar igual: M5-008 (Bridgerton), M5-002 (Alas de
  Sophie). Limpios y sin usar en M5: Sherlock Holmes x5 (Doyle/DK),
  Christie x2, Peters *Misterio en Egipto*, S.J. Bennett libro 2 (*A Three
  Dog Problem*, si el 1 funciona). Evitar M6 entero (romance, no visto),
  M5-037/038 (Carlisle/Adams, autores cerca de quemados), Fitzek M5-003/010.
- Banco NUEVO (quedan pocos): resto de TJ Klune (*Somewhere Beyond the
  Sea*, ed. española 2025 — verificar stock), Backman *Un hombre llamado
  Ove* (riesgo "ya la vi", película 2022), Haig (revisar stock antes).
  Si Windsor Knot acierta: *A Three Dog Problem* (libro 2, mismo mundo).

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco: Piranesi,
Un verdor terrible, El curioso incidente del perro a medianoche, Recursion
— NINGUNO está en el catálogo físico, son candidatos "nuevo" a comprar/
investigar, no redescub. 27/07 ACIERTO PLENO: Haig (Sofi). Weir sin
veredicto aún.

## 👤 Andy — datos duros
Estante L4 (28 libros + 5 nuevos de agosto). Gustos: wellness,
autosuperación, positividad, astronomía, neurociencia, espiritualidad
oriental, finanzas, fábulas. Idioma indistinto. Regla confirmada x3
(Bach Ilusiones→Gaviota, Holiday Obstáculo pese a ser masivo): autor
identitario/ya-en-casa > clásico consagrado sin dueño. Fábula corta
(Bach, Hesse, Albom) es su combo más seguro cuando pide algo explícito.
- Aciertos: Rovelli Siete breves lecciones, Bach Ilusiones, Holiday Obstáculo
  (plenos); Cosmos, Bach Gaviota (redescub). `ya_lo_lei`: Frankl, Meditaciones
  (clásicos sin dueño — patrón resuelto).
- **🔇 RACHA MUDA (sin voto formal, con señal parcial real): 9 fichas desde
  Holiday (02/08)** — pero 23/08 trajo la señal más fuerte hasta ahora:
  dwell 350s/99% scroll en Respira (21/08, la ficha con más dwell de toda
  la corrida) y un click real al push de Raspall (23/08 madrugada, aunque
  con dwell bajo). El patrón lee como "lee/mira pero no clickea el botón
  grande", no como desinterés. Plan de respaldo (2 botones) queda en
  pausa porque SÍ hubo click en Raspall; en su lugar se agregó un
  micro-CTA de un toque en la ficha de Walker (23/08) para seguir
  probando la hipótesis de fricción sin tocar el contrato obligatorio.
- Astronomía en pausa: quedan L5-024 Hoyle, L5-021 Whipple. Rovelli
  identitario: si Orden del Tiempo acierta, próximo Helgoland. Estoicismo
  confirmado — banco: Séneca Cartas a Lucilio.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida (Andy y Sofi `active`, hay un tercer
device `C-test` que no es de la casa — no tocar, no es mi territorio).
`read_status` de enrichment NO es confiable para Sofi (Kindle paralelo);
para Andy sí. **Google Play devuelve 403 a curl/WebFetch en CUALQUIER
ficha, incluso con id válido** — verificar por búsqueda cruzada
título+autor+narrador antes de linkear. Buscalibre: siempre
`buscalibre.uy/libros/search/?q=…`. **Re-catalogación de agosto**: varios
libros de M5/M6 quedaron marcados `note: "no visto"` — tratarlos como NO
confirmados en el estante hasta verificar en persona; no ofrecerlos como
redescub sin avisar el riesgo.

## 🆕 Banco NUEVO — Andy (reponer si <5)
Astronomía (pausa): Katie Mack, Sean Carroll. Neurociencia: Sapolsky
*Behave* (mencionado 06/08, nunca usado como ficha propia), Anil Seth.
Mindfulness: Thich Nhat Hanh, Tolle, Pema Chödrön, Kabat-Zinn. Oriental
nivel 2: *Tao Te Ching*, Alan Watts, Suzuki, *Bhagavad Gita*. Psicología
positiva: Csikszentmihalyi *Flow* (mencionado 06/08), Haidt, Seligman.
Cuerpo: usado 23/08 Walker *¿Por qué dormimos?* (esperar feedback —
dwell altísimo previo en Nestor es la mejor señal indirecta que hay).
Hábitos (veta abierta 20/08 con Brewer, sin confirmar): su *The Craving
Mind* y *The Hunger Habit*, ninguno en casa.

## 🔁 Banco REDESCUB — Andy
Usado 23/08: ninguno (tocó nuevo). Usado 22/08: L4-025 *Calmar la mente*
(Raspall). Próxima prioridad: L4-010 *Zen tiro con arco*, L4-014 *Doors of
Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art of
Happiness*, L4-022 *The Boy, the Mole...*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 24/08, régimen diario)
Hoy (23/08) Andy tuvo nuevo y Sofi redescub → **mañana se invierte: Andy
redescub, Sofi nuevo**. Prioridad de lectura del feedback: (1) ¿alguno de
los tres (Brewer/Nestor/Raspall) o el nuevo Walker consigue voto de Andy?
El click de Raspall + el dwell de Nestor son la mejor señal que tuvo en
semanas — si Walker también consigue interacción sin voto, ahí sí
considerar el plan de 2 botones en serio. (2) ¿algo de Sofi (Klune-Puerta,
Heap House, Baldree o Windsor Knot) rompe el silencio? El primer voto que
llegue de las cuatro decide si sigue siendo fantasía/Osman puntual o el
género en general. Seguir sin señal: Coyle (16/08), Delany M5-014, Rovelli
04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

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
