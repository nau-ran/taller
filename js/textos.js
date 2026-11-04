// Los textos del portal, en catalán (por defecto) y en castellano. Los de las
// misiones están en sesiones.js. El idioma se recuerda en este navegador.
// `I18N.t(clave, …)`: un texto del portal. `I18N.tx(valor)`: un texto de
// sesiones.js, que es { ca, es } o una cadena igual en los dos.
(function () {
  "use strict";

  const CA = {
    descripcion: "Portal central del taller de programació",
    progreso: "Progrés del taller",
    temporizador: "Temporitzador de concentració",
    mapa: "🗺️ Mapa de missions",
    zona: "🚀 Zona Autònoma",
    sigueTu: "Has acabat? Continua tu!",
    retosExtra: "🏆 Reptes extra",
    atajos: "⌨️ Dreceres",
    seBorran: "Els ordinadors s'esborren en apagar-los:",
    guardaEnlace: "desa sempre el teu enllaç",
    panelProfe: "Tauler del profe",
    cambiarA: "Canvia a castellà",
    repaso: (n) => `🔁 REPÀS · SESSIÓ ${n}`,
    misionHoy: (n) => `🎯 MISSIÓ D'AVUI · SESSIÓ ${n}`,
    volverHoy: "← Torna a avui",
    completa: "🏅 MISSIÓ COMPLETA! Passa al repte extra 👇",
    antesDeIrte: "💾 Abans de marxar: ",
    retoExtra: "🏆 Repte extra: ",
    bloqueada: (n) => `Sessió ${n}: bloquejada`,
    hoy: "▶ AVUI",
    repasar: "✓ Repassa",
    dificultad: (n) => `Dificultat ${n}`,
    sesion: (n) => `Sessió ${n}`,
    vistaPrevia: (n) => `👁 VISTA PRÈVIA DEL PROFE (només en aquest navegador): sessió ${n}. `,
    quitar: "Treu",
    tiempo: "✅ Temps! Estira't 30 s",
    cerrar: "Tanca",
    claveProfe: "Clau del profe",
    claveIncorrecta: "Clau incorrecta",
    tituloPanel: "🔧 Tauler del profe",
    entrar: "Entra",
    lineaCalendario: (n) => `modo: "calendario" → avui toca la ${n} segons les dates.`,
    copiado: "Copiat!",
    copiaAMano: "Copia-ho a mà",
    copiar: "Copia",
    publicado: "Publicat per a tota la classe: ",
    paso1: "1 · Vista prèvia (només aquest ordinador)",
    mostrarPasadas: " Mostra les sessions passades (repàs)",
    paso2: "2 · Publica-ho per a TOTS els ordinadors",
    abreConfig: "Obre config.js a GitHub: ",
    editar: "edita ✏️",
    pon: "Posa ",
    commit: "«Commit changes». En ~1 min, recarregueu (F5).",
    truco: "Truc: amb modo \"calendario\" no has de tocar res cada dia.",
    salirVista: "Surt de la vista prèvia",
  };

  const ES = {
    descripcion: "Portal central del taller de programación",
    progreso: "Progreso del taller",
    temporizador: "Temporizador de concentración",
    mapa: "🗺️ Mapa de misiones",
    zona: "🚀 Zona Autónoma",
    sigueTu: "¿Has acabado? ¡Sigue tú!",
    retosExtra: "🏆 Retos extra",
    atajos: "⌨️ Atajos",
    seBorran: "Los ordenadores se borran al apagar:",
    guardaEnlace: "guarda siempre tu enlace",
    panelProfe: "Panel del profe",
    cambiarA: "Cambiar a catalán",
    repaso: (n) => `🔁 REPASO · SESIÓN ${n}`,
    misionHoy: (n) => `🎯 MISIÓN DE HOY · SESIÓN ${n}`,
    volverHoy: "← Volver a hoy",
    completa: "🏅 ¡MISIÓN COMPLETA! Pasa al reto extra 👇",
    antesDeIrte: "💾 Antes de irte: ",
    retoExtra: "🏆 Reto extra: ",
    bloqueada: (n) => `Sesión ${n}: bloqueada`,
    hoy: "▶ HOY",
    repasar: "✓ Repasar",
    dificultad: (n) => `Dificultad ${n}`,
    sesion: (n) => `Sesión ${n}`,
    vistaPrevia: (n) => `👁 VISTA PREVIA DEL PROFE (solo en este navegador): sesión ${n}. `,
    quitar: "Quitar",
    tiempo: "✅ ¡Tiempo! Estira 30 s",
    cerrar: "Cerrar",
    claveProfe: "Clave del profe",
    claveIncorrecta: "Clave incorrecta",
    tituloPanel: "🔧 Panel del profe",
    entrar: "Entrar",
    lineaCalendario: (n) => `modo: "calendario" → hoy toca la ${n} según las fechas.`,
    copiado: "¡Copiado!",
    copiaAMano: "Cópialo a mano",
    copiar: "Copiar",
    publicado: "Publicado para toda la clase: ",
    paso1: "1 · Vista previa (solo este ordenador)",
    mostrarPasadas: " Mostrar sesiones pasadas (repaso)",
    paso2: "2 · Publicarlo para TODOS los ordenadores",
    abreConfig: "Abre config.js en GitHub: ",
    editar: "editar ✏️",
    pon: "Pon ",
    commit: "«Commit changes». En ~1 min, recargad (F5).",
    truco: "Truco: con modo \"calendario\" no tienes que tocar nada cada día.",
    salirVista: "Salir de la vista previa",
  };

  const DICC = { ca: CA, es: ES };
  const IDIOMAS = ["ca", "es"];
  const GUARDADO = "portal.idioma";

  let actual = "ca";
  try {
    const v = localStorage.getItem(GUARDADO);
    if (IDIOMAS.includes(v)) actual = v;
  } catch { /* sin almacenamiento: catalán */ }

  window.I18N = {
    IDIOMAS,
    DICC,
    idioma: () => actual,
    t(clave, ...datos) {
      const v = DICC[actual][clave] ?? CA[clave];
      if (v === undefined) return clave;
      return typeof v === "function" ? v(...datos) : v;
    },
    // Un texto de sesiones.js: { ca, es } → el del idioma (o el otro si faltara).
    tx(valor) {
      if (valor == null || typeof valor !== "object") return valor;
      return valor[actual] ?? valor.ca ?? valor.es ?? "";
    },
    fijar(nuevo) {
      if (!IDIOMAS.includes(nuevo) || nuevo === actual) return false;
      actual = nuevo;
      try { localStorage.setItem(GUARDADO, nuevo); } catch { /* no se recuerda, pero cambia */ }
      return true;
    },
  };
})();
