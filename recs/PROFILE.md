# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"` (cada uno recibe solo
la suya). Las fichas `todos` quedan para ocasiones especiales y cuentan
para ambos. **13 experiencias PRE-ARMADAS del bootstrap (15→27/07)**, una
por día con audiencia fija — la primera elección 100% LIBRE es 2026-07-28.
Hasta entonces: si el día ya tiene pre-armada de un destinatario, construir
SOLO la del otro (respetando el par nuevo+redescub del día).

### Sofi (pareja del dueño) — primera señal real: 16/07
- Sus salas: **La sala King** (R4+R5, 50 King — tiene Holly y No tengas
  miedo), **El salón del crimen** (M5: cozies de Alma, 2 Christie, 3
  Sherlock, Fitzek, Katzenbach) y **El rincón Valeria** (M6: 9 Benavent).
  Le encantan: detectives, misterio, King-style.
- **Confirmado (Osman, 16/07): `lo_quiero` + love, dwell 179s/100%.**
  Cozy grupal/detectives-amateur = veta ganadora. `rec-club`→`joyce`:
  prefiere personajes cálidos/chusmas sobre fríos/analíticos — dar
  protagonismo a la voz cálida en las interacciones.
- Señales secundarias: John Green (M5-022/023), Alice Kellen → ficción
  emotiva también le llega.
- Guardia Sofi: NUNCA King como nuevo sin chequear R4/R5 (tiene 50); los 3
  Bachman los tiene; Joe Hill NOS4A2 sin stock UY.
- Consumido (NO repetir): Osman (nuevo, 24/07), Adams *Misterio en el
  club de lectura* / M5-018 (redescub, 16/07 — ACIERTO: bridge directo
  desde Osman, mismo cuarteto femenino).
- Banco nuevos: NOS4A2 (Hill), Harry Quebert (Dicker), La asistenta
  (McFadden), **tomo 2 de Osman "El hombre que murió dos veces" (subió de
  prioridad)**, Fitzek (tiene 2, van más).
- Banco redescub (M5, cozy, no leídos): M5-012 *Asesinato entre libros*
  (Carlisle), M5-013 *Secretos entre libros* (Adams), M5-014 *Elemental,
  querida lectora* (Delany), M5-015 *El enigma del diario secreto*
  (Adams), M5-016 *Un cadáver en Baker Street* (Delany), M5-024 *El
  Psicoanalista* (Katzenbach — más oscuro/thriller, usar si pide ese giro).

### Todos (cruces Sofi × Andy) — qué funciona
- Fórmula: enganche narrativo/misterio (ella) × ciencia/sentido/positividad
  (él). Sembrados: Hail Mary (ciencia+whodunit), Midnight Library
  (emoción+Frankl). Banco: Piranesi (Clarke), Un verdor terrible (Labatut),
  El curioso incidente del perro a medianoche, Recursion (Crouch).

## 👤 Andy (el dueño) — datos duros
- Libros personales = **estante L4** (el de *Jonathan Livingston Seagull*).
  El resto de los ~400 comparten casa pero no son su colección núcleo.
- Gustos: wellness, autosuperación, positividad, astronomía, neurociencia y
  mente, espiritualidad oriental, finanzas y negocios, fábulas inspiradoras.
  Idioma indistinto (L4 real: 46% ES / 54% EN).
- Perfil fino: busca transformación práctica envuelta en **narrativa o
  ciencia, nunca sermón**; oscila entre ingeniero (Gawdat, Clear, Doidge) y
  contemplativo (zen, fábulas); prefiere libros cortos y releíbles; entra a
  la espiritualidad por la puerta accesible. Mitad del estante post-2015.
- Astronomía = L5 entero (32 vintage 1940-1965). **Confirmado 16/07:
  Rovelli `lo_quiero` — moderno+corto+poético es SU combo. Profundizar
  con Tyson, Katie Mack, Sean Carroll.**
- Frankl (15/07): `ya_lo_lei` — puntería correcta en positividad/sentido
  pero sin descubrimiento. Evitar consagrados/manuales en esa veta.
- CONTEXTO: está leyendo *El monje que vendió su Ferrari* (Sharma, cap. 7
  a mediados de julio) — NO recomendarlo como nuevo. Julio = invierno en
  Montevideo (lecturas de una sentada, comfort books).
- Consumido (NO repetir): Frankl, Meditaciones, Housel, Bach Ilusiones,
  Pollan, Rovelli (nuevos); Siddhartha, Cosmos (redescub).

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media.
- `read_status` desconocido para TODO L4/M5 — nunca afirmar "lo leíste":
  preguntar con botones.
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — YA
  los tiene aunque estén fuera de lugar.

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
- L4-017 *Jonathan Livingston Seagull* — SU libro; relectura identitaria.
- L4-018 *The Prophet* — UN capítulo (amor/trabajo) como micro-dosis.
- L4-010 *Zen en el arte del tiro con arco*.
- L4-014 *The Doors of Perception* — doble programa con L4-005 (Leary).
- L4-021 *The Art of Happiness*, L4-022 *The Boy, the Mole...* (comfort).
- L5-007 *A Brief History of Time* — "¿hasta qué capítulo llegaste?".
- L5-026 *Of Time and Space...* (Asimov), L5-019 *La Vía Láctea* (Bok).

## 📊 Señales medidas (números, no vibes)
- **Frankl** (15/07, andy, nuevo): `ya_lo_lei` + love, dwell 466s/100%.
- **Rovelli** (16/07, andy, nuevo): `lo_quiero` + like, dwell 182s/100%.
  ACIERTO PLENO.
- **Osman** (24/07, sofi, nuevo, vista adelantada vía bienvenida):
  `lo_quiero` + love, dwell 179s/100%, `rec-club`→joyce. ACIERTO PLENO.
- **16/07**: construida `adams-club-lectura` (sofi, redescub M5-018) —
  Andy ya tenía su nuevo (Rovelli) pre-armado. Pendiente de feedback.
- Resto de pre-armadas (17→27/07): sin feedback aún, `pending` en cola.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.

## 🔭 Qué mirar (próxima corrida: 2026-07-17)
- Andy 17/07 ya pre-armado (Bucay, redescub) → construir SOLO la de Sofi;
  por mezcla del día le toca "nuevo". Candidato fuerte: tomo 2 de Osman.
- Revisar veredicto + `rec-secreto:*` de `adams-club-lectura` (Sofi).
- Micro-señales pendientes: `rec-via:*` (Frankl), `rec-leccion:*`
  (Rovelli), `rec-tomo1:*=si` (Bucay → sube *Camino de la
  Autodependencia*).
- Con 2+ señales por persona: empezar a pesar mezcla y vetas POR PERSONA,
  no como lector único. Andy pide más astronomía moderna; Sofi pide más
  cozy grupal cálido.
