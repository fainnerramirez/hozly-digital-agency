"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Globe } from "lucide-react";
import HozlyLogo from "@/components/ui/HozlyLogo";
import Container from "@/components/ui/Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Huge subtle brand watermark in background */}
      <div className="absolute -bottom-16 -right-16 pointer-events-none select-none opacity-[0.03]">
        <svg width="450" height="500" viewBox="0 0 100 112" fill="none">
          <circle cx="22" cy="18" r="9.5" fill="#FFFFFF" />
          <circle cx="50" cy="26" r="9.5" fill="#FFFFFF" />
          <circle cx="78" cy="18" r="9.5" fill="#FFFFFF" />
          <path
            d="M 14 36 C 14 33, 20 33, 20 36 L 20 68 C 20 84, 33 97, 50 97 C 67 97, 80 84, 80 68 L 80 36 C 80 33, 86 33, 86 36 L 86 68 C 86 89, 70 106, 50 106 C 30 106, 14 89, 14 68 Z"
            fill="#FFFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 50 46 C 61.5 46, 71 55.5, 71 67 C 71 78.5, 61.5 88, 50 88 C 38.5 88, 29 78.5, 29 67 C 29 55.5, 38.5 46, 50 46 Z M 50 54 C 42.8 54, 37 59.8, 37 67 C 37 74.2, 42.8 80, 50 80 C 57.2 80, 63 74.2, 63 67 C 63 59.8, 57.2 54, 50 54 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <Container size="full" className="relative z-10">
        {/* Upper Row: Brand info + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <HozlyLogo variant="horizontal" size="lg" colorMode="gold" />

            <p className="font-heading text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Marketing · Publicidad · Tecnología
            </p>

            <p className="text-sm text-[#B5B5B5] font-light max-w-sm leading-relaxed">
              Transformamos ideas en estrategias, experiencias digitales y
              campañas que generan resultados reales. Fundamentados en la
              creatividad de autor y la ingeniería web de vanguardia.
            </p>

            {/* Social SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#B5B5B5] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#B5B5B5] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#B5B5B5] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-[#B5B5B5] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Column 1: Servicios (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white block">
              Servicios
            </span>
            <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
              <li>
                <Link href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Publicidad Creativa
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Branding & Diseño
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Desarrollo Web Next.js
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-[#D4AF37] transition-colors">
                  Consultoría Estratégica
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Explorar (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white block">
              Explorar
            </span>
            <ul className="space-y-2.5 text-sm text-[#B5B5B5]">
              <li>
                <Link href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="hover:text-[#D4AF37] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="hover:text-[#D4AF37] transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="hover:text-[#D4AF37] transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-[#D4AF37] transition-colors">
                  Hablemos
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Contacto & Back to top (2 cols) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white block mb-4">
                Contacto
              </span>
              <p className="text-xs text-[#B5B5B5] leading-relaxed">
                contacto@hozly.agency
              </p>
              <p className="text-xs text-[#B5B5B5] leading-relaxed mt-1">
                Atención remota global
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              <span>Subir al inicio</span>
              <div className="w-7 h-7 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B5B5B5]/70 font-body">
          <div className="flex items-center gap-2">
            <span>© {currentYear} HOZLY Agencia Digital.</span>
            <span className="hidden sm:inline">·</span>
            <span>Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Términos del Servicio
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Política de Privacidad
            </span>
            <span className="text-[#D4AF37] font-mono">
              <Link href="https://faidevstudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Diseñado y desarrollado por Faidev Studio.
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
