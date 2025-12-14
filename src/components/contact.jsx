"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Contact() {
  const contactRef = useRef (null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

    const elements = contactRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const handleSubmit = () => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 lg:py-32 bg-accent/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll fade-in-up">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-widest uppercase">
                {t.contact.title}
              </p>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h2 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {t.contact.title}
              </h2>
            </div>
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.contact.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="animate-on-scroll fade-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              <Card className="p-8 lg:p-10 border-border bg-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.name}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.email}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t.contact.message}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t.contact.message}
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    {t.contact.send}
                  </Button>
                </form>
              </Card>
            </div>

            <div
              className="animate-on-scroll fade-in-right space-y-8"
              style={{ animationDelay: "0.4s" }}
            >
              <Card className="p-8 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@example.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="text-muted-foreground">City, Country</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border bg-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="bg-secondary p-3 rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Portfolio. Designed and developed with passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
