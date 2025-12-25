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
      width: "100%",
      height: "30%",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap",
    },
    topRow: {
      top: 0,
    },
    bottomRow: {
      bottom: 0,
    },
    textContainer: {
      display: "flex",
      animation: "scrollLeft 200s linear infinite",
    },
    textContainerReverse: {
      display: "flex",
      animation: "scrollRight 200s linear infinite",
    },
    text: {
      fontSize: "120px",
      fontWeight: 800,
      color: "rgba(255, 255, 255, 0.06)",
      marginRight: "80px",
      textTransform: "uppercase",
      letterSpacing: "4px",
      flexShrink: 0,
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
  const createTextElements = () => {
    const texts = Array.from({ length: 6 }, (_, i) => (
      <div key={`text-${i}`} style={styles.text}>
        FULL STACK UI/UX Designer DevOps
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
    <div style={styles.container}>
      {/* Inyectar keyframes en el head mediante style tag */}
      <style>{styles.keyframes}</style>

      {/* Fila superior - se mueve hacia la izquierda */}
      <div style={{ ...styles.backgroundRow, ...styles.topRow }}>
        <div style={styles.textContainer}>{createTextElements()}</div>
      </div>

      {/* Fila inferior - se mueve hacia la derecha */}
      <div style={{ ...styles.backgroundRow, ...styles.bottomRow }}>
        <div style={styles.textContainerReverse}>{createTextElements()}</div>
      </div>
    </div>
  );
};

export default MotionBackground;
