"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { processStages } from "@/data/process";

export default function Process() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="proceso" className="py-24 md:py-36 relative bg-[#0A0A0A] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="full">
        <SectionTitle
          badge="Metodología HOZLY"
          number="02 / PROCESO"
          title="De una idea a algo que importa."
          subtitle="Una ruta clara de 5 etapas conectadas que garantiza rigor estratégico, excelencia técnica y resultados medibles."
        />

        {/* Desktop Stage Selector Bar */}
        <div className="relative mt-12 mb-16 hidden lg:block">
          {/* Continuous Connecting Golden Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-white/10" />
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
            animate={{ width: `${(activeStage / (processStages.length - 1)) * 100}%` }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative z-10 flex justify-between items-center">
            {processStages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isCompleted = activeStage > idx;

              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading text-sm font-bold tracking-widest transition-all duration-300 ${
                      isSelected
                        ? "bg-[#D4AF37] text-[#0A0A0A] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                        : isCompleted
                        ? "bg-[#1C1C1E] text-[#D4AF37] border border-[#D4AF37]/50"
                        : "bg-[#1C1C1E] text-[#B5B5B5] border border-white/10 group-hover:border-white/40"
                    }`}
                  >
                    {stage.number}
                  </div>

                  <span
                    className={`mt-3 font-heading text-xs uppercase tracking-[0.18em] transition-colors duration-200 ${
                      isSelected
                        ? "text-[#D4AF37] font-bold"
                        : "text-[#B5B5B5] group-hover:text-white"
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Card View (Desktop & Tablet) */}
        <div className="hidden lg:block">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-10 md:p-12 rounded-3xl bg-[#1C1C1E]/70 border border-[#D4AF37]/30 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-5 border-r border-white/10 pr-8">
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                  Fase {processStages[activeStage].number}
                </span>
                <h3 className="mt-2 font-heading font-black text-4xl uppercase tracking-tight text-white">
                  {processStages[activeStage].title}
                </h3>
                <p className="mt-2 text-sm font-mono text-[#D4AF37]">
                  {processStages[activeStage].tagline}
                </p>
                <p className="mt-6 text-sm text-[#B5B5B5] font-light leading-relaxed">
                  {processStages[activeStage].description}
                </p>
              </div>

              <div className="col-span-7 pl-6 space-y-4">
                <span className="block font-heading text-xs font-bold uppercase tracking-[0.16em] text-white mb-2">
                  Entregables & Acciones de esta fase:
                </span>
                <div className="space-y-3">
                  {processStages[activeStage].points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0A0A0A]/60 border border-white/5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#E5E5E7]">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between items-center text-xs text-[#B5B5B5]">
                  <span>Paso {activeStage + 1} de {processStages.length}</span>
                  {activeStage < processStages.length - 1 ? (
                    <button
                      onClick={() => setActiveStage(activeStage + 1)}
                      className="flex items-center gap-1.5 text-[#D4AF37] hover:underline font-heading uppercase tracking-wider font-semibold cursor-pointer"
                    >
                      <span>Siguiente fase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <span className="text-[#D4AF37] font-semibold font-heading uppercase">
                      Ciclo completo de excelencia
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Accordion / Vertical Stack */}
        <div className="lg:hidden space-y-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.number}
              className="p-6 rounded-2xl bg-[#1C1C1E]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#0A0A0A] font-heading font-black text-xs flex items-center justify-center">
                  {stage.number}
                </span>
                <h3 className="font-heading font-bold text-xl uppercase text-white">
                  {stage.title}
                </h3>
              </div>
              <p className="text-xs font-mono text-[#D4AF37] mb-2">{stage.tagline}</p>
              <p className="text-sm text-[#B5B5B5] leading-relaxed mb-4">
                {stage.description}
              </p>
              <ul className="space-y-2 border-t border-white/10 pt-3">
                {stage.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#E5E5E7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
