"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import LogoStory from "./LogoStory";

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-36 relative bg-[#0A0A0A] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="full">
        {/* Section Header */}
        <SectionTitle
          badge="Nuestra Esencia"
          number="04 / ORIGEN & IDENTIDAD"
          title={
            <>
              CREATIVIDAD CON PROPÓSITO.
              <br />
              <span className="gold-gradient-text">TECNOLOGÍA CON VISIÓN.</span>
            </>
          }
          subtitle="HOZLY no nació en una sala de juntas corporativa; nació de una convicción familiar compartida: que la unión, la precisión técnica y el diseño transforman marcas para siempre."
        />

        {/* Editorial Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Main Editorial Text (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#B5B5B5] font-light leading-relaxed font-body"
          >
            <p className="text-white text-xl sm:text-2xl font-normal leading-relaxed font-heading">
              El nombre de nuestra firma proviene del apellido{" "}
              <span className="text-[#D4AF37] font-semibold">De la Hoz</span>,
              estableciendo una base familiar inquebrantable que nutre la pasión,
              el compromiso y la autenticidad con la que abordamos cada desafío.
            </p>

            <p>
              Tres hermanos fundadores unieron sus trayectorias en estrategia,
              desarrollo de software y creatividad publicitaria para crear un
              estudio digital donde cada cliente recibe un trato directo y
              personalizado, sin filtros ni promesas vacías.
            </p>

            <p>
              Creemos que la verdadera sofisticación digital ocurre cuando la
              belleza estética se apoya en una ingeniería implacable. No
              diseñamos para agradar a algoritmos efímeros; construimos
              ecosistemas que perduran, impulsan ventas tangibles y elevan la
              percepción de valor en mercados globales.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-8 items-center text-xs uppercase tracking-[0.2em] font-heading text-white">
              <div>
                <span className="text-[#D4AF37] block text-sm font-bold">01</span>
                <span>Base Familiar</span>
              </div>
              <div>
                <span className="text-[#D4AF37] block text-sm font-bold">02</span>
                <span>Ingeniería Robusta</span>
              </div>
              <div>
                <span className="text-[#D4AF37] block text-sm font-bold">03</span>
                <span>Visión Internacional</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial Quote Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#1C1C1E]/70 border border-[#D4AF37]/30 backdrop-blur-xl relative flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute top-6 right-6 font-heading font-black text-6xl text-[#D4AF37]/10 pointer-events-none">
              “
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] block mb-4">
                El Compromiso De la Hoz
              </span>
              <p className="text-white text-lg sm:text-xl font-heading font-medium leading-relaxed">
                “Entregar diseño, marketing y tecnología con calidad, precisión y
                estrategia; garantizando experiencias digitales que impulsan
                ventas, fortalecen marcas y abren nuevas oportunidades de
                crecimiento.”
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center font-heading font-extrabold text-[#0A0A0A] text-sm shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                H
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-white uppercase tracking-wider block">
                  Los Hermanos Fundadores
                </span>
                <span className="text-xs text-[#B5B5B5] font-mono">
                  HOZLY Agencia Digital
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 19: Interactive Logo Story Experience */}
        <LogoStory />
      </Container>
    </section>
  );
}
