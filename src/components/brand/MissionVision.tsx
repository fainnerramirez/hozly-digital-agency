"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Eye, ShieldCheck, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 relative bg-[#0A0A0A] border-t border-white/10">
      <Container size="full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
            Dirección Estratégica
          </span>
          <h2 className="mt-2 font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
            PROPÓSITO & HORIZONTE
          </h2>
        </div>

        {/* Two-Column Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Misión Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#1C1C1E]/60 border border-[#D4AF37]/30 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/60 transition-colors flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Fundamento Operativo
                  </span>
                </div>
                <span className="font-heading font-extrabold text-2xl text-white/20">
                  01
                </span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-6">
                MISIÓN
              </h3>

              <blockquote className="text-[#B5B5B5] text-base sm:text-lg leading-relaxed font-body font-light border-l-2 border-[#D4AF37] pl-6 italic">
                “Ofrecer soluciones integrales en marketing, publicidad y
                desarrollo web que combinan creatividad, tecnología y estrategia,
                entregando resultados medibles y de alta calidad para marcas que
                buscan destacar en entornos digitales y presenciales.”
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase">
              <Compass className="w-4 h-4" />
              <span>Resultados medibles y alta calidad</span>
            </div>
          </motion.div>

          {/* Visión Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#1C1C1E]/60 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-[#D4AF37]/60 transition-colors flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#008CFF]/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white">
                    <Eye className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                    Aspiración Global
                  </span>
                </div>
                <span className="font-heading font-extrabold text-2xl text-white/20">
                  02
                </span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-white mb-6">
                VISIÓN
              </h3>

              <blockquote className="text-[#B5B5B5] text-base sm:text-lg leading-relaxed font-body font-light border-l-2 border-white/30 pl-6 italic">
                “Convertirnos en una agencia de referencia global en marketing,
                publicidad y desarrollo web, reconocida por nuestra innovación,
                excelencia creativa y la capacidad de generar resultados
                medibles y sostenibles para marcas en cualquier parte del mundo.”
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase">
              <Globe2 className="w-4 h-4" />
              <span>Innovación, excelencia & presencia global</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
