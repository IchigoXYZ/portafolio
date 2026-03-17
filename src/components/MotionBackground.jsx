"use client";

import React from "react";
import { useTheme } from "@/contexts/theme-context";

const MotionBackground = () => {
  const { theme } = useTheme();

  // Determinamos si es oscuro para ajustar la visibilidad del texto
  const isDark = theme === "dark";

  const styles = {
    container: {
      position: "absolute",
      height: "100vh",
      backgroundColor: "transparent",
      overflow: "hidden",
      inset: 0,
      zIndex: 0,
      // Transición suave para cualquier cambio de color de fondo si existiera
      transition: "background-color 500ms ease-in-out",
    },
    backgroundRow: {
      position: "absolute",
      width: "100%",
      height: "30%",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
    topRow: {
      top: "5%",
    },
    bottomRow: {
      bottom: "5%",
    },
    textContainer: {
      display: "flex",
      animation: "scrollLeft 160s linear infinite",
    },
    textContainerReverse: {
      display: "flex",
      animation: "scrollRight 160s linear infinite",
    },
    text: {
      fontSize: "clamp(80px, 10vw, 120px)",
      fontWeight: 900,
      // Color dinámico según el modo
      color: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.04)",
      marginRight: "80px",
      textTransform: "uppercase",
      letterSpacing: "4px",
      flexShrink: 0,
      fontFamily: "serif",
      // ESTA ES LA CLAVE: Transición para el cambio de color de las letras
      transition: "color 500ms ease-in-out",
    },
    keyframes: `
      @keyframes scrollLeft {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes scrollRight {
        from { transform: translateX(-50%); }
        to { transform: translateX(0); }
      }
    `,
  };

  const createTextElements = () => {
    const content = "FULL STACK UI/UX Designer DevOps ";
    const texts = Array.from({ length: 8 }, (_, i) => (
      <div key={`text-${i}`} style={styles.text}>
        {content}
      </div>
    ));

    return (
      <>
        {texts}
        {texts}
      </>
    );
  };

  return (
    // Agregamos transition-colors y duration-500 por si usas clases de Tailwind en el futuro
    <div
      style={styles.container}
      className="transition-all duration-500 ease-in-out"
    >
      <style>{styles.keyframes}</style>

      {/* Fila superior - Movimiento a la izquierda */}
      <div style={{ ...styles.backgroundRow, ...styles.topRow }}>
        <div style={styles.textContainer}>{createTextElements()}</div>
      </div>

      {/* Fila inferior - Movimiento a la derecha */}
      <div style={{ ...styles.backgroundRow, ...styles.bottomRow }}>
        <div style={styles.textContainerReverse}>{createTextElements()}</div>
      </div>
    </div>
  );
};

export default MotionBackground;
