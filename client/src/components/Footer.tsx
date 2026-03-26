import { Github, Linkedin, Mail, Twitter } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#06060a] pt-16 pb-8 overflow-hidden z-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-linear-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-6">
          System<span className="text-neon-cyan">.os</span>
        </h2>
        
        <p className="text-sm font-mono text-gray-500 mb-8 max-w-md text-center">
          Building high-performance, intelligent web experiences from database to interface.
        </p>
        <div className="flex gap-6 mb-12">
          <SocialLink href="https://github.com/Pratham-devv" icon={<Github size={20} />} />
          <SocialLink href="https://linkedin.com/in/pratham-sehdev-7a527b31b" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:sehdevpratham94@gmail.com" icon={<Mail size={20} />} />
          <SocialLink href="#" icon={<Twitter size={20} />} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} Pratham Sehdev. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-neon-cyan transition-colors cursor-pointer">Status: Online</span>
            <span className="hover:text-neon-cyan transition-colors cursor-pointer">Security: Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300"
  >
    {icon}
  </a>
);
