"use client";

import { useEffect, useRef } from "react";

export function Skills() {
  const skillsRef = useRef (null);

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

    const elements = skillsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"],
    },
    {
      title: "Herramientas",
      skills: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Trabajo en equipo",
        "Comunicación",
        "Resolución de problemas",
        "Adaptabilidad",
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 lg:py-32 bg-accent/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                Habilidades
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Tecnologías y Expertise
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="animate-on-scroll fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 font-serif">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-card border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary/20 hover:border-secondary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
