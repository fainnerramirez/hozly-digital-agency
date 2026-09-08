import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  const sizeMap = {
    sm: "max-w-4xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
    full: "max-w-[1440px]",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16",
        sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
}
