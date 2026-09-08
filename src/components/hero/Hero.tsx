"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import HeroGeometricVisual from "./HeroGeometricVisual";

export default function Hero() {
  const { scrollY } = useScroll();
  const yHeadline = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      {/* Subtle Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.12),rgba(10,10,10,0))]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="full" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <motion.div
            style={{ y: yHeadline }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1C1C1E]/80 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-heading font-medium tracking-[0.22em] uppercase mb-6 md:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span>MARKETING · PUBLICIDAD · TECNOLOGÍA</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight uppercase leading-[0.96] text-white"
            >
              <h1>
                <span className="block">IDEAS QUE</span>
                <span className="block text-white/90">CONECTAN.</span>
                <span className="block mt-2 sm:mt-3 gold-gradient-text">
                  MARCAS QUE
                </span>
                <span className="block gold-gradient-text">CRECEN.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 md:mt-8 max-w-xl text-base sm:text-lg md:text-xl text-[#B5B5B5] font-normal leading-relaxed font-body"
            >
              Transformamos ideas en estrategias, experiencias digitales y
              campañas que generan resultados reales.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href="#contacto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Hablemos de tu proyecto
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#proyectos"
              >
                Ver proyectos
              </Button>
            </motion.div>

            {/* Quick Micro-stats / Credibility pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-heading tracking-widest uppercase text-[#B5B5B5]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Estrategia Medible</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008CFF]" />
                <span>Desarrollo Web Next-Gen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D5C3]" />
                <span>Excelencia & Calidad</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Geometric Motion Composition Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <HeroGeometricVisual />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex flex-col items-center justify-center mt-12 gap-2 text-xs font-heading uppercase tracking-[0.2em] text-[#B5B5B5]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
          onClick={() => {
            const statement = document.getElementById("statement");
            statement?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Explorar</span>
          <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
        </motion.div>
      </Container>
    </section>
  );
}
