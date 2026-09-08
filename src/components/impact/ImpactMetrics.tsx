"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

const metrics: MetricItem[] = [
  {
    value: "+50",
    label: "PROYECTOS",
    sublabel: "Soluciones de marketing y tecnología entregadas",
  },
  {
    value: "+20",
    label: "MARCAS",
    sublabel: "Acompañadas en su expansión y posicionamiento",
  },
  {
    value: "100%",
    label: "COMPROMISO",
    sublabel: "Atención personalizada y dedicación estratégica",
  },
  {
    value: "∞",
    label: "POSIBILIDADES",
    sublabel: "Innovación continua y creatividad sin límites",
  },
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 md:py-28 relative bg-[#0A0A0A] border-y border-white/10">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <Container size="full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#1C1C1E]/50 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Corner Gold Accent Line */}
              <div className="absolute top-0 right-8 w-12 h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <span className="block font-heading font-black text-5xl sm:text-6xl md:text-7xl tracking-tight gold-gradient-text">
                  {item.value}
                </span>

                <h4 className="mt-4 font-heading font-bold text-lg sm:text-xl tracking-[0.14em] uppercase text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.label}
                </h4>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-[#B5B5B5] font-normal leading-relaxed font-body">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
