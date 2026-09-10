"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import HozlyLogo from "@/components/ui/HozlyLogo";
import Button from "@/components/ui/Button";

interface NavLinkItem {
  name: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proceso", href: "#proceso" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracker
      const sections = ["hero", "servicios", "proyectos", "nosotros", "proceso", "contacto"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-500 ${isScrolled ? "py-2.5 sm:py-3 md:py-4" : "py-3.5 sm:py-5 md:py-8"
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12">
          <nav
            className={`w-full flex items-center justify-between transition-all duration-500 rounded-full px-3.5 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 ${isScrolled
              ? "bg-[#1C1C1E]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#1C1C1E]/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:shadow-none"
              }`}
          >
            {/* Brand Logo */}
            <div className="flex items-center shrink min-w-0">
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <HozlyLogo
                  variant="horizontal"
                  size={isScrolled ? "sm" : "md"}
                  colorMode="gold"
                />
              </div>
              {/* Mobile Compact Logo */}
              <div className="sm:hidden">
                <HozlyLogo
                  variant="horizontal"
                  size="sm"
                  colorMode="gold"
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-8 text-sm font-heading font-medium tracking-[0.1em] uppercase">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative py-1 transition-colors duration-300 hover:text-white group ${isActive ? "text-[#D4AF37]" : "text-[#B5B5B5]"
                        }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300 ${isActive
                          ? "w-full shadow-[0_0_8px_#D4AF37]"
                          : "w-0 group-hover:w-full"
                          }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                href="#contacto"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Hablemos
              </Button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              className="lg:hidden shrink-0 p-2 sm:p-2.5 rounded-full bg-[#1C1C1E] border border-white/10 text-white hover:border-[#D4AF37]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 lg:hidden flex flex-col justify-between px-6 sm:px-8 py-20 overflow-y-auto overflow-x-hidden max-w-full"
          >
            {/* Decorative Gold Radial Glow */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col space-y-6 mt-8">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                Navegación
              </span>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-wider text-white hover:text-[#D4AF37] transition-colors flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <p className="text-xs text-[#B5B5B5] tracking-widest uppercase font-heading">
                Marketing · Publicidad · Tecnología
              </p>
              <Button
                variant="primary"
                size="md"
                href="#contacto"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Hablemos de tu proyecto
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
