import { Database, ExternalLink, Heart, ShoppingCart, Terminal } from "lucide-react";


export const projects= [
  {
    title: "Grocer E-Commerce",
    desc: "Full MERN stack marketplace with OTP login, dark mode, and real-time cart logic.",
    tech: ["MERN", "Tailwind", "OTP-Auth"],
    link: "https://grocer-three.vercel.app",
    type: "Full-Stack",
    icon: <ShoppingCart className="w-5 h-5" />,
    size: "md:col-span-2 md:row-span-2", // The "Featured" Project
    color: "from-neon-cyan/20"
  },
  {
    title: "Sheen Mind",
    desc: "Mental health platform leveraging PostgreSQL and Express for secure data management.",
    tech: ["React", "PostgreSQL", "Express"],
    link: "https://sheen-mind-esmd.vercel.app",
    type: "Health-Tech",
    icon: <Heart className="w-5 h-5" />,
    size: "md:col-span-1 md:row-span-2",
    color: "from-neon-purple/20"
  },
  {
    title: "Notes Saver",
    desc: "Productivity tool with shareable notes and quick-copy functionality.",
    tech: ["React", "Tailwind"],
    link: "https://notes-app-two-mocha.vercel.app",
    type: "Tool",
    icon: <Terminal className="w-5 h-5" />,
    size: "md:col-span-1",
    color: "from-blue-500/10"
  },
  {
    title: "GitHub Analyzer",
    desc: "API-driven repo fetcher for developer profile insights.",
    tech: ["JS", "Tailwind", "API"],
    link: "https://git-hub-profile-analyzer-six.vercel.app",
    type: "Learning",
    icon: <Database className="w-5 h-5" />,
    size: "md:col-span-1",
    color: "from-emerald-500/10"
  },
  {
    title: "Real Estate Beta",
    desc: "Modern landing page with responsive project listings.",
    tech: ["React", "Tailwind"],
    link: "https://real-estate-app-beta-five.vercel.app",
    type: "UI/UX",
    icon: <ExternalLink className="w-5 h-5" />,
    size: "md:col-span-1",
    color: "from-orange-500/10"
  }
];

export const totalProjects =  projects.length;