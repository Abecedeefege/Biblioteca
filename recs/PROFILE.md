# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"` (cada uno recibe solo
la suya). Las fichas `todos` quedan para ocasiones especiales y cuentan
para ambos. Pre-armadas del bootstrap (15→27/07) con audiencia fija van
quedando atrás a medida que pasan los días (17/07 dicker-sofi y 18/07
king-sofi ya se construyeron libres, fuera del bootstrap). Restantes:
hesse19-andy, housel20-andy, bach21-andy, sagan22-andy, pollan23-andy,
osman24-sofi(ya enviada 24/07 vista adelantada), weir25-todos,
hill26-sofi(ya enviada), haig27-todos. Si el día ya tiene pre-armada de un
destinatario, construir SOLO la del otro. Libre 100% para ambos: 2026-07-28.

### Sofi (pareja del dueño) — vetas confirmadas
Sus salas: **sala King** (R4+R5, 50 King), **salón del crimen** (M5:
cozies de Alma, Christie, Sherlock, Fitzek, Katzenbach), **rincón Valeria**
(M6: 9 Benavent). DOS vetas ganadoras medidas (ver Señales): (1) cozy
grupal cálido — personajes chusmas/cálidos > fríos/analíticos (Osman,
eligió a Joyce); (2) oscuro/thriller intenso, ya CALIBRADO en "justo así"
con Dicker — no seguir escalando oscuridad, dar variedad dentro de ese
nivel. 18/07: King *Si te gusta la oscuridad* (R5-018, redescub) responde
al título literal de su pedido con una antología de niveles dispares.
Guardia: NUNCA King como nuevo sin chequear R4/R5 (tiene 50, ahora 49 sin
leer); los 3 Bachman los tiene; Joe Hill NOS4A2 sin stock UY.
- Consumido (NO repetir): Osman *Club del Crimen* (nuevo), Hill *El traje
  del muerto* (nuevo), Dicker *Harry Quebert* (nuevo), King *Si te gusta
  la oscuridad*/R5-018 (redescub), Adams *Misterio en el club de
  lectura*/M5-018 (redescub).
- Banco nuevos: **Dicker *El libro de los Baltimore*** (tomo 2 Goldman,
  PRIORIDAD — mismo autor de su ACIERTO PLENO, mismo nivel calibrado), La
  asistenta (McFadden, thriller oscuro), Osman tomo 2 *El hombre que murió
  dos veces* (cozy), NOS4A2 (Hill, revisar stock).
- Banco redescub: **M5-024 *El Psicoanalista*** (Katzenbach, oscuro —
  candidato fuerte para su próximo turno "biblioteca"), M5-012 *Asesinato
  entre libros* (Carlisle), M5-013 *Secretos entre libros* (Adams), M5-014
  *Elemental, querida lectora* (Delany), M5-015 *El enigma del diario
  secreto* (Adams), M5-016 *Un cadáver en Baker Street* (Delany).

### Todos (cruces Sofi × Andy) — qué funciona
Fórmula: enganche narrativo/misterio (ella) × ciencia/sentido/positividad
(él). Sembrados: Hail Mary (ciencia+whodunit), Midnight Library
(emoción+Frankl). Banco: Piranesi (Clarke), Un verdor terrible (Labatut),
El curioso incidente del perro a medianoche, Recursion (Crouch).

## 👤 Andy (el dueño) — datos duros
Libros personales = **estante L4** (el de *Jonathan Livingston Seagull*).
Gustos: wellness, autosuperación, positividad, astronomía, neurociencia y
mente, espiritualidad oriental, finanzas, fábulas inspiradoras. Idioma
indistinto (L4: 46% ES / 54% EN). Perfil fino: transformación práctica
envuelta en **narrativa o ciencia, nunca sermón**; oscila entre ingeniero
(Gawdat, Clear, Doidge) y contemplativo (zen, fábulas); libros cortos y
releíbles. Astronomía = L5 entero (32 vintage 1940-1965), **confirmado
ACIERTO PLENO con Rovelli** (moderno+corto+poético = su combo; profundizar
Tyson, Katie Mack, Sean Carroll). Frankl: `ya_lo_lei` — puntería correcta
pero sin descubrimiento; evitar consagrados/manuales en esa veta. CONTEXTO:
lee *El monje que vendió su Ferrari* (Sharma) — no recomendarlo. Julio =
invierno en Montevideo (lecturas de una sentada, comfort books).
- Consumido (NO repetir): Frankl, Meditaciones, Housel, Bach Ilusiones,
  Pollan, Rovelli (nuevos); Siddhartha, Cosmos, Bucay Camino Felicidad
  (redescub).
- 2 redescub seguidos sin feedback (Bucay 17/07 sin click aún) — vigilar
  si el patrón se repite; sus "nuevos" (Frankl, Rovelli) sí tuvieron dwell
  alto, los redescub podrían necesitar otro ángulo de push.

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media.
- `read_status` desconocido para TODO L4/M5/R5 — nunca afirmar "lo
  leíste": preguntar con botones.
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — YA los
  tiene aunque estén fuera de lugar.
- Trilogía Goldman de Dicker (Baltimore, Alaska Sanders): verificado que
  NO están en el catálogo de 400 — banco de nuevos vigente para Sofi.

## 🆕 Banco candidatos NUEVOS — Andy (por veta; reponer si quedan <5)
- **Astronomía moderna** (veta CALIENTE post-Rovelli): *Astrophysics for
  People in a Hurry* (Tyson), *The End of Everything* (Katie Mack), Sean
  Carroll, algo de James Webb/exoplanetas.
- **Estoicismo**: *El Obstáculo es el Camino* / *Diario para Estoicos*
  (Holiday), Séneca (*Cartas a Lucilio*).
- **Neurociencia reciente**: *Pensar rápido, pensar despacio* (Kahneman),
  *Behave* (Sapolsky), *Incógnito* (Eagleman), *Why We Sleep* (Walker),
  *Being You* (Anil Seth).
- **Mindfulness práctico**: *El milagro de mindfulness* (Thich Nhat Hanh),
  *El Poder del Ahora* (Tolle), Pema Chödrön, Kabat-Zinn.
- **Oriental nivel 2**: *Tao Te Ching*, *The Way of Zen* (Watts), *Mente
  zen, mente de principiante* (Suzuki), *Bhagavad Gita*.
- **Psicología positiva**: *Flow* (Csikszentmihalyi), *The Happiness
  Hypothesis* (Haidt), Seligman.
- **Cuerpo/wellness**: *Breath* (Nestor).
- **Fábulas/completismo**: *Tuesdays with Morrie* (Albom), *El Camino de
  la Autodependencia* (Bucay, tomo 1 que falta en M5).

## 🔁 Banco candidatos REDESCUBRIMIENTOS — Andy
L4-017 *Jonathan Livingston Seagull* (relectura identitaria), L4-018 *The
Prophet* (micro-dosis), L4-010 *Zen en el arte del tiro con arco*, L4-014
*The Doors of Perception* (doble programa con L4-005 Leary), L4-021 *The
Art of Happiness*, L4-022 *The Boy, the Mole...* (comfort), L5-007 *A
Brief History of Time*, L5-026 *Of Time and Space...* (Asimov), L5-019 *La
Vía Láctea* (Bok).

## 📊 Señales medidas (números, no vibes)
- **Frankl** (15/07, andy, nuevo): `ya_lo_lei` + love, dwell 466s/100%.
- **Rovelli** (16/07, andy, nuevo): `lo_quiero` + like, dwell 182s/100%. ACIERTO PLENO.
- **Osman** (24/07, sofi, nuevo, vista adelantada): `lo_quiero` + love, dwell 179s/100%, `rec-club`→joyce. ACIERTO PLENO.
- **Hill traje del muerto** (26/07, sofi, nuevo, vista adelantada): `me_tienta` + love, dwell 258s/100%, `rec-terror`→"cuanto_mas_oscuro_mejor". ACIERTO + calibración.
- **Dicker Harry Quebert** (17/07, sofi, nuevo): `lo_quiero` + love, dwell 134s/97% scroll, `rec-nivel-oscuro`→"justo_asi". ACIERTO PLENO + techo de oscuridad calibrado.
- **Bucay Camino Felicidad** (17/07, andy, redescub): sin feedback aún.
- **King Si te gusta la oscuridad** (18/07, sofi, redescub, R5-018): construida hoy, pendiente.
- Resto de pre-armadas (19→27/07): sin feedback aún, `pending` en cola.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.

## 🔭 Qué mirar (próxima corrida: 2026-07-19)
- Andy 19/07 ya pre-armado (Hesse, Siddhartha, redescub) → construir SOLO
  la de Sofi; por mezcla del día (18/07 fue redescub) le toca "nuevo".
  Candidato fuerte: Dicker *El libro de los Baltimore* — verificar contra
  catálogo antes de confirmar.
- Revisar veredicto de `bucay-camino-felicidad` (Andy, 2do redescub sin
  señal) y de `king-si-te-gusta-la-oscuridad` (Sofi, pendiente hoy).
- Si Bucay sigue sin clicks el 19-20/07, considerar ajustar MEZCLA VIGENTE
  hacia más "nuevo" para Andy.
