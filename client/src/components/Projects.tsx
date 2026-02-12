import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react';
import { projects } from '../projectData/ProjectInfo';

export const Projects = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  return (
    <section className="relative py-32 px-6 overflow-hidden" id='projects'>
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-black italic tracking-tighter uppercase">Project <span className="text-neon-cyan">Vault</span></h2>
      </div>

      <div className="relative h-125 w-full flex items-center justify-center perspective-distant transform-3d">
        <AnimatePresence mode="popLayout">
          {projects.map((proj, i) => {
            // Logic for 3D positioning
            let position = i - index;
            if (position < -2) position += projects.length;
            if (position > 2) position -= projects.length;

            
            const isVisible = Math.abs(position) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1 - Math.abs(position) * 0.3,
                  scale: 1 - Math.abs(position) * 0.15,
                  x: position * 320, // Spread of the cards
                  z: -Math.abs(position) * 300,
                  rotateY: position * -25, // The "Curve" rotation
                  zIndex: 10 - Math.abs(position),
                }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                onClick={() => setIndex(i)}
                className="absolute w-87.5 md:w-112.5 aspect-4/5 glass-card cursor-pointer p-1 group"
              >
                <div className="relative h-full w-full p-8 flex flex-col justify-between overflow-hidden rounded-[inherit]">
                  {/* BACKGROUND NUMBER */}
                  <span className="absolute -right-4 -bottom-4 text-[150px] font-black italic opacity-5 group-hover:opacity-10 transition-opacity">
                    0{i + 1}
                  </span>

                  <div className="flex justify-between items-start">
                    <div 
                      className="p-4 rounded-2xl bg-white/5 border border-white/10"
                      style={{ color: proj.color }}
                    >
                      {proj.icon}
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400">
                      {proj.title === "Grocer" ? "Featured" : "Project"}
                    </div>
                  </div>

                  <div className="z-10 text-left">
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4 leading-none">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mb-6 line-clamp-2 italic">
                      {proj.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                    
                    <a 
                      href={proj.link} 
                      target="_blank"
                      className="inline-flex items-center gap-2 group/btn"
                    >
                      <span className="text-[10px] font-bold tracking-widest uppercase border-b border-neon-cyan pb-1">Initialize_App</span>
                      <ArrowRight className="w-4 h-4 text-neon-cyan group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  </div>

                  {/* Radial Hover Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,245,255,0.1),transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="mt-20 flex items-center justify-center gap-8">
        <button onClick={prev} className="p-4 rounded-full border border-white/10 hover:border-neon-cyan transition-colors text-white">
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-12 bg-neon-cyan' : 'w-2 bg-white/20'}`} 
            />
          ))}
        </div>
        <button onClick={next} className="p-4 rounded-full border border-white/10 hover:border-neon-cyan transition-colors text-white">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};