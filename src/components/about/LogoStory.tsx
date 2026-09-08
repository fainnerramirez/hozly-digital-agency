"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Disc, Layers, Award } from "lucide-react";

interface StoryElement {
  id: "dots" | "ring" | "pillars" | "gold";
  title: string;
  concept: string;
  manualTitle: string;
  description: string;
  icon: React.ReactNode;
}

const storyElements: StoryElement[] = [
  {
    id: "dots",
    title: "Tres Puntos Superiores",
    concept: "Unidad & Hermandad",
    manualTitle: "LOS TRES HERMANOS (FAMILIA DE LA HOZ)",
    description:
      "Los tres puntos simbolizan a los tres hermanos fundadores, reflejando unidad, propósito compartido, equilibrio y trabajo en equipo con una base familiar sólida.",
    icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    id: "ring",
    title: "Anillo Central",
    concept: "Estrategia & Continuidad",
    manualTitle: "SOLIDEZ Y VISIÓN ESTRATÉGICA",
    description:
      "La forma circular representa solidez, estabilidad y visión estratégica. Indica procesos que fluyen de forma continua y proyectos que se sostienen y maduran en el tiempo.",
    icon: <Disc className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    id: "pillars",
    title: "Columnas Laterales",
    concept: "Tecnología & Crecimiento",
    manualTitle: "PILARES DE SOFTWARE E INGENIERÍA",
    description:
      "Los dos pilares verticales simbolizan el desarrollo web, la ingeniería de software y el enfoque tecnológico, pilares fundamentales de HOZLY que garantizan estructura sólida y crecimiento constante.",
    icon: <Layers className="w-5 h-5 text-[#34D5C3]" />,
  },
  {
    id: "gold",
    title: "Acabado Dorado",
    concept: "Excelencia & Prestigio",
    manualTitle: "VALOR PREMIUM Y DISTINCIÓN",
    description:
      "El tono dorado metálico comunica calidad, alto nivel, exclusividad y valor, posicionando a HOZLY como una marca premium en marketing, publicidad y tecnología.",
    icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
  },
];

export default function LogoStory() {
  const [activeTab, setActiveTab] = useState<"dots" | "ring" | "pillars" | "gold">("dots");

  const current = storyElements.find((el) => el.id === activeTab)!;

  return (
    <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#1C1C1E]/60 border border-[#D4AF37]/30 backdrop-blur-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Interactive SVG Symbol Visualizer */}
        <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
              Anatomía del Símbolo
            </span>
            <p className="font-heading font-black text-xl text-white mt-1">
              TRES PUNTOS. UNA VISIÓN.
            </p>
          </div>

          <div className="relative w-64 h-72 flex items-center justify-center p-4">
            <svg
              viewBox="0 0 100 112"
              className="w-48 h-56 transition-all duration-500 overflow-visible"
            >
              <defs>
                <linearGradient id="lsGoldGrad" x1="15%" y1="5%" x2="85%" y2="95%">
                  <stop offset="0%" stopColor="#FFF2BF" />
                  <stop offset="35%" stopColor="#E3BD57" />
                  <stop offset="70%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#876718" />
                </linearGradient>

                <filter id="lsHighlight">
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#D4AF37" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* 3 Upper Dots */}
              <g
                onClick={() => setActiveTab("dots")}
                className="cursor-pointer"
                filter={activeTab === "dots" ? "url(#lsHighlight)" : undefined}
              >
                <circle
                  cx="22"
                  cy="18"
                  r="9.5"
                  fill="url(#lsGoldGrad)"
                  opacity={activeTab === "dots" ? 1 : 0.4}
                  className="transition-opacity duration-300"
                />
                <circle
                  cx="50"
                  cy="26"
                  r="9.5"
                  fill="url(#lsGoldGrad)"
                  opacity={activeTab === "dots" ? 1 : 0.4}
                  className="transition-opacity duration-300"
                />
                <circle
                  cx="78"
                  cy="18"
                  r="9.5"
                  fill="url(#lsGoldGrad)"
                  opacity={activeTab === "dots" ? 1 : 0.4}
                  className="transition-opacity duration-300"
                />
              </g>

              {/* Lateral Pillars + Base */}
              <g
                onClick={() => setActiveTab("pillars")}
                className="cursor-pointer"
                filter={activeTab === "pillars" ? "url(#lsHighlight)" : undefined}
              >
                <path
                  d="M 14 36 C 14 33, 20 33, 20 36 L 20 68 C 20 84, 33 97, 50 97 C 67 97, 80 84, 80 68 L 80 36 C 80 33, 86 33, 86 36 L 86 68 C 86 89, 70 106, 50 106 C 30 106, 14 89, 14 68 Z"
                  fill="url(#lsGoldGrad)"
                  opacity={activeTab === "pillars" || activeTab === "gold" ? 1 : 0.35}
                  className="transition-opacity duration-300"
                />
              </g>

              {/* Central Ring */}
              <g
                onClick={() => setActiveTab("ring")}
                className="cursor-pointer"
                filter={activeTab === "ring" ? "url(#lsHighlight)" : undefined}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 50 46 C 61.5 46, 71 55.5, 71 67 C 71 78.5, 61.5 88, 50 88 C 38.5 88, 29 78.5, 29 67 C 29 55.5, 38.5 46, 50 46 Z M 50 54 C 42.8 54, 37 59.8, 37 67 C 37 74.2, 42.8 80, 50 80 C 57.2 80, 63 74.2, 63 67 C 63 59.8, 57.2 54, 50 54 Z"
                  fill="url(#lsGoldGrad)"
                  opacity={activeTab === "ring" || activeTab === "gold" ? 1 : 0.35}
                  className="transition-opacity duration-300"
                />
              </g>
            </svg>
          </div>
          <p className="text-[11px] text-[#B5B5B5] font-mono mt-2">
            Haz clic en los elementos para explorar
          </p>
        </div>

        {/* Right: Interactive Navigation & Exact Narrative */}
        <div className="w-full lg:w-7/12">
          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {storyElements.map((el) => (
              <button
                key={el.id}
                onClick={() => setActiveTab(el.id)}
                className={`p-3 rounded-xl text-left transition-all duration-300 flex flex-col items-start gap-1 cursor-pointer border ${
                  activeTab === el.id
                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-[#0A0A0A] text-[#B5B5B5] hover:text-white border-white/5"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">
                  {el.concept}
                </span>
                <span className="font-heading font-bold text-xs uppercase leading-tight">
                  {el.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Detail Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A]/80 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#1C1C1E] border border-white/10">
                  {current.icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest block">
                    {current.manualTitle}
                  </span>
                  <h4 className="font-heading font-black text-xl text-white uppercase">
                    {current.concept}
                  </h4>
                </div>
              </div>

              <p className="text-[#B5B5B5] text-sm sm:text-base leading-relaxed font-light font-body">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
