"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"

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

export function ContactForm() {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Me",
      value: "kiflomberihu@outlook.com",
      href: "mailto:kiflomberihu@outlook.com",
      color: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5",
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: "Telegram",
      value: "@brogrammer_kiflom",
      href: "https://t.me/brogrammer_kiflom",
      color: "hover:text-cyan-500 hover:border-cyan-500/30 hover:bg-cyan-500/5",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "WhatsApp",
      value: "+251 937 409 088",
      href: "https://wa.me/+251937409088",
      color: "hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Direct",
      value: "+251 937 409 088",
      href: "tel:+251937409088",
      color: "hover:text-violet-500 hover:border-violet-500/30 hover:bg-violet-500/5",
    },
  ]

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Let&apos;s connect and explore how we can work together. Reach out directly through any of the channels below.
          </p>
        </motion.div>

        {/* Centered Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlowingCard className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 z-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Intro Side */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight">Let&apos;s Start a Conversation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Whether you have an interesting job position, a freelance project, or just want to talk about software engineering, don&apos;t hesitate to contact me!
                  </p>
                  
                  {/* Location badge */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground/80">Location</p>
                      <p>Mekelle, Tigray, Ethiopia</p>
                    </div>
                  </div>
                </div>

                {/* Grid of contact links */}
                <div className="grid grid-cols-1 gap-4">
                  {contactMethods.map((method, idx) => (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-border/80 dark:border-border/20 bg-card/40 dark:bg-card/10 transition-all duration-300 ${method.color}`}
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          {method.title}
                        </p>
                        <p className="text-sm font-semibold text-foreground leading-snug break-all">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      </div>
    </section>
  )
}
