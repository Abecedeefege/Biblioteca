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
**⚠️ Nota de mantenimiento (21/08):** `.claude/commands/recomendacion.md`
sigue describiendo el régimen SEMANAL del 05/08 (Gate de día domingo) —
quedó desactualizado al restablecerse el diario el 20/08. Esta sección de
PROFILE manda hasta que alguien sincronice el comando.
- **21/08 (viernes, ACTIVA)**: 0 eventos nuevos desde el cutoff
  (`2026-08-19T11:02:50.116Z`) — ni Brewer ni Klune-susurros (20/08)
  tienen todavía clicks ni votos, sin avanzar el cutoff. Andy venía de
  redescub (Brewer 20/08) → hoy **nuevo**; Sofi venía de nuevo (Klune
  20/08) → hoy **redescub**. Andy: **Nestor, *Respira*** — rota de veta
  (neuro/hábitos ya tocada ayer con Brewer, sin confirmar) hacia
  cuerpo/respiración, nunca antes ofrecida; construida sobre el
  experimento real de Stanford (10 días boca/10 días nariz), la
  "respiración de resonancia" 5,5s/5,5s (con respirador animado en la
  página) y comparación boca-vs-nariz. Controversia científica (Sam Kean,
  Kate Womersley) declarada de frente. Precio/stock verificados en vivo:
  845 UYU (50% off, "última unidad"). Audiolibro ES en Play Books SÍ
  existe (voz IA) → linkeado. Sofi: **Carey, *Los secretos de Heap
  House*** (M5-007, redescub) — puente deliberado hacia fantasía gótica
  ya que el misterio/cozy sigue en pausa (Guardia Máxima) y no hay libro
  propio en su veta viva (Klune) todavía en el catálogo físico;
  experimento para separar "fantasía en general" de "tono cálido
  específico de Klune". Declarado de frente que Goodreads lo etiqueta
  "Horror" pero es gótico-whimsical estilo Tim Burton/Gorey, SIN gore
  (verificado cruzando NPR + Anika Entre Libros). Interacción: objetos
  que susurran nombres (mecánica central del libro). **EXPERIMENTO DE
  HORARIO para Andy**: push a las 17:30 -03:00 en vez de las ~19:00
  habituales (Sofi se mantiene en 19:00), respondiendo al plan trazado
  ayer ante su racha de silencio — sin tocar el contrato de 5 botones.
  Pushes `2026-08-21-rec-andy` (17:30) y `-rec-sofi` (19:00), quedan
  `pending` en la cola para el dispatcher de GitHub Actions.
- **20/08**: Andy → Brewer *Deshacer la ansiedad* (redescub L4-028). Sofi →
  Klune *Bajo la puerta de los susurros* (nuevo, identitario). Ninguno de
  los dos tiene feedback todavía (24h+, cero clicks).
- **16/08→19/08**: Coyle *Blanca Navidad y café negro* (Sofi, redescub),
  push OK. 17-19/08 no-op, sin señal nueva relevante.
- **09/08→15/08**: Albom (Andy, nuevo), respuesta a un pedido de "algo como
  El Principito". 10/08 **rec-nota PRIORIDAD MÁXIMA vigente**: linkear
  audiolibro de Google Play Books en toda ficha si existe, sin inventar.

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
general" de "el tono tierno específico de Klune" (ver feedback próxima
corrida).
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
  llamado Ove* (riesgo "ya la vi", peli 2022), Baldree *Leyendas y lattes*,
  Haig (revisar stock antes).

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
- **🔇 RACHA MUDA: 6 fichas sin voto suyo desde Holiday (02/08)** — Rovelli
  Orden del Tiempo, Rojas Estapé, vuelo-ebooks (549s de dwell, cero voto),
  Albom (leyó la ficha entera dos veces, sin votar), Brewer 20/08 (sin
  clicks aún, <24h). ACCIÓN 20/08: bloque explícito pidiéndole un toque.
  ACCIÓN 21/08 (Respira): se probó el cambio de horario primero (push
  17:30 en vez de ~19:00) en vez de tocar los botones, para no romper el
  contrato de 5 valores de "nuevo" sin evidencia de que el problema sea
  el botón y no la hora/el contenido. **Si sigue mudo la próxima vez:
  ahí sí reducir a 2 botones (sí/no), como plan de respaldo.**
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
PRIORIDAD: L4-025 *Calmar la mente* (Raspall) — L4-028 usado 20/08,
L4-026 usado 05/08. Después: L4-010 *Zen tiro con arco*, L4-014 *Doors of
Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art of
Happiness*, L4-022 *The Boy, the Mole...*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 22/08, régimen diario)
Hoy (21/08) Andy tuvo nuevo y Sofi redescub → **mañana se invierte: Andy
redescub, Sofi nuevo**. Prioridad de lectura del feedback: (1) ¿votó Andy
Respira, o el cambio de horario (17:30) tampoco alcanzó? Si sigue mudo,
ahí sí aplicar el plan de dos botones; (2) ¿qué dijo Sofi de Klune-Puerta
de los susurros (20/08, todavía sin señal) y de Heap House (21/08)? Si
Heap House sale bien (me_tienta o mejor), fantasía gótica queda como
segunda veta viva además de Klune; si sale `no_me_va`, el tono cálido
específico de Klune era la clave, no la fantasía en general. Seguir sin
señal: Coyle (16/08), Delany M5-014, Rovelli 04/08, Rojas 05/08,
Thorogood, vuelo-ebooks.

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
