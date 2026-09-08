export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  discipline: "Branding" | "Desarrollo Web" | "Marketing" | "Publicidad" | "Estrategia";
  year: string;
  description: string;
  tags: string[];
  aspectRatio: "tall" | "wide" | "square";
  accentColor: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "lumina-capital",
    title: "LUMINA GLOBAL",
    category: "Branding & Plataforma Digital",
    discipline: "Desarrollo Web",
    year: "2025",
    description:
      "Transformación integral de identidad visual y desarrollo de plataforma corporativa con arquitectura headless de ultrabaja latencia.",
    tags: ["Next.js", "Design System", "Branding", "WebGL"],
    aspectRatio: "tall",
    accentColor: "#D4AF37",
    featured: true,
  },
  {
    id: "aethel-sound",
    title: "AETHEL AUDIO",
    category: "Campaña de Lanzamiento & E-Commerce",
    discipline: "Marketing",
    year: "2025",
    description:
      "Estrategia de go-to-market y producción audiovisual para marca premium de tecnología acústica con conversión omnicanal.",
    tags: ["Paid Media", "CRO", "Motion Graphics", "Shopify Headless"],
    aspectRatio: "wide",
    accentColor: "#008CFF",
    featured: true,
  },
  {
    id: "kronos-dynamics",
    title: "KRONOS ARCHITECTURE",
    category: "Dirección de Arte & Web Editorial",
    discipline: "Branding",
    year: "2024",
    description:
      "Diseño editorial interactivo y sistema de identidad para firma de arquitectura contemporánea internacional.",
    tags: ["Editorial UI", "Microinteracciones", "Identidad", "Framer Motion"],
    aspectRatio: "square",
    accentColor: "#D4AF37",
    featured: false,
  },
  {
    id: "novalux-energy",
    title: "NOVALUX SYSTEMS",
    category: "Plataforma Tecnológica & Marca",
    discipline: "Desarrollo Web",
    year: "2024",
    description:
      "Diseño de interfaz de usuario para monitoreo de energía y desarrollo de portal institucional de alta escala.",
    tags: ["React", "TypeScript", "UI/UX", "Dashboard"],
    aspectRatio: "wide",
    accentColor: "#34D5C3",
    featured: true,
  },
  {
    id: "vellum-studio",
    title: "VELLUM ATELIER",
    category: "Rebranding & Publicidad Digital",
    discipline: "Publicidad",
    year: "2024",
    description:
      "Rediseño visual de lujo y dirección de campañas publicitarias digitales para consolidar presencia en mercados globales.",
    tags: ["Campañas 360", "Storytelling", "Fotografía Editorial"],
    aspectRatio: "tall",
    accentColor: "#D4AF37",
    featured: false,
  },
];
