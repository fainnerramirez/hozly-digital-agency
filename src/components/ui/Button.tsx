"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart" | "style"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      children,
      disabled,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-semibold uppercase tracking-[0.12em] transition-all duration-300 relative group overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const sizeStyles = {
      sm: "text-xs px-4 py-2.5 rounded-full gap-2",
      md: "text-xs md:text-sm px-6 py-3.5 rounded-full gap-2.5",
      lg: "text-sm md:text-base px-8 py-4 rounded-full gap-3",
    };

    const variantStyles = {
      primary:
        "bg-[#D4AF37] hover:bg-[#F2D06B] text-[#0A0A0A] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] border border-[#FFE27D]/40 active:scale-[0.98]",
      secondary:
        "bg-[#1C1C1E] hover:bg-[#252528] text-white border border-white/10 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] active:scale-[0.98]",
      outline:
        "bg-transparent hover:bg-[#D4AF37]/10 text-white border border-[#D4AF37]/60 hover:border-[#D4AF37] active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-white/5 text-[#B5B5B5] hover:text-white active:scale-[0.98]",
    };

    const classes = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && "w-full",
      className
    );

    const innerContent = (
      <>
        {/* Subtle button sheen on primary */}
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        )}
        {leftIcon && <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {rightIcon && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {innerContent}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {innerContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
