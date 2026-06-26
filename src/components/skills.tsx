"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Settings, Terminal, X, Smartphone, MessageSquare, Cloud } from "lucide-react"

interface Skill {
  name: string
  tags: string[]
  icon: React.ReactNode
}

type SkillCategories = {
  [key: string]: Skill[]
}

const categoryIcons = {
  Frontend: <Code className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  "Mobile App Development": <Smartphone className="h-5 w-5" />,
  "Database and ORM": <Database className="h-5 w-5" />,
  "DevOps & Tools": <Settings className="h-5 w-5" />,
  "Communication Languages": <MessageSquare className="h-5 w-5" />,
}

const skills: SkillCategories = {
  Frontend: [
    {
      name: "React",
      tags: ["Hooks", "Context", "Redux", "Zustand", "React Query"],
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Next.js",
      tags: ["SSR", "API Routes", "Static Generation", "App Router"],
      icon: <Globe className="h-6 w-6 text-indigo-500" />,
    },
    {
      name: "Vue.js",
      tags: ["Composition API", "Pinia", "Vue Router", "Nuxt.js"],
      icon: <Code className="h-6 w-6 text-emerald-500" />,
    },
    {
      name: "Tailwind CSS",
      tags: ["Responsive Design", "Custom Themes", "Animations", "Shadcn UI"],
      icon: <Code className="h-6 w-6 text-cyan-400" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      tags: ["Express", "REST APIs", "Middleware", "Authentication"],
      icon: <Server className="h-6 w-6 text-green-600" />,
    },
    {
      name: "Express",
      tags: ["Routing", "Error Handling", "Security"],
      icon: <Server className="h-6 w-6 text-neutral-500" />,
    },
    {
      name: "Laravel",
      tags: ["Eloquent ORM", "Blade", "Artisan CLI", "Migrations"],
      icon: <Server className="h-6 w-6 text-rose-600" />,
    },
    {
      name: "GraphQL",
      tags: ["Apollo", "Schema Design", "Resolvers"],
      icon: <Database className="h-6 w-6 text-pink-500" />,
    },
  ],
  "Mobile App Development": [
    {
      name: "Expo & React Native",
      tags: ["Expo Router", "Cross-Platform", "Native Modules", "Offline Support"],
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
    },
  ],
  "Database and ORM": [
    {
      name: "NoSQL Databases",
      tags: ["MongoDB", "Aggregation", "Indexing", "Mongoose"],
      icon: <Database className="h-6 w-6 text-emerald-600" />,
    },
    {
      name: "Relational Databases",
      tags: ["PostgreSQL", "MySQL", "SQL Queries", "JSONB fields"],
      icon: <Database className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "ORMs",
      tags: ["Prisma", "Drizzle", "Type Safety", "Auto-Migrations"],
      icon: <Database className="h-6 w-6 text-indigo-600" />,
    },
  ],
  "DevOps & Tools": [
    {
      name: "Version Control",
      tags: ["Git", "GitHub Actions", "CI/CD Workflows"],
      icon: <Code className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Docker",
      tags: ["Containers", "Docker Compose", "Images", "Networking"],
      icon: <Settings className="h-6 w-6 text-sky-500" />,
    },
    {
      name: "Cloud Services",
      tags: ["Vercel", "Coolify", "Hostinger", "Supabase", "Railway", "Firebase"],
      icon: <Cloud className="h-6 w-6 text-cyan-500" />,
    },
    {
      name: "Linux & Shell",
      tags: ["Ubuntu", "Kali Linux", "Bash Scripting", "SSH & Server Config"],
      icon: <Terminal className="h-6 w-6 text-yellow-500" />,
    },
  ],
  "Communication Languages": [
    {
      name: "English",
      tags: ["Fluent Speaking", "Technical Documentation", "Client Consultation"],
      icon: <Globe className="h-6 w-6 text-indigo-400" />,
    },
    {
      name: "Amharic",
      tags: ["Native/Bilingual", "Written & Spoken"],
      icon: <Globe className="h-6 w-6 text-orange-400" />,
    },
    {
      name: "Tigrigna",
      tags: ["Native/Bilingual", "Written & Spoken"],
      icon: <Globe className="h-6 w-6 text-red-400" />,
    },
  ],
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

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [showMobileSkills, setShowMobileSkills] = useState(false)

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
    setShowMobileSkills(true)
  }

  return (
    <section className="py-20 md:py-32 min-h-screen flex items-center bg-gradient-to-b from-background via-background/95 to-background relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my software engineering capabilities and toolkit.
          </p>
        </motion.div>

        {/* Categories Navigation Grid (Tablet / Mobile) */}
        <div className="lg:hidden mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {Object.keys(skills).map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => handleCategorySelect(category)}
                className={`p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center gap-2.5 ${
                  activeCategory === category
                    ? "bg-primary/10 border-primary text-primary shadow-lg shadow-primary/5"
                    : "bg-card/50 border-border/80 hover:border-primary/50 text-foreground"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <div className="text-xs font-semibold">{category}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop Side-by-Side Panel */}
        <div className="hidden lg:flex gap-10 items-stretch">
          {/* Categories Sidebar */}
          <div className="w-80 flex-shrink-0 flex flex-col gap-3">
            {Object.keys(skills).map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category)}
                className={`w-full p-4.5 rounded-2xl border text-left flex items-center gap-4 transition-all duration-300 relative ${
                  activeCategory === category
                    ? "bg-primary/10 border-primary text-primary shadow-xl shadow-primary/5"
                    : "bg-card/55 border-border/30 hover:border-primary/30 text-foreground/80 hover:text-foreground"
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                }`}>
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                
                <div>
                  <h4 className="font-bold text-sm tracking-wide">{category}</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {skills[category].length} core developer skill{skills[category].length !== 1 ? "s" : ""}
                  </p>
                </div>

                {activeCategory === category && (
                  <motion.div
                    layoutId="activeIndicatorDesktop"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1.5 h-6 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Core Content Grid */}
          <div className="flex-1">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="border-b border-border/40 pb-4 mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{activeCategory}</h3>
                <p className="text-xs text-muted-foreground mt-1">Core frameworks, languages, and technologies</p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <GlowingCard className="h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full z-10 relative">
                        <div>
                          <div className="flex items-center gap-3.5 mb-4">
                            <div className="p-2.5 rounded-xl bg-card border border-border/80 dark:border-border/10 shadow-sm flex items-center justify-center">
                              {skill.icon}
                            </div>
                            <h4 className="font-bold text-base text-foreground tracking-wide">{skill.name}</h4>
                          </div>

                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {skill.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary/5 hover:bg-primary/10 border border-primary/10 text-[10px] sm:text-xs py-0.5 text-foreground/80 transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </GlowingCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile drawer display for skills modal */}
        <AnimatePresence>
          {showMobileSkills && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 lg:hidden pointer-events-auto"
              onClick={() => setShowMobileSkills(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="absolute bottom-0 left-0 right-0 bg-card border-t border-border/80 dark:border-border/30 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      {categoryIcons[activeCategory as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground">{activeCategory}</h3>
                      <p className="text-xs text-muted-foreground">
                        {skills[activeCategory].length} skill{skills[activeCategory].length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowMobileSkills(false)}
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-5 overflow-y-auto max-h-[calc(80vh-76px)] space-y-4">
                  {skills[activeCategory].map((skill, index) => (
                    <motion.div
                      key={`mobile-${skill.name}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <GlowingCard>
                        <CardContent className="p-5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-card rounded-lg border border-border/80 dark:border-border/10">
                              {skill.icon}
                            </div>
                            <h4 className="font-bold text-sm tracking-wide">{skill.name}</h4>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {skill.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="bg-primary/5 border border-primary/10 text-[10px] text-foreground/80 py-0.5"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </GlowingCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
