import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Database, Server, BrainCircuit } from "lucide-react";

/* ─── Tilt card — lighter springs ────────────────────────────────────────── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sx, [-0.5, 0.5], ["-6deg", "6deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Main ────────────────────────────────────────────────────────────────── */
export const SkillsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = [
    {
      title: "Full-Stack Development",
      icon: <Server size={20} />,
      skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      accent: "#00f5ff",
      tag: "WEB",
    },
    {
      title: "Core Languages",
      icon: <Database size={20} />,
      skills: ["Python", "C", "JavaScript", "TypeScript"],
      accent: "#34d399",
      tag: "LANG",
    },
    {
      title: "Currently Learning",
      icon: <BrainCircuit size={20} />,
      skills: ["AI Concepts", "Machine Learning Basics"],
      accent: "#e879f9",
      tag: "R&D",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-[#06060a]">

      {/* Static CSS grid — zero runtime cost */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Static orbs — no animation, just CSS blur */}
      <div
        className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,70,239,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.35), transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-cyan-400">
              // Technical Arsenal
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 h-px origin-left"
              style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.35), transparent)" }}
            />
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl font-black italic tracking-tighter uppercase text-white leading-none"
            >
              Core{" "}
              <span
                style={{
                  WebkitTextStroke: "1px rgba(0,245,255,0.8)",
                  color: "transparent",
                }}
              >
                Capabilities
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-mono"
          >
            Tools I reach for. Things I'm building with. Concepts I'm chasing.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard>
                  <div
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative rounded-2xl p-6 sm:p-7 overflow-hidden cursor-default h-full transition-all duration-300"
                    style={{
                      background: isHovered
                        ? `linear-gradient(135deg, ${cat.accent}0a 0%, rgba(255,255,255,0.02) 100%)`
                        : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isHovered ? cat.accent + "80" : cat.accent + "28"}`,
                      boxShadow: isHovered
                        ? `0 0 40px ${cat.accent}22`
                        : `0 0 20px ${cat.accent}08`,
                    }}
                  >
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-8 right-8 h-px transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)`,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />

                    {/* Corner tag */}
                    <span
                      className="absolute top-4 left-4 text-[9px] font-mono px-1.5 py-0.5 rounded tracking-widest"
                      style={{
                        background: `${cat.accent}15`,
                        color: cat.accent,
                        border: `1px solid ${cat.accent}35`,
                      }}
                    >
                      {cat.tag}
                    </span>

                    {/* Skill count badge */}
                    <span
                      className="absolute top-4 right-4 text-[10px] font-mono px-2 py-0.5 rounded-full border opacity-50"
                      style={{ borderColor: cat.accent, color: cat.accent }}
                    >
                      {String(cat.skills.length).padStart(2, "0")} skills
                    </span>

                    {/* Icon */}
                    <div
                      className="mt-8 mb-5 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: `${cat.accent}12`,
                        border: `1px solid ${cat.accent}28`,
                        color: cat.accent,
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                    >
                      {cat.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-4 text-white/90">
                      {cat.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className="h-px mb-4 w-full"
                      style={{ background: `linear-gradient(90deg, ${cat.accent}25, transparent)` }}
                    />

                    {/* Skills — static dots, no animate-ping */}
                    <div className="space-y-2.5">
                      {cat.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 * idx, duration: 0.35 }}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 transition-opacity duration-200"
                            style={{
                              backgroundColor: cat.accent,
                              opacity: isHovered ? 0.9 : 0.4,
                            }}
                          />
                          <span
                            className="text-sm font-mono tracking-wide transition-colors duration-200"
                            style={{ color: isHovered ? "rgba(255,255,255,0.9)" : "rgba(156,163,175,1)" }}
                          >
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Watermark index */}
                    <div
                      className="absolute bottom-4 right-5 text-[40px] font-black italic leading-none select-none pointer-events-none"
                      style={{ color: `${cat.accent}08` }}
                    >
                      0{i + 1}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-[10px] font-mono text-white/20 tracking-[0.25em] uppercase whitespace-nowrap">
            Always evolving · Always building
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>
      </div>

      {/* Bottom border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-px origin-right"
        style={{ background: "linear-gradient(90deg, transparent, rgba(217,70,239,0.35), transparent)" }}
      />
    </section>
  );
};