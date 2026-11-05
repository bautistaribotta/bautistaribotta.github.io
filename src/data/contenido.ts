export type Proyecto = {
  nombre: string
  descripcion: string
  imagen: string
  ancho: number
  alto: number
  enlace: string
  enVivo?: string
  codigo?: string
  tecnologias: string[]
  enDesarrollo?: boolean
}

export type GrupoHabilidades = {
  titulo: string
  principales: string[]
  aprendiendo: string[]
}

export const navegacion = [
  { id: "about", etiqueta: "Sobre mí" },
  { id: "skills", etiqueta: "Habilidades" },
  { id: "projects", etiqueta: "Proyectos" },
  { id: "contact", etiqueta: "Contacto" },
] as const

export const redes = {
  github: "https://github.com/bautistaribotta",
  linkedin: "https://www.linkedin.com/in/bautistaribotta/",
  email: "mailto:bautistaribotta@hotmail.com",
}

export const estadisticas = [
  { valor: "25", etiqueta: "Años" },
  { valor: "+2", etiqueta: "Años de experiencia" },
  { valor: "+10", etiqueta: "Proyectos completados" },
]

export const habilidades: GrupoHabilidades[] = [
  {
    titulo: "Lenguajes",
    principales: ["Python", "Java", "JavaScript"],
    aprendiendo: ["TypeScript"],
  },
  {
    titulo: "Frontend",
    principales: ["HTML", "CSS", "Tailwind", "React", "React Native", "Expo"],
    aprendiendo: ["Astro", "Vite"],
  },
  {
    titulo: "Backend & DB",
    principales: ["MySQL", "Django", "SQLite"],
    aprendiendo: ["Spring Boot", "Supabase", "PostgreSQL"],
  },
  {
    titulo: "Herramientas",
    principales: ["Git", "GitHub", "Gemini CLI", "Claude Code", "Antigravity", "Codex"],
    aprendiendo: ["Cloudflare", "Tienda Nube"],
  },
]

export const proyectos: Proyecto[] = [
  {
    nombre: "Southern Honey Group",
    descripcion:
      "Aplicación web para una productora de miel, con gestión de productos y visualización de datos.",
    imagen: "captura-productora-de-miel-webapp",
    ancho: 1365,
    alto: 606,
    enlace: "https://bautistaribotta.pythonanywhere.com/",
    enVivo: "https://bautistaribotta.pythonanywhere.com/",
    codigo: "https://github.com/bautistaribotta/southern-honey-group-app",
    tecnologias: ["Python", "Django", "JavaScript", "HTML", "CSS"],
  },
  {
    nombre: "Neda Solar Energy",
    descripcion:
      "Colaborador en la página web de una empresa instaladora de paneles solares en la ciudad de La Plata.",
    imagen: "captura-neda-solar-energy",
    ancho: 1365,
    alto: 608,
    enlace: "https://neda.com.ar/",
    enVivo: "https://neda.com.ar/",
    tecnologias: ["React", "Tailwind", "HTML", "CSS"],
  },
  {
    nombre: "Frencia",
    descripcion:
      "App mobile para iOS y Android para entrenar en el gimnasio: armá tus rutinas, seguí cada serie con temporizador de descanso, revisá tu historial y compartí el resumen de cada entrenamiento.",
    imagen: "captura-ios-app-frencia",
    ancho: 1920,
    alto: 1080,
    enlace: "https://github.com/bautistaribotta/frencia",
    codigo: "https://github.com/bautistaribotta/frencia",
    tecnologias: ["React Native", "Expo Go", "TypeScript", "Supabase", "PostgreSQL"],
    enDesarrollo: true,
  },
  {
    nombre: "Frencia Web",
    descripcion:
      "Versión web de Frencia pensada para escritorio: planificá tus rutinas con arrastrar y soltar y revisá tu historial y progreso, sincronizado con la app mobile.",
    imagen: "captura-web-frencia",
    ancho: 1440,
    alto: 810,
    enlace: "https://app.frencia.fit",
    enVivo: "https://app.frencia.fit",
    codigo: "https://github.com/bautistaribotta/frencia-web",
    tecnologias: ["React", "TypeScript", "Vite", "Supabase", "Cloudflare"],
  },
  {
    nombre: "Frencia Landing",
    descripcion:
      "Landing page pública de Frencia, optimizada para SEO y rendimiento, que lleva a la app web y a las tiendas de la app mobile.",
    imagen: "captura-landing-frencia",
    ancho: 1440,
    alto: 786,
    enlace: "https://frencia.fit",
    enVivo: "https://frencia.fit",
    codigo: "https://github.com/bautistaribotta/frencia-landing",
    tecnologias: ["Astro", "React", "Tailwind", "TypeScript", "Cloudflare"],
  },
  {
    nombre: "Gestoapp",
    descripcion:
      "App mobile para iOS y Android que funciona como gestograma digital para obstetricia: calcula edad gestacional y fecha probable de parto, y permite llevar un registro de pacientes.",
    imagen: "captura-app-gestoapp",
    ancho: 1280,
    alto: 720,
    enlace: "https://github.com/bautistaribotta/gestoapp",
    codigo: "https://github.com/bautistaribotta/gestoapp",
    tecnologias: ["React Native", "Expo Go", "TypeScript", "SQLite"],
  },
  {
    nombre: "Rubén Curto Apicultura",
    descripcion:
      "Sistema de gestión para un acopio apícola construido sobre la base del software de Southern Honey Group, con nuevas funcionalidades para el tratamiento de marcos y cera estampada.",
    imagen: "captura-ruben-curto-marcos",
    ancho: 1365,
    alto: 718,
    enlace: "https://github.com/bautistaribotta/ruben-curto-apicultura",
    codigo: "https://github.com/bautistaribotta/ruben-curto-apicultura",
    tecnologias: ["Python", "Django", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    nombre: "Acopiadora de Miel",
    descripcion:
      "Sistema de gestión completo para una acopiadora de miel, incluyendo control de inventario, proveedores y ventas.",
    imagen: "captura-acopiadora-miel",
    ancho: 1602,
    alto: 882,
    enlace: "https://github.com/bautistaribotta/acopiadora_de_miel",
    codigo: "https://github.com/bautistaribotta/acopiadora_de_miel",
    tecnologias: ["Python", "MySQL", "Tkinter"],
  },
  {
    nombre: "Claudia Arias",
    descripcion:
      "Colaborador en la tienda online de indumentaria de Claudia Arias, con modificaciones básicas de HTML y CSS sobre Tienda Nube.",
    imagen: "captura-claudia-arias",
    ancho: 1440,
    alto: 810,
    enlace: "https://www.claudiaarias.com.ar/",
    enVivo: "https://www.claudiaarias.com.ar/",
    tecnologias: ["Tienda Nube", "HTML", "CSS"],
  },
  {
    nombre: "Portafolio Personal",
    descripcion:
      "Este mismo sitio web, diseñado y desarrollado buscando aplicar conocimientos. Ahora con React y shadcn/ui.",
    imagen: "captura-pagina-web",
    ancho: 1365,
    alto: 608,
    enlace: "https://github.com/bautistaribotta/bautistaribotta.github.io",
    codigo: "https://github.com/bautistaribotta/bautistaribotta.github.io",
    tecnologias: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
]
