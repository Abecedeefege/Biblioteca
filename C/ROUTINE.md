# Cómo activar la Routine de recomendaciones de C (la creás vos, no el agente)

El sistema de C ya está completo en el repo; lo único que falta para que
corra solo es el scheduler. **Prerequisitos antes de activarla**:

1. Esta rama mergeada a `main` (la app de C, el dispatcher con piso horario
   de París y el dispositivo `C` permitido en `tools/sync_devices.js`
   tienen que estar publicados).
2. El secret `VAPID_PRIVATE_KEY` ya cargado en Actions (es el mismo de
   siempre — no hay que tocar nada).
3. C suscripta desde su teléfono: mandale
   `https://abecedeefege.github.io/Biblioteca/C/recs/` — el onboarding la
   guía por el cuestionario, la cadencia y el permiso de notificaciones.
   Al registrarse, el workflow le manda solo el push de bienvenida
   (`c-welcome`) que la lleva a sus tres primeras fichas.

## Opción A — pedírselo a Claude (recomendada)

Abrí una sesión de Claude Code en [claude.ai/code](https://claude.ai/code)
sobre el entorno que tiene **Abecedeefege/Biblioteca** como source y pegale:

> Creá una Routine semanal que corra los domingos a las 08:00 UTC (10:00 de
> París en verano, 09:00 en invierno — antes de la ventana de envío de las
> 17:30 de París), en una **sesión nueva** cada vez, sobre este entorno,
> con este prompt exacto:
> `Leé C/agent/AGENT.md en este repo y ejecutá la corrida semanal del agente de recomendaciones de C.`
> Nombre: "My library — recomendaciones de C".

## Opción B — a mano en la UI

1. [claude.ai/code](https://claude.ai/code) → tu entorno con este repo →
   **Routines**.
2. New routine:
   - **Nombre**: `My library — recomendaciones de C`
   - **Cron**: `0 8 * * 0` (en UTC; domingo a la mañana en París todo el
     año).
   - **Sesión**: nueva por corrida (fresh session) — la memoria del agente
     vive en `C/agent/profile.md`, no en el chat.
   - **Prompt**: literalmente
     `Leé C/agent/AGENT.md en este repo y ejecutá la corrida semanal del agente de recomendaciones de C.`

## Por qué domingo 08:00 UTC

El push de cada ficha sale a las **17:30 hora de París** (lo encola el
agente; el dispatcher, `tools/send_push.js`, además impone un piso de 11:00
locales del destinatario). Corriendo a las 08:00 UTC el agente tiene horas
de sobra para leer el feedback de la semana, construir la ficha, pushear a
`main` y que Pages deploye antes de que el push linkee a la página.

## Cadencia weekly / biweekly

La elige C en su onboarding (y puede cambiarla con una nota en cualquier
ficha). El agente la lee de `sync/engagement.json` en cada corrida: si es
`biweekly` y la última entrega tiene menos de 12 días, esa corrida es un
no-op corto. No hace falta tocar la Routine para cambiar la cadencia.

## Control sin intervenir

Las primeras semanas, mirá la sesión que deja cada corrida: el reporte
final (feedback leído, decisión, libro elegido, SHA) es tu ventana de
control. Si C pausa los pushes desde una ficha (`push_unsubscribe`), el
agente pausa su dispositivo y te lo dice en el reporte — no hay que hacer
nada más.
