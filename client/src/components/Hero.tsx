import { motion} from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col justify-between overflow-hidden" id='/home'>
      
      {/* BACKGROUND ELEMENTS (Shifted for better balance) */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-150 h-150 pointer-events-none">
         <div className="absolute inset-0 border border-dashed border-neon-cyan/20 rounded-full animate-spin-slow" />
         <div className="absolute inset-0 scale-75 border border-dashed border-neon-purple/20 rounded-full animate-spin-rev" />
      </div>

      {/* TOP SECTION: TYPOGRAPHY HIERARCHY */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 z-10">
        
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-neon-cyan font-mono text-xs tracking-[0.5em] mb-4 block uppercase">
              // Creative Developer & Architect
            </span>
            <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] uppercase">
              Building <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neon-cyan to-white/50">
                Immersive
              </span><br />
              Digital Realms
            </h1>
          </motion.div>
        </div>

        {/* SIDE BOX: SYSTEM STATS (The "Advanced" feel) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-4 self-end"
        >
          <div className="glass-card p-6 space-y-4 border-l-4 border-l-neon-cyan">
            <div className="flex justify-between text-[10px] font-mono text-gray-400">
              <span>SYSTEM_STATUS</span>
              <span className="text-neon-cyan">STABLE</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-300 font-medium">
              Specializing in high-performance frontend architectures where motion meets technical precision. 
              Currently exploring WebGL and Fluid Dynamics.
            </p>
            <div className="flex gap-2">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-neon-cyan shadow-[0_0_10px_#00F5FF]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION: CTA & METRICS */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end z-10">
        <div className="flex gap-12 mb-8 md:mb-0">
          <Metric label="Experience" value="2+ Years" />
          <Metric label="Projects" value="10_Done" />
          <Metric label="Location" value="Remote / UTC" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-widest rounded-full overflow-hidden"
        >
          <span className="relative z-10">Explore Archive _</span>
          <div className="absolute inset-0 bg-neon-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>
      </div>

    </section>
  );
};

const Metric = ({ label, value }: { label: string, value: string }) => (
  <div className="space-y-1">
    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{label}</p>
    <p className="text-sm font-bold font-mono text-white">{value}</p>
  </div>
);