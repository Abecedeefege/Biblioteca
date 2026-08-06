# Perfil de gustos — recomendador semanal de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — CAMBIO 05/08 (pedido en vivo de Andy): de diario a semanal
Desde HOY, una sola ficha de libro POR SEMANA, domingos ~17:30 -03:00
(antes: dos por día, una para cada uno). Sigue siendo personal, alternando
el destinatario cada domingo entre Andy y Sofi (mirar el último libro en
`recommended.json` y alternar `audience`). Nuevo/redescub también sigue
alternando, pero mirando las últimas 2-3 fichas DE ESA PERSONA, no la
semana calendario. El resto de los días de la semana, la corrida es un
no-op corto (Gate de día en `.claude/commands/recomendacion.md`): solo
procesa feedback liviano, no genera ficha ni push. Cine/series NO cambia
(sigue viernes ~19:00, `todos`, sin tocar). Próximo turno: como hoy
(05/08) salieron fichas para los dos bajo el régimen viejo, el último
libro en el log es el de Sofi (Klune) → el domingo que viene le toca a
Andy, salvo que el orden real de guardado diga lo contrario (chequear).
- **05/08** (corrida 16:17 -03:00, tarde → push 18:30, último día del
  régimen diario): Andy → **redescub**
  L4-026 Rojas Estapé, *Cómo hacer que te pasen cosas buenas* — rota
  fuera de astronomía/estoicismo hacia wellness+neuro, prioriza compra
  reciente sin señal de lectura. Sofi → **nuevo** TJ Klune, *La casa en
  el mar más azul* — sigue el cambio fuerte de ayer (fuera de misterio),
  fantasía cálida de familia-encontrada + final feliz. Se evaluó Haig
  identitario primero (*Los Humanos*/*Cómo detener el tiempo*) pero
  AMBOS agotados en buscalibre.uy — revisar stock más adelante. Sin
  feedback nuevo: cero eventos en `sync/engagement.json` desde el
  cutoff anterior (03/08 22:19) — ni Rovelli ni Alaska (enviados 04/08
  18:47) tienen click/page_visit a ~24hs, y esta vez el silencio
  alcanza también a Andy. Puede ser solo cuestión de tiempo; si en la
  corrida de mañana SIGUE en cero para todo (Rovelli, Alaska Y las
  fichas de hoy), dejar de tratarlo como tema de contenido — preguntar
  directo (nota/micro-pregunta) si hay que bajar cadencia o mover el
  horario (probar 11:00-12:30).
- **04/08**: Andy → nuevo Rovelli *El orden del tiempo* (identitario,
  sin voto). Sofi → redescub Green *Buscando a Alaska* (CAMBIO FUERTE,
  sin voto).
- **03/08**: Andy → redescub Holiday *La Llamada del Coraje* (clickeó,
  sin voto). Sofi → nuevo Thorogood *Marlow* (sin click).

## 🏆 Andy: identitario le gana al riesgo de fama (x3, confirmado 03/08)
Bach (Ilusiones→Gaviota) y Holiday (Obstáculo `lo_quiero` pese a ser el
estoico más vendido que existe) confirman: autor ya-en-casa gana sobre
clásico consagrado sin dueño, aunque ambos sean masivos. Regla: repetir
con cualquier autor que tenga lo_quiero/me_tienta reciente y otro título
propio en el estante — aplicado 04/08 con Rovelli.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id
de siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json`
cada corrida, no cachear de memoria. ✅ Suscripción — Andy y Sofi
`active`, sin caídas (revisado 05/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5), **salón del crimen** (M5), **rincón
Valeria** (M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero` — banco
AGOTADO. Oscuro/thriller: Dicker `lo_quiero`, King `ya_lo_lei`, calibrado
"justo así". Romance: Henry x2, ambos con riesgo/miss — **descartada**.
04/08: primera incursión en YA/literario (Buscando a Alaska), veta nunca
antes probada.

**🚨 GUARDIA MÁXIMA (actualizada 04/08):** 4/5 redescub + 1 nuevo dieron
`ya_lo_lei` (King, Katzenbach, Carlisle, Benavent, Henry) — todos
autores/sagas masivos. + 3 fichas seguidas sin abrir (ver hallazgo
arriba). Cambio de veta aplicado hoy; misterio/cozy en pausa hasta ver
si Alaska revierte la racha muda.
- Quemados: Osman t.1-2 (banco agotado), Dicker Harry Quebert, Hill
  (aciertos); King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent
  M6-001-009 (saga completa), Henry (ambos libros).
- Pendientes sin señal (3+ días, ninguna apertura): Osman t.3/t.4, Dicker
  Baltimore, Minix, Delany M5-014, Thorogood Marlow, Book Lovers.
- Banco redescub (misterio en pausa, usar solo si Alaska funciona):
  M5-016 Delany libro 2, M5-011 Coyle. Evitar M6 completo, M5-037/038
  (Carlisle/Adams, autores quemados), Fitzek M5-003/M5-010 (mismo riesgo
  bestseller).
- Banco fuera de misterio (veta nueva 04-05/08): M5-022 *Ciudades de
  papel* (otro John Green, YA), M5-008 *Una Mujer Rebelde* (Bridgerton
  libro 3, riesgo alto "ya la vi" por Netflix). Fantasía cálida (nueva
  05/08 con Klune): sin más candidatos todavía, investigar con WebSearch
  la próxima vez que toque esta veta (ej. Backman *Un hombre llamado
  Ove* — confirmado en stock en buscalibre.uy, ~1000 UYU, pero riesgo de
  "ya la vi" por la peli de Tom Hanks 2022). Reponer banco
  literario/emocional si Alaska o Klune funcionan.
- Haig identitario (tras Midnight Library ACIERTO PLENO 27/07): sus dos
  siguientes novelas en español, *Los Humanos* y *Cómo detener el
  tiempo*, están AGOTADAS en buscalibre.uy (verificado 05/08, ambas "no
  hay stock disponible") — no descartar el autor, solo revisar stock en
  corridas futuras antes de armar la ficha.

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco:
Piranesi, Un verdor terrible, El curioso incidente del perro a
medianoche, Recursion. 27/07 ACIERTO PLENO: Haig (Sofi). Weir sin
veredicto aún.

## 👤 Andy — datos duros
Estante L4 (28 libros + 4 nuevos de agosto). Gustos: wellness,
autosuperación, positividad, astronomía, neurociencia, espiritualidad
oriental, finanzas, fábulas. Idioma indistinto. Regla confirmada x3:
autor identitario/ya-en-casa > clásico consagrado sin dueño (Bach x2,
Holiday x2, Rovelli 04/08 pendiente de voto).
- Aciertos: Rovelli Siete breves lecciones, Bach Ilusiones, Holiday
  Obstáculo (plenos); Cosmos, Bach Gaviota (redescub, aciertos).
  `ya_lo_lei`: Frankl, Meditaciones (clásicos sin dueño previo — patrón
  resuelto). Sin veredicto aún: Asimov, Bok, Housel, Pollan, Siddhartha,
  Bucay, Hawking, Tyson, Eagleman, Gibran, Holiday Llamada del Coraje
  (clickeó 03/08), Rovelli Orden del Tiempo (04/08), Rojas Estapé Cómo
  hacer que te pasen cosas buenas (05/08) — dwell alto en varios, sin
  voto; seguir vigilando.
- Astronomía en pausa (no agotada): quedan L5-024 Hoyle, L5-021 Whipple.
- Estoicismo confirmado — banco: Séneca Cartas a Lucilio (riesgo tipo
  Meditaciones, tratar con la misma honestidad).
- Rovelli identitario: agotado el título más directo (Orden del Tiempo).
  Si también acierta, próximo Rovelli: Helgoland, Qué es la ciencia —
  antes de volver a Holiday/Bach por cuarta vez.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO es
confiable para Sofi (Kindle paralelo); para Andy sí ha sido consistente.

## 🆕 Banco NUEVO — Andy (reponer si <5)
Astronomía (pausa): Katie Mack, Sean Carroll. Neurociencia (Eagleman
usado, sin veredicto): Sapolsky *Behave*, Walker *Why We Sleep*, Anil
Seth. Mindfulness: Thich Nhat Hanh, Tolle, Pema Chödrön, Kabat-Zinn.
Oriental nivel 2: *Tao Te Ching*, Alan Watts *The Way of Zen*, Suzuki,
*Bhagavad Gita*. Psicología positiva: Csikszentmihalyi *Flow*, Haidt,
Seligman. Cuerpo: Nestor *Breath*. Fábulas: Albom.

## 🔁 Banco REDESCUB — Andy
PRIORIDAD (compra reciente, sin señal de lectura): L4-025 *Calmar la
mente*, L4-028 *Deshacer la ansiedad* (aún envuelto en film) — L4-026
(Rojas Estapé) usado 05/08. Banco viejo: L4-010 *Zen tiro con arco*,
L4-014 *Doors of Perception*, L4-016 *Budismo para principiantes*,
L4-021 *Art of Happiness*, L4-022 *The Boy, the Mole...*. Astro (pausa):
L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida)
Confirmar suscripción activa. PRIORIDAD: ¿sigue en cero `sync/engagement.json`
para Rovelli/Alaska (04/08) Y las fichas de hoy (05/08)? Si sí, dejar de
tratarlo como tema de contenido — probar horario más temprano o
preguntar directo por nota/micro-pregunta si hay que bajar la cadencia,
para los dos lectores, no solo Sofi. Si aparecen eventos, seguir cada
hilo normal: Rovelli (¿tercera confirmación identitaria?), Llamada del
Coraje (clickeó 03/08, sin voto), Rojas Estapé (primer wellness/neuro
puro desde Eagleman), Klune (¿la fantasía cálida funciona donde
misterio no?). Thorogood sigue sin señal. Sin cambios hace semanas:
Weir (`todos`), Pollan, Baltimore, Minix.

## 🎬 CINE + 🧳 viaje (fuera del ciclo, no cuentan mezcla/par)
Cine: 1/semana, `audience:"todos"`, `kind:"cine"`, viernes ~19:00. Sofi
evita gore/violencia explícita, subtítulos siempre; Andy evita "triste",
nunca doblado. Función Nº1: OMitB "ya la vimos" ambos; Arrival "no va" a
Sofi (ciencia dura sin trama humana, no repetir ese ángulo con ella);
Severance "me tienta" Andy — candidata fuerte Nº2. Curaduría:
icónico/importante > relleno.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch —
cero mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
