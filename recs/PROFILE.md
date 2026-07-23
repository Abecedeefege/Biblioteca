# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA VIGENTE: ~2 nuevos por cada 1 redescubrimiento (por persona)
Fijada 2026-07-15, ajustar con datos.

## 👥 RÉGIMEN VIGENTE (fijado por Andy el 2026-07-16): 1 + 1 POR DÍA
Dos fichas diarias: UNA para Andy y UNA para Sofi, cada una personal según
su perfil y su feedback. Entre las dos del día: un libro NUEVO y uno DE LA
BIBLIOTECA (redescubrimiento), alternando cada día quién recibe cuál.
Pushes ~12:30, personales: `to:"Andy"` / `to:"Sofi"`. Las fichas `todos`
quedan para ocasiones especiales y cuentan para ambos. Pre-armadas del
bootstrap consumidas hasta 23/07 inclusive. Restantes: weir25-todos,
haig27-todos (osman24-sofi y hill26-sofi ya enviadas con otro id real,
antes de tiempo). Si el día ya tiene pre-armada de un destinatario,
construir SOLO la del otro, respetando el par nuevo+redescub del día — es
regla dura, prioridad sobre la mezcla personal de cada uno (ver 23/07:
Andy nuevo pre-armado → Sofi redescub aunque su mezcla pedía "nuevo").
Libre 100% para ambos: 2026-07-28.

### Sofi (pareja del dueño) — vetas confirmadas
Sus salas: **sala King** (R4+R5, 50 King), **salón del crimen** (M5:
cozies de Alma, Christie, Sherlock, Fitzek, Katzenbach), **rincón Valeria**
(M6: 9 Benavent, romance — sin señal de gusto todavía). DOS vetas
ganadoras: (1) cozy grupal cálido — humor filoso/deadpan de Joyce
específicamente, 2/2 `lo_quiero`; (2) oscuro/thriller, CALIBRADO en "justo
así" con Dicker — no escalar más. **Guardia dura ESCALADA (23/07)**: 3/3
redescub reales (King R5-018, Katzenbach M5-024, Carlisle M5-012)
resultaron `ya_lo_lei` — ni siquiera "autora sin consagrar" (Carlisle)
alcanzó, y produjo su primer `meh` de la serie. No es problema de fama del
autor: su estante de misterio/oscuro en general ya está muy leído. Desde
23/07 se prueba autora 100% indie sin ninguna huella (Minix); si también
falla, dejar de rotar nombres ahí y correr mezcla hacia más "nuevo" o
saltar a redescub fuera de misterio puro (M6 Benavent).
- Nuevos — consumidos: Osman t1 y t2 (ambos ACIERTO PLENO), Hill *traje
  del muerto* (acierto), Dicker *Harry Quebert* (ACIERTO PLENO) y *Libro
  de los Baltimore* (21/07, pendiente).
- Redescub — consumidos: King R5-018, Katzenbach M5-024, Carlisle M5-012
  (LOS TRES ya leídos — guardia dura); Minix *La librera detective*/M5-001
  (23/07, pendiente — autora indie sin huella, test de estrategia escalada).
- Banco nuevos (3): La asistenta (McFadden, oscuro), NOS4A2 (Hill, revisar
  stock), Osman t3 *El hombre bomba* (cozy).
- Banco redescub (3, reponer si baja): M5-014 *Elemental, querida lectora*
  (Delany), M5-016 *Un cadáver en Baker Street* (Delany), M5-011 *Blanca
  Navidad y café negro* (Coyle, cozy culinario, autora sin probar).
  Evitar M5-013/M5-015 (Adams, ya representada en fallos previos vía
  Adams M5-018). Alternativa: M5-003/M5-010 (Fitzek, oscuro, sin probar).

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
(moderno+corto+poético). Tras DOS `ya_lo_lei` seguidos (Frankl,
Meditaciones), **Bach *Ilusiones* rompió la racha**: `me_tienta`+like+dwell
410s/100%, el engagement más alto medido en un "nuevo" suyo. Confirma:
autor identitario/segunda línea > clásico consagrado de aeropuerto. Seguir
con: Kahneman, Sapolsky, Eagleman, Walker, Anil Seth, Tyson/Katie Mack.
CONTEXTO: lee *El monje que vendió su Ferrari* (Sharma) — no recomendarlo.
Julio = invierno en Montevideo (lecturas de una sentada, comfort books).
- Consumido: Frankl, Meditaciones, Housel, Bach *Ilusiones* (ACIERTO),
  Pollan (23/07, pendiente), Rovelli (nuevos, ACIERTO); Siddhartha (sin
  veredicto), Cosmos (ACIERTO — `me_tienta`+like 187s/100%, primer
  veredicto real en redescub suyo), Bucay *Camino Felicidad* (sin
  veredicto, redescub).
- Astronomía (su veta más fuerte) funciona también releída — priorizar
  para próximos redescubs: L5-007, L5-026, L5-019.

## 🛡️ Guardia (errores que no se cometen)
- Antes de todo "nuevo": título Y autor contra el catálogo completo
  (matching laxo, sin tildes) y contra `recommended.json`.
- `R4-015` (King, *Todo Oscuro, Sin Estrellas*) tiene tag `astronomy`
  ERRÓNEO en el catálogo — no es señal de astronomía.
- `L4-004` (*Count Down*, Olson) es outlier de L4 con confidence media.
- `read_status` de enrichment no es confiable por sí solo — cruzar con
  feedback previo antes de asumir "sin leer" (guardia dura de Sofi: 3/3
  redescub reales fallaron por esto, no solo con los 50 King).
- Los 3 Bucay (*Hojas de Ruta*) viven en M5 (estante de misterio) — YA los
  tiene aunque estén fuera de lugar.

## 🆕 Banco candidatos NUEVOS — Andy (por veta; reponer si quedan <5)
- **Astronomía moderna** (CALIENTE post-Rovelli): Tyson *Astrophysics for
  People in a Hurry*, Katie Mack *The End of Everything*, Sean Carroll.
- **Estoicismo**: Holiday *El Obstáculo es el Camino*/*Diario para
  Estoicos*, Séneca *Cartas a Lucilio*.
- **Neurociencia reciente**: Kahneman *Pensar rápido, pensar despacio*,
  Sapolsky *Behave*, Eagleman *Incógnito*, Walker *Why We Sleep*, Anil
  Seth *Being You*.
- **Mindfulness práctico**: Thich Nhat Hanh, Tolle *El Poder del Ahora*,
  Pema Chödrön, Kabat-Zinn.
- **Oriental nivel 2**: *Tao Te Ching*, Watts *The Way of Zen*, Suzuki
  *Mente zen, mente de principiante*, *Bhagavad Gita*.
- **Psicología positiva**: Csikszentmihalyi *Flow*, Haidt, Seligman.
- **Cuerpo/wellness**: Nestor *Breath*.
- **Fábulas**: Albom *Tuesdays with Morrie*, Bucay *Camino de la
  Autodependencia* (tomo 1, falta en M5).

## 🔁 Banco candidatos REDESCUBRIMIENTOS — Andy
L4-017 *Jonathan Livingston Seagull* (relectura identitaria), L4-018 *The
Prophet*, L4-010 *Zen en el arte del tiro con arco*, L4-014 *The Doors of
Perception* (con L4-005 Leary), L4-021 *The Art of Happiness*, L4-022
*The Boy, the Mole...*, L5-007 *A Brief History of Time*, L5-026 *Of Time
and Space...* (Asimov), L5-019 *La Vía Láctea* (Bok).

## 📊 Señales medidas — nuevos (números, no vibes)
- **Andy**: Frankl `ya_lo_lei`+love 466s; Rovelli `lo_quiero`+like 182s
  ACIERTO PLENO; Meditaciones `ya_lo_lei`+like 318s; Bach *Ilusiones*
  `me_tienta`+like 410s/100%. Housel y Pollan enviados, sin veredicto.
- **Sofi oscuro**: Dicker Harry Quebert `lo_quiero`+love 134s, `rec-nivel-
  oscuro`→justo_asi ACIERTO PLENO; Hill traje del muerto `me_tienta`+love
  258s, `rec-terror`→cuanto_mas_oscuro_mejor; Baltimore (21/07, pendiente).
- **Sofi cozy**: Osman t1 `lo_quiero`+love 179s `rec-club`→joyce ACIERTO
  PLENO; Osman t2 `lo_quiero`+love 133s/100%, `rec-frase`→sausage. 2/2.

## 🔭 Qué mirar (próxima corrida: 2026-07-24)
- 24/07 ya pre-armado para Sofi (Osman *Club del Crimen*, nuevo — id real
  `2026-07-24-osman-club-crimen`, ya con feedback histórico ACIERTO PLENO)
  → construir SOLO la de Andy, "de la biblioteca" (Sofi tiene nuevo hoy).
  Banco redescub: L5-007, L5-026 o L5-019 (astronomía).
- Revisar veredicto de Housel (Andy, 20/07), Baltimore (Sofi, 21/07 +
  `rec-tono`) y Minix *La librera detective* (Sofi, 23/07 + `rec-gancho`)
  — este último es el test clave de la guardia escalada tras 3/3 fallos.
  Si Minix TAMBIÉN da `ya_lo_lei`: parar de rotar nombres en M5/R4/R5 y
  correr la mezcla de Sofi hacia más "nuevo", o probar redescub fuera de
  misterio puro (M6 Benavent, sin señal previa de gusto ni de lectura).

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch — cero
mantenimiento manual al agregar recomendaciones.
