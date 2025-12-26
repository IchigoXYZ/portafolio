"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code2, Palette, Terminal, Zap } from "lucide-react";
import InteractiveParticles from "@/components/InteractiveParticles";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const containerRef = useRef(null);
  const { t } = useLanguage(); // Asumiendo que tienes traducciones, si no, usa texto directo

  // Lógica de Observer para animaciones al hacer scroll
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  // Datos de servicios (puedes moverlos a un archivo de datos)
  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Dev",
      desc: "Arquitectura escalable desde el frontend hasta el backend usando Next.js y Node.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      desc: "Interfaces inmersivas que priorizan la experiencia de usuario y la estética.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "DevOps & Cloud",
      desc: "CI/CD pipelines, despliegues en AWS/Vercel y optimización de rendimiento.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Coding",
      desc: "Animaciones WebGL y experiencias interactivas que rompen lo convencional.",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-background pt-24 pb-20 overflow-hidden"
    >
      {/* Fondo de partículas reutilizado para consistencia (estilo p5aholic) */}
      <div className="opacity-30 fixed inset-0 pointer-events-none">
        <InteractiveParticles />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- SECCIÓN 1: INTRODUCCIÓN (Estilo itssharl.ee) --- */}
        <section className="mb-32">
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 tracking-tight">
              About <span className="text-muted-foreground/30 italic">Me.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Columna de Texto */}
            <div className="lg:col-span-7 space-y-8">
              <div
                className="animate-on-scroll fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground/90">
                  Soy un desarrollador apasionado por la intersección entre el{" "}
                  <span className="text-red-700 font-serif italic">diseño</span>{" "}
                  y la{" "}
                  <span className="text-red-700 font-serif italic">
                    ingeniería
                  </span>
                  .
                </h2>
              </div>

              <div
                className="animate-on-scroll fade-in-up space-y-6 text-lg text-muted-foreground leading-loose"
                style={{ animationDelay: "0.3s" }}
              >
                <p>
                  Con base en el mundo digital, creo experiencias web que no
                  solo funcionan, sino que se sienten vivas. Mi enfoque combina
                  la precisión técnica con una sensibilidad artística única.
                </p>
                <p>
                  A diferencia de los desarrolladores tradicionales, no solo
                  escribo código; esculpo interacciones. Me inspiro en el
                  brutalismo minimalista y el movimiento cinético para crear
                  interfaces que dejan huella.
                </p>
              </div>

              <div
                className="animate-on-scroll fade-in-up pt-4"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full group border-foreground/20 hover:border-red-700 transition-all duration-300"
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    Descargar CV{" "}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Columna de Imagen (Efecto Hover Interactivo) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div
                className="animate-on-scroll scale-in relative aspect-[3/4] w-full max-w-md mx-auto group"
                style={{ animationDelay: "0.3s" }}
              >
                {/* Marco decorativo */}
                <div className="absolute inset-0 border border-foreground/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-out z-0 rounded-sm"></div>

                {/* Contenedor de Imagen */}
                <div className="relative h-full w-full overflow-hidden rounded-sm bg-muted z-10 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                  {/* REEMPLAZA '/profile.jpg' con tu foto real en la carpeta public */}
                  <Image
                    src="/img/about.webp"
                    alt="Mar Profile"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay de color al hover */}
                  <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 2: SERVICIOS / STACK (Grid Brutalista) --- */}
        <section className="mb-32">
          <div className="border-t border-border mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll fade-in-up group"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-red-700/10 group-hover:text-red-700 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN 3: FILOSOFÍA (Texto Grande estilo p5aholic) --- */}
        <section className="py-20 relative">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-red-700 to-transparent opacity-20"></div>
          <div className="pl-8 md:pl-16">
            <h3
              className="animate-on-scroll fade-in-left text-sm font-mono text-red-700 mb-6 uppercase tracking-widest"
              style={{ animationDelay: "0.1s" }}
            >
              Mi Filosofía
            </h3>
            <p
              className="animate-on-scroll fade-in-up text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground/80"
              style={{ animationDelay: "0.2s" }}
            >
              El código es poesía lógica. <br className="hidden md:block" />
              <span className="text-muted-foreground/40">
                Creo sistemas complejos
              </span>{" "}
              <br className="hidden md:block" />
              que se sienten simples.
            </p>
          </div>
        </section>

        {/* --- SECCIÓN 4: CTA FINAL --- */}
        <section className="mt-32 text-center">
          <div
            className="animate-on-scroll scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              ¿Listo para crear algo increíble?
            </h2>
            <Button
              size="lg"
              asChild
              className="rounded-full bg-foreground text-background hover:bg-red-700 hover:text-white transition-all duration-300 px-8 py-6 text-lg"
            >
              <Link href="/contact">Iniciar Proyecto</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
