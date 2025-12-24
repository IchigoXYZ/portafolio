import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";

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
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
