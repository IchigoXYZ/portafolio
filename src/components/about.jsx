"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const aboutRef = useRef (null);
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

    const elements = aboutRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const features = [
    {
      icon: Code2,
      title: t.about.passion,
      description: t.about.passionDesc,
    },
    {
      icon: Palette,
      title: t.about.design,
      description: t.about.designDesc,
    },
    {
      icon: Rocket,
      title: t.about.innovation,
      description: t.about.innovationDesc,
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 lg:py-32 bg-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {t.about.title}
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {t.about.title}
              </h2>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t.about.description}
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
