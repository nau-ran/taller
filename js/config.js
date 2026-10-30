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
  modo: "manual",

  // La sesión de HOY (1-9). Solo se usa en modo "manual".
  sesionActiva: 1,

  // Solo en modo "calendario": fecha (AAAA-MM-DD) en que se abre cada sesión.
  // Antes del día 1 se ve la 1 como «hoy» para que nunca salga vacío.
  calendario: {
    1: "2026-11-04",
    2: "2026-11-11",
    3: "2026-11-18",
    4: "2026-11-25",
    5: "2026-12-02",
    6: "2026-12-09",
    7: "2026-12-16",
    8: "2027-01-13",
    9: "2027-01-20",
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
