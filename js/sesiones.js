// Contenido de las 9 sesiones y de la Zona Autónoma.
// Regla de oro TDAH: una frase por objetivo, 3 pasos, frases de < 10 palabras.
// `color` es uno de: cian, magenta, lima, ambar, violeta, rojo.
// Cada texto va en los dos idiomas: { ca: "…", es: "…" }. El portal sale en catalán
// y el botón CA | ES de arriba lo pasa a castellano. Si un texto es igual en los dos
// (un nombre, «Scratch»), basta con la cadena sola.

const SCRATCH = { texto: { ca: "Obre Scratch", es: "Abrir Scratch" }, url: "https://scratch.mit.edu/projects/editor/", icono: "🐱" };
const ARCADE = { texto: { ca: "Obre MakeCode Arcade", es: "Abrir MakeCode Arcade" }, url: "https://arcade.makecode.com/", icono: "👾" };
const MC_MAKECODE = { texto: { ca: "Tutorials MakeCode Minecraft", es: "Tutoriales MakeCode Minecraft" }, url: "https://minecraft.makecode.com/", icono: "📘", secundario: true };

const GUARDAR_SCRATCH = {
  ca: "Fitxer → Desa al teu ordinador (.sb3). Després envia-te'l per correu 📧.",
  es: "Archivo → Guardar en tu ordenador (.sb3). Luego envíatelo por correo 📧.",
};
const GUARDAR_ARCADE = {
  ca: "Botó Comparteix → copia l'enllaç i envia-te'l per correu 📧.",
  es: "Botón Compartir → copia el enlace y envíatelo por correo 📧.",
};
const GUARDAR_MC = {
  ca: "Code Builder → Comparteix → copia l'enllaç i envia-te'l per correu 📧. L'ordinador s'esborra!",
  es: "Code Builder → Compartir → copia el enlace y envíatelo por correo 📧. ¡El ordenador se borra!",
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
      { texto: { ca: "Minecraft Aventurer", es: "Minecraft Aventurero" }, url: "https://studio.code.org/s/mc", icono: "⛏️" },
      { texto: { ca: "Més trencaclosques (Hora del Codi)", es: "Más puzles (Hora del Código)" }, url: "https://hourofcode.com/es/learn", icono: "🧠", secundario: true },
    ],
    guardar: {
      ca: "Code.org només desa si inicies sessió. Si no, apunta el nivell on vas.",
      es: "Code.org guarda solo si inicias sesión. Si no, apunta el nivel en el que vas.",
    },
    reto: { ca: "Torna a fer un nivell amb els mínims blocs possibles.", es: "Rehaz un nivel con el mínimo de bloques posible." },
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
    botones: [ARCADE, { texto: { ca: "Editor de pixel art", es: "Editor de pixel art" }, url: "https://arcade.makecode.com/", icono: "🎨", secundario: true }],
    guardar: GUARDAR_ARCADE,
    reto: { ca: "Afegeix un enemic que et persegueixi i 3 vides.", es: "Añade un enemigo que te persiga y 3 vidas." },
  },
  {
    n: 4, icono: "🪄", color: "violeta",
    plataforma: "MakeCode Minecraft",
    titulo: { ca: "La vareta màgica i les ordres", es: "La varita mágica y comandos" },
    objetivo: { ca: "Programa ordres que fan màgia al món.", es: "Programa comandos que hacen magia en el mundo." },
    pasos: [
      { ca: "Minecraft Education → tecla C (Code Builder).", es: "Minecraft Education → tecla C (Code Builder)." },
      { ca: "Ordre de xat «magia» → crea blocs.", es: "Comando de chat «magia» → crea bloques." },
      { ca: "Quan facis servir la vareta → llança alguna cosa!", es: "Al usar tu varita → ¡lanza algo!" },
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: { ca: "Una ordre «pluja» que faci ploure pollastres 🐔.", es: "Un comando «lluvia» que haga llover pollos 🐔." },
  },
  {
    n: 5, icono: "🪤", color: "ambar",
    plataforma: "MakeCode Minecraft",
    titulo: { ca: "Minijocs i paranys", es: "Minijuegos y trampas" },
    objetivo: { ca: "Construeix un parany i un minijoc per a un company.", es: "Construye una trampa y un minijuego para un compi." },
    pasos: [
      { ca: "Ordre que construeix el parany.", es: "Comando que construye la trampa." },
      { ca: "Detecta quan algú trepitja el bloc.", es: "Detecta cuándo alguien pisa el bloque." },
      { ca: "Afegeix compte enrere o punts.", es: "Añade cuenta atrás o puntos." },
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: { ca: "Que el parany es torni a armar sol quan salti.", es: "Que la trampa se reinicie sola tras saltar." },
  },
  {
    n: 6, icono: "🤖", color: "cian",
    plataforma: { ca: "MakeCode Minecraft + IA", es: "MakeCode Minecraft + IA" },
    titulo: { ca: "El PNJ intel·ligent", es: "El PNJ inteligente" },
    objetivo: { ca: "Crea un ajudant que parla i obeeix.", es: "Crea un ayudante que habla y obedece." },
    pasos: [
      { ca: "Programa l'Agent: que et segueixi o construeixi.", es: "Programa al Agente: que te siga o construya." },
      { ca: "Amb la IA del projector, inventa les seves frases.", es: "Con la IA del proyector, inventa sus frases." },
      { ca: "Que respongui a les teves ordres de xat.", es: "Que responda a tus comandos de chat." },
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    nota: {
      ca: "La IA la fa servir el profe a la pantalla. Tu li dictes, TU decideixes què es queda.",
      es: "La IA la maneja el profe en pantalla. Tú le dictas, TÚ decides qué se queda.",
    },
    reto: { ca: "Que l'Agent construeixi una casa tot sol.", es: "Que el Agente construya una casa él solo." },
  },
  {
    n: 7, icono: "🤝", color: "magenta",
    plataforma: "MakeCode Minecraft",
    titulo: { ca: "Repte cooperatiu", es: "Reto cooperativo" },
    objetivo: { ca: "En equip: cadascú programa una part de la missió.", es: "En equipo: cada uno programa una parte de la misión." },
    pasos: [
      { ca: "Equips i rols: constructor, paranyer, narrador.", es: "Equipos y roles: constructor, trampero, narrador." },
      { ca: "Cadascú programa la SEVA ordre.", es: "Cada uno programa SU comando." },
      { ca: "Ajunteu-ho i proveu-ho de principi a fi.", es: "Juntadlo y probadlo de principio a fin." },
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: { ca: "Un món amb 3 proves seguides i un premi final.", es: "Un mundo con 3 pruebas seguidas y un premio final." },
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
      { ca: "Tria el teu millor projecte i polleix UNA cosa.", es: "Elige tu mejor proyecto y pule UNA cosa." },
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
    { icono: "🏰", nivel: 2, texto: { ca: "Minecraft: ordre que construeix una torre de 20 blocs.", es: "Minecraft: comando que construye una torre de 20 bloques." } },
    { icono: "🧠", nivel: 3, texto: { ca: "Qualsevol: un cap final amb barra de vida.", es: "Cualquiera: un jefe final con barra de vida." } },
    { icono: "💾", nivel: 3, texto: { ca: "Arcade: desa el rècord (high score) entre partides.", es: "Arcade: guarda el récord (high score) entre partidas." } },
  ],
  atajos: [
    { teclas: ["Ctrl", "Z"], texto: { ca: "Desfer (el teu millor amic!)", es: "Deshacer (¡tu mejor amigo!)" } },
    { teclas: ["Ctrl", "Shift", "T"], texto: { ca: "Torna a obrir la pestanya que has tancat sense voler", es: "Reabrir la pestaña que cerraste sin querer" } },
    { teclas: ["Ctrl", "+ / −"], texto: { ca: "Zoom de la pàgina", es: "Zoom de la página" } },
    { teclas: ["F11"], texto: { ca: "Pantalla completa", es: "Pantalla completa" } },
    { teclas: [{ ca: "Clic dret", es: "Clic dcho." }], texto: { ca: "Duplicar o esborrar blocs (Scratch i MakeCode)", es: "Duplicar o borrar bloques (Scratch y MakeCode)" } },
    { teclas: ["C"], texto: { ca: "Minecraft Education: obrir el Code Builder", es: "Minecraft Education: abrir Code Builder" } },
    { teclas: ["T"], texto: { ca: "Minecraft: obrir el xat (per a les teves ordres)", es: "Minecraft: abrir el chat (para tus comandos)" } },
    { teclas: ["F5"], texto: { ca: "Minecraft: canviar la càmera", es: "Minecraft: cambiar la cámara" } },
  ],
  investiga: [
    { icono: "🔍", texto: { ca: "A MakeCode, prem «JavaScript» a dalt. Reconeixes els teus blocs?", es: "En MakeCode, pulsa «JavaScript» arriba. ¿Reconoces tus bloques?" } },
    { icono: "👀", texto: { ca: "Obre un joc famós de Scratch i prem «Mira a dins».", es: "Abre un juego famoso de Scratch y pulsa «Ver dentro»." } },
    { icono: "🪂", texto: { ca: "Com es programa la gravetat en un joc de plataformes?", es: "¿Cómo se programa la gravedad en un plataformas?" } },
    { icono: "🎨", texto: { ca: "Dibuixa el teu propi sprite de 16×16 píxels.", es: "Dibuja tu propio sprite de 16×16 píxeles." } },
    { icono: "🎲", texto: { ca: "Què és un nombre «aleatori» i per a què el fan servir els jocs?", es: "¿Qué es un número «aleatorio» y para qué lo usan los juegos?" } },
  ],
};
