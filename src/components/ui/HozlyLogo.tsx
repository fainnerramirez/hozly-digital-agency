"use client";

import React from "react";
import Link from "next/link";

interface HozlyLogoProps {
  variant?: "full" | "horizontal" | "symbol-only" | "wordmark";
  colorMode?: "gold" | "white" | "monochrome";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  withLink?: boolean;
}

export default function HozlyLogo({
  variant = "full",
  colorMode = "gold",
  size = "md",
  className = "",
  withLink = true,
}: HozlyLogoProps) {
  // Dimension scales
  const sizeConfig = {
    sm: { symbolSize: 32, textScale: "text-sm", subScale: "text-[8px]" },
    md: { symbolSize: 44, textScale: "text-xl", subScale: "text-[10px]" },
    lg: { symbolSize: 64, textScale: "text-3xl", subScale: "text-xs" },
    xl: { symbolSize: 88, textScale: "text-4xl", subScale: "text-sm" },
  };

  const { symbolSize, textScale, subScale } = sizeConfig[size];

  // SVG Symbol Component
  const SymbolSVG = (
    <svg
      width={symbolSize}
      height={symbolSize * 1.12}
      viewBox="0 0 100 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Símbolo oficial HOZLY"
    >
      <defs>
        {/* Metallic Gold Gradient */}
        <linearGradient
          id="hozlyGoldGrad"
          x1="15%"
          y1="5%"
          x2="85%"
          y2="95%"
        >
          <stop offset="0%" stopColor="#FFF2BF" />
          <stop offset="30%" stopColor="#E3BD57" />
          <stop offset="65%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#876718" />
        </linearGradient>

        <linearGradient
          id="hozlyGlowGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#876718" stopOpacity="0.2" />
        </linearGradient>

        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#D4AF37"
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      {/* 3 Upper Dots (The 3 Founder Brothers / De la Hoz) */}
      <g filter={colorMode === "gold" ? "url(#goldGlow)" : undefined}>
        {/* Left Dot */}
        <circle
          cx="22"
          cy="18"
          r="9.5"
          fill={colorMode === "gold" ? "url(#hozlyGoldGrad)" : colorMode === "white" ? "#FFFFFF" : "#D4AF37"}
        />
        {/* Center Dot (slightly lower in arc) */}
        <circle
          cx="50"
          cy="26"
          r="9.5"
          fill={colorMode === "gold" ? "url(#hozlyGoldGrad)" : colorMode === "white" ? "#FFFFFF" : "#D4AF37"}
        />
        {/* Right Dot */}
        <circle
          cx="78"
          cy="18"
          r="9.5"
          fill={colorMode === "gold" ? "url(#hozlyGoldGrad)" : colorMode === "white" ? "#FFFFFF" : "#D4AF37"}
        />
      </g>

      {/* Main Base: Lateral Technology Pillars + Continuous Arc */}
      <g filter={colorMode === "gold" ? "url(#goldGlow)" : undefined}>
        {/* Outer Horseshoe / Pillars contour */}
        <path
          d="M 14 36
             C 14 33, 20 33, 20 36
             L 20 68
             C 20 84, 33 97, 50 97
             C 67 97, 80 84, 80 68
             L 80 36
             C 80 33, 86 33, 86 36
             L 86 68
             C 86 89, 70 106, 50 106
             C 30 106, 14 89, 14 68
             Z"
          fill={colorMode === "gold" ? "url(#hozlyGoldGrad)" : colorMode === "white" ? "#FFFFFF" : "#D4AF37"}
        />

        {/* Central Ring (Strategy & Continuity) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 50 46
             C 61.5 46, 71 55.5, 71 67
             C 71 78.5, 61.5 88, 50 88
             C 38.5 88, 29 78.5, 29 67
             C 29 55.5, 38.5 46, 50 46
             Z
             M 50 54
             C 42.8 54, 37 59.8, 37 67
             C 37 74.2, 42.8 80, 50 80
             C 57.2 80, 63 74.2, 63 67
             C 63 59.8, 57.2 54, 50 54
             Z"
          fill={colorMode === "gold" ? "url(#hozlyGoldGrad)" : colorMode === "white" ? "#FFFFFF" : "#D4AF37"}
        />
      </g>
    </svg>
  );

  const Wordmark = (
    <div className="flex flex-col select-none">
      <span
        className={`font-heading font-extrabold tracking-[0.14em] leading-none text-white transition-colors duration-300 ${textScale}`}
      >
        HOZLY
      </span>
      <span
        className={`font-heading font-light tracking-[0.32em] text-[#B5B5B5] leading-none mt-1.5 uppercase transition-colors duration-300 ${subScale}`}
      >
        AGENCIA DIGITAL
      </span>
    </div>
  );

  const content = (
    <div className={`group inline-flex items-center gap-3.5 ${className}`}>
      {variant === "symbol-only" && SymbolSVG}

      {variant === "wordmark" && Wordmark}

      {variant === "horizontal" && (
        <div className="flex items-center gap-3">
          {SymbolSVG}
          {Wordmark}
        </div>
      )}

      {variant === "full" && (
        <div className="flex flex-col items-center text-center gap-2">
          {SymbolSVG}
          {Wordmark}
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="HOZLY Agencia Digital - Inicio" className="cursor-pointer">
        {content}
      </Link>
    );
  }

  return content;
}
