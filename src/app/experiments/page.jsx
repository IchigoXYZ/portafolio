"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Beaker, Calendar, Tag } from "lucide-react";
import InteractiveParticles from "@/components/InteractiveParticles";

const EXPERIMENTS = [
  {
    id: "001",
    title: "Raymarching Shapes",
    date: "2024.12.15",
    type: "Shader",
    tech: "GLSL / Three.js",
    link: "https://codepen.io",
  },
  {
    id: "002",
    title: "Particle Physics Engine",
    date: "2024.11.02",
    type: "Physics",
    tech: "Canvas 2D",
    link: "https://github.com",
  },
  {
    id: "003",
    title: "Kinetic Typography",
    date: "2024.10.20",
    type: "Animation",
    tech: "Framer Motion",
    link: "https://twitter.com",
  },
  {
    id: "004",
    title: "Audio Visualizer React",
    date: "2024.09.12",
    type: "Audio",
    tech: "Web Audio API",
    link: "#",
  },
  {
    id: "005",
    title: "Boids Simulation",
    date: "2024.08.05",
    type: "AI",
    tech: "Vectors / p5.js",
    link: "#",
  },
];

export default function ExperimentsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#0b0b0b] pt-32 pb-20 overflow-hidden">
      {/* Partículas activas para dar ese aire de "laboratorio" */}
      <InteractiveParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER ESTILO ARCHIVO */}
        <div className="mb-20 border-l-2 border-red-800 pl-6">
          <div className="animate-on-scroll fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-foreground mb-4">
              Lab <span className="text-red-800">/</span> Experiments
            </h1>
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.2em]">
              [ Index of creative coding and technical research ]
            </p>
          </div>
        </div>

        {/* LISTA DE EXPERIMENTOS (Estilo Yamada) */}
        <div className="w-full">
          {/* Encabezado de la "Tabla" */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-white/10 text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <div className="col-span-1">ID</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-3">Stack</div>
            <div className="col-span-2 text-right">Date</div>
          </div>

          <div className="flex flex-col">
            {EXPERIMENTS.map((exp, index) => (
              <Link 
                key={exp.id}
                href={exp.link}
                target="_blank"
                className="animate-on-scroll fade-in-up group relative grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-6 border-b border-white/5 items-center transition-all hover:bg-white/[0.02]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Indicador ID */}
                <div className="col-span-1 font-mono text-xs text-red-800/60 group-hover:text-red-600 transition-colors">
                  #{exp.id}
                </div>

                {/* Título con Micro-animación */}
                <div className="col-span-4">
                  <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    {exp.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:text-red-600 transition-all" />
                  </h3>
                </div>

                {/* Tipo / Categoría */}
                <div className="col-span-2 hidden md:flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <Beaker className="w-3 h-3" />
                  {exp.type}
                </div>

                {/* Stack Tecnológico */}
                <div className="col-span-3 hidden md:flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                  <Tag className="w-3 h-3" />
                  {exp.tech}
                </div>

                {/* Fecha */}
                <div className="col-span-2 text-left md:text-right font-mono text-[11px] text-muted-foreground/50">
                  <span className="md:hidden inline-block mr-2 text-muted-foreground/30">DATE:</span>
                  {exp.date}
                </div>

                {/* Efecto de línea roja al hover (Fondo) */}
                <div className="absolute left-0 bottom-[-1px] h-[1px] w-0 bg-red-800 group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER DEL LAB */}
        <div className="mt-20 text-center animate-on-scroll fade-in-up">
          <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em]">
            End of log — More coming soon
          </p>
        </div>

      </div>

      {/* Estética de GRID de fondo (Estilo técnico) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
    </main>
  );
}