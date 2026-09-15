# Suscripciones — cadencia elegida por el dueño

Tres páginas estáticas y un archivo. Responden a una pregunta que antes no
tenía dónde contestarse: **¿cuántas veces por semana quiero que me suene el
teléfono, y qué días?**

| URL | Qué es |
| --- | --- |
| `suscripcion/` | hub de los dos canales, con su estado real |
| `suscripcion/libros.html` | cadencia de las fichas de libro, **por lector** |
| `suscripcion/libros.html?quien=sofi` | el mismo, ya apuntando a un lector (`sofi` / `andy` / `casa`) — para compartir el link |
| `suscripcion/cine.html` | cadencia de La Sala (películas y series), para la casa |
| `suscripcion/ultima.html?de=libros` | la última ficha que salió de verdad |
| `suscripcion/ultima.html?de=cine` | la última función que salió de verdad |

## Dónde vive la elección

`notifications/preferences.json`:

```json
{
  "streams": {
    "libros": { "enabled": true, "per_week": 7, "days": [1,2,3,4,5,6,7], "hour_local": 19 },
    "cine":   { "enabled": true, "per_week": 1, "days": [5],             "hour_local": 19 }
  },
  "devices": {
    "Andy": { "libros": { "enabled": true, "per_week": 2, "days": [3,7] } }
  }
}
```

- `days` en ISO: **1 = lunes … 7 = domingo**. Es lo que se aplica; `per_week`
  queda como registro de lo que eligió el dueño.
- `devices[<nombre>][<stream>]` **pisa** al default de `streams[<stream>]`.
  Lo que elija Andy no le cambia nada a Sofi.
- Regla de seguridad: **sin archivo, sin stream, o sin entrada para ese
  dispositivo, no hay puerta** — se manda como siempre. Nada se rompe si el
  archivo desaparece.

Mapa por defecto de frecuencia → días (se puede pisar a mano en la página):

| × semana | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| libros | dom | mié, dom | mar, jue, dom | lun, mié, vie, dom | lun–vie | lun–sáb | todos |
| cine | vie | mar, vie | lun, mié, vie | — | — | — | — |

## Quién escribe y quién aplica

1. **La página escribe**, por dos caminos a la vez:
   - **relay público** (Supabase, sin credenciales) — siempre. Anda en
     cualquier teléfono de la casa. `tools/sync_devices.js` lo baja al repo en
     la corrida siguiente del workflow (≤10 min) por `type:'pref'`, aplicando
     por `ts` (un evento viejo nunca pisa a uno nuevo, y repetir el mismo no
     ensucia el repo con un commit por corrida).
   - **GitHub API** — solo si ese navegador tiene PAT guardado
     (`engage/setup.html`, paso 1). Aplica al instante.
2. **`tools/send_push.js` aplica**, justo antes de mandar. Si el día local del
   destinatario no está entre los elegidos, esa notificación queda
   `status: "skipped"` con su motivo, y se anota un evento `skipped` en
   `send_log.json`. **La ficha igual queda archivada en el cajón**: lo que
   cambia es cuántas veces suena el teléfono, no cuánto se escribe.
3. **Los agentes leen** (`/recomendacion`, `/engagement`) para no fabricar
   fichas que nadie va a recibir. No escriben este archivo.

Nunca tienen puerta: los pushes de prueba, las bienvenidas y todo lo que lleve
`ignore_floor: true` (una confirmación que el dueño acaba de pedir con un tap).

## Qué es cada stream

El stream se deduce del `id` de la notificación, no de un campo aparte:

| stream | ids | ejemplo |
| --- | --- | --- |
| `libros` | `^\d{4}-\d{2}-\d{2}-rec(-\|$)` | `2026-09-14-rec-andy` |
| `cine` | `(^\|-)cine(-\|$)` | `2026-07-31-cine` |
| — (sin puerta) | todo lo demás | `test-…`, `sofi-bienvenida`, `…-viaje` |

## Links para compartir

`libros.html` acepta `?quien=sofi|andy|casa`. Sirve para mandarle a cada uno
**su** link sin depender de lo que tenga guardado ese navegador. Solo
**preselecciona**: nunca escribe `biblioteca_device_name`, así abrir el link de
Sofi desde otro teléfono no le cambia la identidad a ese teléfono ni ensucia su
feedback. Sin parámetro, la página usa el nombre del dispositivo
(`sofi.html` se lo deja guardado al teléfono de Sofi) y, si no hay ninguno,
cae en Andy.

`cine.html` y `ultima.html` son de la casa: el mismo link sirve para los dos.

## La cadencia no es el permiso

Dos cosas distintas, y se confunden fácil:

- **Cadencia** (acá): *cuándo* se manda.
- **Permiso de notificaciones** (`engage/setup.html`): *si llega*.

Si el teléfono no suena nunca, no es la frecuencia: es el permiso, o el
dispositivo quedó en `paused` / `invalid` en `notifications/subscription.json`.
