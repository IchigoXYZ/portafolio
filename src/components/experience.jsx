"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Experience() {
  const experienceRef = useRef (null);
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
      experienceRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const experiences = [
    {
      role: t.experience.job1.title,
      company: t.experience.job1.company,
      period: t.experience.job1.period,
      description: t.experience.job1.description,
    },
    {
      role: t.experience.job2.title,
      company: t.experience.job2.company,
      period: t.experience.job2.period,
      description: t.experience.job2.description,
    },
    {
      role: t.experience.job3.title,
      company: t.experience.job3.company,
      period: t.experience.job3.period,
      description: t.experience.job3.description,
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {t.experience.title}
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground text-balance">
                {t.experience.title}
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
                          <div className="bg-secondary p-3 rounded-lg">
                            <Briefcase className="h-5 w-5" />
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
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
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
