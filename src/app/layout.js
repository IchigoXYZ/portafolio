import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import TransitionProvider from "@/components/provider/TransitionProvider";

export const metadata = {
  title: "Mar Portfolio - Desarrollador Full Stack",
  description:
    "Portfolio profesional de desarrollador con experiencia en tecnologías modernas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <TransitionProvider>
              <Navigation />
              {children}
            </TransitionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
