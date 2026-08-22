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
**⚠️ Nota de mantenimiento (21/08, sigue vigente 22/08):**
`.claude/commands/recomendacion.md` sigue describiendo el régimen SEMANAL
del 05/08 (Gate de día domingo) — quedó desactualizado al restablecerse el
diario el 20/08. Esta sección de PROFILE manda hasta que alguien
sincronice el comando; si volvés a ver este aviso en varias corridas
seguidas, valdría la pena confirmar con Andy cuál de los dos regímenes
quiere de verdad y, si es el diario, pedirle que edite el .md — no es algo
que yo pueda tocar (está fuera de mi territorio de escritura).
- **22/08 (sábado)**: 2 eventos nuevos desde el cutoff anterior — Andy
  clickeó y abrió la ficha de Nestor (21/08 21:43), sin dwell ni voto
  todavía; nada de Sofi (Klune-susurros 20/08 y Heap House 21/08 siguen
  sin señal). Cutoff avanzado a `2026-08-21T21:43:05.215Z`. Andy venía de
  nuevo (Nestor 21/08) → hoy **redescub**; Sofi venía de redescub (Heap
  House 21/08) → hoy **nuevo**. Andy: **Raspall, *Calmar la mente***
  (L4-025, prioridad del banco) — psiquiatra/psicoterapeuta cognitivo,
  cruza neurociencia + budismo + física cuántica; interacción "la ruta
  mental" (autitos = pensamientos/emociones/recuerdos/deseos, ejercicio
  real descrito en entrevista de Rosario3 marzo 2025). Sofi: **Baldree,
  *El café de las leyendas*** (nuevo) — segundo autor en la veta fantasía
  cálida (Klune 05/08 sigue siendo su única señal real y su banco está
  casi agotado); cozy fantasy deliberadamente liviana, polo opuesto al
  gótico de Heap House de ayer, para separar autor-Klune de género. Ojo:
  el banco tenía anotado "Leyendas y lattes" como título en español —
  ERA INCORRECTO (traducción mía sin verificar); el real es *El café de
  las leyendas* (Roca Editorial), ya corregido en la ficha y acá abajo.
  Pushes `2026-08-22-rec-andy` / `-rec-sofi`, ambos 19:00 -03:00,
  `pending` en la cola.
- **21/08**: Andy → Nestor *Respira* (nuevo), push adelantado a 17:30 como
  experimento de horario → consiguió click (21:43) pero no voto todavía.
  Sofi → Carey *Los secretos de Heap House* (redescub M5-007). Ninguno
  votó formalmente.
- **20/08**: Andy → Brewer *Deshacer la ansiedad* (redescub L4-028). Sofi →
  Klune *Bajo la puerta de los susurros* (nuevo, identitario). Sin
  feedback aún.
- **16/08→19/08**: Coyle *Blanca Navidad y café negro* (Sofi, redescub),
  push OK, sin señal.
- **09/08→15/08**: Albom (Andy, nuevo). 10/08 **rec-nota PRIORIDAD MÁXIMA
  vigente**: linkear audiolibro de Google Play Books en toda ficha si
  existe, sin inventar.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id de
siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json` cada
corrida (437 volúmenes hoy). Suscripción: Andy y Sofi `active` (20/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5), **salón del crimen** (M5), **rincón Valeria**
(M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero`, banco AGOTADO.
Oscuro/thriller: Dicker `lo_quiero`, King `ya_lo_lei`. Romance contemporáneo
(Henry x2): **descartado**. **Fantasía cálida: la única veta con señal viva**
— Klune 05/08 `me_tienta`+`love`; Puerta de los susurros (20/08) sin
feedback todavía. Si acierta, Klune queda como su autor identitario →
seguir con su obra y la cozy fantasy vecina (Baldree, Backman).
**🚨 GUARDIA MÁXIMA:** 5 fichas dieron `ya_lo_lei` (King, Katzenbach,
Carlisle, Benavent, Henry) — todos autores/sagas masivos. Misterio/cozy en
pausa hasta ver si la veta Klune sostiene. 21/08: como no hay libro propio
de fantasía cálida todavía en el catálogo físico, se probó M5-007 *Los
secretos de Heap House* (Carey) — fantasía gótica, mismo ingrediente
found-family pero tono más oscuro; experimento para separar "fantasía en
general" de "el tono tierno específico de Klune" (sin feedback aún). 22/08:
segundo experimento en la misma línea, polo opuesto — *El café de las
leyendas* (Baldree, nuevo), cozy fantasy liviana sin crimen. Con Klune
(05/08), Heap House (21/08) y este, quedan 3 puntos de datos en la veta
fantasía en cuanto vote alguno — ninguno votado todavía al cerrar esta
corrida.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011.
- Sin señal (3+ días): Osman t.3/t.4, Dicker Baltimore, Minix, Delany M5-014,
  Thorogood Marlow, Book Lovers, Coyle (16/08), Heap House M5-007 (21/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014), M5-022
  *Ciudades de papel* (Green, YA), M5-008 *Una Mujer Rebelde* (riesgo "ya la
  vi" Netflix), M5-009 *Alice: Return to Wonderland* (fantasía bookish, PERO
  re-catalogación de agosto la marca "no visto" — confirmar que sigue en el
  estante antes de ofrecerla). Evitar M6, M5-037/038, Fitzek M5-003/010.
- Banco NUEVO (quedan pocos): resto de TJ Klune (*Somewhere Beyond the Sea*,
  secuela de la Casa, ed. española 2025 — verificar stock), Backman *Un hombre
  llamado Ove* (riesgo "ya la vi", peli 2022), Haig (revisar stock antes).
  Usado 22/08: Baldree *El café de las leyendas* (título real en español —
  el banco tenía "Leyendas y lattes" mal, era traducción mía sin verificar).
  Si acierta: precuela *Bookshops & Bonedust* y *Brigands & Breadknives*
  (mismo mundo, otros protagonistas) quedan como próximos candidatos de
  la veta.

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco: Piranesi,
Un verdor terrible, El curioso incidente del perro a medianoche, Recursion.
27/07 ACIERTO PLENO: Haig (Sofi). Weir sin veredicto aún.

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
- **🔇 RACHA MUDA (sin voto, aunque con señal parcial): 8 fichas sin voto
  suyo desde Holiday (02/08)** — Rovelli Orden del Tiempo, Rojas Estapé,
  vuelo-ebooks (549s dwell, cero voto), Albom, Brewer 20/08, Nestor 21/08,
  ahora Raspall 22/08. Único cambio real: Nestor SÍ tuvo click+visita
  (21/08 21:43, con el push adelantado a 17:30) — primera interacción
  registrada desde Holiday, aunque sin dwell ni voto todavía. El cambio de
  horario parece haber movido el click; el botón de veredicto sigue sin
  moverse. **Si Raspall (22/08) tampoco consigue ni click, ahí sí reducir
  a 2 botones (sí/no) como plan de respaldo — ya se probaron horario y
  bloque explícito, falta simplificar el CTA en sí.**
- Astronomía en pausa: quedan L5-024 Hoyle, L5-021 Whipple. Rovelli
  identitario: si Orden del Tiempo acierta, próximo Helgoland. Estoicismo
  confirmado — banco: Séneca Cartas a Lucilio.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y contra
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO es confiable
para Sofi (Kindle paralelo); para Andy sí. **Google Play devuelve 403 a
curl/WebFetch en CUALQUIER ficha, incluso con id válido (limitación del
entorno, no link roto)** — verificar por búsqueda cruzada título+autor+narrador
antes de linkear. Buscalibre: siempre `buscalibre.uy/libros/search/?q=…`.

## 🆕 Banco NUEVO — Andy (reponer si <5)
Astronomía (pausa): Katie Mack, Sean Carroll. Neurociencia: Sapolsky
*Behave*, Walker *Why We Sleep*, Anil Seth. Mindfulness: Thich Nhat Hanh,
Tolle, Pema Chödrön, Kabat-Zinn. Oriental nivel 2: *Tao Te Ching*, Alan
Watts, Suzuki, *Bhagavad Gita*. Psicología positiva: Csikszentmihalyi
*Flow*, Haidt, Seligman. Cuerpo: Nestor *Breath* usado 21/08 (esperar
feedback). Hábitos (veta abierta 20/08 con Brewer, sin confirmar): su
*The Craving Mind* y *The Hunger Habit*, ninguno en casa — candidatos
naturales si Brewer acierta.

## 🔁 Banco REDESCUB — Andy
Usado 22/08: L4-025 *Calmar la mente* (Raspall). L4-028 usado 20/08,
L4-026 usado 05/08. Próxima prioridad: L4-010 *Zen tiro con arco*, L4-014
*Doors of Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art of
Happiness*, L4-022 *The Boy, the Mole...*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 23/08, régimen diario)
Hoy (22/08) Andy tuvo redescub y Sofi nuevo → **mañana se invierte: Andy
nuevo, Sofi redescub**. Prioridad de lectura del feedback: (1) ¿votó Andy
algo de Brewer/Nestor/Raspall, o sigue mudo pese al click en Nestor? Si
sigue sin voto en NINGUNA de las tres, ahí sí aplicar el plan de dos
botones (sí/no) que quedó pendiente; (2) ¿qué dijo Sofi de Klune-Puerta de
los susurros (20/08), Heap House (21/08) o El café de las leyendas
(22/08) — tres fichas de la veta fantasía sin ninguna señal todavía? El
primer voto que llegue de las tres decide si la veta sigue siendo Klune
puntual o fantasía cálida en general. Seguir sin señal: Coyle (16/08),
Delany M5-014, Rovelli 04/08, Rojas 05/08, Thorogood, vuelo-ebooks.

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
