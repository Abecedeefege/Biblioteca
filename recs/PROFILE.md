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
- **20/08 (jueves, ACTIVA — primer día del régimen diario)**: 0 eventos
  nuevos desde el cutoff (`2026-08-19T11:02:50.116Z`), sin avanzar. Andy
  venía de nuevo (Albom 09/08) → hoy **redescub**; Sofi venía de redescub
  (Coyle 16/08) → hoy **nuevo**. Andy: **L4-028 *Deshacer la ansiedad*
  (Judson Brewer)**, prioridad del banco, sin entrada en enrichment. La
  ficha se armó sobre el TEXTO REAL de su edición (extracto oficial de
  Planeta/Paidós descargado y leído): arranque del cap. 1, anécdota de la
  giardiasis, cita de Jefferson a Adams (1816), contracubierta y sumario.
  Números de eficacia con la letra chica de que son estudios del propio
  equipo. Audiolibro ES en Play Books: NO existe → declarado, sin link
  inventado. Sofi: **Klune, *Bajo la puerta de los susurros*** (nuevo) —
  se sigue su ÚNICA señal positiva reciente (Klune 05/08, me_tienta +
  love), primera vez que se le aplica a ella la regla de autor
  identitario. Trama verificada contra recap y **corregida antes de
  publicar** (los 7 días los da el Gerente semanas después, no al llegar;
  Wallace no vuelve a su estudio, intenta escapar y se cruza con Cameron,
  un Husk). Guardia OK en ambos. Pushes `2026-08-20-rec-andy` y
  `-rec-sofi`, 19:00 -03:00.
- **16/08→19/08**: 16/08 Coyle *Blanca Navidad y café negro* (Sofi,
  redescub M5-011), push OK. 17-19/08 no-op: 20 eventos, todos pasivos
  (dwells de Andy + 8 de un device ajeno "C-test", que entró a
  `subscription.json` el 19/08 — solo lectura, no es Andy ni Sofi).
- **09/08→15/08**: Albom (Andy, nuevo), respuesta al rec-nota que pedía
  "algo como el Principito". 10/08 **rec-nota PRIORIDAD MÁXIMA**: (1)
  política permanente — linkear audiolibro de Google Play Books en toda
  ficha si existe, sin inventar si no aparece (VIGENTE); (2) push puntual
  del audiolibro de Albom, enviado 11/08 y clickeado esa noche.

## 📚 Re-catalogación de agosto (contexto)
M2/M3/M4/M6 pasaron a vitrinas pero los libros siguen fichados con su id de
siempre — no cambia guardia ni book_ref. Re-extraer `/tmp/catalog.json` cada
corrida (437 volúmenes hoy). Suscripción: Andy y Sofi `active` (20/08).

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5), **salón del crimen** (M5), **rincón Valeria**
(M6, quemado). Cozy grupal Osman: 3/3 `lo_quiero`, banco AGOTADO.
Oscuro/thriller: Dicker `lo_quiero`, King `ya_lo_lei`. Romance contemporáneo
(Henry x2): **descartado**. **Fantasía cálida: la única veta con señal viva**
— Klune 05/08 `me_tienta`+`love`; hoy se dobla la apuesta con el mismo autor.
Si *Puerta de los susurros* acierta, Klune queda como su autor identitario →
seguir con su obra y la cozy fantasy vecina (Baldree, Backman).
**🚨 GUARDIA MÁXIMA:** 5 fichas dieron `ya_lo_lei` (King, Katzenbach,
Carlisle, Benavent, Henry) — todos autores/sagas masivos. Misterio/cozy en
pausa hasta ver si la veta Klune sostiene.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill, King R5-018, Katzenbach
  M5-024, Carlisle M5-012, Benavent M6-001-009, Henry (ambos), Coyle M5-011.
- Sin señal (3+ días): Osman t.3/t.4, Dicker Baltimore, Minix, Delany M5-014,
  Thorogood Marlow, Book Lovers, Coyle (16/08).
- Banco redescub: M5-016 Delany libro 2 (esperar señal de M5-014), M5-022
  *Ciudades de papel* (Green, YA), M5-008 *Una Mujer Rebelde* (riesgo "ya la
  vi" Netflix). Evitar M6, M5-037/038, Fitzek M5-003/010.
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
- **🔇 RACHA MUDA: 5 fichas sin voto suyo desde Holiday (02/08)** — Rovelli
  Orden del Tiempo, Rojas Estapé, vuelo-ebooks (549s de dwell, cero voto),
  Albom (leyó la ficha entera dos veces, sin votar). ACCIÓN aplicada el 20/08:
  bloque explícito pidiéndole un toque y ofreciendo la caja de nota si el
  problema es el formato. **Si el 21/08 sigue mudo: reducir el veredicto a DOS
  botones (sí / no) y probar cambio de hora de push.**
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
*Flow*, Haidt, Seligman. Cuerpo: Nestor *Breath*. Hábitos (veta abierta
hoy con Brewer): su *The Craving Mind* y *The Hunger Habit*, ninguno en
casa — candidatos naturales si acierta.

## 🔁 Banco REDESCUB — Andy
PRIORIDAD: L4-025 *Calmar la mente* (Raspall) — L4-028 usado 20/08,
L4-026 usado 05/08. Después: L4-010 *Zen tiro con arco*, L4-014 *Doors of
Perception*, L4-016 *Budismo para principiantes*, L4-021 *Art of
Happiness*, L4-022 *The Boy, the Mole...*, L4-015 *El Alquimista*.
Astro: L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida — 21/08, régimen diario)
Hoy Andy tuvo redescub y Sofi nuevo → **mañana se invierte: Andy nuevo,
Sofi redescub**. Prioridad de lectura del feedback: (1) ¿votó Andy por fin
algo? — si no, aplicar el plan de dos botones; (2) ¿qué dijo Sofi de
Klune? Su veredicto decide si Klune queda como su autor identitario o si
la fantasía cálida fue casualidad; mirar también la micro-pregunta
`rec-klune-que:*` (qué le tentó: tono / personajes / historia). Seguir
sin señal: Coyle (16/08), Delany M5-014, Rovelli 04/08, Rojas 05/08,
Thorogood, vuelo-ebooks. Para el nuevo de Andy de mañana: si Brewer
enganchó, la veta hábitos/neurociencia queda caliente.

## 🎬 CINE + 🧳 viaje (fuera del ciclo, no cuentan el par del día)
Cine: 1/semana, `audience:"todos"`, `kind:"cine"`, viernes ~19:00. Sofi evita
gore/violencia explícita, subtítulos siempre; Andy evita "triste", nunca
doblado. Nº1: OMitB "ya la vimos" ambos; Arrival "no va" a Sofi (ciencia dura
sin trama humana, no repetir ese ángulo con ella); Severance "me tienta" Andy
— candidata fuerte Nº2. Curaduría: icónico/importante > relleno.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual. NO TOCAR (ni este ni `recs/setup.html`).
