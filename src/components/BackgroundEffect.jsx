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

    // Track mouse position
    let mouse = { x: -1000, y: -1000 }; // Start off-canvas

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Dot {
      constructor() {
        this.reset();
        this.vx = 0;
        this.vy = 0;
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 2 + Math.random() * 3;
        this.speedY = 0.5 + Math.random() * 1.5;
        this.color = "rgba(255, 255, 255, 0.7)";
        this.vx = 0;
        this.vy = 0;
      }
      update() {
        // Moon gravity: slow, floaty, smooth
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const avoidRadius = 120; // Larger radius for earlier escape
        if (dist < avoidRadius) {
          // Stronger, floaty force away from cursor
          const angle = Math.atan2(dy, dx);
          const force = ((avoidRadius - dist) / avoidRadius) * 1.2; // Increased multiplier for more push
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }

        // Apply "moon gravity" drag for floaty effect
        this.vx *= 0.94; // Less drag for longer float
        this.vy *= 0.94;

        // Add vertical drift
        this.vy += this.speedY * 0.04; // Slow downward drift

        this.x += this.vx;
        this.y += this.vy;

        if (this.y > height) this.reset();
        if (this.x < 0) this.x = 0;
        if (this.x > width) this.x = width;
        if (this.y < 0) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const dots = [];
    const DOT_COUNT = 50;
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
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
