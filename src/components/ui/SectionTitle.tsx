"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  number?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  number,
  title,
  subtitle,
  align = "left",
  className = "",
  light = false,
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-20 max-w-3xl",
        alignmentClasses[align],
        className
      )}
    >
      {/* Badge / Number Header */}
      {(badge || number) && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          {number && (
            <span className="font-heading text-xs md:text-sm font-semibold text-[#D4AF37] tracking-[0.2em] uppercase">
              {number}
            </span>
          )}
          {number && badge && (
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          )}
          {badge && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] md:text-xs font-heading font-medium tracking-[0.18em] uppercase bg-[#1C1C1E] text-[#B5B5B5] border border-[#D4AF37]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              {badge}
            </span>
          )}
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.08]",
          light ? "text-white" : "text-white"
        )}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#B5B5B5] font-normal leading-relaxed font-body"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
