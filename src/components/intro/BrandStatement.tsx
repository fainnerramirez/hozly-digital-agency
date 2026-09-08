"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function BrandStatement() {
  const statementWords = [
    { text: "Transformamos", highlight: false },
    { text: "ideas", highlight: true },
    { text: "en", highlight: false },
    { text: "soluciones", highlight: false },
    { text: "creativas", highlight: true },
    { text: "que", highlight: false },
    { text: "generan", highlight: false },
    { text: "resultados", highlight: true },
    { text: "reales.", highlight: false },
  ];

  return (
    <section
      id="statement"
      className="py-24 sm:py-32 md:py-44 relative bg-[#0A0A0A] overflow-hidden"
    >
      {/* Delicate Gold Horizontal Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          <span className="font-heading text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
            Manifiesto HOZLY
          </span>
          <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
        </motion.div>

        {/* Word by word reveal text */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5 gap-y-2 sm:gap-y-4 font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.25]">
          {statementWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={
                word.highlight
                  ? "gold-gradient-text drop-shadow-[0_0_25px_rgba(212,175,55,0.25)] relative"
                  : "text-white"
              }
            >
              {word.text}
            </motion.span>
          ))}
        </div>

        {/* Brand Promise Subtext from Manual */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#B5B5B5] font-light leading-relaxed font-body"
        >
          Nos comprometemos a entregar diseño, marketing y tecnología con calidad,
          precisión y estrategia; garantizando experiencias digitales que impulsan
          ventas, fortalecen marcas y abren nuevas oportunidades de crecimiento.
        </motion.p>
      </Container>
    </section>
  );
}
