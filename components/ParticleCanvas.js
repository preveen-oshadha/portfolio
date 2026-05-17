'use client';
import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [], mouseX = 0, mouseY = 0;
    let trailParticles = [];
    let animId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.4 + 0.05;
        const colors = ['#00f5ff', '#9d4edd', '#ff2d78', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }
      update() {
        const dx = mouseX - this.x, dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) { this.x -= dx * 0.02; this.y -= dy * 0.02; }
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        if (this.life <= 0 || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class TrailParticle {
      constructor(x, y) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2 - 1;
        this.size = Math.random() * 3 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.04 + 0.02;
        const cols = ['#00f5ff', '#9d4edd', '#ff2d78'];
        this.color = cols[Math.floor(Math.random() * cols.length)];
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        this.vy += 0.05;
        this.life -= this.decay;
        this.size *= 0.97;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life * 0.6;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 180; i++) particles.push(new Particle());

    const onMouseMove = (e) => {
      if (Math.random() < 0.4) trailParticles.push(new TrailParticle(e.clientX, e.clientY));
    };
    document.addEventListener('mousemove', onMouseMove);

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - d / 100) * 0.06;
            ctx.strokeStyle = '#9d4edd';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      trailParticles = trailParticles.filter(p => p.life > 0);
      trailParticles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
}
