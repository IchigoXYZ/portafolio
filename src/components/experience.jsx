"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experienceRef = useRef < HTMLDivElement > null;

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
      experienceRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description:
        "Liderando el desarrollo de aplicaciones web enterprise con Next.js y TypeScript. Implementación de arquitecturas escalables y mentoría a desarrolladores junior.",
      achievements: [
        "Mejoré el rendimiento de la aplicación principal en un 40%",
        "Implementé sistema de diseño reutilizable",
        "Lideré la migración a Next.js 14",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description:
        "Desarrollo de sitios web y aplicaciones para clientes diversos. Especialización en React, Node.js y bases de datos SQL.",
      achievements: [
        "Desarrollé más de 20 proyectos exitosos",
        "Reduje el tiempo de carga en un 50%",
        "Implementé CI/CD pipelines",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Startup Innovation",
      period: "2019 - 2020",
      description:
        "Creación de interfaces de usuario modernas y responsivas. Colaboración estrecha con diseñadores y equipo de producto.",
      achievements: [
        "Construí componentes reutilizables",
        "Mejoré la accesibilidad del sitio",
        "Implementé testing automatizado",
      ],
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                Experiencia
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Trayectoria Profesional
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`animate-on-scroll ${
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                  } relative`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 ${
                      index % 2 === 0 ? "" : "md:grid-flow-dense"
                    }`}
                  >
                    <div
                      className={`${index % 2 === 0 ? "" : "md:col-start-2"}`}
                    >
                      <div className="bg-card border border-border rounded-lg p-6 lg:p-8 hover:shadow-lg transition-shadow ml-8 md:ml-0">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-secondary/10 p-2 rounded-lg">
                            <Briefcase className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-secondary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-background transform md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
