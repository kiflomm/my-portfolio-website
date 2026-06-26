"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  visual: React.ReactNode
}

// Glowing Card component that updates mouse positions dynamically
function GlowingCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`radial-glow-card radial-glow-border glass-card rounded-2xl relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

const projectsData: Project[] = [
  {
    title: "Expo Authentication App",
    description: "A secure cross-platform mobile authentication interface featuring offline storage sync, session verification, and Express.js schema models.",
    tags: ["React Native", "Expo", "Express", "Prisma", "SQLite"],
    githubUrl: "https://github.com/kiflomm/expoplusexpress",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Mobile Mockup */}
        <div className="w-24 h-40 rounded-2xl border border-indigo-500/40 bg-slate-900/90 shadow-2xl flex flex-col p-2 relative">
          <div className="w-8 h-1.5 rounded-full bg-slate-800 mx-auto mb-3" />
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            <div className="w-full h-3 rounded bg-indigo-500/20" />
            <div className="w-full h-3 rounded bg-indigo-500/20" />
            <div className="w-full h-5 rounded-lg bg-indigo-600/80 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
          </div>
          <div className="w-4 h-4 rounded-full border border-slate-700 mx-auto mt-2" />
        </div>
        {/* Glowing floating key */}
        <div className="absolute top-6 right-8 p-1.5 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m-3 4h.02M9 17h.02M9 14h.02M12 14h.02M12 11h.02M12 7a5 5 0 11-4.99 5.002L7.005 13H5.003v2H3.001v2h2.002v2h2.002L9.005 17h2.002l1.002-1.002A5 5 0 0112 7z" />
          </svg>
        </div>
      </div>
    )
  },
  {
    title: "Student Management System",
    description: "A comprehensive university dashboard for administrators to monitor student registration models, grades distribution, and course registries.",
    tags: ["React.js", "Express.js", "MongoDB", "Shadcn UI", "Tailwind CSS"],
    githubUrl: "https://github.com/kua-University/Student_Registration_system_kiflom",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Table/Dashboard Mockup */}
        <div className="w-44 h-28 rounded-xl border border-blue-500/30 bg-slate-900/90 shadow-2xl p-2.5 flex flex-col gap-1.5">
          <div className="flex items-center justify-between border-b border-border/20 pb-1.5 mb-1">
            <div className="w-12 h-2 rounded bg-blue-500/30" />
            <div className="w-8 h-2 rounded bg-green-500/30" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-20 h-1.5 rounded bg-slate-800" />
              <div className="w-6 h-1.5 rounded bg-blue-500/20 ml-auto" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <div className="w-16 h-1.5 rounded bg-slate-800" />
              <div className="w-8 h-1.5 rounded bg-blue-500/20 ml-auto" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <div className="w-24 h-1.5 rounded bg-slate-800" />
              <div className="w-4 h-1.5 rounded bg-blue-500/20 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "File Uploader (Cloudinary)",
    description: "A clean utility service featuring file dragging uploads, real-time progress bars, and Cloudinary media optimization endpoints.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Cloudinary API"],
    githubUrl: "https://github.com/kiflomm/cloudinary_file_uploader_nextjs15",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Upload Container */}
        <div className="w-36 h-28 rounded-xl border border-dashed border-cyan-500/40 bg-slate-900/90 shadow-2xl flex flex-col items-center justify-center p-3 relative">
          {/* Animated Cloud Icon */}
          <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400 animate-pulse mb-1.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div className="w-16 h-2 rounded bg-cyan-500/20 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 bg-cyan-500 w-2/3 animate-pulse" />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Birthday Teller Telegram Bot",
    description: "An automated service agent for Telegram channels, programmed to monitor birthday database configurations and push real-time alerts.",
    tags: ["TypeScript", "Grammy API", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/kiflomm/telegram-bots",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-violet-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Chat bubbles */}
        <div className="w-40 h-28 rounded-xl border border-violet-500/30 bg-slate-900/90 shadow-2xl p-2.5 flex flex-col justify-end gap-2">
          <div className="p-2 rounded-lg bg-violet-600/10 text-violet-400 text-[10px] w-2/3 border border-violet-500/15">
            /start
          </div>
          <div className="p-2 rounded-lg bg-slate-800 text-slate-300 text-[9px] w-4/5 self-end leading-tight">
            Happy Birthday! 🎉 Your bot is initialized and ready.
          </div>
        </div>
      </div>
    )
  },
  {
    title: "E-commerce Landing Page",
    description: "A responsive, modern catalog showcase page engineered with high-rate load metrics and elegant transitions.",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Mobile Responsive"],
    githubUrl: "https://github.com/kiflomm/tlfi-shop",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Shopping layout */}
        <div className="w-40 h-28 rounded-xl border border-emerald-500/30 bg-slate-900/90 shadow-2xl p-2 flex flex-col gap-1.5">
          <div className="w-full h-12 rounded-lg bg-slate-850 border border-border/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />
            <div className="absolute bottom-1.5 left-2 w-10 h-2.5 rounded bg-emerald-500/40" />
          </div>
          <div className="flex gap-1.5 flex-1">
            <div className="flex-1 rounded bg-slate-800 p-1 flex flex-col justify-end">
              <div className="w-full h-1.5 rounded bg-slate-700" />
            </div>
            <div className="flex-1 rounded bg-slate-800 p-1 flex flex-col justify-end">
              <div className="w-full h-1.5 rounded bg-slate-700" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "React Game Project",
    description: "A game engine demonstrating local state patterns, custom timing events, and micro-animations for interactions.",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Canvas"],
    githubUrl: "https://github.com/kiflomm/react-game-project",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-pink-900/40 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Arcade block mockup */}
        <div className="w-36 h-24 rounded-lg border border-pink-500/30 bg-slate-900/95 shadow-2xl flex items-center justify-center gap-1.5">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-6 rounded bg-pink-500 shadow-lg shadow-pink-500/30"
          />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="w-6 h-6 rounded bg-purple-600 shadow-lg shadow-purple-600/30"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="w-6 h-6 rounded bg-cyan-500 shadow-lg shadow-cyan-500/30"
          />
        </div>
      </div>
    )
  }
]

export function ProjectGallery() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      
      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A curated showcase of public repositories highlighting my software integration and full stack capabilities.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlowingCard className="h-full flex flex-col">
                <Card className="bg-transparent border-0 shadow-none overflow-hidden h-full flex flex-col">
                  
                  {/* Visual Header container */}
                  <div className="h-44 w-full relative overflow-hidden border-b border-border/20 dark:border-border/10 bg-slate-950">
                    {project.visual}
                  </div>

                  {/* Card Body */}
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-1.5 leading-snug">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/5 border border-primary/10 text-[10px] text-foreground/80 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA link */}
                      <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                          </svg>
                          View Repository
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </Link>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </GlowingCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
