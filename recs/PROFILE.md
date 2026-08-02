# Perfil de gustos — recomendador diario de Bibliotequeando

## ⚖️ MEZCLA + RÉGIMEN (fijados 15-16/07): 1+1 por día, ~2 nuevos por 1 redescub
Una ficha para Andy, una para Sofi, personal según su perfil/feedback.
Entre las dos del día: un NUEVO y uno DE LA BIBLIOTECA, alternando quién
recibe cuál. Pushes ~12:30 (o ≥75 min si corre tarde, piso 11:00 techo
21:00), personales `to:"Andy"`/`to:"Sofi"`.
- **02/08** (corrida 16:14 -03:00, tarde → push 17:30): Andy → **nuevo**
  Ryan Holiday, *El Obstáculo es el Camino* (rota veta tras 5 fichas
  seguidas de astro/neuro/fábula; riesgo de fama alto declarado en la
  ficha). Sofi → **redescub** Vicki Delany, *Elemental, querida lectora*
  (M5-014) — primera autora de nicho en vez de bestseller, y primera vez
  que se reemplaza la micro-pregunta muda por nota directa.

## 🚨 HALLAZGO MAYOR 01/08 — Sofi lee en Kindle, no solo en papel
`rec-nota` de Sofi en *People We Meet on Vacation*: **"Lo leí, no está en
la biblioteca porque lo leí en el kindle 🤓"** (veredicto `ya_lo_lei` +
`like`). Primer fallo de guardia en un **'nuevo'**, no redescub — el
problema real nunca fue nuevo-vs-redescub, es **masivo/bestseller vs. de
nicho**: los 5 fallos (King, Katzenbach, Carlisle, Benavent, Henry)
comparten fama/ventas altas. Acción: pivotar lejos de Emily Henry (2/2
riesgo — *Book Lovers* 31/07 sin veredicto, mismo perfil) y priorizar
autoras/series de nicho sobre bestsellers, en nuevo y en redescub.

## ✅ Suscripción — Andy y Sofi `active` desde 31/07, sin caídas.

### Sofi — vetas confirmadas
Salas: **sala King** (R4+R5), **salón del crimen** (M5), **rincón
Valeria** (M6, quemado). NUEVO: (1) cozy grupal — Osman 2/2 `lo_quiero`,
banco agotado (t.3-4 pendientes sin voto); (2) oscuro/thriller,
calibrado "justo así" con Dicker; (3) romance — Henry x2, *Book Lovers*
sin veredicto, *People We Meet* `ya_lo_lei` — **Henry en pausa**, si
también falla la primera, pivotar a autora de romance menos masiva.

**🚨 GUARDIA MÁXIMA (29/07, actualizada 02/08):** 4/5 redescub + 1 nuevo
dieron `ya_lo_lei`, todos autores masivos. La micro-pregunta de estante
llevó 3 corridas muda → **02/08 se cambió de canal**: pregunta directa en
la nota de la ficha de Delany en vez de botón. Revisar próxima corrida.
- Quemados: Osman t.1-2, Dicker Harry Quebert, Hill (aciertos); King
  R5-018, Katzenbach M5-024, Carlisle M5-012, Benavent M6-001 (saga
  completa), Henry *People We Meet* (todos ya leídos).
  Pendientes sin señal: Dicker *Baltimore*, Minix, *bala perdida*,
  Osman t.4, Henry *Book Lovers* (mismo riesgo), Delany *Elemental*
  (02/08, primera prueba de nicho).
- Banco redescub (nicho > consagrado): M5-016 Delany libro 2 (esperar
  veredicto del libro 1), M5-011 Coyle. Evitar M5-013/M5-015 (Adams, M5-018
  aún sin voto), M6 completo, Fitzek M5-003/M5-010 (bestseller alemán,
  mismo riesgo).
- Banco NUEVO romance: Henry *Happy Place*/*Beach Read* EN PAUSA hasta
  ver *Book Lovers*; si falla, pivotar a Taylor Jenkins Reid o autora
  menos masiva.

### Todos (Sofi × Andy)
Fórmula: narrativa/misterio (ella) × ciencia/sentido (él). Banco:
Piranesi, Un verdor terrible, El curioso incidente del perro a
medianoche, Recursion. 27/07 ACIERTO PLENO: Haig *Biblioteca de la
Medianoche* (Sofi). Weir *Hail Mary* sin veredicto.

## 👤 Andy — datos duros
Estante L4. Gustos: wellness, autosuperación, positividad, astronomía,
neurociencia, espiritualidad oriental, finanzas, fábulas. Idioma
indistinto, libros cortos/releíbles. Astronomía (L5) = veta más
consistente pero SATURADA (5 fichas seguidas) — en pausa por rotación.
Regla: autor identitario/segunda línea > clásico de aeropuerto (Frankl,
Meditaciones fallaron `ya_lo_lei`; Bach x2 acertó alto). **02/08: mismo
riesgo con Holiday** — su libro más vendido, perfil de fama igual a
Frankl/Meditaciones, matizado por tener OTRO Holiday ya en casa
(L4-020); riesgo declarado explícito en la ficha. Lee *El monje que
vendió su Ferrari* (Sharma) — no recomendarlo.
- Aciertos: Rovelli, Bach *Ilusiones* (plenos); Cosmos, Bach *Gaviota*
  (redescub, aciertos). `ya_lo_lei`: Frankl, Meditaciones. Sin
  veredicto: Asimov, Bok (click+visita 01/08, sin voto), Housel,
  Pollan, Siddhartha, Bucay, Hawking/Tyson/Eagleman (dwell alto sin
  voto — hoy prueba CTA más directo), Gibran. 02/08: Holiday (nuevo,
  estoicismo, primera vez en esa veta).
- Astronomía en pausa (no agotada): quedan L5-024 Hoyle, L5-021 Whipple.

## 🛡️ Guardia
"Nuevo": título+autor contra catálogo completo (sin tildes) y
`recommended.json`. Campo `to` obligatorio en toda entrada
`andy`/`sofi` de `queue.json`. Revisar `subscription.json` cada
corrida. `R4-015` (King) tag `astronomy` erróneo. **`read_status` de
enrichment NO es confiable** — ni para libros físicos ni para lo que
Sofi lee en Kindle; la guardia real para ella es evitar fama/ventas
altas dentro de su género. Corrida tarde: `send_at` ≥75 min después.

## 🆕 Banco NUEVO — Andy (reponer si <5)
Astronomía (pausa): Katie Mack, Sean Carroll. Estoicismo (Holiday
usado): Séneca *Cartas a Lucilio* (riesgo alto, mismo trato honesto que
Meditaciones). Neurociencia (Eagleman usado): Kahneman (riesgo alto),
Sapolsky *Behave*, Walker *Why We Sleep*, Anil Seth. Mindfulness: Thich
Nhat Hanh, Tolle, Pema Chödrön, Kabat-Zinn. Oriental nivel 2: *Tao Te
Ching*, Alan Watts *The Way of Zen* (candidato fuerte, no probado),
Suzuki, *Bhagavad Gita*. Psicología positiva: Csikszentmihalyi *Flow*,
Haidt, Seligman. Cuerpo: Nestor *Breath*. Fábulas: Albom, Bucay
*Camino de la Autodependencia*.

## 🔁 Banco REDESCUB — Andy
L4-010 *Zen tiro con arco* (ya en casa, alt. a Watts), L4-014 *Doors of
Perception*, L4-016 *Budismo para principiantes* (ya en casa), L4-021
*Art of Happiness*, L4-022 *The Boy, the Mole...*. Astro (pausa):
L5-024 Hoyle, L5-021 Whipple.

## 🔭 Qué mirar (próxima corrida)
Confirmar suscripción activa. Holiday (Andy): `ya_lo_lei` confirmaría
que el riesgo de fama pesa más que el autor identitario. Delany (Sofi):
primera prueba de autora de nicho — si funciona, nueva estrategia por
defecto; si falla, el problema es que ya leyó casi todo su estante y
hace falta otra fuente de señal (compra reciente, no catálogo viejo).
Revisar si contestó la pregunta directa de la nota. *Book Lovers*
pendiente — si falla, Henry queda descartada. Sin cambios hace semanas:
Weir (`todos`), Pollan, Baltimore, Minix, Osman t.4.

## 🎬 CINE + 🧳 viaje (fuera del ciclo, no cuentan mezcla/par)
Cine: 1/semana, `audience:"todos"`, `kind:"cine"`, viernes ~19:00.
Perfiles en 27-28/07 (Sofi evita gore/violencia explícita, subtítulos
siempre; Andy evita "triste", nunca doblado). Función Nº1: OMitB "ya la
vimos" ambos (fuera del banco); Arrival "no va" a Sofi (ciencia dura sin
trama humana, no repetir ese ángulo puro con ella); Severance "me
tienta" Andy — candidata fuerte Nº2, con dos títulos que ninguno vio.
Curaduría: icónico/importante > relleno. `recs/index.html` etiqueta
"Nuevo" todo lo que no sea `redescubrimiento` — infraestructura, NO
TOCAR.

## 🧭 Sugerencias hub
`recs/index.html` lista todo leyendo `recommended.json` por fetch —
cero mantenimiento manual.
