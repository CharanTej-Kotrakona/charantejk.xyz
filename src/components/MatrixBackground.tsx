
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

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const chars = '01';
    
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00D4FF';
      ctx.font = '15px JetBrains Mono';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

export default MatrixBackground;
