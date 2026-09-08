"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import Button from "@/components/ui/Button";

type FilterType = "ALL" | "Branding" | "Desarrollo Web" | "Marketing" | "Publicidad";

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("ALL");

  const filteredProjects =
    filter === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.discipline === filter);

  return (
    <section id="proyectos" className="py-24 md:py-36 relative bg-[#0A0A0A]">
      <Container size="full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionTitle
            badge="Casos de Estudio"
            number="03 / PORTFOLIO"
            title="Proyectos que hablan por nosotros."
            subtitle="Una selección de trabajos donde convergen diseño de autor, ingeniería web rigurosa y estrategia de negocio."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(["ALL", "Branding", "Desarrollo Web", "Marketing", "Publicidad"] as FilterType[]).map(
              (item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-full text-xs font-heading font-medium tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
                    filter === item
                      ? "bg-[#D4AF37] text-[#0A0A0A] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-[#1C1C1E] text-[#B5B5B5] hover:text-white hover:border-[#D4AF37]/30 border border-white/5"
                  }`}
                >
                  {item === "ALL" ? "Todos" : item}
                </button>
              )
            )}
          </div>
        </div>

        {/* Asymmetric Masonry / Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-start">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout rules based on index
            let colSpan = "md:col-span-6";
            let isLarge = false;

            if (index === 0) {
              colSpan = "md:col-span-7";
              isLarge = true;
            } else if (index === 1) {
              colSpan = "md:col-span-5";
              isLarge = true;
            } else if (index === 2) {
              colSpan = "md:col-span-4";
            } else if (index === 3) {
              colSpan = "md:col-span-8";
            } else if (index === 4) {
              colSpan = "md:col-span-12";
            }

            return (
              <div key={project.id} className={colSpan}>
                <ProjectCard project={project} isLarge={isLarge} />
              </div>
            );
          })}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#B5B5B5] mb-6 font-light">
            ¿Tienes un proyecto de alto calibre en mente?
          </p>
          <Button variant="outline" size="md" href="#contacto">
            Iniciar un proyecto conjunto
          </Button>
        </div>
      </Container>
    </section>
  );
}
