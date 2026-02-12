import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Float } from "@react-three/drei"
import {
  Mail, Phone, Linkedin, Instagram, Github, User, FileText, Terminal
} from "lucide-react"
import * as THREE from "three"
import { useRef, useState, useEffect } from "react"

/* ---------------- 3D BACKGROUND ---------------- */

function NebulaCore() {
  const mesh = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.rotation.x = t * 0.2
    mesh.current.rotation.y = t * 0.25
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.8, 2]} />
        <meshStandardMaterial
          color="#5b21b6"
          emissive="#6366f1"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={3} />
        <Stars radius={100} depth={60} count={4000} factor={5} fade />
        <NebulaCore />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,5,0.9)_100%)]" />
    </div>
  )
}

/* ---------------- CYBER CELL COMPONENT ---------------- */

interface CellProps {
  children: React.ReactNode
  className?: string
  accent?: string
}

const Cell = ({ children, className = "", accent = "border-indigo-500/40 hover:border-indigo-500" }: CellProps) => (
  <div className={`
    relative bg-[#07070d]/60 backdrop-blur-md border ${accent} 
    rounded-md overflow-hidden transition-all duration-300 
    hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] group ${className}
  `}>
    {/* CRT Scanline Effect */}
    <div className="absolute inset-0 w-full h-full pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-20 bg-size-[100%_4px]" />
    
    <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-center">
      {children}
    </div>
  </div>
)

/* ---------------- MAIN PAGE ---------------- */

export default function ContactPage() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("INITIALIZING...")

  useEffect(() => {
    const timer = setTimeout(() => setStatus("SYSTEM: ONLINE"), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    window.location.href = `mailto:sehdevpratham94@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(message)}`
  }

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-[#020205] font-mono selection:bg-indigo-500/30">
      <ThreeBackground />

      <div className="relative z-10 min-h-screen w-full flex items-center justify-center p-4 md:p-10">
        
        {/* BENTO GRID */}
        <div className="grid grid-cols-12 auto-rows-[minmax(90px,auto)] md:auto-rows-[130px] gap-1 bg-white/5 p-1 rounded-lg w-full max-w-6xl">

          {/* 01. HEADER */}
          <Cell className="col-span-12 row-span-1 flex flex-row items-center justify-between">
            <h1 className="glitch-hover text-sm md:text-2xl font-bold tracking-tighter bg-linear-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent uppercase cursor-default">
              Contact_Terminal_v4
            </h1>
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-indigo-400 hidden sm:block" />
              <span className="animate-typing inline-block text-[9px] md:text-xs text-indigo-400 tracking-widest">
                {status}
              </span>
            </div>
          </Cell>

          {/* 02. IDENTITY */}
          <Cell accent="border-cyan-500/40 hover:border-cyan-500" className="col-span-12 md:col-span-4 row-span-1 md:row-span-2">
            <User className="text-cyan-400 mb-2 w-4 h-4 md:w-5 md:h-5" />
            <h2 className="text-sm md:text-lg font-bold uppercase tracking-widest">Pratham Sehdev</h2>
            <p className="text-slate-500 text-[10px] md:text-sm">{"{ ROLE: FULL_STACK_DEV }"}</p>
          </Cell>

          {/* 03. EMAIL */}
          <Cell accent="border-indigo-500/40 hover:border-indigo-500" className="col-span-6 md:col-span-4 row-span-1 md:row-span-2">
            <Mail className="text-indigo-400 mb-2 w-4 h-4 md:w-5 md:h-5" />
            <p className="text-slate-500 text-[8px] md:text-[10px] uppercase mb-1">Secure_Mail</p>
            <p className="font-medium text-[9px] md:text-sm break-all">sehdevpratham94@gmail.com</p>
          </Cell>

          {/* 04. PHONE */}
          <Cell accent="border-fuchsia-500/40 hover:border-fuchsia-500" className="col-span-6 md:col-span-4 row-span-1 md:row-span-2">
            <Phone className="text-fuchsia-400 mb-2 w-4 h-4 md:w-5 md:h-5" />
            <p className="text-slate-500 text-[8px] md:text-[10px] uppercase mb-1">Voice_Comms</p>
            <p className="font-medium text-[9px] md:text-sm">+91 9205188717</p>
          </Cell>

          {/* 05. MESSAGE BOX */}
          <Cell accent="border-indigo-500/40 hover:border-indigo-500" className="col-span-12 md:col-span-6 row-span-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              <p className="uppercase text-[9px] md:text-[10px] tracking-widest text-slate-500">New_Transmission</p>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Root@User: Enter query..."
              className="w-full h-16 md:h-20 bg-black/40 border border-white/10 rounded p-2 text-xs md:text-sm focus:outline-none focus:border-indigo-500 transition resize-none text-indigo-300 placeholder:opacity-30"
            />
            <button 
              onClick={handleSend}
              className="mt-2 w-full md:w-auto bg-indigo-600/10 border border-indigo-500/50 hover:bg-indigo-600 hover:text-white text-indigo-400 px-6 py-1.5 text-[10px] md:text-xs font-bold transition-all active:translate-y-0.5"
            >
              EXECUTE_SEND.SH
            </button>
          </Cell>

          {/* 06. SOCIAL NODES */}
          <Cell accent="border-cyan-500/40 hover:border-cyan-500" className="col-span-6 md:col-span-3 row-span-1 md:row-span-2">
            <p className="uppercase text-[9px] md:text-[10px] text-slate-500 mb-3 tracking-widest underline decoration-cyan-500/30">Network_Nodes</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/pratham-sehdev-7a527b31b" target="_blank" rel="noreferrer">
                <Linkedin className="text-cyan-400 w-5 h-5 hover:scale-125 transition-transform" />
              </a>
              <a href="https://github.com/Pratham-devv" target="_blank" rel="noreferrer">
                <Github className="text-white w-5 h-5 hover:scale-125 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="text-fuchsia-400 w-5 h-5 hover:scale-125 transition-transform" />
              </a>
            </div>
          </Cell>

          {/* 07. RECOVERY (RESUME) */}
          <Cell accent="border-emerald-500/40 hover:border-emerald-500" className="col-span-6 md:col-span-3 row-span-1 md:row-span-2">
            <FileText className="text-emerald-400 mb-1 w-4 h-4 md:w-5 md:h-5" />
            <p className="text-slate-500 text-[8px] md:text-[10px] uppercase tracking-tighter">Access_Doc</p>
            <a 
              href="https://drive.google.com/..." 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] md:text-xs font-bold hover:text-emerald-300 transition-colors uppercase"
            >
              Resume.bin
            </a>
          </Cell>

          {/* 08. FOOTER STATUS */}
          <Cell className="col-span-12 row-span-1 flex flex-row items-center justify-between opacity-50">
            <span className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-[0.2em]">IITM • CSE • DEL</span>
            <span className="text-[8px] md:text-[10px] text-indigo-400 font-bold tracking-widest italic animate-pulse">
              ENCRYPTED_CONNECTION
            </span>
          </Cell>

        </div>
      </div>
    </div>
  )
}