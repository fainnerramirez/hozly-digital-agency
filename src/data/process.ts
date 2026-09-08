export interface ProcessStageItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export const processStages: ProcessStageItem[] = [
  {
    number: "01",
    title: "DESCUBRIMOS",
    tagline: "Inmersión analítica & diagnóstico",
    description:
      "Desmontamos los desafíos de la marca. Investigamos el mercado, la competencia y los patrones de comportamiento de tu cliente ideal para fundamentar cada decisión en datos y contexto.",
    points: [
      "Auditoría integral de marca y posicionamiento",
      "Investigación de audiencia e intenciones de búsqueda",
      "Definición de KPIs y objetivos comerciales claros",
    ],
  },
  {
    number: "02",
    title: "DISEÑAMOS",
    tagline: "Concepto, arquitectura & dirección de arte",
    description:
      "Convertimos la estrategia en un lenguaje visual poderoso. Creamos conceptos estéticos memorables, flujos de usuario intuitivos y prototipos interactivos con acabados de alta fidelidad.",
    points: [
      "Dirección de arte y diseño de identidad visual",
      "Wireframes y diseño de experiencias UI/UX interactivas",
      "Validación de prototipos y tono de comunicación",
    ],
  },
  {
    number: "03",
    title: "CONSTRUIMOS",
    tagline: "Ingeniería de software & producción creativa",
    description:
      "Desarrollamos con tecnologías punteras como Next.js, asegurando velocidad vertiginosa, interactividad impecable, código limpio y estándares de seguridad corporativa.",
    points: [
      "Desarrollo frontend & backend de alto rendimiento",
      "Animaciones y microinteracciones de nivel Awwwards",
      "Pruebas exhaustivas de rendimiento y accesibilidad",
    ],
  },
  {
    number: "04",
    title: "LANZAMOS",
    tagline: "Despliegue de precisión & activación",
    description:
      "Ejecutamos el lanzamiento orquestado. Activamos campañas publicitarias, configuramos analítica avanzada y garantizamos una transición suave y sin fricciones técnicas.",
    points: [
      "Despliegue en infraestructura cloud optimizada",
      "Configuración de analítica, eventos de conversión y píxeles",
      "Activación de campañas publicitarias multicanal",
    ],
  },
  {
    number: "05",
    title: "CRECEMOS",
    tagline: "Optimización continua & escalamiento",
    description:
      "El lanzamiento es solo el inicio. Medimos continuamente, realizamos pruebas de conversión y ajustamos estrategias para amplificar el retorno de inversión y el valor de marca.",
    points: [
      "Monitoreo de Core Web Vitals y comportamiento de usuarios",
      "Iteración mediante tests A/B y mejoras de conversión (CRO)",
      "Escalamiento progresivo de campañas y nuevas funciones",
    ],
  },
];
