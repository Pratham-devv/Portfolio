import { motion } from 'framer-motion';

export const SystemDivider = () => {
  return (
    <div className="relative w-full h-24 flex items-center justify-center my-20 overflow-hidden">
      
      {/* 1. THE BASE LINE (Across full width) */}
      <div className="absolute w-full h-px bg-white/5" />

      {/* 2. THE TEXT (Centered) */}
      <div className="relative z-10 px-6">
        <span className="text-[10px] font-mono tracking-[0.6em] uppercase text-gray-500 selection:text-neon-cyan">
          Initializing<span className="animate-pulse">_</span>Data<span className="animate-pulse">_</span>Stream
        </span>
      </div>

      {/* 3. THE LIGHT RAY (Flows through everything) */}
      <motion.div 
        initial={{ x: "-20%" }}
        animate={{ x: "120%" }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 0.5 
        }}
        className="absolute inset-0 z-20 pointer-events-none flex items-center"
      >
        {/* The Ray Head */}
        <div className="relative h-0.5 w-[30%]">
          {/* Main Cyan Beam */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_20px_#00F5FF,0_0_40px_#00F5FF]" />
          
          {/* Vertical "Scanner" Line */}
          <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-px h-12 bg-neon-cyan/50 blur-[2px]" />
          
          {/* Subtle Purple Afterglow */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-neon-purple/40 to-transparent translate-x-[-10%] blur-sm" />
        </div>
      </motion.div>

      {/* 4. THE OVERLAY BLEND (This makes the text glow) */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-obsidian mix-blend-multiply opacity-5" />
    </div>
  );
};