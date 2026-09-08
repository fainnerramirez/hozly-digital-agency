export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  technologies: string[];
  accentColor?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "marketing",
    number: "01",
    title: "MARKETING",
    shortDesc: "Estrategias digitales orientadas a objetivos de negocio.",
    longDesc:
      "Diseñamos ecosistemas de adquisición y retención medibles que transforman la inversión en rentabilidad predecible para marcas de alto impacto.",
    deliverables: [
      "Growth Marketing & Performance",
      "Paid Media (Meta, Google, TikTok, LinkedIn)",
      "Optimización de Tasa de Conversión (CRO)",
      "Automatización de Marketing & CRM",
      "Analítica Avanzada & Atribución",
    ],
    technologies: ["Google Analytics 4", "Meta Ads", "Klaviyo", "HubSpot"],
    accentColor: "#D4AF37",
  },
  {
    id: "publicidad",
    number: "02",
    title: "PUBLICIDAD",
    shortDesc:
      "Campañas creativas diseñadas para captar atención y generar acción.",
    longDesc:
      "Generamos conceptos de campaña memorables que rompen el ruido digital, transmiten autoridad de marca y provocan respuestas inmediatas en la audiencia.",
    deliverables: [
      "Conceptos Creativos & Campañas 360°",
      "Dirección de Arte & Producción Multimedia",
      "Copywriting & Storytelling de Alto Impacto",
      "Activaciones Digitales & Omnicanal",
      "Estrategia de Contenido Editorial",
    ],
    technologies: ["After Effects", "Premiere Pro", "Figma", "Cinema 4D"],
    accentColor: "#008CFF",
  },
  {
    id: "branding",
    number: "03",
    title: "BRANDING & DISEÑO",
    shortDesc: "Identidades y experiencias visuales memorables.",
    longDesc:
      "Construimos identidades de marca que trascienden modas pasajeras. Unificamos propósito, arquitectura visual y consistencia en cada punto de contacto.",
    deliverables: [
      "Sistemas de Identidad Visual Completa",
      "Manuales de Marca & Design Tokens",
      "Diseño UI/UX de Productos Digitales",
      "Diseño Editorial & Packaging",
      "Naming & Posicionamiento de Marca",
    ],
    technologies: ["Figma", "Illustrator", "Photoshop", "Spline 3D"],
    accentColor: "#D4AF37",
  },
  {
    id: "desarrollo-web",
    number: "04",
    title: "DESARROLLO WEB",
    shortDesc:
      "Sitios web y productos digitales modernos, rápidos y escalables.",
    longDesc:
      "Desarrollamos ingeniería web de precisión con arquitecturas modernas. Velocidad extrema, animaciones impecables y código preparado para escalar sin límites.",
    deliverables: [
      "Web Apps & Portales Corporativos Premium",
      "E-Commerce de Alto Rendimiento (Headless)",
      "Desarrollo Frontend con Next.js & React",
      "Microinteracciones & Experiencias Awwwards",
      "Optimización Core Web Vitals & SEO Técnico",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accentColor: "#34D5C3",
  },
  {
    id: "estrategia",
    number: "05",
    title: "ESTRATEGIA",
    shortDesc:
      "Decisiones estratégicas que conectan creatividad y negocio.",
    longDesc:
      "Alineamos visión directiva, comportamiento del consumidor e infraestructura digital para asegurar que cada esfuerzo responda a metas comerciales tangibles.",
    deliverables: [
      "Consultoría Estratégica Digital",
      "Auditorías de Posicionamiento y Competencia",
      "Estrategias Go-To-Market para Nuevos Productos",
      "Mapeo del Customer Journey Integral",
      "Roadmaps Tecnológicos y de Crecimiento",
    ],
    technologies: ["Data Analysis", "Market Intel", "Notion", "Miro"],
    accentColor: "#D4AF37",
  },
];
