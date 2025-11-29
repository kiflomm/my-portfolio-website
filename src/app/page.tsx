"use client"
import { HeroSection } from "@/components/hero-section"
import { SkillsShowcase } from "@/components/skills"
import { ProjectGallery } from "@/components/project-gallery"
import { ContactForm } from "@/components/contact-form"
import { CustomCursor } from "@/components/custom-cursor"
import { EducationWork } from "@/components/education-work"
import { motion } from "framer-motion"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <CustomCursor/>
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main content sections */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillsShowcase />
      </section>

      <section id="education">
        <EducationWork />
      </section>

      <section id="projects">
        <ProjectGallery />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </motion.main>
  )
}
