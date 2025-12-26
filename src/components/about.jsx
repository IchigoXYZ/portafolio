"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Code2, title: t.about.passion, description: t.about.passionDesc },
    { icon: Palette, title: t.about.design, description: t.about.designDesc },
    {
      icon: Rocket,
      title: t.about.innovation,
      description: t.about.innovationDesc,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-36 bg-accent/20 overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="reveal font-serif text-4xl lg:text-6xl font-bold text-foreground">
            {t.about.title}
          </h2>

          <p className="reveal max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Card
                className="
                  h-full p-10 rounded-2xl
                  bg-card/80 backdrop-blur-xl
                  border border-border/60
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-xl bg-secondary/80 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
