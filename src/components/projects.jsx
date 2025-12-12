"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Projects() {
  const projectsRef = useRef(null);
  const { t } = useLanguage();

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
      projectsRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: "/modern-ecommerce-platform.jpg",
      technologies: t.projects.project1.tech.split(", "),
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: "/analytics-dashboard-dark-theme.jpg",
      technologies: t.projects.project2.tech.split(", "),
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      image: "/task-management-app-interface.jpg",
      technologies: t.projects.project3.tech.split(", "),
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {t.projects.title}
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground text-balance">
                {t.projects.title}
              </h2>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${
                  index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Card className="overflow-hidden border-border bg-card hover:shadow-xl transition-shadow">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      index % 2 === 0 ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    <div
                      className={`relative h-64 lg:h-full ${
                        index % 2 === 0 ? "" : "lg:col-start-2"
                      }`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button size="sm" variant="default" asChild>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {t.projects.viewProject}
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
