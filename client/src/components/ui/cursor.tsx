import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // 1. The raw mouse position (Immediate)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. The spring position (Smooth trailing lag)
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering over a button or link
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("button, a, .glass-card"));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* LAYER 1: The "Point" (Zero Lag) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neon-cyan rounded-full pointer-events-none z-100"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* LAYER 2: The "Aura" (Premium Lag/Trailing) */}
      <motion.div
        className="fixed top-0 left-0 border border-neon-cyan/50 rounded-full pointer-events-none z-99"
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          backgroundColor: isHovering ? "rgba(0, 245, 255, 0.1)" : "transparent",
        }}
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};