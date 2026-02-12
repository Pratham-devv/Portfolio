import { motion } from "framer-motion";
import { PenTool, Code2, Palette, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const skills = [
    {
      name: "React",
      label: "Component Architecture",
      level: 4,
      icon: <Code2 size={24} />,
    },
    {
      name: "TypeScript",
      label: "Type-Safe Logic",
      level: 4,
      icon: <Activity size={24} />,
    },
    {
      name: "UI Engineering",
      label: "Design Systems & Tailwind",
      level: 5,
      icon: <Palette size={24} />,
    },
    {
      name: "Full-Stack Foundations",
      label: "Scalable Web Apps",
      level: 3,
      icon: <PenTool size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06060a]/90 text-white relative overflow-hidden selection:bg-blue-600/30">

      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="fixed bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 flex flex-col">

        <main className="flex flex-col lg:flex-row relative pt-28 md:pt-32">

          {/* ORB */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 m-auto w-24 h-24 sm:w-32 sm:h-32 bg-[#2513ec] rounded-full blur-[60px] opacity-60 animate-pulse" />
              <div className="absolute inset-0 m-auto w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full blur-[20px] opacity-80 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-white/20 backdrop-blur-sm shadow-[0_0_50px_rgba(37,19,236,0.3)]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20%] border border-white/5 rounded-full rotate-45"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] border border-[#2513ec]/20 rounded-full"
              />
            </motion.div>
          </div>

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-12 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-xl"
            >
              <div className="space-y-2">
                <span className="text-[#2513ec] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  About Me
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Pratham <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2513ec] to-blue-400">
                    Sehdev
                  </span>
                </h1>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-300">
                  Full-Stack Developer & UI Engineer
                </h3>
              </div>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                I build immersive, high-performance web experiences where clean
                architecture meets striking UI. My work blends modern full-stack
                development, AI-powered features, and interactive design
                systems—creating applications that are intelligent, scalable,
                and visually compelling.
              </p>

              <div className="pt-4">
                <Link to="/contact">
                  <button className="h-11 sm:h-12 px-6 sm:px-8 bg-[#2513ec] text-white rounded-lg font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,19,236,0.3)]">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 pb-20 lg:py-12 z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 w-full"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                  Specialization & Expertise
                </h2>
                <div className="h-1 w-12 bg-[#2513ec] rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center justify-between p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#2513ec]/50 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2513ec]/10 flex items-center justify-center text-[#2513ec] group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">
                          {skill.label}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-5 sm:h-6 rounded-full transition-colors duration-500 ${
                            i < skill.level ? "bg-[#2513ec]" : "bg-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AboutPage;
