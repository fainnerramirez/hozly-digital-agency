"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function HeroGeometricVisual() {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.25]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0.2]);
  const rotate = useTransform(scrollY, [0, 600], [0, 45]);
  const yOffset = useTransform(scrollY, [0, 600], [0, 100]);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 35;
      const y = (e.clientY - innerHeight / 2) / 35;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isClient) {
    return <div className="w-full h-full min-h-[460px]" />;
  }

  return (
    <motion.div
      style={{
        scale,
        opacity,
        y: yOffset,
        x: smoothX,
      }}
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none"
    >
      {/* Central Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent blur-[80px]" />
      <div className="absolute w-96 h-96 rounded-full bg-[#0A0A0A]/40" />

      {/* SVG Canvas for High-Precision Animated Geometry */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          <linearGradient id="heroGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D0" />
            <stop offset="40%" stopColor="#E2BD57" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6D1F" />
          </linearGradient>

          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>

          <filter id="heroGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Orbit Rings */}
        <motion.circle
          cx="200"
          cy="200"
          r="165"
          fill="none"
          stroke="rgba(212, 175, 55, 0.15)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />

        <motion.circle
          cx="200"
          cy="200"
          r="135"
          fill="none"
          stroke="rgba(212, 175, 55, 0.25)"
          strokeWidth="1.2"
          strokeDasharray="12 12"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "200px", originY: "200px" }}
        />

        {/* Lateral Technology Pillars (Software & Growth) */}
        <motion.line
          x1="110"
          y1="80"
          x2="110"
          y2="320"
          stroke="url(#beamGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="290"
          y1="80"
          x2="290"
          y2="320"
          stroke="url(#beamGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Central Strategy & Continuity Ring (Anillo central de HOZLY) */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="url(#heroGoldGradient)"
          strokeWidth="2.5"
          filter="url(#heroGlow)"
          animate={{
            scale: [1, 1.04, 1],
            strokeWidth: [2.5, 3.2, 2.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "200px", originY: "200px" }}
        />

        {/* Inner Concentric Continuity Core */}
        <circle
          cx="200"
          cy="200"
          r="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          strokeDasharray="3 6"
        />

        {/* The 3 Dots (Tres Hermanos / Fundadores) with Orbital Geometry */}
        {/* Dot 1: Left Top */}
        <motion.g
          animate={{
            y: [-4, 4, -4],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle
            cx="140"
            cy="125"
            r="11"
            fill="url(#heroGoldGradient)"
            filter="url(#heroGlow)"
          />
          <circle cx="140" cy="125" r="18" fill="none" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" />
        </motion.g>

        {/* Dot 2: Center (Triad focal point) */}
        <motion.g
          animate={{
            y: [4, -4, 4],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle
            cx="200"
            cy="148"
            r="12"
            fill="url(#heroGoldGradient)"
            filter="url(#heroGlow)"
          />
          <circle cx="200" cy="148" r="22" fill="none" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />
        </motion.g>

        {/* Dot 3: Right Top */}
        <motion.g
          animate={{
            y: [-3, 5, -3],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        >
          <circle
            cx="260"
            cy="125"
            r="11"
            fill="url(#heroGoldGradient)"
            filter="url(#heroGlow)"
          />
          <circle cx="260" cy="125" r="18" fill="none" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" />
        </motion.g>

        {/* Harmonic Connection Lines between Dots */}
        <path
          d="M 140 125 Q 200 155 260 125"
          fill="none"
          stroke="rgba(212, 175, 55, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Dynamic Micro Particles floating */}
        {[
          { cx: 160, cy: 260, r: 2.5, delay: 0 },
          { cx: 240, cy: 250, r: 2, delay: 1.2 },
          { cx: 200, cy: 305, r: 3, delay: 2.1 },
          { cx: 120, cy: 200, r: 2, delay: 0.8 },
          { cx: 280, cy: 190, r: 2.5, delay: 1.7 },
        ].map((p, idx) => (
          <motion.circle
            key={idx}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#D4AF37"
            initial={{ opacity: 0.2, y: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 3 + idx,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
