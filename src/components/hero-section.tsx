"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef, useCallback } from "react"
import { AIAssistant } from "@/components/ai-assistant"
import { Download, FolderKanban, Sparkles } from "lucide-react"

// Typing animation component
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    const startDelay = setTimeout(() => {
      let index = 0
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          if (interval) clearInterval(interval)
        }
      }, 100)
    }, delay * 1000)

    // Cursor blink animation
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => {
      clearTimeout(startDelay)
      if (interval) clearInterval(interval)
      clearInterval(cursorInterval)
    }
  }, [text, delay])

  return (
    <span>
      {displayedText}
      <span className={showCursor ? "text-primary opacity-100 font-bold" : "opacity-0"}>|</span>
    </span>
  )
}

// Animated code snippet inside macOS style Terminal mockup
function CodeSnippet({ code, delay = 0, position = "top" }: { code: string; delay?: number; position?: string }) {
  const lines = code.split("\n")
  const getColor = (line: string) => {
    if (line.trim().startsWith("//") || line.trim().startsWith("/*")) {
      return "text-green-500/80 dark:text-green-400/80"
    }
    if (line.includes("function") || line.includes("const") || line.includes("let") || line.includes("export")) {
      return "text-pink-500 dark:text-pink-400 font-medium"
    }
    if (line.includes("return") || line.includes("import") || line.includes("from")) {
      return "text-purple-500 dark:text-purple-400 font-medium"
    }
    if (line.includes("(") || line.includes(")")) {
      return "text-cyan-500 dark:text-cyan-400"
    }
    if (line.includes('"') || line.includes("'") || line.includes("`")) {
      return "text-yellow-600 dark:text-yellow-300"
    }
    return "text-slate-700 dark:text-slate-300"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: position === "top" ? -20 : 20 }}
      animate={{ 
        opacity: [0, 0.85, 0.85],
        y: 0,
        scale: 1
      }}
      transition={{ 
        duration: 1.5, 
        delay,
        opacity: { times: [0, 0.4, 1] }
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="backdrop-blur-md bg-card/45 dark:bg-card/25 border border-border/40 dark:border-border/10 rounded-xl shadow-2xl p-3 lg:p-4 font-mono text-xs select-none w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px] pointer-events-auto"
    >
      {/* macOS dots */}
      <div className="flex items-center gap-1.5 border-b border-border/20 dark:border-border/5 pb-2.5 mb-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
        <span className="text-[10px] text-muted-foreground ml-2 font-sans">kiflom.ts</span>
      </div>
      
      <pre className="leading-relaxed overflow-hidden text-[11px] md:text-xs whitespace-pre-wrap break-words">
        {lines.map((line, i) => (
          <div key={i} className={getColor(line)}>
            {line}
          </div>
        ))}
      </pre>
    </motion.div>
  )
}

function HeroBio({ onOpenChat }: { onOpenChat: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="mb-4 max-w-2xl mx-auto"
    >
      {/* Bio narrative card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="radial-glow-card radial-glow-border relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-cyan-500/20"
      >
        <div className="relative rounded-2xl glass-card px-4 py-4 sm:px-6 sm:py-5 text-left overflow-hidden">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <p className="text-sm sm:text-[0.95rem] leading-snug sm:leading-relaxed text-foreground/85 font-medium">
            I&apos;m a{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-500 dark:from-purple-400 dark:to-violet-300 bg-clip-text text-transparent">
              software developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-foreground">7 years</span> of programming experience, including{" "}
            <span className="font-semibold text-foreground">3 years</span> working professionally. I enjoy{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-400 dark:to-blue-300 bg-clip-text text-transparent">
              building meaningful software
            </span>
            ,{" "}
            <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
              learning new technologies
            </span>
            , and turning ideas into{" "}
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
              solutions that make a real difference
            </span>
            .
          </p>

          <div className="mt-4 pt-3 border-t border-border/40 dark:border-border/15">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <Link
                href="https://github.com/kiflomm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-0.5 h-9 sm:h-10 px-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all border border-primary/20"
              >
                <span className="flex items-center gap-1">
                  <FolderKanban className="w-3 h-3 shrink-0 opacity-90" strokeWidth={2.25} />
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-none truncate">Projects</span>
                </span>
                <span className="text-[8px] sm:text-[9px] opacity-75 leading-none truncate max-w-full">Browse my work</span>
              </Link>

              <Link
                href="/kiflomcv.png"
                download="Kiflom Berihu Abay Resume"
                target="_blank"
                className="group flex flex-col items-center justify-center gap-0.5 h-9 sm:h-10 px-1.5 rounded-lg bg-background/60 dark:bg-background/30 text-foreground hover:bg-background/90 dark:hover:bg-background/50 transition-all border border-border/60 dark:border-border/25"
              >
                <span className="flex items-center gap-1">
                  <Download className="w-3 h-3 shrink-0 opacity-80" strokeWidth={2.25} />
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-none truncate">Resume</span>
                </span>
                <span className="text-[8px] sm:text-[9px] text-muted-foreground leading-none truncate max-w-full">Download PDF</span>
              </Link>

              <button
                type="button"
                onClick={onOpenChat}
                className="group flex flex-col items-center justify-center gap-0.5 h-9 sm:h-10 px-1.5 rounded-lg bg-gradient-to-r from-purple-600/90 via-indigo-600/90 to-cyan-500/90 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white transition-all border border-purple-400/20"
              >
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 shrink-0 opacity-90 group-hover:rotate-12 transition-transform" strokeWidth={2.25} />
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-none truncate">AI Chat</span>
                </span>
                <span className="text-[8px] sm:text-[9px] opacity-80 leading-none truncate max-w-full">Ask me anything</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const [chatOpen, setChatOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Interactive Particle Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(Math.floor((width * height) / 16000), 75)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 2 + 1,
        })
      }
    }

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const dark = document.documentElement.classList.contains("dark")
      const pColor = dark ? "rgba(139, 92, 246, 0.2)" : "rgba(99, 102, 241, 0.2)"
      const lColor = dark ? "rgba(139, 92, 246, 0.05)" : "rgba(99, 102, 241, 0.05)"

      particles.forEach((p, idx) => {
        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse interactive push
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 110) {
          const force = (110 - dist) / 110
          p.x -= (dx / dist) * force * 1.5
          p.y -= (dy / dist) * force * 1.5
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = pColor
        ctx.fill()

        // Draw connection lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (dist2 < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = lColor
            ctx.lineWidth = 0.5 * (1 - dist2 / 110)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const codeSnippets = [
    {
      code: `// Core Profile Info\nconst developer = {\n  name: "Kiflom Berihu",\n  role: "Full Stack Dev",\n  backEnd: ["Nest.js","Laravel"],\n  mobile: ["React Native","Expo"],\n  frontEnd: ["Next.js","Vue.js"]\n}`,
      delay: 0.3,
      position: "top",
    },
    {
      code: `function buildAwesomeApp() {\n  return {\n    cleanCode: true,\n    greatDesign: true,\n    userExperience: "premium"\n  }\n}`,
      delay: 0.5,
      position: "top",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-6 md:items-start md:pt-16">
      {/* Interactive canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Background radial gradients for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 z-0 pointer-events-none" />

      {/* Code Snippets floating on sides (Desktop view) */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <div className="absolute top-[8%] left-3 xl:left-8 2xl:left-14">
          <CodeSnippet code={codeSnippets[0].code} delay={codeSnippets[0].delay} position="top" />
        </div>
        <div className="absolute top-[12%] right-3 xl:right-8 2xl:right-14">
          <CodeSnippet code={codeSnippets[1].code} delay={codeSnippets[1].delay} position="top" />
        </div>
      </div>

      {/* Main Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-30 w-full max-w-4xl mx-auto px-4 text-center pointer-events-auto"
      >
        {/* Glowing Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-3 md:mb-4"
        >
          <div className="relative group">
            {/* Spinning/pulsing neon ring */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-cyan-500 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500 avatar-ring" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-purple-600 to-cyan-500 animate-spin opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: "8s" }} />

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-4 border-background bg-card shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dpheomaz9/image/upload/v1740572514/144546891_fq7aqn.jpg"
                alt="Kiflom Berihu Abay"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Typed Name */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground via-purple-600 to-cyan-500 dark:from-foreground dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
          <TypingText text="Kiflom Berihu Abay" delay={0.5} />
        </h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-border/80 dark:border-border/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <p className="text-[11px] sm:text-xs font-semibold text-foreground/80">
            Full Stack Developer | Web & Mobile Applications
          </p>
        </motion.div>

        {/* Social Links — placed above bio so they're visible at first glance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 max-w-2xl mx-auto"
        >
          {[
            { href: "https://www.linkedin.com/in/kiflom-berihu", icon: "linkedin", label: "LinkedIn", hover: "hover:bg-blue-600 hover:text-white" },
            { href: "https://github.com/kiflomm", icon: "github", label: "GitHub", hover: "hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-black" },
            { href: "https://www.upwork.com/freelancers/~011e4bb830aeb14cd2?mp_source=share", icon: "upwork", label: "Upwork", hover: "hover:bg-emerald-600 hover:text-white" },
            { href: "https://wa.me/+251937409088", icon: "whatsapp", label: "WhatsApp", hover: "hover:bg-emerald-500 hover:text-white" },
            { href: "https://t.me/brogrammer_kiflom", icon: "telegram", label: "Telegram", hover: "hover:bg-cyan-500 hover:text-white" },
            { href: "mailto:kiflomberihu@outlook.com", icon: "email", label: "Email", hover: "hover:bg-blue-600 hover:text-white" },
          ].map((social) => (
            <motion.div
              key={social.href}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-card/50 dark:bg-card/30 border border-border/80 dark:border-border/20 text-[10px] sm:text-[11px] font-medium transition-all duration-300 ${social.hover}`}
              >
                {social.icon === "email" && (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2-3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                )}
                {social.icon === "github" && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )}
                {social.icon === "upwork" && (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.icon === "whatsapp" && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                )}
                {social.icon === "telegram" && (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                )}
                <span>{social.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio & Experience */}
        <HeroBio onOpenChat={() => setChatOpen(true)} />
      </motion.div>

      {/* Slide-out AI Assistant drawer */}
      <AIAssistant isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  )
}
