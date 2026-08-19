# Perfil de gustos — recomendador semanal de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN — semanal desde 05/08 (pedido en vivo de Andy)
Una sola ficha de libro POR SEMANA, domingos ~17:30 -03:00, alternando el
destinatario cada domingo entre Andy y Sofi (mirar el último libro en
`recommended.json` y alternar `audience`; nuevo/redescub también alterna,
mirando las últimas 2-3 fichas DE ESA PERSONA). El resto de la semana la
corrida es no-op corto (Gate de día): solo procesa feedback, sin ficha ni
push. Cine/series NO cambia (viernes ~19:00, `todos`). Último libro en el
log ahora es el de Andy (Albom, 09/08) → el próximo domingo (16/08) le
toca a Sofi.
- **16/08 (domingo, ACTIVA)**: sin eventos nuevos desde el cutoff del
  15/08 (09:59:52 UTC), cutoff sin avanzar. Turno de Sofi (Klune 05/08 fue
  su último 'nuevo' individual → hoy redescub). Elegida *Blanca Navidad y
  café negro* de Cleo Coyle (M5-011, cozy navideño en una cafetería de
  Greenwich Village) — autora NUNCA antes recomendada, cambio deliberado
  tras la racha de "ya_lo_lei" con nombres masivos (King, Katzenbach,
  Carlisle, Benavent) y sin señal aún sobre Delany (M5-014, 02/08).
  Guardia verificada contra catálogo y `recommended.json`: sin
  coincidencias. Honestidad: se avisa en la ficha que la edición española
  salta del libro 2 al 8 de la serie original, sin afectar el caso
  autoconclusivo; no se usaron citas inventadas (sin citas textuales
  verificables — se usó, atribuida, la opinión de una reseñadora).
  Audiolibro en Google Play Books buscado sin resultado → no se linkeó.
  Push `2026-08-16-rec-sofi`, 17:30 -03:00. Próximo domingo (23/08) le
  toca a Andy.
- **17/08 (lunes, no-op)**: Gate de día → no es domingo. 7 eventos nuevos
  desde el cutoff, todos pasivos (page_visit/dwell de Andy en index.html y
  en la ficha de Klune de Sofi, sin veredicto/reacción/nota) — sin señal
  accionable, PROFILE sin cambios de fondo. Cutoff avanzado a
  2026-08-17T12:29:50.970Z. Cola y send_log sin pendientes.
- **18/08 (martes, no-op)**: Gate de día → no es domingo. 0 eventos nuevos
  desde el cutoff (17/08); cutoff sin avanzar. Cola y send_log sin
  pendientes (push de Coyle-Sofi salió OK 16/08, sent_at 20:42 UTC).
- **19/08 (miércoles, no-op)**: Gate de día → no es domingo. 13 eventos
  nuevos desde el cutoff, todos pasivos: dwell de Andy en la ficha de Klune
  de Sofi (64s/94%, sin voto — visita cruzada, no señal de perfil) + 3
  page_visit/dwell de Andy en index.html + 8 eventos de un dispositivo
  nuevo "C-test" (onboarding/quiz-skip/push-optin + dwell en index.html) —
  no es Andy ni Sofi, sin acción; se sumó a `subscription.json` hoy
  08:43 UTC como tercer device activo, fuera de mi territorio (lectura
  únicamente). Sin veredicto/reacción/nota accionable. Cutoff avanzado a
  2026-08-19T11:02:50.116Z. Cola sin pendientes propios (los ids
  `c-test-*` son ajenos). Sin ficha ni push hoy.
- **09/08→15/08**: Domingo 09/08 (última ficha activa previa): Albom *Las
  cinco personas que encontrarás en el cielo* (Andy, nuevo), respuesta
  directa al rec-nota del 07/08 pidiendo "algo como el Principito".
  Verificado sin match en catálogo/log; dos citas verificadas + una
  traducida con aclaración; push `2026-08-09-rec-andy` 17:30. 10/08:
  **rec-nota PRIORIDAD MÁXIMA** pidió (1) política permanente de linkear
  audiolibro en Google Play Books en toda ficha de libro nuevo (redescub
  también si aplica) si existe, sin inventar si no se encuentra — YA
  APLICADA de acá en más — y (2) push puntual con el audiolibro de Albom,
  enviado 11/08 (`2026-08-11-rec-andy-audio`, narrador Roger Vidal,
  clickeado esa noche). 12/08-15/08: no-op sin señal nueva (Gate de día);
  cutoff avanzó a 2026-08-15T09:59:52.469Z tras una revisita muda de Andy
  a la ficha de Albom. Cola y send_log sin pendientes; suscripción
  Andy/Sofi `active`.
- **Régimen diario, últimos días (hasta 05/08)**: Klune (Sofi, 05/08)
  `me_tienta`+`love` — primera señal positiva en fantasía cálida. Rojas
  Estapé, Rovelli *Orden del Tiempo*, Green *Buscando a Alaska*, Holiday
  *Llamada del Coraje* (03-05/08) sin voto. Haig *Los Humanos*/*Cómo
  detener el tiempo* agotados en buscalibre.uy.

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
autores/sagas masivos. Cambio de veta aplicado; misterio/cozy en pausa
hasta ver si Alaska/Klune revierten la racha muda (Klune ya dio señal
positiva, ver log arriba).
- Quemados: Osman t.1-2 (agotado), Dicker Harry Quebert, Hill (aciertos);
  King R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent M6-001-009,
  Henry (ambos libros).
- Pendientes sin señal (3+ días): Osman t.3/t.4, Dicker Baltimore, Minix,
  Delany M5-014, Thorogood Marlow, Book Lovers.
- Banco redescub (misterio en pausa): M5-016 Delany libro 2 (esperar señal
  de M5-014 antes de usarlo). Coyle M5-011 usado 16/08, sale del banco.
  Evitar M6, M5-037/038 (autores quemados), Fitzek M5-003/M5-010.
- Fuera de misterio: M5-022 *Ciudades de papel* (Green, YA), M5-008 *Una
  Mujer Rebelde* (riesgo "ya la vi" Netflix). Fantasía cálida: investigar
  más candidatos (ej. Backman *Un hombre llamado Ove*, en stock, riesgo
  "ya la vi" por la peli 2022).
- Haig: *Los Humanos*/*Cómo detener el tiempo* AGOTADOS en buscalibre.uy
  (verificado 05/08) — no descartar, solo revisar stock antes.

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco:
Piranesi, Un verdor terrible, El curioso incidente del perro a
medianoche, Recursion. 27/07 ACIERTO PLENO: Haig (Sofi). Weir sin
veredicto aún.

## 👤 Andy — datos duros
Estante L4 (28 libros + 5 nuevos de agosto). Gustos: wellness,
autosuperación, positividad, astronomía, neurociencia, espiritualidad
oriental, finanzas, fábulas. Idioma indistinto. Regla confirmada x3
(Bach Ilusiones→Gaviota, Holiday Obstáculo pese a ser masivo): autor
identitario/ya-en-casa > clásico consagrado sin dueño — repetir con
cualquier autor que tenga lo_quiero/me_tienta y otro título en el
estante. Fábula corta (Bach, Hesse, ahora Albom) es su combo más seguro
cuando pide algo explícito.
- Aciertos: Rovelli Siete breves lecciones, Bach Ilusiones, Holiday
  Obstáculo (plenos); Cosmos, Bach Gaviota (redescub, aciertos).
  `ya_lo_lei`: Frankl, Meditaciones (clásicos sin dueño — patrón resuelto).
  Sin veredicto aún (racha muda, 5+ días varios): Asimov, Bok, Housel,
  Pollan, Siddhartha, Bucay, Hawking, Tyson, Eagleman, Gibran, Llamada
  del Coraje (03/08), Rovelli Orden del Tiempo (04/08), Rojas Estapé
  (05/08), Albom (09/08, hoy) — si sigue así, simplificar el CTA o
  preguntar directo.
- Astronomía en pausa: quedan L5-024 Hoyle, L5-021 Whipple. Rovelli
  identitario: si Orden del Tiempo acierta, próximo Helgoland.
  Estoicismo confirmado — banco: Séneca Cartas a Lucilio.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y
`recommended.json`. Campo `to` obligatorio en `queue.json`. Revisar
`subscription.json` cada corrida. `read_status` de enrichment NO es
confiable para Sofi (Kindle paralelo); para Andy sí ha sido consistente.

## 🆕 Banco NUEVO — Andy (reponer si <5; Albom usado 09/08, sale del banco)
Astronomía (pausa): Katie Mack, Sean Carroll. Neurociencia (Eagleman
usado): Sapolsky *Behave*, Walker *Why We Sleep*, Anil Seth. Mindfulness:
Thich Nhat Hanh, Tolle, Pema Chödrön, Kabat-Zinn. Oriental nivel 2:
*Tao Te Ching*, Alan Watts *The Way of Zen*, Suzuki, *Bhagavad Gita*.
Psicología positiva: Csikszentmihalyi *Flow*, Haidt, Seligman. Cuerpo:
Nestor *Breath*. Fábula corta (veta confirmada hoy): Coelho (L4-015 ya en
casa, cuenta como redescub) — buscar otro autor de fábula si Albom acierta.

## 🔁 Banco REDESCUB — Andy
PRIORIDAD: L4-025 *Calmar la mente*, L4-028 *Deshacer la ansiedad* — L4-026
(Rojas Estapé) usado 05/08. Viejo: L4-010 *Zen tiro con arco*, L4-014
*Doors of Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art
of Happiness*, L4-022 *The Boy, the Mole...*. Astro: L5-024 Hoyle, L5-021
Whipple. L4-015 *El Alquimista* (Coelho) disponible si se prioriza redescub.

## 🔭 Qué mirar (próxima corrida — domingo 23/08, turno de Andy)
16/08 fue redescub de Sofi (Coyle, M5-011) → 23/08 le toca a Andy;
alternar nuevo/redescub mirando sus últimas 2-3 fichas (última fue
redescub Rojas Estapé 05/08 y antes nuevo Rovelli Orden del Tiempo 04/08
— ver cuál tuvo más reciente antes de decidir). Revisar si llegó feedback
de Coyle (Sofi) antes de tocar de nuevo M5-016 Delany — sin señal de
M5-014 todavía. Revisar si Rovelli (04/08) y Rojas Estapé (05/08) por
fin tuvieron algún evento — 5+ días sin voto en ambos; si sigue así,
simplificar el CTA de veredicto de Andy o preguntar directo. Seguir:
Llamada del Coraje (03/08), Thorogood (Sofi, 03/08), vuelo-compro:*
(06/08, dwell 549s sin voto todavía). Sin cambios hace semanas: Weir
(`todos`), Pollan, Baltimore, Minix, Osman bala perdida/último en morir,
Henry People We Meet.

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
