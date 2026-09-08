"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { type ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  isLarge?: boolean;
}

export default function ProjectCard({
  project,
  className = "",
  isLarge = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic visual aesthetic representing high-end digital agency work
  const backgroundThemes: Record<string, string> = {
    "lumina-capital": "from-[#1C1C1E] via-[#2A2415] to-[#0A0A0A]",
    "aethel-sound": "from-[#1C1C1E] via-[#0E2238] to-[#0A0A0A]",
    "kronos-dynamics": "from-[#222226] via-[#1A1A1D] to-[#0A0A0A]",
    "novalux-energy": "from-[#1C1C1E] via-[#0D2824] to-[#0A0A0A]",
    "vellum-studio": "from-[#25201A] via-[#1C1C1E] to-[#0A0A0A]",
  };

  const currentTheme =
    backgroundThemes[project.id] || "from-[#1C1C1E] via-[#202024] to-[#0A0A0A]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 bg-gradient-to-br ${currentTheme} ${className} flex flex-col justify-between`}
    >
      {/* Visual Canvas Area with abstract geometric art & mock preview */}
      <div
        className={`relative w-full overflow-hidden flex items-center justify-center p-8 sm:p-12 ${
          isLarge ? "h-[340px] sm:h-[440px]" : "h-[280px] sm:h-[340px]"
        }`}
      >
        {/* Subtle grid pattern inside */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${project.accentColor} 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Glow */}
        <div
          className="absolute w-60 h-60 rounded-full blur-[90px] opacity-25 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Abstract Architectural/Creative Visual Asset */}
        <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-[#D4AF37]/60 transition-colors">
            <Sparkles
              className="w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:rotate-12"
              style={{ color: project.accentColor }}
            />
          </div>
          <span className="mt-4 text-[11px] font-mono tracking-widest text-[#B5B5B5] uppercase">
            {project.discipline} · {project.year}
          </span>
        </div>

        {/* Floating Quick Discipline Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="px-3 py-1 rounded-full text-[10px] font-heading font-medium tracking-[0.16em] uppercase bg-[#0A0A0A]/80 text-white border border-white/10 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Floating Arrow Icon Button */}
        <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#0A0A0A]/80 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-[#0A0A0A] group-hover:border-[#D4AF37] transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Editorial Content Footer */}
      <div className="p-6 sm:p-8 bg-[#0A0A0A]/85 backdrop-blur-md border-t border-white/10">
        <div className="flex items-baseline justify-between gap-4">
          <h4 className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white uppercase group-hover:text-[#D4AF37] transition-colors">
            {project.title}
          </h4>
          <span className="text-xs font-mono text-[#D4AF37]">{project.year}</span>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-[#B5B5B5] font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded bg-[#1C1C1E] text-[#B5B5B5] font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
