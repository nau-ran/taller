// Lógica del portal. No hace falta tocar nada aquí para el día a día:
// lo que cambia está en config.js (cuándo) y sesiones.js (qué).
(function () {
  "use strict";

  const CFG = window.PORTAL_CONFIG;
  const SESIONES = window.SESIONES;
  const ZONA = window.ZONA_AUTONOMA;
  const TOTAL = SESIONES.length;

  // localStorage puede fallar (modo incógnito, aula bloqueada): nunca rompe la página.
  const almacen = {
    leer(k, def) {
      try { const v = localStorage.getItem("portal." + k); return v === null ? def : JSON.parse(v); }
      catch { return def; }
    },
    escribir(k, v) {
      try { v === null ? localStorage.removeItem("portal." + k) : localStorage.setItem("portal." + k, JSON.stringify(v)); }
      catch { /* sin almacenamiento: seguimos igual */ }
    },
  };

  // Pequeño constructor de nodos: todo el texto entra como textContent.
  function h(tag, attrs, ...hijos) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === false || v == null) continue;
      if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const c of hijos.flat()) if (c != null && c !== false) el.append(c.nodeType ? c : String(c));
    return el;
  }

  // ── ¿Qué sesión es hoy? ──────────────────────────────────────
  function hoyISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function sesionDeHoyPublicada() {
    if (CFG.modo === "calendario") {
      const hoy = hoyISO();
      let n = 1;
      for (let i = 1; i <= TOTAL; i++) if (CFG.calendario[i] && CFG.calendario[i] <= hoy) n = i;
      return n;
    }
    return Math.min(TOTAL, Math.max(1, Number(CFG.sesionActiva) || 1));
  }

  // La vista previa del profe solo vive en ESTE navegador.
  const vistaProfe = () => almacen.leer("profe.vista", null);
  const sesionDeHoy = () => vistaProfe()?.sesion ?? sesionDeHoyPublicada();
  const pasadasVisibles = () => (vistaProfe()?.pasadas ?? CFG.pasadas) === "visibles";

  function estadoDe(n) {
    const hoy = sesionDeHoy();
    if (n === hoy) return "hoy";
    if (n < hoy) return pasadasVisibles() ? "pasada" : "oculta";
    return CFG.futuras === "ocultas" ? "oculta" : "bloqueada";
  }

  // ── Misión (tarjeta grande) ──────────────────────────────────
  let enRepaso = null; // número de sesión pasada que se está viendo, o null

  function pintarMision() {
    const n = enRepaso ?? sesionDeHoy();
    const s = SESIONES[n - 1];
    const hechos = almacen.leer(`pasos.${n}`, []);
    const cont = document.getElementById("mision");
    cont.className = `mision color-${s.color}`;

    const pasos = s.pasos.map((texto, i) =>
      h("button", {
        type: "button",
        class: "paso" + (hechos.includes(i) ? " hecho" : ""),
        "aria-pressed": String(hechos.includes(i)),
        onclick: () => marcarPaso(n, i),
      },
        h("span", { class: "paso-num" }, hechos.includes(i) ? "✓" : String(i + 1)),
        h("span", { class: "paso-texto" }, texto),
      ));

    const completa = hechos.length === s.pasos.length;

    cont.replaceChildren(...[
      h("div", { class: "mision-cabecera" },
        h("div", { class: "mision-icono", "aria-hidden": "true" }, s.icono),
        h("div", null,
          h("div", { class: "mision-etiqueta" }, enRepaso ? `🔁 REPASO · SESIÓN ${n}` : `🎯 MISIÓN DE HOY · SESIÓN ${n}`),
          h("h1", { class: "mision-titulo" }, s.titulo),
          h("div", { class: "mision-plataforma" }, s.plataforma),
        ),
        enRepaso && h("button", { type: "button", class: "btn-volver", onclick: () => { enRepaso = null; pintarTodo(); } }, "← Volver a hoy"),
      ),
      h("p", { class: "mision-objetivo" }, s.objetivo),
      h("div", { class: "botones" },
        s.botones.map((b) => h("a", {
          class: "btn-gigante" + (b.secundario ? " secundario" : ""),
          href: b.url, target: "_blank", rel: "noopener",
        }, h("span", { "aria-hidden": "true" }, b.icono), b.texto, h("span", { class: "flecha" }, "↗")))),
      h("div", { class: "pasos" }, pasos),
      completa && h("div", { class: "completa" }, "🏅 ¡MISIÓN COMPLETA! Pasa al reto extra 👇"),
      s.nota && h("div", { class: "aviso nota" }, h("strong", null, "ℹ️ "), s.nota),
      h("div", { class: "extras" },
        h("div", { class: "aviso guardar" }, h("strong", null, "💾 Antes de irte: "), s.guardar),
        h("div", { class: "aviso reto" }, h("strong", null, "🏆 Reto extra: "), s.reto),
      ),
    ].filter(Boolean));
  }

  function marcarPaso(n, i) {
    const hechos = new Set(almacen.leer(`pasos.${n}`, []));
    hechos.has(i) ? hechos.delete(i) : hechos.add(i);
    almacen.escribir(`pasos.${n}`, [...hechos]);
    pintarMision();
    if (hechos.has(i) && hechos.size === SESIONES[n - 1].pasos.length) celebrar();
  }

  function celebrar() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const capa = document.getElementById("celebracion");
    const emojis = ["⭐", "✨", "🎉", "💥", "🏆", "⚡"];
    capa.replaceChildren(...Array.from({ length: 28 }, () => {
      const e = h("span", { class: "chispa" }, emojis[Math.floor(Math.random() * emojis.length)]);
      e.style.left = Math.random() * 100 + "vw";
      e.style.animationDelay = Math.random() * 0.4 + "s";
      e.style.fontSize = 18 + Math.random() * 26 + "px";
      return e;
    }));
    capa.hidden = false;
    setTimeout(() => { capa.hidden = true; }, 2200);
  }

  // ── Mapa de las 9 sesiones ───────────────────────────────────
  function pintarMapa() {
    const tarjetas = SESIONES.map((s) => {
      const estado = estadoDe(s.n);
      if (estado === "oculta") return null;
      if (estado === "bloqueada") {
        // No metemos el título en el DOM: el misterio también es motivación.
        return h("div", { class: "tarjeta bloqueada", "aria-label": `Sesión ${s.n}: bloqueada` },
          h("div", { class: "tarjeta-num" }, s.n),
          h("div", { class: "tarjeta-icono" }, "🔒"),
          h("div", { class: "tarjeta-titulo" }, "???"),
        );
      }
      const esHoy = estado === "hoy";
      const actual = (enRepaso ?? sesionDeHoy()) === s.n;
      return h("button", {
        type: "button",
        class: `tarjeta color-${s.color} ${esHoy ? "es-hoy" : "pasada"}${actual ? " actual" : ""}`,
        onclick: () => { enRepaso = esHoy ? null : s.n; pintarTodo(); scrollTo({ top: 0, behavior: "smooth" }); },
      },
        h("div", { class: "tarjeta-num" }, s.n),
        h("div", { class: "tarjeta-icono" }, s.icono),
        h("div", { class: "tarjeta-titulo" }, s.titulo),
        h("div", { class: "tarjeta-sub" }, esHoy ? "▶ HOY" : "✓ Repasar"),
      );
    });
    document.getElementById("mapa").replaceChildren(...tarjetas.filter(Boolean));
  }

  // ── Zona Autónoma ────────────────────────────────────────────
  let pestana = "retos";

  function pintarZona() {
    const zona = document.getElementById("zona");
    zona.hidden = !CFG.zonaAutonoma;
    if (zona.hidden) return;
    for (const b of zona.querySelectorAll(".pestana")) {
      b.classList.toggle("activa", b.dataset.tab === pestana);
      b.setAttribute("aria-selected", String(b.dataset.tab === pestana));
    }
    let items;
    if (pestana === "retos") {
      items = ZONA.retos.map((r) => h("div", { class: "mini" },
        h("div", { class: "mini-icono" }, r.icono),
        h("div", { class: "mini-texto" }, r.texto),
        h("div", { class: "nivel", title: `Dificultad ${r.nivel}` }, "⭐".repeat(r.nivel))));
    } else if (pestana === "atajos") {
      items = ZONA.atajos.map((a) => h("div", { class: "mini" },
        h("div", { class: "teclas" }, a.teclas.map((t) => h("kbd", null, t))),
        h("div", { class: "mini-texto" }, a.texto)));
    } else {
      items = ZONA.investiga.map((r) => h("div", { class: "mini" },
        h("div", { class: "mini-icono" }, r.icono),
        h("div", { class: "mini-texto" }, r.texto)));
    }
    document.getElementById("zona-contenido").replaceChildren(...items);
  }

  // ── Cabecera: barra de XP ────────────────────────────────────
  function pintarCabecera() {
    document.getElementById("nombre-taller").textContent = CFG.nombreTaller;
    const n = sesionDeHoy();
    document.getElementById("xp-sesion").textContent = `Sesión ${n}`;
    document.getElementById("xp-relleno").style.width = (n / TOTAL) * 100 + "%";

    const vp = vistaProfe();
    const banner = document.getElementById("banner-profe");
    banner.hidden = !vp;
    if (vp) {
      banner.replaceChildren(
        `👁 VISTA PREVIA DEL PROFE (solo en este navegador): sesión ${vp.sesion}. `,
        h("button", { type: "button", onclick: () => { almacen.escribir("profe.vista", null); pintarTodo(); } }, "Quitar"),
      );
    }
  }

  function pintarTodo() {
    pintarCabecera();
    pintarMision();
    pintarMapa();
    pintarZona();
  }

  // ── Sprint (temporizador de foco) ────────────────────────────
  let sprintFin = null, sprintTimer = null;

  function iniciarSprint(min) {
    sprintFin = Date.now() + min * 60000;
    document.getElementById("sprint-opciones").hidden = true;
    clearInterval(sprintTimer);
    sprintTimer = setInterval(tickSprint, 250);
    tickSprint();
  }

  function tickSprint() {
    const btn = document.getElementById("sprint-btn");
    const resta = Math.max(0, sprintFin - Date.now());
    const m = Math.floor(resta / 60000), s = Math.floor((resta % 60000) / 1000);
    btn.textContent = `⏱ ${m}:${String(s).padStart(2, "0")}`;
    btn.classList.add("corriendo");
    if (resta === 0) {
      clearInterval(sprintTimer);
      sprintFin = null;
      btn.textContent = "✅ ¡Tiempo! Estira 30 s";
      btn.classList.remove("corriendo");
      btn.classList.add("fin");
      setTimeout(() => { btn.textContent = "⏱ Sprint"; btn.classList.remove("fin"); }, 30000);
    }
  }

  function prepararSprint() {
    const btn = document.getElementById("sprint-btn");
    const opciones = document.getElementById("sprint-opciones");
    btn.addEventListener("click", () => {
      if (sprintFin) { // un segundo clic cancela
        clearInterval(sprintTimer); sprintFin = null;
        btn.textContent = "⏱ Sprint"; btn.classList.remove("corriendo");
        return;
      }
      opciones.hidden = !opciones.hidden;
    });
    for (const b of opciones.querySelectorAll("button")) {
      b.addEventListener("click", () => iniciarSprint(Number(b.dataset.min)));
    }
  }

  // ── Panel del profe ──────────────────────────────────────────
  function abrirPanelProfe() {
    const dlg = document.getElementById("dialogo-profe");
    const cerrar = h("button", { type: "button", class: "dialogo-cerrar", onclick: () => dlg.close(), "aria-label": "Cerrar" }, "✕");

    const entrada = h("input", { type: "password", class: "campo", placeholder: "Clave del profe", autocomplete: "off" });
    const error = h("div", { class: "error" });
    const entrar = () => {
      if (entrada.value === CFG.claveProfe) pintarPanel(dlg, cerrar);
      else { error.textContent = "Clave incorrecta"; entrada.select(); }
    };
    entrada.addEventListener("keydown", (e) => { if (e.key === "Enter") entrar(); });

    dlg.replaceChildren(cerrar,
      h("h2", null, "🔧 Panel del profe"),
      entrada,
      h("button", { type: "button", class: "btn-gigante", onclick: entrar }, "Entrar"),
      error);
    dlg.showModal();
    entrada.focus();
  }

  function pintarPanel(dlg, cerrar) {
    const publicada = sesionDeHoyPublicada();
    const vp = vistaProfe();
    const elegida = vp?.sesion ?? publicada;
    const pasadas = vp?.pasadas ?? CFG.pasadas;
    const linea = CFG.modo === "calendario"
      ? `modo: "calendario" → hoy toca la ${publicada} según las fechas.`
      : `sesionActiva: ${publicada}`;

    const aplicar = (cambios) => {
      almacen.escribir("profe.vista", { sesion: elegida, pasadas, ...cambios });
      enRepaso = null;
      pintarTodo();
      pintarPanel(dlg, cerrar);
    };

    const nuevaLinea = `sesionActiva: ${elegida},`;
    const copiar = h("button", {
      type: "button", class: "btn-chico",
      onclick: async (e) => {
        try { await navigator.clipboard.writeText(nuevaLinea); e.target.textContent = "¡Copiado!"; }
        catch { e.target.textContent = "Cópialo a mano"; }
      },
    }, "Copiar");

    dlg.replaceChildren(cerrar,
      h("h2", null, "🔧 Panel del profe"),
      h("p", { class: "panel-info" }, "Publicado para toda la clase: ", h("code", null, linea)),

      h("h3", null, "1 · Vista previa (solo este ordenador)"),
      h("div", { class: "selector" }, SESIONES.map((s) =>
        h("button", {
          type: "button", class: "sel" + (s.n === elegida ? " activa" : ""),
          onclick: () => aplicar({ sesion: s.n }),
        }, `${s.icono} ${s.n}`))),
      h("label", { class: "interruptor" },
        h("input", { type: "checkbox", checked: pasadas === "visibles", onchange: (e) => aplicar({ pasadas: e.target.checked ? "visibles" : "ocultas" }) }),
        " Mostrar sesiones pasadas (repaso)"),

      h("h3", null, "2 · Publicarlo para TODOS los ordenadores"),
      h("ol", { class: "panel-pasos" },
        h("li", null, "Abre config.js en GitHub: ",
          h("a", { href: CFG.editarConfigUrl, target: "_blank", rel: "noopener" }, "editar ✏️")),
        h("li", null, "Pon ", h("code", null, nuevaLinea), " ", copiar),
        h("li", null, "«Commit changes». En ~1 min, recargad (F5)."),
      ),
      h("p", { class: "panel-info" }, "Truco: con modo \"calendario\" no tienes que tocar nada cada día."),
      vp && h("button", { type: "button", class: "btn-gigante secundario", onclick: () => { almacen.escribir("profe.vista", null); pintarTodo(); dlg.close(); } }, "Salir de la vista previa"),
    );
  }

  // ── Arranque ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    for (const b of document.querySelectorAll(".pestana")) {
      b.addEventListener("click", () => { pestana = b.dataset.tab; pintarZona(); });
    }
    document.getElementById("abrir-profe").addEventListener("click", abrirPanelProfe);
    if (new URLSearchParams(location.search).has("profe")) abrirPanelProfe();
    prepararSprint();
    pintarTodo();
  });
})();
