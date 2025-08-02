"use client";
import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    const shootingStars = [];
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.twinkle = Math.random() * 0.02;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.twinkleSpeed;
        
        if (this.opacity > 0.7 || this.opacity < 0.2) {
          this.twinkleSpeed = -this.twinkleSpeed;
        }
        
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = '#9333ea';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Shooting star class
    class ShootingStar {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speedX = (Math.random() - 0.5) * 8 + 4;
        this.speedY = Math.random() * 3 + 2;
        this.size = Math.random() * 3 + 1;
        this.opacity = 1;
        this.trail = [];
        this.maxTrailLength = 20;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Add current position to trail
        this.trail.push({ x: this.x, y: this.y, opacity: this.opacity });
        
        // Remove old trail points
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        // Fade out trail
        this.trail.forEach((point, index) => {
          point.opacity = (index / this.trail.length) * this.opacity;
        });
        
        // Check if shooting star is off screen
        if (this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }
      
      draw() {
        // Draw trail
        this.trail.forEach((point, index) => {
          ctx.save();
          ctx.globalAlpha = point.opacity;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = this.size * (index / this.trail.length);
          ctx.lineCap = 'round';
          
          if (index > 0) {
            ctx.beginPath();
            ctx.moveTo(this.trail[index - 1].x, this.trail[index - 1].y);
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
          }
          
          // Add glow effect
          ctx.shadowColor = '#9333ea';
          ctx.shadowBlur = 15;
          ctx.stroke();
          ctx.restore();
        });
        
        // Draw shooting star head
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#9333ea';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
    
    // Initialize shooting stars
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Update and draw shooting stars
      shootingStars.forEach(star => {
        star.update();
        star.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
} 