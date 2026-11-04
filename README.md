# Code Lab · portal del taller

Lo que abren los alumnos al llegar: **https://nau-ran.github.io/taller/**

## Cambiar la sesión del día

1. Abre [`js/config.js`](js/config.js) y pulsa el lápiz ✏️.
2. Cambia `sesionActiva: N`.
3. *Commit changes*. En ~1 min, F5 en el aula.

Con `modo: "calendario"` se abre sola cada día según las fechas.

El contenido de las sesiones está en [`js/sesiones.js`](js/sesiones.js), cada texto en
catalán y en castellano: `{ ca: "…", es: "…" }`. El portal sale en catalán y el botón
CA | ES de arriba lo cambia (se recuerda en ese navegador). Los textos fijos del portal
están en [`js/textos.js`](js/textos.js).
Panel del profe: botón 🔧 del pie, o `?profe` al final del enlace.
