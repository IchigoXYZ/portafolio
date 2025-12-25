import React from "react";

const MotionBackground = () => {
  // Estilos en línea
  const styles = {
    container: {
      position: "absolute",
      height: "100vh",
      backgroundColor: "#0b0b0b",
      overflow: "hidden",
      inset: 0,
    },
    backgroundRow: {
      position: "absolute",
      width: "200%",
      height: "50%",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
    topRow: {
      top: 0,
      animation: "scrollLeft 25s linear infinite",
    },
    bottomRow: {
      bottom: 0,
      animation: "scrollRight 25s linear infinite",
    },
    text: {
      fontSize: "120px",
      fontWeight: 800,
      color: "rgba(255, 255, 255, 0.06)",
      marginRight: "80px",
      textTransform: "uppercase",
      letterSpacing: "4px",
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

  // Crear elementos de texto repetido
  const repeatedTexts = Array.from({ length: 6 }, (_, i) => (
    <div key={i} style={styles.text}>
      FULL STACK UI/UX Designer DevOps
    </div>
  ));

  return (
    <div style={styles.container}>
      {/* Inyectar keyframes en el head mediante style tag */}
      <style>{styles.keyframes}</style>

      {/* Fila superior - se mueve hacia la izquierda */}
      <div style={{ ...styles.backgroundRow, ...styles.topRow }}>
        {repeatedTexts}
      </div>

      {/* Fila inferior - se mueve hacia la derecha */}
      <div style={{ ...styles.backgroundRow, ...styles.bottomRow }}>
        {repeatedTexts}
      </div>
    </div>
  );
};

export default MotionBackground;
