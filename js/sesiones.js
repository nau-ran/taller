// Contenido de las 9 sesiones y de la Zona Autónoma.
// Regla de oro TDAH: una frase por objetivo, 3 pasos, frases de < 10 palabras.
// `color` es uno de: cian, magenta, lima, ambar, violeta, rojo.
// Cada texto va en los dos idiomas: { ca: "…", es: "…" }. El portal sale en catalán
// y el botón CA | ES de arriba lo pasa a castellano. Si un texto es igual en los dos
// (un nombre, «Scratch»), basta con la cadena sola.

const SCRATCH = { texto: { ca: "Obre Scratch", es: "Abrir Scratch" }, url: "https://scratch.mit.edu/projects/editor/", icono: "🐱" };
// Arcade y Code.org no tienen catalán: sin forzar el idioma, en un navegador en catalán
// salen en inglés. `?lang=es-ES` (Arcade) y `/es/` (Code.org) los dejan en castellano.
const ARCADE = { texto: { ca: "Obre MakeCode Arcade", es: "Abrir MakeCode Arcade" }, url: "https://arcade.makecode.com/?lang=es-ES", icono: "👾" };

const GUARDAR_SCRATCH = {
  ca: "Fitxer → Desa al teu ordinador (.sb3). Després envia-te'l per correu 📧.",
  es: "Archivo → Guardar en tu ordenador (.sb3). Luego envíatelo por correo 📧.",
};
// Arcade guarda el proyecto dentro de una imagen .png (la carpeta la acepta) y se recupera
// con Importar → «Abrir archivos de su computadora», o arrastrándola al editor.
const GUARDAR_ARCADE = {
  ca: "Botó 💾 al costat del nom → es baixa una imatge .png. Puja-la a la teva carpeta.",
  es: "Botón 💾 junto al nombre → se descarga una imagen .png. Súbela a tu carpeta.",
};

window.SESIONES = [
  {
    n: 1, icono: "🐱", color: "magenta",
    plataforma: "Scratch",
    titulo: { ca: "El mem interactiu", es: "El meme interactivo" },
    objetivo: { ca: "Fes un mem que reacciona quan el toques.", es: "Haz un meme que reacciona cuando lo tocas." },
    pasos: [
      { ca: "Tria un fons i un personatge.", es: "Elige un fondo y un personaje." },
      { ca: "«Quan es faci clic» → que digui alguna cosa + so.", es: "«Al hacer clic» → que diga algo + sonido." },
      { ca: "Afegeix un altre personatge que li contesti.", es: "Añade otro personaje que le conteste." },
    ],
    botones: [SCRATCH, { texto: { ca: "Idees de mems", es: "Ideas de memes" }, url: "https://scratch.mit.edu/ideas", icono: "💡", secundario: true }],
    guardar: GUARDAR_SCRATCH,
    reto: { ca: "Que canviï de vestit amb les fletxes del teclat.", es: "Que cambie de disfraz con las flechas del teclado." },
  },
  {
    n: 2, icono: "🧩", color: "cian",
    plataforma: "Code.org",
    titulo: { ca: "Trencaclosques lògics", es: "Puzles lógicos" },
    objetivo: { ca: "Resol trencaclosques: pensa abans de prémer ▶.", es: "Resuelve puzles: piensa antes de pulsar ▶." },
    pasos: [
      { ca: "Obre el curs que digui el profe.", es: "Abre el curso que diga el profe." },
      { ca: "Llegeix el repte. Arrossega blocs.", es: "Lee el reto. Arrastra bloques." },
      { ca: "Busca la solució amb MENYS blocs.", es: "Busca la solución con MENOS bloques." },
    ],
    botones: [
      { texto: { ca: "Minecraft Aventurer", es: "Minecraft Aventurero" }, url: "https://studio.code.org/es/s/mc", icono: "⛏️" },
      { texto: { ca: "Més trencaclosques (Hora del Codi)", es: "Más puzles (Hora del Código)" }, url: "https://hourofcode.com/es/learn", icono: "🧠", secundario: true },
    ],
    correo: false, // Code.org guarda con la sesión iniciada: no hay archivo ni enlace que mandarse
    guardar: {
      ca: "Code.org només desa si inicies sessió. Si no, apunta el nivell on vas.",
      es: "Code.org guarda solo si inicias sesión. Si no, apunta el nivel en el que vas.",
    },
    reto: { ca: "Torna a fer un nivell amb el mínim de blocs possible.", es: "Rehaz un nivel con el mínimo de bloques posible." },
  },
  {
    n: 3, icono: "👾", color: "lima",
    plataforma: "MakeCode Arcade",
    titulo: { ca: "Primers jocs retro", es: "Primeros juegos retro" },
    objetivo: { ca: "Un personatge que es mou i atrapa coses.", es: "Un personaje que se mueve y atrapa cosas." },
    pasos: [
      { ca: "Projecte nou. Crea el teu sprite.", es: "Nuevo proyecto. Crea tu sprite." },
      { ca: "«Mou amb botons» → ja camina!", es: "«Mover con botones» → ¡ya anda!" },
      { ca: "Menjar que apareix + marcador de punts.", es: "Comida que aparece + marcador de puntos." },
    ],
    botones: [ARCADE, { texto: { ca: "Editor de pixel art", es: "Editor de pixel art" }, url: "https://arcade.makecode.com/?lang=es-ES", icono: "🎨", secundario: true }],
    guardar: GUARDAR_ARCADE,
    reto: { ca: "Afegeix un enemic que et persegueixi i 3 vides.", es: "Añade un enemigo que te persiga y 3 vidas." },
  },
  {
    n: 4, icono: "🪄", color: "violeta",
    plataforma: "Code.org Minecraft",
    titulo: { ca: "El teu propi Minecraft", es: "Tu propio Minecraft" },
    objetivo: { ca: "Programa les criatures: que facin màgia en tocar-les.", es: "Programa las criaturas: que hagan magia al tocarlas." },
    pasos: [
      { ca: "Obre el Dissenyador de Minecraft. Fes els nivells 1-11.", es: "Abre el Diseñador de Minecraft. Haz los niveles 1-11." },
      { ca: "Nivell 12: el teu món. Fes aparèixer criatures.", es: "Nivel 12: tu mundo. Haz aparecer criaturas." },
      { ca: "Quan toquis una criatura → que passi màgia!", es: "Al tocar una criatura → ¡que pase magia!" },
    ],
    botones: [
      { texto: { ca: "Dissenyador de Minecraft", es: "Diseñador de Minecraft" }, url: "https://studio.code.org/es/s/minecraft/lessons/1/levels/1", icono: "🪄" },
      { texto: { ca: "Directe al nivell 12", es: "Directo al nivel 12" }, url: "https://studio.code.org/es/s/minecraft/lessons/1/levels/12", icono: "🚀", secundario: true },
    ],
    // Sin cuenta, «Terminar» del nivel 12 da un enlace studio.code.org/c/… que reproduce el
    // juego y, con «Cómo funciona», devuelve el programa para seguir (probado el 8-nov-2026).
    guardar: {
      ca: "Nivell 12 → «Terminar» → copia l'enllaç. Desa'l a la teva carpeta.",
      es: "Nivel 12 → «Terminar» → copia el enlace. Guárdalo en tu carpeta.",
    },
    reto: { ca: "Que ploguin pollastres 🐔 quan es faci de nit.", es: "Que lluevan pollos 🐔 cuando se haga de noche." },
  },
  {
    n: 5, icono: "🪤", color: "ambar",
    plataforma: "MakeCode Arcade",
    titulo: { ca: "Minijocs i paranys", es: "Minijuegos y trampas" },
    objetivo: { ca: "Fes un nivell amb paranys per a un company.", es: "Haz un nivel con trampas para un compi." },
    pasos: [
      { ca: "Dibuixa un mapa amb parets i lava.", es: "Dibuja un mapa con paredes y lava." },
      { ca: "Si toques la lava → perds una vida.", es: "Si tocas la lava → pierdes una vida." },
      { ca: "Afegeix compte enrere i un tresor al final.", es: "Añade cuenta atrás y un tesoro al final." },
    ],
    botones: [ARCADE],
    guardar: GUARDAR_ARCADE,
    nota: {
      ca: "La lava i les punxes són a la galeria de rajoles, a «Miscellaneous».",
      es: "La lava y los pinchos están en la galería de teselas, en «Miscellaneous».",
    },
    reto: { ca: "Paranys que s'obren i es tanquen cada 2 segons.", es: "Trampas que se abren y se cierran cada 2 segundos." },
  },
  {
    n: 6, icono: "🤖", color: "cian",
    plataforma: { ca: "MakeCode Arcade + IA", es: "MakeCode Arcade + IA" },
    titulo: { ca: "El PNJ intel·ligent", es: "El PNJ inteligente" },
    objetivo: { ca: "Crea un ajudant que parla i obeeix.", es: "Crea un ayudante que habla y obedece." },
    pasos: [
      { ca: "Crea el PNJ: que et segueixi per la pantalla.", es: "Crea el PNJ: que te siga por la pantalla." },
      { ca: "Amb la IA del projector, inventa les seves frases.", es: "Con la IA del proyector, inventa sus frases." },
      { ca: "Prem A (Espai) → et diu una de les frases.", es: "Pulsa A (Espacio) → te dice una de las frases." },
    ],
    botones: [ARCADE],
    guardar: GUARDAR_ARCADE,
    nota: {
      ca: "La IA la fa servir el profe a la pantalla. Tu li dictes, TU decideixes què es queda.",
      es: "La IA la maneja el profe en pantalla. Tú le dictas, TÚ decides qué se queda.",
    },
    reto: { ca: "Que et doni una pista diferent cada vegada.", es: "Que te dé una pista distinta cada vez." },
  },
  {
    n: 7, icono: "🤝", color: "magenta",
    plataforma: "MakeCode Arcade",
    titulo: { ca: "Repte cooperatiu", es: "Reto cooperativo" },
    objetivo: { ca: "En equip: cadascú programa una prova del circuit.", es: "En equipo: cada uno programa una prueba del circuito." },
    pasos: [
      { ca: "Equips de 3: cadascú fa UNA prova curta.", es: "Equipos de 3: cada uno hace UNA prueba corta." },
      { ca: "Proveu-les en ordre, d'ordinador en ordinador.", es: "Probadlas en orden, de ordenador en ordenador." },
      { ca: "Un altre equip fa el vostre circuit. Cronòmetre!", es: "Otro equipo hace vuestro circuito. ¡Cronómetro!" },
    ],
    botones: [ARCADE],
    guardar: GUARDAR_ARCADE,
    reto: { ca: "Cada prova dona una lletra: junteu la paraula secreta.", es: "Cada prueba da una letra: juntad la palabra secreta." },
  },
  {
    n: 8, icono: "🐛", color: "rojo",
    plataforma: "Scratch · Arcade",
    titulo: { ca: "Hackeja el codi", es: "Hackea el código" },
    objetivo: { ca: "Projectes trencats a posta: caça els bugs.", es: "Proyectos rotos a propósito: caza los bugs." },
    pasos: [
      { ca: "Obre el projecte trencat del profe.", es: "Abre el proyecto roto del profe." },
      { ca: "Prova'l. Què falla? Digues-ho en veu alta.", es: "Pruébalo. ¿Qué falla? Dilo en voz alta." },
      { ca: "Arregla'l i apunta cada bug caçat.", es: "Arréglalo y apunta cada bug cazado." },
    ],
    botones: [ARCADE, SCRATCH],
    guardar: {
      ca: "Desa la versió ARREGLADA amb un altre nom i envia-te-la per correu 📧.",
      es: "Guarda la versión ARREGLADA con otro nombre y envíatela por correo 📧.",
    },
    reto: {
      ca: "Trenca tu un projecte (1 bug amagat) i passa'l a un company.",
      es: "Rompe tú un proyecto (1 bug escondido) y pásaselo a un compi.",
    },
  },
  {
    n: 9, icono: "🎉", color: "lima",
    plataforma: { ca: "Tot!", es: "¡Todo!" },
    titulo: { ca: "La Gran Exhibició", es: "La Gran Exhibición" },
    objetivo: { ca: "Ensenya el teu millor joc i juga als dels altres.", es: "Enseña tu mejor juego y juega los de los demás." },
    pasos: [
      { ca: "Tria el teu millor projecte i poleix UNA cosa.", es: "Elige tu mejor proyecto y pule UNA cosa." },
      { ca: "Prepara 1 frase: què fa i què va ser difícil.", es: "Prepara 1 frase: qué hace y qué fue difícil." },
      { ca: "Ronda de jocs i votacions 🏆.", es: "Ronda de juegos y votaciones 🏆." },
    ],
    botones: [
      { texto: { ca: "Les meves coses a Scratch", es: "Mis cosas en Scratch" }, url: "https://scratch.mit.edu/mystuff/", icono: "🐱" },
      ARCADE,
    ],
    guardar: {
      ca: "Avui NO es perd res: comparteix l'enllaç del teu joc amb la teva família.",
      es: "Hoy NO se pierde nada: comparte el enlace de tu juego con tu familia.",
    },
    reto: { ca: "Premi especial al bug més divertit del taller.", es: "Premio especial al bug más gracioso del taller." },
  },
];

window.ZONA_AUTONOMA = {
  retos: [
    { icono: "🌀", nivel: 1, texto: { ca: "Scratch: fes que un personatge reboti per tota la pantalla.", es: "Scratch: haz que un personaje rebote por toda la pantalla." } },
    { icono: "🎵", nivel: 1, texto: { ca: "Scratch: un piano amb 5 tecles del teclat.", es: "Scratch: un piano con 5 teclas del teclado." } },
    { icono: "🌌", nivel: 2, texto: { ca: "Arcade: fons que es mou (scroll) com en un joc de naus.", es: "Arcade: fondo que se mueve (scroll) como en un juego de naves." } },
    { icono: "❤️", nivel: 2, texto: { ca: "Arcade: power-up que dona una vida extra.", es: "Arcade: power-up que da una vida extra." } },
    { icono: "⛏️", nivel: 2, texto: { ca: "Code.org Minecraft: l'Agent («El Viaje del Héroe»), fins al nivell 12.", es: "Code.org Minecraft: el Agente («El Viaje del Héroe»), hasta el nivel 12." } },
    { icono: "🧠", nivel: 3, texto: { ca: "Qualsevol: un cap final amb barra de vida.", es: "Cualquiera: un jefe final con barra de vida." } },
    { icono: "💾", nivel: 3, texto: { ca: "Arcade: desa el rècord (high score) entre partides.", es: "Arcade: guarda el récord (high score) entre partidas." } },
  ],
  atajos: [
    { teclas: ["Ctrl", "Z"], texto: { ca: "Desfer (el teu millor amic!)", es: "Deshacer (¡tu mejor amigo!)" } },
    { teclas: ["Ctrl", "Shift", "T"], texto: { ca: "Torna a obrir la pestanya que has tancat sense voler", es: "Reabrir la pestaña que cerraste sin querer" } },
    { teclas: ["Ctrl", "+ / −"], texto: { ca: "Zoom de la pàgina", es: "Zoom de la página" } },
    { teclas: ["F11"], texto: { ca: "Pantalla completa", es: "Pantalla completa" } },
    { teclas: [{ ca: "Clic dret", es: "Clic dcho." }], texto: { ca: "Duplicar o esborrar blocs (Scratch i MakeCode)", es: "Duplicar o borrar bloques (Scratch y MakeCode)" } },
    { teclas: ["W", "A", "S", "D"], texto: { ca: "Arcade: moure't (o les fletxes)", es: "Arcade: moverte (o las flechas)" } },
    { teclas: [{ ca: "Espai", es: "Espacio" }], texto: { ca: "Arcade: botó A (també la Z)", es: "Arcade: botón A (también la Z)" } },
  ],
  investiga: [
    { icono: "🔍", texto: { ca: "A MakeCode, prem «JavaScript» a dalt. Reconeixes els teus blocs?", es: "En MakeCode, pulsa «JavaScript» arriba. ¿Reconoces tus bloques?" } },
    { icono: "👀", texto: { ca: "Obre un joc famós de Scratch i prem «Mira a dins».", es: "Abre un juego famoso de Scratch y pulsa «Ver dentro»." } },
    { icono: "🪂", texto: { ca: "Com es programa la gravetat en un joc de plataformes?", es: "¿Cómo se programa la gravedad en un plataformas?" } },
    { icono: "🎨", texto: { ca: "Dibuixa el teu propi sprite de 16×16 píxels.", es: "Dibuja tu propio sprite de 16×16 píxeles." } },
    { icono: "🎲", texto: { ca: "Què és un nombre «aleatori» i per a què el fan servir els jocs?", es: "¿Qué es un número «aleatorio» y para qué lo usan los juegos?" } },
  ],
};
