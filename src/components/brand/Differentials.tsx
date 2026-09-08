"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Cpu, TrendingUp, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { differentialsData } from "@/data/differentials";

export default function Differentials() {
  const iconComponents = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
    Compass: <Compass className="w-6 h-6 text-[#008CFF]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#34D5C3]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#E5E5E7]" />,
  };

  return (
    <section className="py-24 md:py-36 relative bg-[#0A0A0A]">
      <Container size="full">
        <SectionTitle
          badge="Por qué HOZLY"
          number="05 / DIFERENCIALES"
          title="NO SOMOS SOLO UNA AGENCIA."
          subtitle="Una amalgama de pensamiento estratégico de alto nivel, maestría visual y potencia técnica sin intermediarios."
        />

        {/* Grid of 5 Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {differentialsData.map((item, idx) => {
            const isWide = idx === 3 || idx === 4;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-[#1C1C1E]/60 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between ${
                  isWide && idx === 3 ? "lg:col-span-1" : ""
                } ${isWide && idx === 4 ? "lg:col-span-2" : ""}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 group-hover:border-[#D4AF37]/40 flex items-center justify-center mb-6 transition-colors">
                    {iconComponents[item.iconName]}
                  </div>

                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-2">
                    0{idx + 1} // Principio
                  </span>

                  <h3 className="font-heading font-black text-2xl uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-heading font-semibold text-white/90">
                    {item.claim}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-[#B5B5B5] font-light leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#B5B5B5]">
                  <span className="font-mono">HOZLY CORE</span>
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
