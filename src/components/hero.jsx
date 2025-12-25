"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

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
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full relative overflow-hidden group border-black"
            >
              <Link href="/projects">
                <span className="absolute inset-0 bg-red-800 origin-left transform scale-x-0 rounded-full group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 duration-100 delay-200 group-hover:text-white">
                  {t.hero.cta}
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto bg-transparent rounded-full relative overflow-hidden group"
            >
              <Link href="/contact">
                <span className="absolute inset-0 bg-red-800 origin-left transform scale-x-0 rounded-full group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 duration-100 delay-200 group-hover:text-white">
                  {t.hero.contact}
                </span>
              </Link>
            </Button>
          </div>

          <div className="animate-on-scroll fade-in-up mt-16 flex items-center justify-center gap-6">
            {/* GitHub */}
            <div className="relative group">
              {/* Tooltip */}
              <div
                className="absolute -top-11 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-gray-700 text-gray-100 text-sm font-medium whitespace-nowrap 
                            opacity-0 group-hover:opacity-100 
                            translate-y-2 group-hover:translate-y-0 
                            scale-95 group-hover:scale-100 
                            transition-all duration-200 ease-out 
                            pointer-events-none z-50 shadow-lg"
              >
                GitHub
                {/* Flecha del tooltip */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rotate-45" />
              </div>

              {/* Icono con fondo circular */}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 inline-flex items-center justify-center group/icon"
              >
                {/* Fondo circular */}
                <div className="absolute w-14 h-14 rounded-full bg-gray-500 opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300 scale-0 group-hover/icon:scale-100" />

                {/* Icono */}
                <div className="relative z-10 text-muted-foreground group-hover/icon:text-foreground transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </div>
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              {/* Tooltip */}
              <div
                className="absolute -top-11 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-blue-700 text-blue-100 text-sm font-medium whitespace-nowrap 
                            opacity-0 group-hover:opacity-100 
                            translate-y-2 group-hover:translate-y-0 
                            scale-95 group-hover:scale-100 
                            transition-all duration-200 ease-out 
                            pointer-events-none z-50 shadow-lg"
              >
                LinkedIn
                {/* Flecha del tooltip */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-700 rotate-45" />
              </div>

              {/* Icono con fondo circular */}
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 inline-flex items-center justify-center group/icon"
              >
                {/* Fondo circular */}
                <div className="absolute w-14 h-14 rounded-full bg-blue-700 opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300 scale-0 group-hover/icon:scale-100" />

                {/* Icono */}
                <div className="relative z-10 text-muted-foreground group-hover/icon:text-foreground transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </div>
              </Link>
            </div>

            {/* Email */}
            <div className="relative group">
              {/* Tooltip */}
              <div
                className="absolute -top-11 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg bg-red-700 text-red-100 text-sm font-medium whitespace-nowrap 
                            opacity-0 group-hover:opacity-100 
                            translate-y-2 group-hover:translate-y-0 
                            scale-95 group-hover:scale-100 
                            transition-all duration-200 ease-out 
                            pointer-events-none z-50 shadow-lg"
              >
                Email
                {/* Flecha del tooltip */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-700 rotate-45" />
              </div>

              {/* Icono con fondo circular */}
              <Link
                href="mailto:maranthony.work@gmail.com"
                className="relative p-3 inline-flex items-center justify-center group/icon"
              >
                {/* Fondo circular */}
                <div className="absolute w-14 h-14 rounded-full bg-red-600 opacity-0 group-hover/icon:opacity-60 transition-opacity duration-300 scale-0 group-hover/icon:scale-100" />

                {/* Icono */}
                <div className="relative z-10 text-muted-foreground group-hover/icon:text-foreground transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
