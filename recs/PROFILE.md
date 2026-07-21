# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"`. Las fichas `todos`
quedan para ocasiones especiales y cuentan para ambos. Pre-armadas del
bootstrap consumidas hasta 21/07 inclusive. Restantes: sagan22-andy,
pollan23-andy, weir25-todos, haig27-todos (osman24-sofi y hill26-sofi ya
enviadas con otro id real, antes de tiempo). Si el día ya tiene pre-armada
de un destinatario, construir SOLO la del otro. Libre 100% para ambos:
2026-07-28.

### Sofi (pareja del dueño) — vetas confirmadas
Sus salas: **sala King** (R4+R5, 50 King), **salón del crimen** (M5:
cozies de Alma, Christie, Sherlock, Fitzek, Katzenbach), **rincón Valeria**
(M6: 9 Benavent). DOS vetas ganadoras: (1) cozy grupal cálido — le encanta
el humor filoso/deadpan de Joyce específicamente, no la calidez genérica
del grupo, 2/2 `lo_quiero`; (2) oscuro/thriller, CALIBRADO en "justo así"
con Dicker — no escalar más, dar variedad dentro de ese nivel. Alternamos
entre ambas cada vez que toca "nuevo" o "redescub" para ella.
**Guardia dura**: 2/2 redescub reales (King R5-018, Katzenbach M5-024)
resultaron `ya_lo_lei` — el `read_status` de enrichment NO es confiable
para sus estantes de misterio/oscuro (no solo para los 50 King). Antes de
ofrecer el próximo redescub de esa veta: preferir títulos menos
consagrados o de compra más reciente sobre el más obvio del estante.
- Consumido (NO repetir): Osman *Club del Crimen* y tomo 2 *El hombre que
  murió dos veces* (nuevos, ambos ACIERTO PLENO); Hill *El traje del
  muerto* (nuevo, acierto); Dicker *Harry Quebert* (nuevo, ACIERTO PLENO)
  y *El libro de los Baltimore* (nuevo, 21/07, pendiente); King *Si te
  gusta la oscuridad*/R5-018 y Katzenbach *El Psicoanalista*/M5-024
  (redescub, AMBOS ya leídos por ella).
- Banco nuevos (repuesto tras usar Baltimore, sigue con 3 — reponer con
  WebSearch si baja de eso): La asistenta (McFadden, oscuro), NOS4A2
  (Hill, revisar stock), Osman tomo 3 *El hombre bomba* (cozy).
- Banco redescub: M5-012 *Asesinato entre libros* (Carlisle), M5-013
  *Secretos entre libros* (Adams), M5-014 *Elemental, querida lectora*
  (Delany), M5-015 *El enigma del diario secreto* (Adams), M5-016 *Un
  cadáver en Baker Street* (Delany). Sin usar — aplicar guardia dura antes
  de ofrecer cualquiera.

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
envuelta en **narrativa o ciencia, nunca sermón**; libros cortos y
releíbles. Astronomía = L5 entero, **ACIERTO PLENO con Rovelli**
(moderno+corto+poético; profundizar Tyson, Katie Mack, Sean Carroll).
Tras DOS `ya_lo_lei` seguidos (Frankl, Meditaciones), **Bach *Ilusiones*
(21/07) rompió la racha**: `me_tienta`+like+dwell 404s/100%, el
engagement más alto medido en un "nuevo" suyo. Confirma la hipótesis:
autor identitario del propio estante o autores de segunda línea > clásicos
consagrados de librería de aeropuerto. Seguir con: Kahneman, Sapolsky,
Eagleman, Walker, Anil Seth, Tyson/Katie Mack. CONTEXTO: lee *El monje que
vendió su Ferrari* (Sharma) — no recomendarlo. Julio = invierno en
Montevideo (lecturas de una sentada, comfort books).
- Consumido (NO repetir): Frankl, Meditaciones, Housel, Bach Ilusiones
  (ACIERTO), Pollan, Rovelli (nuevos); Siddhartha, Cosmos, Bucay Camino
  Felicidad (redescub).
- Redescubrimientos muy por debajo de sus "nuevos" en engagement — si
  Siddhartha sigue sin veredicto, van 3 flojos seguidos: probar otro
  ángulo de push para redescub o correr la MEZCLA hacia más "nuevo".

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media.
- `read_status` de enrichment no es confiable por sí solo — cruzar con
  feedback previo antes de asumir "sin leer" (ver guardia dura de Sofi).
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — YA los
  tiene aunque estén fuera de lugar.

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
- **Andy nuevos**: Frankl `ya_lo_lei`+love 466s; Rovelli `lo_quiero`+like
  182s ACIERTO PLENO; Meditaciones `ya_lo_lei`+like 318s; Bach *Ilusiones*
  `me_tienta`+like 404s/100%. Housel enviado, sin veredicto.
- **Andy redescub**: Bucay clic 14s sin veredicto; Siddhartha 200s/52%
  sin veredicto — 2 flojos seguidos, vigilar.
- **Sofi nuevos oscuro**: Dicker Harry Quebert `lo_quiero`+love 134s,
  `rec-nivel-oscuro`→justo_asi ACIERTO PLENO; Hill traje del muerto
  `me_tienta`+love 258s, `rec-terror`→cuanto_mas_oscuro_mejor; Dicker
  Baltimore construida 21/07, pendiente (con `rec-tono`, mide si el
  registro más familiar/menos-crimen funciona).
- **Sofi nuevos cozy**: Osman tomo1 `lo_quiero`+love 179s `rec-club`→
  joyce ACIERTO PLENO; Osman tomo2 `lo_quiero`+love 133s/100%, `rec-frase`
  →sausage. 2/2.
- **Sofi redescub**: King R5-018 y Katzenbach M5-024, ambos `ya_lo_lei` —
  2/2 fallaron por guardia, no por gusto (ver Guardia dura arriba).

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.

## 🔭 Qué mirar (próxima corrida: 2026-07-22)
- Andy 22/07 ya pre-armado (Sagan *Cosmos*, redescub) → construir SOLO la
  de Sofi. Por mezcla (21/07 fue "nuevo" para ella), toca "de la
  biblioteca" — aplicar guardia dura antes de ofrecer M5-012/013/014/
  015/016 (2 redescub reales seguidos ya fallaron por eso).
- Revisar veredicto de Housel (Andy) y del Dicker *Baltimore* (Sofi, +
  `rec-tono`) — si Siddhartha sigue sin veredicto, correr MEZCLA de Andy
  hacia más "nuevo".
- Andy: seguir con autores de segunda línea/identitarios, evitar clásicos
  de librería de aeropuerto — Bach ya confirmó la hipótesis.
- Sofi: cozy (Osman) 2/2 perfecto; oscuro (Dicker/King) 2 aciertos +
  Baltimore pendiente con registro distinto. Prioridad guardia > variedad
  en el próximo redescub.
