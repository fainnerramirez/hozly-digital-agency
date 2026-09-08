"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function MidCTA() {
  return (
    <section className="py-20 md:py-32 relative bg-[#0A0A0A] overflow-hidden">
      <Container size="full">
        <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0A] border border-[#D4AF37]/35 p-10 sm:p-16 md:p-20 text-center overflow-hidden shadow-[0_20px_60px_rgba(212,175,55,0.08)]">
          {/* Animated Golden Radial Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#D4AF37]/15 via-[#FFE27D]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

          {/* Abstract Floating Dots from the Brand Symbol */}
          <div className="absolute top-8 left-12 flex gap-2 opacity-30 pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] translate-y-2" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-heading tracking-[0.2em] uppercase mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMIENZA LA EVOLUCIÓN</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight"
            >
              Tu próxima gran idea{" "}
              <span className="gold-gradient-text block mt-2">
                puede empezar aquí.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-[#B5B5B5] font-light max-w-xl mx-auto leading-relaxed"
            >
              Ya sea que necesites una campaña publicitaria disruptiva, un
              rediseño de marca total o una plataforma web de alto rendimiento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <Button
                variant="primary"
                size="lg"
                href="#contacto"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Hablemos
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
