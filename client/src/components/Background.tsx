import React from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const LiveBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Perspective tilt based on mouse position
  const rotateX = useTransform(smoothY, [0, 1000], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1000], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div onMouseMove={handleMouseMove} className="fixed inset-0 -z-10 bg-obsidian overflow-hidden">
      
      {/* 1. MOUSE FOLLOW SPOTLIGHT (Cyan Glow) */}
      <motion.div 
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        className="absolute w-150 h-150 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* 2. PERSPECTIVE HUD GRID */}
      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), 
                            linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
        }} />
      </motion.div>

      {/* 3. DUAL ROTATING HUD RINGS (Tailwind 4 Animations) */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        {/* Inner Ring - Clockwise */}
        <div className="absolute w-75 h-75 rounded-full border border-dashed border-neon-cyan/30 animate-spin-slow" />
        
        {/* Outer Ring - Anti-Clockwise */}
        <div className="absolute w-10 h-137.5 rounded-full border border-dashed border-neon-cyan/50 animate-spin-rev" />
        
        {/* Technical Detail Ring (Fast Spin) */}
        <div className="absolute w-140 h-140 rounded-full border-t-2 border-l-2 border-transparent border-t-neon-cyan/40 animate-[spin-slow_10s_linear_infinite]" />
      </div>

      {/* 4. GRAIN TEXTURE (For that "Premium" finish) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://res.cloudinary.com/dzv9rqg4k/image/upload/v1699519522/noise_f9y8y1.png')]" />
    </div>
  );
};

export default LiveBackground;