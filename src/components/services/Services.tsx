"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Megaphone,
  Palette,
  Code2,
  Compass,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { servicesData, type ServiceItem } from "@/data/services";
import Button from "@/components/ui/Button";

export default function Services() {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);

  // Map icons for each service
  const iconMap: Record<string, React.ReactNode> = {
    marketing: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
    publicidad: <Megaphone className="w-6 h-6 text-[#008CFF]" />,
    branding: <Palette className="w-6 h-6 text-[#D4AF37]" />,
    "desarrollo-web": <Code2 className="w-6 h-6 text-[#34D5C3]" />,
    estrategia: <Compass className="w-6 h-6 text-[#D4AF37]" />,
  };

  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section id="servicios" className="py-24 md:py-36 relative bg-[#0A0A0A]">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="full">
        <SectionTitle
          badge="Nuestras Capacidades"
          number="01 / CAPACIDADES"
          title="Todo lo que una marca necesita para crecer."
          subtitle="Cinco disciplinas integradas en un único modelo ágil. Sin intermediarios, sin fricciones."
        />

        {/* Editorial Layout: Left List + Right Dynamic Canvas Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">
          {/* Services Interactive List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {servicesData.map((service) => {
              const isActive = activeId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                  className={`group relative py-8 sm:py-10 transition-all duration-500 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-45 hover:opacity-85"
                  }`}
                >
                  {/* Active Golden Left Indicator Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                      isActive
                        ? "bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"
                        : "bg-transparent group-hover:bg-white/20"
                    }`}
                  />

                  <div className="pl-4 sm:pl-8 flex flex-col">
                    {/* Header: Number + Title + Icon */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="font-heading text-sm sm:text-base font-bold text-[#D4AF37] tracking-[0.2em]">
                          {service.number}
                        </span>
                        <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-[#D4AF37]">
                          {service.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#1C1C1E] border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors">
                          {iconMap[service.id]}
                        </div>
                        <ArrowUpRight
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isActive
                              ? "text-[#D4AF37] translate-x-1 -translate-y-1"
                              : "text-[#B5B5B5] group-hover:text-white"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#B5B5B5] font-normal leading-relaxed max-w-xl">
                      {service.shortDesc}
                    </p>

                    {/* Mobile Expandable Preview (shown on small screens) */}
                    <div className="lg:hidden">
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 pt-4 border-t border-white/10 space-y-4"
                          >
                            <p className="text-sm text-white/90">
                              {service.longDesc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.deliverables.map((d, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] px-2.5 py-1 rounded bg-[#1C1C1E] text-[#B5B5B5] border border-white/10"
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Editorial Preview Panel (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="relative rounded-2xl bg-[#1C1C1E]/80 border border-[#D4AF37]/30 p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
              >
                {/* Subtle Background Pattern & Gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 opacity-5 pointer-events-none select-none font-heading font-black text-9xl text-white">
                  {activeService.number}
                </div>

                {/* Header Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#0A0A0A] border border-white/10">
                      {iconMap[activeService.id]}
                    </div>
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                      Disciplina {activeService.number}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#B5B5B5]">
                    HOZLY SPECS
                  </span>
                </div>

                <h4 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-4">
                  {activeService.title}
                </h4>

                <p className="text-[#B5B5B5] text-sm leading-relaxed mb-8">
                  {activeService.longDesc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="block text-xs font-heading font-bold uppercase tracking-[0.16em] text-white">
                    Entregables Clave:
                  </span>
                  <ul className="space-y-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#B5B5B5]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-6 border-t border-white/10">
                  <span className="block text-[11px] font-heading font-semibold uppercase tracking-[0.15em] text-[#B5B5B5] mb-3">
                    Herramientas & Ecosistema:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs bg-[#0A0A0A] text-white/90 border border-white/10 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    href={`#contacto?service=${activeService.id}`}
                  >
                    Cotizar {activeService.title}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
