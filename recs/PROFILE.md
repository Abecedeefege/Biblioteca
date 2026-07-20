# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"`. Las fichas `todos`
quedan para ocasiones especiales y cuentan para ambos. Pre-armadas del
bootstrap (15→27/07) ya consumidas hasta 20/07 inclusive (housel20-andy
enviado hoy). Restantes: bach21-andy, sagan22-andy, pollan23-andy,
osman24-sofi(ya enviada), weir25-todos, hill26-sofi(ya enviada),
haig27-todos. Si el día ya tiene pre-armada de un destinatario, construir
SOLO la del otro. Libre 100% para ambos: 2026-07-28.

### Sofi (pareja del dueño) — vetas confirmadas
Sus salas: **sala King** (R4+R5, 50 King), **salón del crimen** (M5:
cozies de Alma, Christie, Sherlock, Fitzek, Katzenbach), **rincón Valeria**
(M6: 9 Benavent). DOS vetas ganadoras, ambas sin fallo (ver Señales): (1)
cozy grupal cálido — personajes chusmas/cálidos > fríos/analíticos (le
encanta el humor filoso/deadpan de Joyce específicamente, no la calidez
genérica del grupo); (2) oscuro/thriller intenso, CALIBRADO en "justo así"
con Dicker — no escalar más, dar variedad dentro de ese nivel. Alternamos
entre ambas cada vez que toca "nuevo" o "redescub" para ella.
Guardia: NUNCA King como nuevo sin chequear R4/R5 (tiene 50); los 3
Bachman los tiene; Joe Hill NOS4A2 sin stock UY; **R5-018 (*Si te gusta la
oscuridad*) YA LO LEYÓ** — enrichment lo tenía mal como no_leido: no
confiar ciegamente en `read_status` sin cruzarlo con feedback previo.
- Consumido (NO repetir): Osman *Club del Crimen* (nuevo), Hill *El traje
  del muerto* (nuevo), Dicker *Harry Quebert* (nuevo), Osman tomo 2 *El
  hombre que murió dos veces* (nuevo, 19/07, ACIERTO PLENO), King *Si te
  gusta la oscuridad*/R5-018 (redescub, YA LO HABÍA LEÍDO), Adams *Misterio
  en el club de lectura*/M5-018 (redescub), Katzenbach *El Psicoanalista*/
  M5-024 (redescub, 20/07, pendiente veredicto).
- Banco nuevos: **Dicker *El libro de los Baltimore*** (PRIORIDAD para su
  próximo turno de oscuro — mismo autor del ACIERTO PLENO), La asistenta
  (McFadden, oscuro), NOS4A2 (Hill, revisar stock), Osman tomo 3 *El
  hombre bomba* (cozy, ya con 2/2 confirmado, buen próximo turno cozy).
- Banco redescub: M5-012 *Asesinato entre libros* (Carlisle), M5-013
  *Secretos entre libros* (Adams), M5-014 *Elemental, querida lectora*
  (Delany), M5-015 *El enigma del diario secreto* (Adams), M5-016 *Un
  cadáver en Baker Street* (Delany). Repuesto tras usar M5-024 hoy — sigue
  con 5, no reponer todavía.

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
- Redescubrimientos muy por debajo de sus "nuevos" en engagement (ver
  Señales) — si Siddhartha sigue sin veredicto, probar otro ángulo de
  push para redescub o correr la MEZCLA hacia más "nuevo".

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
- **Andy nuevos**: Frankl (15/07) `ya_lo_lei`+love 466s; Rovelli (16/07)
  `lo_quiero`+like 182s ACIERTO PLENO; Meditaciones (18/07) `ya_lo_lei`+like
  318s. Housel (20/07) enviado 16:48 UTC, pendiente.
- **Andy redescub**: Bucay (17/07) clic pero 14s, sin veredicto; Siddhartha
  (19/07) 200s/52%, sin veredicto — 2 seguidos flojos, vigilar.
- **Sofi nuevos (veta oscuro)**: Dicker Harry Quebert (17/07) `lo_quiero`+
  love 134s, `rec-nivel-oscuro`→justo_asi ACIERTO PLENO+techo calibrado;
  Hill traje del muerto `me_tienta`+love 258s, `rec-terror`→cuanto_mas_
  oscuro_mejor.
- **Sofi nuevos (veta cozy)**: Osman tomo1 `lo_quiero`+love 179s
  `rec-club`→joyce ACIERTO PLENO; Osman tomo2 (19/07) `lo_quiero`+love
  114s/76%, `rec-frase`→sausage (el chiste más filoso de Joyce). 2/2.
- **Sofi redescub**: King (18/07, R5-018) `ya_lo_lei`+like ~36s, YA LO
  HABÍA LEÍDO. Katzenbach *El Psicoanalista* (20/07, M5-024) construida
  hoy, pendiente.
- Resto de pre-armadas (21→27/07): sin feedback aún, `pending` en cola.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.

## 🔭 Qué mirar (próxima corrida: 2026-07-21)
- Andy 21/07 ya pre-armado (Bach *Ilusiones*, nuevo) → construir SOLO la
  de Sofi. Por mezcla (20/07 fue "biblioteca" para ella), a Sofi le toca
  "nuevo" — priorizar Dicker *El libro de los Baltimore* (mismo autor de
  su ACIERTO PLENO Harry Quebert, veta oscuro).
- Revisar veredicto de Housel (Andy, enviado hoy) y de Katzenbach *El
  Psicoanalista* (Sofi, construida hoy) — si Siddhartha sigue sin
  veredicto, van 3 redescubrimientos de Andy sin señal: considerar
  cambiar el ángulo de push o correr su MEZCLA hacia más "nuevo".
- Andy: PRÓXIMO "nuevo" debe ser menos obvio dentro de su veta (banco
  reordenado arriba), no otro clásico consagrado.
- Sofi: sus dos vetas (cozy Osman, oscuro Dicker/King) están en racha
  perfecta — mantener la alternancia entre ambas, no forzar una tercera
  veta todavía.
