import React, { useEffect, useRef } from "react";

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    resize();
    window.addEventListener("resize", resize);

    class Dot {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 2 + Math.random() * 3;
        this.speedY = 0.5 + Math.random() * 1.5;
        this.color = "rgba(255, 255, 255, 0.7)";
      }
      update() {
        this.y += this.speedY;
        if (this.y > height) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const dots = [];
    const DOT_COUNT = 150;
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push(new Dot());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.update();
        dot.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="dots-canvas"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
