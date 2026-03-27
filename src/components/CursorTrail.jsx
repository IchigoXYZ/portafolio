"use client";
import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const points = useRef([]);
  const isHoveringLink = useRef(false);
  const hoverAnimationFactor = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target;
      if (target && (target.closest("a") || target.closest("button"))) {
        isHoveringLink.current = true;
      } else {
        isHoveringLink.current = false;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pos.current.x += mouse.current.x - pos.current.x;
      pos.current.y += mouse.current.y - pos.current.y;

      points.current.push({ ...pos.current });

      const maxPoints = isHoveringLink.current ? 7 : 25;
      while (points.current.length > maxPoints) {
        points.current.shift();
      }

      const targetFactor = isHoveringLink.current ? 1 : 0;
      hoverAnimationFactor.current +=
        (targetFactor - hoverAnimationFactor.current) * 0.15;

      // --- DIBUJAR ESTILOS ---

      // 🎀 velo (La cola)
      if (points.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);
        for (let i = 1; i < points.current.length; i++) {
          ctx.lineTo(points.current[i].x, points.current[i].y);
        }

        if (isHoveringLink.current) {
          ctx.strokeStyle = "rgba(255, 0, 0, 1)";
          ctx.lineWidth = 3;
        } else {
          ctx.strokeStyle = "rgba(255, 0, 0, 0.35)";
          ctx.lineWidth = 2;
        }

        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // 🔘 EFECTO CREATIVO MODIFICADO: Anillo de Enfoque (Más visible)
      if (hoverAnimationFactor.current > 0.01) {
        ctx.beginPath();
        const ringRadius = 4 + hoverAnimationFactor.current * 14;

        // MODIFICACIÓN: Opacidad base aumentada de 0.15 a 0.4 para hacerlo "más oscuro" y visible
        const baseOpacity = 0.4;
        // Lógica de desvanecimiento suavizada para que no desaparezca tan rápido
        const ringOpacity =
          hoverAnimationFactor.current *
          baseOpacity *
          (1 - hoverAnimationFactor.current * 0.3);

        ctx.arc(pos.current.x, pos.current.y, ringRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${ringOpacity})`;
        ctx.fill();

        // MODIFICACIÓN: Borde del anillo más definido
        ctx.lineWidth = 1.5;
        // Borde ligeramente más opaco que el relleno para dar definición
        ctx.strokeStyle = `rgba(255, 0, 0, ${ringOpacity * 1.2})`;
        ctx.stroke();
      }

      // 🔴 punto cursor
      ctx.beginPath();
      ctx.arc(pos.current.x, pos.current.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
