// ─────────────────────────────────────────────────────────────
//  PANEL DE CONTROL DEL PROFE — lo único que tocas cada día
// ─────────────────────────────────────────────────────────────
//  Edítalo en GitHub (lápiz ✏️ → «Commit changes») y en ~1 min
//  lo ven todos los ordenadores del aula al recargar.
// ─────────────────────────────────────────────────────────────

window.PORTAL_CONFIG = {
  nombreTaller: "CODE LAB",

  // "manual"     → manda `sesionActiva` (la cambias tú cada día).
  // "calendario" → se desbloquea sola el día que pongas en `calendario`.
  modo: "calendario",

  // La sesión de HOY (1-9). Solo se usa en modo "manual".
  sesionActiva: 1,

  // Solo en modo "calendario": fecha (AAAA-MM-DD) en que se abre cada sesión.
  // Antes del día 1 se ve la 1 como «hoy» para que nunca salga vacío.
  calendario: {
    1: "2027-01-14",
    2: "2027-01-21",
    3: "2027-01-28",
    4: "2027-02-04",
    5: "2027-02-11",
    6: "2027-02-18",
    7: "2027-02-25",
    8: "2027-03-04",
    9: "2027-03-11",
  },

  // Sesiones pasadas: "visibles" (repaso) | "ocultas" (foco total).
  pasadas: "visibles",

  // Sesiones futuras: "misterio" (candado + ???) | "ocultas" (ni se ven).
  futuras: "misterio",

  // Zona Autónoma para los que acaban antes: true | false.
  zonaAutonoma: true,

  // Clave del panel del profe (botón 🔧 abajo del todo).
  // OJO: es una web estática; quien lea el código fuente la ve.
  // Sirve para que nadie toque sin querer, no como seguridad.
  claveProfe: "profe2026",

  // Enlace para editar ESTE fichero en GitHub (sale en el panel del profe).
  // Apunta a nau-ran/taller.
  editarConfigUrl: "https://github.com/nau-ran/taller/edit/main/js/config.js",
};
