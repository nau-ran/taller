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

## Al publicar un cambio de CSS o JS

Sube el `?v=` en las cinco líneas de [`index.html`](index.html) (`css/estilos.css` y los cuatro
`js/…`), las cinco con el mismo valor (la fecha vale). GitHub Pages cachea 10 minutos y, sin
eso, un navegador puede juntar el `index.html` nuevo con un JS viejo. `config.js` no hace
falta: cambiarlo cada día no cambia el resto.
Panel del profe: botón 🔧 del pie, o `?profe` al final del enlace.

## La clave del panel del profe

En `js/config.js` no está la clave, solo su huella SHA-256 (`claveProfeSha256`). Para
cambiarla, en un clon del repo:

```bash
bash herramientas/nueva-clave-profe.sh
```

Te la pide en la terminal (no se ve), escribe la huella en `config.js` y no guarda la clave
en ningún sitio: apúntala en tu gestor de contraseñas. Luego, commit y push. Como la huella
se ve, la clave tiene que ser larga (16 o más; vale una frase).

## Botón de la carpeta

`carpetaUrl` en `js/config.js` (por defecto `https://taller.nauran.dev/`): sale en «Abans de
marxar» de cada misión que tiene algo que llevarse y en el pie. Vacío, no sale.
