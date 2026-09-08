"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for magnetic & fluid trail
  const springX = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30 });

  const dotSpringX = useSpring(mouseX, { stiffness: 900, damping: 40 });
  const dotSpringY = useSpring(mouseY, { stiffness: 900, damping: 40 });

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[data-cursor='hover']") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="absolute rounded-full border border-[#D4AF37] transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicking ? 26 : isHovering ? 48 : 28,
          height: isClicking ? 26 : isHovering ? 48 : 28,
          backgroundColor: isHovering
            ? "rgba(212, 175, 55, 0.14)"
            : "transparent",
          borderColor: isHovering ? "#D4AF37" : "rgba(212, 175, 55, 0.5)",
          boxShadow: isHovering
            ? "0 0 20px rgba(212, 175, 55, 0.4)"
            : "0 0 10px rgba(212, 175, 55, 0.15)",
        }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="absolute rounded-full bg-[#D4AF37]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
        }}
      />
    </div>
  );
}
