# Learnings del agente — Bibliotequeando

## ⏱️ CADENCIA VIGENTE: 2 pushes/día — 08:30 y 20:30 (-03:00)
Fijada por el dueño el 2026-07-03 al montar el sistema. El slot de las 20:30
es EL slot de biblioteca ("¿qué leés esta noche?") — no malgastarlo con
contenido de mañana. `expires_at` siempre el mismo día 23:00.

## 🚀 SÍNTESIS: qué convierte (todo PRIOR aún — cero datos medidos)
Priors heredados de un sistema gemelo en producción (jardín), a validar acá:
- PRIOR FUERTE: 1ª persona/feed (fue el ganador absoluto allá: dwell récord,
  😍×2, suscripción×2), identidad (horóscopo), chisme, orgullo/récords.
- PRIOR DÉBIL: utilidad accionable y consejo sincero miden tibio (aprueban
  sin suscribir). Si hay valor útil, envolverlo en humor o chisme.
- Regla operativa: elegir ángulo por IDENTIDAD > CHISME > ORGULLO > 1ª
  PERSONA hasta tener datos propios; después mandan los datos.
- Específico de biblioteca (hipótesis propia): la señal reina no es la
  reacción sino `leer-esta-noche:* = si` — compromiso físico con un libro.

## 📊 Estado del sistema (2026-07-03, bootstrap manual)
- Suscripción push: **none** — el dueño aún no corrió `engage/setup.html`.
  Los pushes de mañana quedarán `pending` y expirarán solos si no se
  suscribe antes. No es error.
- Secret `VAPID_PRIVATE_KEY`: pendiente de carga por el dueño en Actions.
- Feedback (`sync/engagement.json`): vacío; cutoff de compactación: n/a.
- `data/enrichment.json`: 136 libros con año sembrado; `read_status` 100%
  unknown — cada respuesta `leido:*` / `leer-esta-noche:*` lo va llenando.

## 🔭 Corrida de HOY (2026-07-03 — primer ciclo, manual)
- Creadas 2 experiencias: `2026-07-04-feed` (prior más fuerte: libros
  postean en 1ª persona; 8 posteos anclados en datos verificados del
  catálogo: Carrie/basura, Bachman 1985, Holmes resucitado, el baconiano
  de L3, el Quijote-mueble, los 4/7 Harry Potter, Apolant, las 100 NatGeo)
  y `2026-07-04-esta-noche` (ritual nocturno: 3 candidatos con CTA
  leer-esta-noche — Misery/Baskerville/Benavent, invierno).
- Cola: `2026-07-04-a` 08:30 → feed; `2026-07-04-b` 20:30 → esta-noche.
  Destinos distintos ✓, expires 23:00 ✓.
- Preguntas sembradas que enriquecen datos: leido: R4-001, R4-003, M5-006,
  TOP-001 · familia:R7-006 (¿Apolant es familia?).
- Qué mirar mañana: ¿llegaron los pushes (send_log)? ¿reaction del feed?
  ¿algún `leer-esta-noche:*=si`? ¿suscripción diaria sí/no por formato?
  Si el canal sigue sin suscripción activa, reconstruir la cola del día y
  no acumular backlog.

## Contexto real de la app
- Julio = invierno en Montevideo: noches largas → King, misterio, lecturas
  de una sentada. Catálogo fotografiado 2026-05-19 (estantes = presunción).
- Mapa de assets completo y vetas de chisme verificables: `data/inventory.md`
  (§6 tiene la mesa inventario×ángulos; los ✱ se verifican antes de publicar).

## TODO / ángulos sin usar
🍷 Chusmerío (Bachman ya gastado en el feed — usar Christie 1926, Dumas
mercenario de Montevideo, Balzac y el café) · 🏆 Récords · 🔮 Horóscopo
lector · 🎤 Confesiones del estante N (candidato: L4, el estante
esquizofrénico: Sun Tzu + Dalai Lama + Leary + Kiyosaki) · 🕯️ Un día como
hoy · 💘 Romances de estantería (los Bok de L5-019 son matrimonio real de
astrónomos) · censo NatGeo como mini-juego · identificar los 21 UNK-* ·
¿qué King falta? (completismo con 50/65+).
