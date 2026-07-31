# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos. Sofi corre muy por encima de nuevo
(guardia obliga, ver abajo); Andy cerca del target.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, personal según su
perfil y feedback. Entre las dos del día: un NUEVO y uno DE LA BIBLIOTECA,
alternando cada día quién recibe cuál. Pushes ~12:30 (o ≥75 min después
de la corrida si corre tarde), personales: `to:"Andy"`/`to:"Sofi"`. Las
fichas `todos` cuentan para ambos y no generan una segunda ficha ese día.
- **31/07**: `sync/engagement.json` sin eventos nuevos desde 29/07 22:15
  UTC (ni veredicto de Osman t.4/Eagleman, ni respuesta a la micro-
  pregunta de estante de Sofi) — nada que procesar. Guardia Máxima de
  Sofi sigue activa → **nuevo** otra vez para ella: **Emily Henry, *Book
  Lovers: Amor entre libros*** (3ª veta pedida 24/07, romance/emocional
  final feliz; agente literaria bookish + humor, sin melodrama). Andy →
  **redescubrimiento**: **Asimov, *Of Time and Space and Other Things***
  (L5-026, astronomía, ensayos cortos). Honestidad en Asimov: sin citas
  verificables (descatalogado) → se describió contenido real de 5
  ensayos en vez de inventar frases, y se marcó explícito que el censo
  científico de 1963-65 quedó viejo. Ambos sin match en catálogo+histórico.
- 30/07: ambos recibieron NUEVO (desvío deliberado) — Osman t.4 y
  Eagleman.

## 🚨🚨 CRÍTICO — push de Andy INVÁLIDO desde el 30/07
`subscription.json`: **Andy** = `status:"invalid"` (HTTP 410, FCM
muerto). Su push del 30/07 (Eagleman) nunca llegó (`send_log.json`
`failed 410`, `queue.json` quedó `expired`). Encolé el de hoy igual
(norma del comando) pero no va a llegarle hasta re-suscribirse en
`engage/setup.html`. Sofi sigue `active` (Apple Web Push). **Repetir
esto en cada reporte** hasta que `Andy` vuelva a `active` — explica la
ausencia total de señal de sus últimas fichas, no desinterés real.

### Sofi (pareja del dueño) — vetas confirmadas
Salas: **sala King** (R4+R5), **salón del crimen** (M5), **rincón
Valeria** (M6, ver guardia — quemado). Vetas de NUEVO: (1) cozy grupal —
Osman, **2/2 `lo_quiero`**, banco AGOTADO (t.1-4 usados); (2) oscuro/
thriller, calibrado "justo así" con Dicker, no escalar; (3) romance/
emocional — recién abierta hoy (Henry, *Book Lovers*), sin señal aún.

**🚨 GUARDIA MÁXIMA (desde 29/07, leer antes de CUALQUIER redescub para
Sofi):** 4 de 5 redescub reales dieron `ya_lo_lei` (King R5-018,
Katzenbach M5-024, Carlisle M5-012, Benavent M6-001). `read_status` NO
predice qué leyó — es completista, devora sagas enteras. **No armar más
redescub a ciegas.** Micro-pregunta pendiente desde 30/07
(`rec-estante-sin-leer`, ficha Osman t.4) — hasta respuesta, seguir con
NUEVO aunque rompa la mezcla 2:1.
- Consumidos: Osman t.1-4 (2 lo_quiero, 2 sin veredicto), Dicker Harry
  Quebert (acierto pleno), Hill *traje del muerto* (acierto); King
  R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent M6-001 (ya
  leídos). 31/07: Henry *Book Lovers*. Pendientes: Dicker *Baltimore*
  (21/07), Minix (23/07, 0 clicks), *bala perdida* (29/07), Osman t.4 y
  *Book Lovers* (sin señal aún).
- Banco redescub (SOLO tras confirmar con micro-pregunta): M5-014
  *Elemental, querida lectora*, M5-016 *Un cadáver en Baker Street*
  (Delany), M5-011 *Blanca Navidad y café negro* (Coyle), M5-003/M5-010
  (Fitzek). Evitar M5-013/M5-015 (Adams), M6 completo (sospechoso).
- Banco NUEVO: cozy Osman agotado; romance recién abierta — si prende,
  seguir con Henry *People We Meet on Vacation*/*Happy Place*/*Beach
  Read* o Taylor Jenkins Reid.

### Todos (cruces Sofi × Andy)
Fórmula: enganche narrativo/misterio (ella) × ciencia/sentido/positividad
(él). Banco: Piranesi (Clarke), Un verdor terrible (Labatut), El curioso
incidente del perro a medianoche, Recursion (Crouch). 27/07 ACIERTO PLENO:
Haig *Biblioteca de la Medianoche* (Sofi lo_quiero+love). Weir *Hail
Mary* (25/07) sin veredicto.

## 👤 Andy (el dueño) — datos duros
Libros = **estante L4**. Gustos: wellness, autosuperación, positividad,
astronomía, neurociencia, espiritualidad oriental, finanzas, fábulas.
Idioma indistinto. Perfil fino: transformación práctica en narrativa o
ciencia, nunca sermón; libros cortos y releíbles. Astronomía (L5) = veta
más consistente: ACIERTO Rovelli/Cosmos. Regla: autor identitario/
segunda línea > clásico consagrado de aeropuerto (Frankl y Meditaciones
fallaron `ya_lo_lei`; Bach x2 acertó alto). CONTEXTO: lee *El monje que
vendió su Ferrari* (Sharma) — no recomendarlo. Julio=invierno Montevideo.
- Consumidos: Rovelli, Bach *Ilusiones* (ACIERTOS PLENOS); Frankl,
  Meditaciones (`ya_lo_lei`); Cosmos (redescub, acierto); Bach *Jonathan
  Livingston Seagull* (redescub, acierto). 31/07: Asimov *Of Time and
  Space* (L5-026). Pendientes: Housel, Pollan (23/07), Siddhartha, Bucay
  *Camino Felicidad*, Hawking/Tyson (dwell alto, sin voto), Gibran
  (29/07, sin señal), Eagleman (30/07 — push nunca llegó, no es
  desinterés, ver alerta arriba), Weir (`todos`, sin voto).
- Patrón dwell-sin-voto (Hawking/Tyson/Gibran) en 3+ fichas; el CTA de
  "primera impresión" (probado 30/07) sin datos porque el push falló —
  no sacar conclusiones hasta que Andy se re-suscriba.
- Próximo redescub astronomía: L5-019 (último de la lista corta —
  reponer banco cuando se use).

## 🛡️ Guardia (errores que no se cometen)
Antes de todo "nuevo": título Y autor contra catálogo completo (sin
tildes) y contra `recommended.json`. Campo `to` obligatorio en toda
entrada `andy`/`sofi` de `queue.json` (se omite solo con `todos`).
Revisar SIEMPRE `subscription.json` al procesar feedback — `invalid`
explica ausencia total de señal, no desinterés (ver alerta arriba).
`R4-015` (King) tiene tag `astronomy` erróneo en el catálogo.
`read_status` de enrichment no es confiable solo — cruzar con feedback
previo (4/5 redescub reales de Sofi fallaron por esto). Corrida tarde
(>12:30): `send_at` ≥75 min después — piso 11:00, techo 21:00.

## 🆕 Banco candidatos NUEVOS — Andy (reponer si quedan <5)
Astronomía: Katie Mack *The End of Everything*, Sean Carroll. Estoicismo:
Holiday *El Obstáculo es el Camino*, Séneca *Cartas a Lucilio*.
Neurociencia (Eagleman usado): Kahneman, Sapolsky *Behave*, Walker *Why
We Sleep*, Anil Seth *Being You*. Mindfulness: Thich Nhat Hanh, Tolle,
Pema Chödrön, Kabat-Zinn. Oriental nivel 2: *Tao Te Ching*, Watts *The
Way of Zen*, Suzuki, *Bhagavad Gita*. Psicología positiva:
Csikszentmihalyi *Flow*, Haidt, Seligman. Cuerpo: Nestor *Breath*.
Fábulas: Albom *Tuesdays with Morrie*, Bucay *Camino de la
Autodependencia* (falta en M5).

## 🔁 Banco candidatos REDESCUBRIMIENTOS — Andy
L4-010 *Zen en el arte del tiro con arco*, L4-014 *Doors of Perception*
(con L4-005 Leary), L4-021 *Art of Happiness*, L4-022 *The Boy, the
Mole...*, L5-019 *La Vía Láctea* (Bok, único que queda de la lista corta).

## 🔭 Qué mirar (próxima corrida)
Prioridad #1: chequear `subscription.json` — ¿sigue `Andy` en `invalid`?
Repetirlo en el reporte hasta que se resuelva. Sin cambios: Weir
(`todos`, 25/07), Pollan (Andy, 23/07), Baltimore (Sofi, 21/07), Minix
(0 clicks). Primeras señales a buscar: Osman t.4 + micro-pregunta de
estante (Sofi), Eagleman (Andy, sin señal ≠ desinterés por el push
roto), Asimov y Book Lovers (ambos, 31/07). Alternancia 01/08: si la
micro-pregunta de Sofi trajo respuesta, retomar par normal con datos
reales; si sigue muda, nuevo para ella (banco romance) y redescub para
Andy (L5-019, reponer banco después).

## 🎬 PISTA SEMANAL DE CINE + 🧳 piezas fuera del ciclo
Cine: una vez/semana, `audience:"todos"`, `kind:"cine"`, viernes ~19:00
-03:00 (excepción a 1 push/día). No cuenta MEZCLA ni par del día. Perfiles
completos en corridas 27-28/07 (resumen: Sofi evita gore/sexo explícito/
violencia a niños-animales, subtítulos siempre; Andy solo evita "triste",
nunca doblado). Función Nº 1 `2026-07-31-sala-01` sin veredicto aún.
`kind:"viaje"` tampoco cuenta MEZCLA/par. Curaduría (Andy, 24/07, vale
para todo): icónico/hermoso/importante de verdad > relleno. Cosmético:
`recs/index.html` etiqueta "Nuevo" todo `kind` que no sea
`redescubrimiento` — infraestructura, NO TOCAR.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.
