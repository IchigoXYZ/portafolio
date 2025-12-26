"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import InteractiveParticles from "@/components/InteractiveParticles";

// Datos de Ejemplo (Idealmente esto vendría de un archivo data/projects.js)
const ALL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Brutalist",
    category: "Full Stack",
    description:
      "Plataforma de comercio con diseño experimental y arquitectura headless usando Shopify y Next.js.",
    image: "/project1.jpg", // Asegúrate de tener imágenes en public/
    tech: ["Next.js", "Shopify API", "Tailwind", "Zustand"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Dashboard Analytics",
    category: "Dashboard",
    description:
      "Panel de control SaaS para visualización de datos en tiempo real impulsado por IA.",
    image: "/project2.jpg",
    tech: ["React", "Python", "D3.js", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 3,
    title: "Neon Portfolio 2023",
    category: "Design",
    description:
      "Sitio web inmersivo premiado con animaciones WebGL fluidas y Three.js.",
    image: "/project3.jpg",
    tech: ["Three.js", "GSAP", "WebGL", "Blender"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Task Master Pro",
    category: "Full Stack",
    description:
      "Aplicación de gestión de tareas colaborativa con updates en tiempo real vía WebSockets.",
    image: "/project4.jpg",
    tech: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

const CATEGORIES = ["Todos", "Full Stack", "Design", "Dashboard"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [filteredProjects, setFilteredProjects] = useState(ALL_PROJECTS);
  const containerRef = useRef(null);

  // Filtrado de proyectos con animación de salida/entrada simple
  useEffect(() => {
    const filtered =
      activeCategory === "Todos"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === activeCategory);
    setFilteredProjects(filtered);

    // Re-trigger observer para nuevos elementos
    setTimeout(() => handleScrollAnimation(), 100);
  }, [activeCategory]);

  // Lógica de Observer (Igual que en About y Hero)
  const handleScrollAnimation = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
  };

  useEffect(() => {
    handleScrollAnimation();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-background pt-24 pb-20 overflow-hidden"
    >
      {/* Fondo de partículas sutil */}
      <div className="opacity-20 fixed inset-0 pointer-events-none">
        <InteractiveParticles />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="mb-16 md:mb-24">
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
              Selected <span className="text-red-800 italic">Works</span>
            </h1>
          </div>
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl">
              Una colección curada de proyectos donde la lógica se encuentra con
              la creatividad.
            </p>
          </div>
        </div>

        {/* FILTER TABS */}
        <div
          className="animate-on-scroll fade-in-up mb-12 flex flex-wrap gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-red-800 text-white border-red-800 shadow-[0_0_15px_rgba(153,27,27,0.5)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll fade-in-up group relative flex flex-col"
              style={{ animationDelay: `${0.1 + (index % 2) * 0.1}s` }} // Stagger effect
            >
              {/* CARD IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted border border-border/50 shadow-lg">
                {/* Overlay gradiente al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 z-10" />

                {/* Imagen con efecto Zoom */}
                <div className="relative h-full w-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                  {/* Placeholder visual si no hay imagen real */}
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-700 font-serif text-9xl font-bold opacity-30 select-none">
                    {index + 1}
                  </div>

                  {/* Usa esto cuando tengas imágenes reales */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> 
                  */}
                </div>

                {/* Botones flotantes (aparecen en hover en desktop, siempre visibles en mobile) */}
                <div className="absolute bottom-6 right-6 z-20 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-red-700 hover:text-white transition-colors border border-border"
                    title="Ver Código"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-red-700 hover:text-white transition-colors border border-border"
                    title="Ver Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="mt-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-red-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground/60 border border-border px-2 py-1 rounded">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MENSAJE SI NO HAY PROYECTOS */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center animate-on-scroll fade-in-up">
            <p className="text-muted-foreground text-lg">
              No hay proyectos en esta categoría aún.
            </p>
          </div>
        )}

        {/* CTA BOTTOM */}
        <div className="mt-32 border-t border-border pt-16 flex flex-col items-center text-center">
          <h2 className="animate-on-scroll fade-in-up text-3xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="lg" className="rounded-full gap-2 group" asChild>
              <Link href="/contact">
                Contáctame ahora{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
