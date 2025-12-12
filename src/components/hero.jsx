"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const heroRef = useRef(null);
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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-sm lg:text-base font-medium text-muted-foreground mb-4 tracking-widest uppercase">
              {t.hero.greeting}
            </p>
          </div>

          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
              {t.hero.name}
            </h1>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              {t.hero.title}
            </p>
          </div>

          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-base lg:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          <div
            className="animate-on-scroll fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#projects">{t.hero.cta}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <a href="#contact">{t.hero.contact}</a>
            </Button>
          </div>

          <div
            className="animate-on-scroll fade-in-up mt-16 flex items-center justify-center gap-6"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
