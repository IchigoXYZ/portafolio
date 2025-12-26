"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Para detectar la página actual

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname(); // Obtenemos la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Items de menú integrando 'Experiments' en el objeto de traducción
  const menuItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.experiments || "Experiments", href: "/experiments" }, // Fallback si no está en t
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO CON ESTILO SERIF */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif text-xl lg:text-2xl font-bold text-foreground tracking-tighter"
          >
            <span className="text-red-800 transition-transform group-hover:-rotate-12">
              M
            </span>
            <span className="hidden sm:inline-block">Portfolio</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-[13px] font-mono uppercase tracking-widest transition-colors group py-2
                      ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {item.label}
                    {/* Línea animada inferior */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-red-800 transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                    ></span>
                  </Link>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex items-center gap-1 ml-4 border-l border-white/10 pl-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-red-800/10 hover:text-red-700 transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="h-[18px] w-[18px]" />
                ) : (
                  <Sun className="h-[18px] w-[18px]" />
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-red-800/10 hover:text-red-700"
                  >
                    <Languages className="h-[18px] w-[18px]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-background/95 backdrop-blur-md border-border"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("es")}
                    className="text-xs font-mono"
                  >
                    ESPAÑOL
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className="text-xs font-mono"
                  >
                    ENGLISH
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[64px] bg-background/95 backdrop-blur-2xl z-50 p-6 animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col gap-6 pt-10">
              {menuItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-4xl font-serif font-bold text-foreground hover:text-red-800 transition-colors flex justify-between items-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-muted-foreground opacity-0 group-hover:opacity-100 italic">
                    0{idx + 1}
                  </span>
                </Link>
              ))}

              <div className="mt-10 pt-10 border-t border-white/5 flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 rounded-full font-mono text-xs"
                  onClick={() => setLanguage("es")}
                >
                  ES
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-full font-mono text-xs"
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
