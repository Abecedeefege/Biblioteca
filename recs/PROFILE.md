# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"`. Las fichas `todos`
quedan para ocasiones especiales y cuentan para ambos. Pre-armadas del
bootstrap (15→27/07): 17/07, 18/07 y 19/07 de Sofi ya se construyeron
libres, fuera del bootstrap. Restantes: housel20-andy, bach21-andy,
sagan22-andy, pollan23-andy, osman24-sofi(ya enviada, vista adelantada),
weir25-todos, hill26-sofi(ya enviada), haig27-todos. Si el día ya tiene
pre-armada de un destinatario, construir SOLO la del otro. Libre 100% para
ambos: 2026-07-28.

### Sofi (pareja del dueño) — vetas confirmadas
Sus salas: **sala King** (R4+R5, 50 King), **salón del crimen** (M5:
cozies de Alma, Christie, Sherlock, Fitzek, Katzenbach), **rincón Valeria**
(M6: 9 Benavent). DOS vetas ganadoras (ver Señales): (1) cozy grupal
cálido — personajes chusmas/cálidos > fríos/analíticos (Osman, eligió a
Joyce); (2) oscuro/thriller intenso, CALIBRADO en "justo así" con Dicker
— no escalar más, dar variedad dentro de ese nivel. 19/07: rotamos a cozy
(Osman tomo 2) tras 2 días seguidos de oscuro.
Guardia: NUNCA King como nuevo sin chequear R4/R5 (tiene 50); los 3
Bachman los tiene; Joe Hill NOS4A2 sin stock UY; **R5-018 (*Si te gusta la
oscuridad*) YA LO LEYÓ** — enrichment lo tenía mal como no_leido: no
confiar ciegamente en `read_status` sin cruzarlo con feedback previo.
- Consumido (NO repetir): Osman *Club del Crimen* (nuevo), Hill *El traje
  del muerto* (nuevo), Dicker *Harry Quebert* (nuevo), Osman tomo 2 *El
  hombre que murió dos veces* (nuevo, 19/07), King *Si te gusta la
  oscuridad*/R5-018 (redescub, YA LO HABÍA LEÍDO), Adams *Misterio en el
  club de lectura*/M5-018 (redescub).
- Banco nuevos: **Dicker *El libro de los Baltimore*** (PRIORIDAD para su
  próximo turno de oscuro — mismo autor del ACIERTO PLENO), La asistenta
  (McFadden, oscuro), NOS4A2 (Hill, revisar stock), Osman tomo 3 *El
  hombre bomba* (cozy, si el tomo 2 mide bien).
- Banco redescub: **M5-024 *El Psicoanalista*** (Katzenbach, oscuro —
  candidato fuerte, PERO confirmar que no la haya leído ya, mismo error
  que con King), M5-012 *Asesinato entre libros* (Carlisle), M5-013
  *Secretos entre libros* (Adams), M5-014 *Elemental, querida lectora*
  (Delany), M5-015 *El enigma del diario secreto* (Adams), M5-016 *Un
  cadáver en Baker Street* (Delany).

### Todos (cruces Sofi × Andy) — qué funciona
Fórmula: enganche narrativo/misterio (ella) × ciencia/sentido/positividad
(él). Sembrados: Hail Mary, Midnight Library. Banco: Piranesi (Clarke), Un
verdor terrible (Labatut), El curioso incidente del perro a medianoche,
Recursion (Crouch).

## 👤 Andy (el dueño) — datos duros
Libros personales = **estante L4** (el de *Jonathan Livingston Seagull*).
Gustos: wellness, autosuperación, positividad, astronomía, neurociencia y
mente, espiritualidad oriental, finanzas, fábulas inspiradoras. Idioma
indistinto (L4: 46% ES / 54% EN). Perfil fino: transformación práctica
envuelta en **narrativa o ciencia, nunca sermón**; oscila entre ingeniero
(Gawdat, Clear, Doidge) y contemplativo (zen, fábulas); libros cortos y
releíbles. Astronomía = L5 entero, **ACIERTO PLENO con Rovelli**
(moderno+corto+poético = su combo; profundizar Tyson, Katie Mack, Sean
Carroll). **DOS `ya_lo_lei` seguidos en "nuevo"** (Frankl, Meditaciones):
elige los títulos MÁS obvios de cada veta. Subir la vara ya: ir directo a
autores de segunda línea (Kahneman, Sapolsky, Eagleman, Walker, Anil Seth;
Tyson/Katie Mack), no a clásicos de librería de aeropuerto. CONTEXTO: lee
*El monje que vendió su Ferrari* (Sharma) — no recomendarlo. Julio =
invierno en Montevideo (lecturas de una sentada, comfort books).
- Consumido (NO repetir): Frankl, Meditaciones, Housel, Bach Ilusiones,
  Pollan, Rovelli (nuevos); Siddhartha, Cosmos, Bucay Camino Felicidad
  (redescub).
- Redescubrimientos flojos: Bucay (17/07) clickeó pero 14s de dwell y
  nunca votó; Siddhartha (19/07) en curso (200s dwell, sin veredicto aún)
  al cierre de esta corrida. Muy por debajo de sus "nuevos" (Frankl 466s,
  Meditaciones 318s). Si Siddhartha también queda sin veredicto, probar
  otro ángulo de push para redescub o correr la MEZCLA hacia más "nuevo".

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media.
- `read_status` de enrichment no es confiable por sí solo (ver R5-018,
  Sofi ya lo había leído) — cruzar con feedback previo antes de asumir.
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — YA los
  tiene aunque estén fuera de lugar.
- Trilogía Goldman de Dicker (Baltimore, Alaska Sanders): verificado que
  NO están en el catálogo de 400 — banco de nuevos vigente para Sofi.

## 🆕 Banco candidatos NUEVOS — Andy (por veta; reponer si quedan <5)
- **Astronomía moderna** (CALIENTE post-Rovelli): *Astrophysics for
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
- **Dicker Harry Quebert** (17/07, sofi, nuevo): `lo_quiero` + love, dwell 134s/97% scroll, `rec-nivel-oscuro`→"justo_asi". ACIERTO PLENO + techo calibrado.
- **Bucay Camino Felicidad** (17/07, andy, redescub): clickeó, dwell 14s/24% — sin veredicto ni reacción. Engagement bajo.
- **Meditaciones** (18/07, andy, nuevo): `ya_lo_lei` + like, dwell 318s/100%. Puntería correcta, sin descubrimiento — 2do consagrado seguido.
- **King Si te gusta la oscuridad** (18/07, sofi, redescub, R5-018): `ya_lo_lei` + like, ~36s, también `ya_leido` en compromiso físico. Ya lo había leído.
- **Siddhartha** (19/07, andy, redescub): en curso al cierre de esta corrida — dwell 200s/52%, sin veredicto todavía.
- **Osman tomo 2** (19/07, sofi, nuevo): construida hoy, pendiente.
- Resto de pre-armadas (20→27/07): sin feedback aún, `pending` en cola.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.

## 🔭 Qué mirar (próxima corrida: 2026-07-20)
- Andy 20/07 ya pre-armado (Housel, nuevo) → construir SOLO la de Sofi.
  Por mezcla (19/07 fue "nuevo"), a Sofi le toca "biblioteca" — priorizar
  M5-024 *El Psicoanalista*, confirmando antes que no la haya leído ya.
- Revisar veredicto de Siddhartha (Andy) y de Osman tomo 2 (Sofi).
- Andy: PRÓXIMO "nuevo" debe ser menos obvio dentro de su veta (banco
  reordenado arriba), no otro clásico consagrado.
- Sofi: no confiar en `read_status` de enrichment sin cruzar con feedback
  previo antes de ofrecer un redescubrimiento como "sin leer".
