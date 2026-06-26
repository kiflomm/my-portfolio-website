"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

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
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("https://formspree.io/f/mpwqvqrb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormState({ name: "", email: "", phone: "", message: "" })
      setSubmitStatus("success")
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute top-[20%] left-[-15%] w-[40%] h-[40%] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have an exciting project or vacancy in mind? Let&apos;s connect and build something incredible together.
          </p>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-1">
            <GlowingCard className="h-full bg-primary text-primary-foreground dark:bg-card/30 dark:text-foreground">
              <div className="p-8 flex flex-col justify-between h-full z-10 relative">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">Contact Information</h3>
                  <p className="text-sm opacity-85 dark:text-muted-foreground mb-8 leading-relaxed">
                    Feel free to reach out directly. I usually respond within a few hours on business days.
                  </p>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3.5 rounded-xl bg-primary-foreground/10 dark:bg-primary/10 text-primary-foreground dark:text-primary transition-all duration-300 group-hover:scale-110">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider opacity-60 dark:text-muted-foreground">Email</p>
                        <a href="mailto:kiflomberihu@outlook.com" className="text-sm font-semibold hover:underline">
                          kiflomberihu@outlook.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3.5 rounded-xl bg-primary-foreground/10 dark:bg-primary/10 text-primary-foreground dark:text-primary transition-all duration-300 group-hover:scale-110">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider opacity-60 dark:text-muted-foreground">Phone</p>
                        <a href="tel:+251937409088" className="text-sm font-semibold hover:underline">
                          +251 937 409 088
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3.5 rounded-xl bg-primary-foreground/10 dark:bg-primary/10 text-primary-foreground dark:text-primary transition-all duration-300 group-hover:scale-110">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold tracking-wider opacity-60 dark:text-muted-foreground">Location</p>
                        <p className="text-sm font-semibold">
                          Mekelle, Tigray, Ethiopia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-primary-foreground/20 dark:border-border/30">
                  <p className="text-xs opacity-75 dark:text-muted-foreground leading-relaxed">
                    Now open for full-time contracts, part-time consultancy, or custom freelance developments.
                  </p>
                </div>
              </div>
            </GlowingCard>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2">
            <GlowingCard className="h-full">
              <div className="p-8 z-10 relative">
                
                {/* Form header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold tracking-tight mb-1 text-foreground">Send a Message</h3>
                  <p className="text-xs text-muted-foreground">All submissions route straight to my inbox.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Your Name</label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-background/40 border-border/80 dark:border-border/20 focus-visible:ring-primary h-11"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground/80">Your Email</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-background/40 border-border/80 dark:border-border/20 focus-visible:ring-primary h-11"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Phone Number (Optional)</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="bg-background/40 border-border/80 dark:border-border/20 focus-visible:ring-primary h-11"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Message</label>
                    <Textarea
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="min-h-[160px] bg-background/40 border-border/80 dark:border-border/20 focus-visible:ring-primary resize-y"
                      required
                    />
                  </div>

                  {/* Notification Banners */}
                  <AnimatePresence mode="wait">
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5"
                      >
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <span>Thank you! Your message was sent successfully.</span>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-center gap-2.5"
                      >
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <span>Failed to send the message. Please check details or retry.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/95 font-semibold text-sm rounded-xl shadow-lg shadow-primary/5 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-1"
                        >
                          <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

              </div>
            </GlowingCard>
          </div>

        </div>

      </div>
    </section>
  )
}
