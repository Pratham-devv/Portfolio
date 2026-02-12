import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'Projects', path: '/', id: 'projects' },
  { name: 'About', path: '/', id: 'about' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, id: string) => {
    if (location.pathname !== path) {
      navigate(path, { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-100 px-6 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={() => handleNavigation('/', 'home')}
          className="text-xl font-black tracking-tighter uppercase italic z-110"
        >
          System<span className="text-neon-cyan">.os</span>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2 p-1.5 bg-white/3 backdrop-blur-2xl border border-white/10 rounded-full">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path, link.id)}
              className="px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-110 md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 bg-white/5 border border-white/10 rounded-lg"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-neon-cyan block" 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-4 h-0.5 bg-white block self-end" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
            className="h-0.5 bg-neon-purple block self-end" 
          />
        </button>

        {/* MOBILE OVERLAY MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="fixed inset-0 bg-obsidian/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center z-100"
            >
              <div className="flex flex-col gap-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => {
                      handleNavigation(link.path, link.id);
                      setIsOpen(false);
                    }}
                    className="text-4xl font-black italic uppercase tracking-tighter hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </motion.button>
                ))}

                <Link 
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-4 border border-neon-cyan text-neon-cyan uppercase text-xs tracking-widest"
                >
                  Get in touch //
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DESKTOP CTA */}
        <Link 
          to="/contact"
          className="hidden md:inline-block px-6 py-3 border border-neon-cyan text-neon-cyan uppercase text-xs tracking-widest hover:bg-neon-cyan/10 transition-colors"
        >
          Get in touch 
        </Link>
        
      </div>
    </nav>
  );
};
