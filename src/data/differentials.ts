export interface DifferentialItem {
  id: string;
  title: string;
  claim: string;
  description: string;
  iconName: "Sparkles" | "Compass" | "Cpu" | "TrendingUp" | "HeartHandshake";
}

export const differentialsData: DifferentialItem[] = [
  {
    id: "creatividad",
    title: "Creatividad",
    claim: "Ideas que generan atención.",
    description:
      "No seguimos fórmulas repetitivas. Diseñamos conceptos originales que capturan el interés en los primeros segundos y construyen memoria de marca duradera.",
    iconName: "Sparkles",
  },
  {
    id: "estrategia",
    title: "Estrategia",
    claim: "Ideas conectadas con objetivos.",
    description:
      "La estética sin propósito es solo adorno. Cada línea de código, paleta de color y campaña responde directamente a metas financieras y de posicionamiento.",
    iconName: "Compass",
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    claim: "Experiencias digitales modernas.",
    description:
      "Dominamos el desarrollo web moderno. Interfaces veloces, código escalable, arquitecturas limpias y animaciones fluidas sin sacrificar rendimiento.",
    iconName: "Cpu",
  },
  {
    id: "resultados",
    title: "Resultados",
    claim: "Proyectos orientados a generar impacto.",
    description:
      "Medimos lo que realmente importa: aumento de conversiones, retención de clientes, autoridad de marca y retorno comprobado sobre la inversión.",
    iconName: "TrendingUp",
  },
  {
    id: "cercania",
    title: "Cercanía",
    claim: "Atención personalizada.",
    description:
      "Tratas directamente con los especialistas e ingenieros que construyen tu proyecto. Comunicación transparente, rápida y sin capas burocráticas.",
    iconName: "HeartHandshake",
  },
];
