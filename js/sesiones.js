// Contenido de las 9 sesiones y de la Zona Autónoma.
// Regla de oro TDAH: una frase por objetivo, 3 pasos, frases de < 10 palabras.
// `color` es uno de: cian, magenta, lima, ambar, violeta, rojo.

const SCRATCH = { texto: "Abrir Scratch", url: "https://scratch.mit.edu/projects/editor/", icono: "🐱" };
const ARCADE = { texto: "Abrir MakeCode Arcade", url: "https://arcade.makecode.com/", icono: "👾" };
const MC_MAKECODE = { texto: "Tutoriales MakeCode Minecraft", url: "https://minecraft.makecode.com/", icono: "📘", secundario: true };

const GUARDAR_SCRATCH = "Archivo → Guardar en tu ordenador (.sb3). Súbelo a tu Drive o mándatelo.";
const GUARDAR_ARCADE = "Botón Compartir → copia el enlace y guárdalo en tu correo o Drive.";
const GUARDAR_MC = "Code Builder → Compartir → copia el enlace. ¡El ordenador se borra al apagar!";

window.SESIONES = [
  {
    n: 1, icono: "🐱", color: "magenta",
    plataforma: "Scratch",
    titulo: "El meme interactivo",
    objetivo: "Haz un meme que reacciona cuando lo tocas.",
    pasos: [
      "Elige un fondo y un personaje.",
      "«Al hacer clic» → que diga algo + sonido.",
      "Añade otro personaje que le conteste.",
    ],
    botones: [SCRATCH, { texto: "Ideas de memes", url: "https://scratch.mit.edu/ideas", icono: "💡", secundario: true }],
    guardar: GUARDAR_SCRATCH,
    reto: "Que cambie de disfraz con las flechas del teclado.",
  },
  {
    n: 2, icono: "🧩", color: "cian",
    plataforma: "Code.org",
    titulo: "Puzles lógicos",
    objetivo: "Resuelve puzles: piensa antes de pulsar ▶.",
    pasos: [
      "Abre el curso que diga el profe.",
      "Lee el reto. Arrastra bloques.",
      "Busca la solución con MENOS bloques.",
    ],
    botones: [
      { texto: "Minecraft Aventurero", url: "https://studio.code.org/s/mc", icono: "⛏️" },
      { texto: "Más puzles (Hora del Código)", url: "https://hourofcode.com/es/learn", icono: "🧠", secundario: true },
    ],
    guardar: "Code.org guarda solo si inicias sesión. Si no, apunta el nivel en el que vas.",
    reto: "Rehaz un nivel con el mínimo de bloques posible.",
  },
  {
    n: 3, icono: "👾", color: "lima",
    plataforma: "MakeCode Arcade",
    titulo: "Primeros juegos retro",
    objetivo: "Un personaje que se mueve y atrapa cosas.",
    pasos: [
      "Nuevo proyecto. Crea tu sprite.",
      "«Mover con botones» → ¡ya anda!",
      "Comida que aparece + marcador de puntos.",
    ],
    botones: [ARCADE, { texto: "Editor de pixel art", url: "https://arcade.makecode.com/", icono: "🎨", secundario: true }],
    guardar: GUARDAR_ARCADE,
    reto: "Añade un enemigo que te persiga y 3 vidas.",
  },
  {
    n: 4, icono: "🪄", color: "violeta",
    plataforma: "MakeCode Minecraft",
    titulo: "La varita mágica y comandos",
    objetivo: "Programa comandos que hacen magia en el mundo.",
    pasos: [
      "Minecraft Education → tecla C (Code Builder).",
      "Comando de chat «magia» → crea bloques.",
      "Al usar tu varita → ¡lanza algo!",
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: "Un comando «lluvia» que haga llover pollos 🐔.",
  },
  {
    n: 5, icono: "🪤", color: "ambar",
    plataforma: "MakeCode Minecraft",
    titulo: "Minijuegos y trampas",
    objetivo: "Construye una trampa y un minijuego para un compi.",
    pasos: [
      "Comando que construye la trampa.",
      "Detecta cuándo alguien pisa el bloque.",
      "Añade cuenta atrás o puntos.",
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: "Que la trampa se reinicie sola tras saltar.",
  },
  {
    n: 6, icono: "🤖", color: "cian",
    plataforma: "MakeCode Minecraft + IA",
    titulo: "El PNJ inteligente",
    objetivo: "Crea un ayudante que habla y obedece.",
    pasos: [
      "Programa al Agente: que te siga o construya.",
      "Con la IA del proyector, inventa sus frases.",
      "Que responda a tus comandos de chat.",
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    nota: "La IA la maneja el profe en pantalla. Tú le dictas, TÚ decides qué se queda.",
    reto: "Que el Agente construya una casa él solo.",
  },
  {
    n: 7, icono: "🤝", color: "magenta",
    plataforma: "MakeCode Minecraft",
    titulo: "Reto cooperativo",
    objetivo: "En equipo: cada uno programa una parte de la misión.",
    pasos: [
      "Equipos y roles: constructor, trampero, narrador.",
      "Cada uno programa SU comando.",
      "Juntadlo y probadlo de principio a fin.",
    ],
    botones: [MC_MAKECODE],
    guardar: GUARDAR_MC,
    reto: "Un mundo con 3 pruebas seguidas y un premio final.",
  },
  {
    n: 8, icono: "🐛", color: "rojo",
    plataforma: "Scratch · Arcade",
    titulo: "Hackea el código",
    objetivo: "Proyectos rotos a propósito: caza los bugs.",
    pasos: [
      "Abre el proyecto roto del profe.",
      "Pruébalo. ¿Qué falla? Dilo en voz alta.",
      "Arréglalo y apunta cada bug cazado.",
    ],
    botones: [ARCADE, SCRATCH],
    guardar: "Guarda la versión ARREGLADA con otro nombre.",
    reto: "Rompe tú un proyecto (1 bug escondido) y pásaselo a un compi.",
  },
  {
    n: 9, icono: "🎉", color: "lima",
    plataforma: "¡Todo!",
    titulo: "La Gran Exhibición",
    objetivo: "Enseña tu mejor juego y juega los de los demás.",
    pasos: [
      "Elige tu mejor proyecto y pule UNA cosa.",
      "Prepara 1 frase: qué hace y qué fue difícil.",
      "Ronda de juegos y votaciones 🏆.",
    ],
    botones: [
      { texto: "Mis cosas en Scratch", url: "https://scratch.mit.edu/mystuff/", icono: "🐱" },
      ARCADE,
    ],
    guardar: "Hoy NO se pierde nada: comparte el enlace de tu juego con tu familia.",
    reto: "Premio especial al bug más gracioso del taller.",
  },
];

window.ZONA_AUTONOMA = {
  retos: [
    { icono: "🌀", nivel: 1, texto: "Scratch: haz que un personaje rebote por toda la pantalla." },
    { icono: "🎵", nivel: 1, texto: "Scratch: un piano con 5 teclas del teclado." },
    { icono: "🌌", nivel: 2, texto: "Arcade: fondo que se mueve (scroll) como en un juego de naves." },
    { icono: "❤️", nivel: 2, texto: "Arcade: power-up que da una vida extra." },
    { icono: "🏰", nivel: 2, texto: "Minecraft: comando que construye una torre de 20 bloques." },
    { icono: "🧠", nivel: 3, texto: "Cualquiera: un jefe final con barra de vida." },
    { icono: "💾", nivel: 3, texto: "Arcade: guarda el récord (high score) entre partidas." },
  ],
  atajos: [
    { teclas: ["Ctrl", "Z"], texto: "Deshacer (¡tu mejor amigo!)" },
    { teclas: ["Ctrl", "Shift", "T"], texto: "Reabrir la pestaña que cerraste sin querer" },
    { teclas: ["Ctrl", "+ / −"], texto: "Zoom de la página" },
    { teclas: ["F11"], texto: "Pantalla completa" },
    { teclas: ["Clic dcho."], texto: "Duplicar o borrar bloques (Scratch y MakeCode)" },
    { teclas: ["C"], texto: "Minecraft Education: abrir Code Builder" },
    { teclas: ["T"], texto: "Minecraft: abrir el chat (para tus comandos)" },
    { teclas: ["F5"], texto: "Minecraft: cambiar la cámara" },
  ],
  investiga: [
    { icono: "🔍", texto: "En MakeCode, pulsa «JavaScript» arriba. ¿Reconoces tus bloques?" },
    { icono: "👀", texto: "Abre un juego famoso de Scratch y pulsa «Ver dentro»." },
    { icono: "🪂", texto: "¿Cómo se programa la gravedad en un plataformas?" },
    { icono: "🎨", texto: "Dibuja tu propio sprite de 16×16 píxeles." },
    { icono: "🎲", texto: "¿Qué es un número «aleatorio» y para qué lo usan los juegos?" },
  ],
};
