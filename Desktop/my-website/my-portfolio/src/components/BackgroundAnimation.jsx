import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 80;
    const colors = ['#64ffda', '#233554', '#64ffda', '#1c2a43'];

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.7 - 0.35,
        speedY: Math.random() * 0.7 - 0.35,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    // Animation function
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x > canvas.width || p.x < 0) {
          p.speedX = -p.speedX;
        }
        if (p.y > canvas.height || p.y < 0) {
          p.speedY = -p.speedY;
        }
        
        // Draw particles
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect particles with lines
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 - distance/1200})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
};

export default BackgroundAnimation; 