"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Clock,
  Globe,
  CheckCircle2,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

interface FormData {
  nombre: string;
  correo: string;
  empresa: string;
  servicio: string;
  presupuesto: string;
  mensaje: string;
}

const serviceOptions = [
  "Marketing",
  "Publicidad",
  "Branding",
  "Desarrollo web",
  "Estrategia",
  "Otro",
];

const budgetOptions = [
  "Menos de $1.000",
  "$1.000 – $3.000",
  "$3.000 – $5.000",
  "$5.000+",
  "Prefiero hablarlo",
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    correo: "",
    empresa: "",
    servicio: "Desarrollo web",
    presupuesto: "$3.000 – $5.000",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request / ready for endpoint integration
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setSubmitted(true);

    // Subtle celebratory confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#D4AF37", "#FFFFFF", "#E5E5E7"],
    });
  };

  return (
    <section id="contacto" className="py-24 md:py-36 relative bg-[#0A0A0A]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionTitle
                badge="Iniciemos Conversación"
                number="06 / CONTACTO"
                title="CUÉNTANOS TU IDEA."
                subtitle="Estamos listos para transformar tu visión en una estrategia digital de alto impacto y resultados medibles."
                className="mb-8"
              />

              {/* Direct Info Cards */}
              <div className="space-y-4 mt-8">
                <div className="p-5 rounded-2xl bg-[#1C1C1E]/60 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#D4AF37]/40 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">
                      Correo Electrónico Directo
                    </span>
                    <a
                      href="mailto:contacto@hozly.agency"
                      className="text-white hover:text-[#D4AF37] transition-colors font-heading font-medium text-sm sm:text-base mt-0.5 block"
                    >
                      contacto@hozly.agency
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#1C1C1E]/60 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#008CFF]/40 text-[#008CFF]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B5B5B5] uppercase tracking-widest block">
                      Velocidad de Respuesta
                    </span>
                    <p className="text-white font-heading font-medium text-sm mt-0.5">
                      Respondemos en menos de 24 horas hábiles.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#1C1C1E]/60 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#34D5C3]/40 text-[#34D5C3]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B5B5B5] uppercase tracking-widest block">
                      Alcance Operativo
                    </span>
                    <p className="text-white font-heading font-medium text-sm mt-0.5">
                      Operación remota y presencia global con marcas en Latinoamérica y el mundo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Promise Badge */}
            <div className="mt-10 p-6 rounded-2xl bg-[#1C1C1E]/30 border border-[#D4AF37]/20 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <p className="text-xs text-[#B5B5B5] leading-relaxed">
                Sin compromisos iniciales. Evaluamos tus metas y te presentamos una propuesta técnica y estratégica clara.
              </p>
            </div>
          </div>

          {/* Right Column: High-End Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1C1E]/80 border border-[#D4AF37]/35 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white">
                      ¡MENSAJE RECIBIDO!
                    </h3>
                    <p className="text-sm text-[#B5B5B5] font-light leading-relaxed">
                      Gracias por contactar a HOZLY, <span className="text-white font-medium">{form.nombre}</span>. Uno de nuestros directores estratégicos revisará tu proyecto y se comunicará contigo a la brevedad.
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        nombre: "",
                        correo: "",
                        empresa: "",
                        servicio: "Desarrollo web",
                        presupuesto: "$3.000 – $5.000",
                        mensaje: "",
                      });
                    }}
                  >
                    Enviar otra consulta
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Nombre & Correo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="block text-xs font-heading font-semibold uppercase tracking-wider text-white"
                      >
                        Nombre Completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        placeholder="Ej: Daniel De la Hoz"
                        value={form.nombre}
                        onChange={(e) =>
                          setForm({ ...form, nombre: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/15 text-white placeholder-[#B5B5B5]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="correo"
                        className="block text-xs font-heading font-semibold uppercase tracking-wider text-white"
                      >
                        Correo Corporativo *
                      </label>
                      <input
                        id="correo"
                        type="email"
                        required
                        placeholder="nombre@tuempresa.com"
                        value={form.correo}
                        onChange={(e) =>
                          setForm({ ...form, correo: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/15 text-white placeholder-[#B5B5B5]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Empresa */}
                  <div className="space-y-2">
                    <label
                      htmlFor="empresa"
                      className="block text-xs font-heading font-semibold uppercase tracking-wider text-white"
                    >
                      Empresa o Marca
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Nombre de tu marca u organización"
                      value={form.empresa}
                      onChange={(e) =>
                        setForm({ ...form, empresa: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/15 text-white placeholder-[#B5B5B5]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  {/* Row 3: Servicio (Pills selector) */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-white">
                      ¿Qué disciplina necesitas?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, servicio: opt })}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-heading font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer text-left border ${
                            form.servicio === opt
                              ? "bg-[#D4AF37] text-[#0A0A0A] font-bold border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                              : "bg-[#0A0A0A] text-[#B5B5B5] border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 4: Presupuesto (Pills selector) */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider text-white">
                      Rango de Inversión Estimado
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, presupuesto: opt })}
                          className={`px-3.5 py-2.5 rounded-xl text-xs font-heading font-medium tracking-wide transition-all duration-200 cursor-pointer text-left border ${
                            form.presupuesto === opt
                              ? "bg-[#D4AF37] text-[#0A0A0A] font-bold border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                              : "bg-[#0A0A0A] text-[#B5B5B5] border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Mensaje */}
                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="block text-xs font-heading font-semibold uppercase tracking-wider text-white"
                    >
                      Cuéntanos sobre tu idea o proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      placeholder="Objetivos, plazos, requerimientos especiales o visión del proyecto..."
                      value={form.mensaje}
                      onChange={(e) =>
                        setForm({ ...form, mensaje: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-white/15 text-white placeholder-[#B5B5B5]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      rightIcon={
                        isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? "Enviando solicitud..." : "Enviar propuesta"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
