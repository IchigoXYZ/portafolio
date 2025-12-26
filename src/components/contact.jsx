"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import InteractiveParticles from "@/components/InteractiveParticles";

export function Contact() {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Email real (cámbialo por el tuyo)
  const MY_EMAIL = "maranthony.work@gmail.com";

  // Lógica de Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Función para copiar email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulación de envío de formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", message: "" });

    // Resetear mensaje de éxito después de 5 seg
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Obtener hora actual (detalle estético)
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Actualizar cada minuto
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-background pt-24 pb-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Fondo de partículas sutil */}
      <div className="opacity-20 fixed inset-0 pointer-events-none">
        <InteractiveParticles />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* --- COLUMNA IZQUIERDA: INFO & COPY --- */}
          <div className="space-y-12">
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
                Lets start a <br />
                <span className="text-red-800 italic">Project</span> together.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                ¿Tienes una idea innovadora? ¿Buscas transformar tu presencia
                digital? Estoy disponible para trabajos freelance y
                colaboraciones.
              </p>
            </div>

            {/* Widget de Estado */}
            <div
              className="animate-on-scroll fade-in-up flex flex-col gap-4"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Detalles Rápidos */}
              <div className="flex gap-6 text-sm font-medium text-muted-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Remote / Worldwide
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Local time: {time}
                </div>
              </div>

              {/* Indicador de Disponibilidad */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-border w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-foreground">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Botón de Email Gigante */}
            <div
              className="animate-on-scroll fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div
                onClick={handleCopyEmail}
                className="group cursor-pointer relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:border-red-800/50 hover:shadow-[0_0_30px_rgba(153,27,27,0.1)]"
              >
                <p className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  Email Contact
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl md:text-3xl font-bold truncate text-foreground group-hover:text-red-700 transition-colors">
                    {MY_EMAIL}
                  </h2>
                  <div className="p-3 rounded-full bg-secondary group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                    {copied ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <Copy className="w-6 h-6" />
                    )}
                  </div>
                </div>
                {/* Feedback visual de copiado */}
                <div
                  className={`absolute inset-0 bg-red-800/90 flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 ${
                    copied ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  ¡Copiado al portapapeles!
                </div>
              </div>
            </div>

            {/* Redes Sociales (Simples) */}
            <div
              className="animate-on-scroll fade-in-up flex gap-6"
              style={{ animationDelay: "0.4s" }}
            >
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
                >
                  {social} <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMNA DERECHA: FORMULARIO --- */}
          <div
            className="lg:pt-8 animate-on-scroll fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-card/30 backdrop-blur-sm p-8 rounded-3xl border border-border/50"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div className="group relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-muted-foreground group-focus-within:text-red-700 transition-colors"
                  >
                    Tu Nombre
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-border py-4 text-lg outline-none transition-all placeholder:text-muted-foreground/30 focus:border-red-700 focus:placeholder:text-transparent"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-muted-foreground group-focus-within:text-red-700 transition-colors"
                  >
                    Tu Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-border py-4 text-lg outline-none transition-all placeholder:text-muted-foreground/30 focus:border-red-700 focus:placeholder:text-transparent"
                  />
                </div>

                {/* Message Input */}
                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-muted-foreground group-focus-within:text-red-700 transition-colors"
                  >
                    Cuéntame sobre tu proyecto
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Estoy buscando crear..."
                    className="w-full bg-transparent border-b border-border py-4 text-lg outline-none resize-none transition-all placeholder:text-muted-foreground/30 focus:border-red-700 focus:placeholder:text-transparent"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-14 text-lg rounded-full bg-foreground text-background hover:bg-red-800 hover:text-white transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      "Enviando..."
                    ) : isSuccess ? (
                      <>
                        Mensaje Enviado <Check className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Enviar Mensaje{" "}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {/* Efecto de llenado al hover */}
                  <span className="absolute inset-0 bg-red-800 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
