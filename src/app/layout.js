import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { LanguageProvider } from "@/contexts/language-context";
import { Navigation } from "@/components/navigation";
import TransitionProvider from "@/components/provider/TransitionProvider";
import CursorTrail from "@/components/CursorTrail";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Mar | Portafolio",
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
              <CursorTrail />
              <Navigation />
              {children}
            </TransitionProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
