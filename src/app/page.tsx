"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import BrandStatement from "@/components/intro/BrandStatement";
import Services from "@/components/services/Services";
import ImpactMetrics from "@/components/impact/ImpactMetrics";
import Process from "@/components/process/Process";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import MissionVision from "@/components/brand/MissionVision";
import Differentials from "@/components/brand/Differentials";
import MidCTA from "@/components/cta/MidCTA";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-[#0A0A0A] overflow-x-hidden w-full max-w-full">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      {/* Main Orchestrated Sections */}
      <main className="flex-grow">
        {/* 01. Hero Section & Geometric Motion Artwork */}
        <Hero />

        {/* 02. Manifesto / Brand Statement */}
        <BrandStatement />

        {/* 03. Editorial Services Explorer */}
        <Services />

        {/* 04. Brand Impact & Metrics */}
        <ImpactMetrics />

        {/* 05. 5-Stage Connected Process */}
        <Process />

        {/* 06. Editorial Asymmetric Portfolio */}
        <Projects />

        {/* 07. Human Story (De la Hoz) & Interactive Logo Anatomy */}
        <About />

        {/* 08. Misión y Visión Oficiales */}
        <MissionVision />

        {/* 09. Differentials: No somos solo una agencia */}
        <Differentials />

        {/* 10. Intermediate High-Conversion Visual CTA */}
        <MidCTA />

        {/* 11. High-End Contact Form */}
        <Contact />
      </main>

      {/* 12. Minimalist Brand Footer */}
      <Footer />
    </div>
  );
}
