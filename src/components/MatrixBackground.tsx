
import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Multiple character sets for different layers
    const binaryChars = '01';
    const hexChars = '0123456789ABCDEF';
    const codeChars = '{}[]()<>/\\;:.,?!@#$%^&*+=|~`';
    const techSymbols = '▓▒░█▄▀■□▪▫◆◇○●◯◐◑◒◓';

    // Multiple layers with different properties
    const layers = [
      {
        chars: binaryChars,
        color: '#00D4FF',
        speed: 0.8,
        fontSize: 14,
        opacity: 0.9,
        columns: Math.floor(canvas.width / 20),
        drops: [] as number[]
      },
      {
        chars: hexChars,
        color: '#A855F7',
        speed: 1.2,
        fontSize: 12,
        opacity: 0.7,
        columns: Math.floor(canvas.width / 25),
        drops: [] as number[]
      },
      {
        chars: techSymbols,
        color: '#00FF88',
        speed: 0.5,
        fontSize: 16,
        opacity: 0.6,
        columns: Math.floor(canvas.width / 30),
        drops: [] as number[]
      },
      {
        chars: codeChars,
        color: '#FF6B6B',
        speed: 1.5,
        fontSize: 10,
        opacity: 0.5,
        columns: Math.floor(canvas.width / 35),
        drops: [] as number[]
      }
    ];

    // Initialize drops for each layer
    layers.forEach(layer => {
      for (let i = 0; i < layer.columns; i++) {
        layer.drops[i] = Math.random() * -100;
      }
    });

    // Floating particles system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
    }> = [];

    const createParticle = () => {
      const colors = ['#00D4FF', '#A855F7', '#00FF88', '#FF6B6B'];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 200 + 100
      };
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    // Glitch effect variables
    let glitchTimer = 0;
    const glitchInterval = 300; // frames between glitches

    const draw = () => {
      // Dynamic background with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 15, 0.05)');
      gradient.addColorStop(0.5, 'rgba(26, 26, 46, 0.03)');
      gradient.addColorStop(1, 'rgba(10, 10, 15, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Glitch effect occasionally
      glitchTimer++;
      const shouldGlitch = glitchTimer > glitchInterval && Math.random() > 0.98;
      if (shouldGlitch) {
        glitchTimer = 0;
        // Random glitch lines
        for (let i = 0; i < 3; i++) {
          const y = Math.random() * canvas.height;
          const height = Math.random() * 5 + 1;
          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
          ctx.fillRect(0, y, canvas.width, height);
        }
      }

      // Draw matrix layers
      layers.forEach((layer, layerIndex) => {
        ctx.font = `${layer.fontSize}px JetBrains Mono`;
        
        for (let i = 0; i < layer.drops.length; i++) {
          // Dynamic color variations
          const hue = (Date.now() * 0.001 + layerIndex * 60 + i * 10) % 360;
          const saturation = 70 + Math.sin(Date.now() * 0.002 + i) * 30;
          const lightness = 50 + Math.sin(Date.now() * 0.001 + i * 0.1) * 20;
          
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${layer.opacity})`;
          
          const char = layer.chars[Math.floor(Math.random() * layer.chars.length)];
          const x = i * (canvas.width / layer.columns);
          const y = layer.drops[i] * layer.fontSize;
          
          // Add glow effect for some characters
          if (Math.random() > 0.95) {
            ctx.shadowColor = layer.color;
            ctx.shadowBlur = 10;
          } else {
            ctx.shadowBlur = 0;
          }
          
          ctx.fillText(char, x, y);
          
          // Reset drops when they go off screen
          if (layer.drops[i] * layer.fontSize > canvas.height && Math.random() > 0.975) {
            layer.drops[i] = -Math.random() * 50;
          }
          
          layer.drops[i] += layer.speed;
        }
      });

      // Draw and update particles
      particles.forEach((particle, index) => {
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Regenerate particle when it dies
        if (particle.life <= 0) {
          particles[index] = createParticle();
        }
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw connection lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add scanning line effect
      const scanLineY = (Date.now() * 0.1) % (canvas.height + 100);
      const gradient2 = ctx.createLinearGradient(0, scanLineY - 50, 0, scanLineY + 50);
      gradient2.addColorStop(0, 'transparent');
      gradient2.addColorStop(0.5, 'rgba(0, 212, 255, 0.05)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, scanLineY - 50, canvas.width, 100);
    };

    const interval = setInterval(draw, 50); // Faster animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

export default MatrixBackground;
