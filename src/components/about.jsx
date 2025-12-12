"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const aboutRef = useRef (null);

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

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const features = [
    {
      icon: Code2,
      title: "Desarrollo Limpio",
      description:
        "Código mantenible, escalable y siguiendo las mejores prácticas de la industria.",
    },
    {
      icon: Palette,
      title: "Diseño Elegante",
      description:
        "Interfaces modernas y atractivas con atención al detalle y experiencia de usuario.",
    },
    {
      icon: Rocket,
      title: "Alto Rendimiento",
      description:
        "Aplicaciones optimizadas con carga rápida y excelente performance.",
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 lg:py-32 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                Sobre Mí
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Apasionado por crear soluciones innovadoras
              </h2>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soy un desarrollador full stack con más de 5 años de experiencia
                creando aplicaciones web modernas. Me especializo en React,
                Next.js, TypeScript y tecnologías cloud. Mi objetivo es
                construir productos que combinen diseño elegante con código de
                calidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-on-scroll scale-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow border-border bg-card">
                  <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
