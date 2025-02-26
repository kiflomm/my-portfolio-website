"use client"
import { HeroSection } from "@/components/hero-section"
import { SkillsShowcase } from "@/components/skllis-showcase"
import { ProjectGallery } from "@/components/project-gallery"
import { ContactForm } from "@/components/contact-form"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground relative"
    >
      <CustomCursor />
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation dots */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {['home', 'skills', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="block w-3 h-3 rounded-full bg-primary/20 hover:bg-primary/50 transition-colors"
            aria-label={`Navigate to ${section} section`}
          />
        ))}
      </nav>

      {/* Main content sections */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="skills">
        <SkillsShowcase />
      </section>

      <section id="projects">
        <ProjectGallery />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary/10 hover:bg-primary/20 rounded-full backdrop-blur-sm transition-colors"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </motion.main>
  )
}

