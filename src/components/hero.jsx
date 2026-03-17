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
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradiente de fondo sutil que se adapta al modo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,27,27,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(153,27,27,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* GREETING */}
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-sm lg:text-base font-medium text-red-800 dark:text-red-500 mb-4 tracking-[0.2em] uppercase">
              {t.hero.greeting}
            </p>
          </div>

          {/* NAME & TITLE */}
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-6 text-balance tracking-tight">
              {t.hero.name}
            </h1>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 italic opacity-80">
              {t.hero.title}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div
            className="animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-base lg:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="animate-on-scroll fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full relative overflow-hidden group bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg"
            >
              <Link href="/projects">
                <span className="absolute inset-0 bg-red-800 origin-left transform scale-x-0 rounded-full group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 group-hover:text-white">
                  {t.hero.cta}
                </span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto rounded-full relative overflow-hidden group border-border hover:border-red-800 transition-colors"
            >
              <Link href="/contact">
                <span className="absolute inset-0 bg-red-800 origin-left transform scale-x-0 rounded-full group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {t.hero.contact}
                </span>
              </Link>
            </Button>
          </div>

          {/* SOCIAL LINKS */}
          <div className="animate-on-scroll fade-in-up mt-16 flex items-center justify-center gap-4 sm:gap-8">
            <SocialIcon
              href="https://github.com"
              icon={<Github className="h-6 w-6" />}
              label="GitHub"
              hoverBg="bg-slate-200 dark:bg-slate-800"
              tooltipBg="bg-slate-900"
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={<Linkedin className="h-6 w-6" />}
              label="LinkedIn"
              hoverBg="bg-blue-100 dark:bg-blue-900/30"
              tooltipBg="bg-[#0077b5]"
            />
            <SocialIcon
              href="mailto:maranthony.work@gmail.com"
              icon={<Mail className="h-6 w-6" />}
              label="Email"
              hoverBg="bg-red-100 dark:bg-red-900/30"
              tooltipBg="bg-red-700"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="/about">
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-red-800 transition-colors" />
        </Link>
      </div>
    </section>
  );
}

// Sub-componente para limpiar el código de los iconos sociales
function SocialIcon({ href, icon, label, hoverBg, tooltipBg }) {
  return (
    <div className="relative group">
      <div
        className={`absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg ${tooltipBg} text-white text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl pointer-events-none z-50`}
      >
        {label}
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 ${tooltipBg} rotate-45`}
        />
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-4 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <div
          className={`absolute inset-0 rounded-full ${hoverBg} opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300`}
        />
        <div className="relative z-10">{icon}</div>
      </Link>
    </div>
  );
}
