"use client"
import { HeroSection } from "@/components/hero-section"
import { SkillsShowcase } from "@/components/skills"
import { ProjectGallery } from "@/components/project-gallery"
import { ContactForm } from "@/components/contact-form"
import { CustomCursor } from "@/components/custom-cursor"
import { EducationWork } from "@/components/education-work"
import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"

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

      {/* Navigation icons */}
      <TooltipProvider>
        <nav className="fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:space-y-4 z-50
                      top-0 left-0 right-0 md:left-auto bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none
                      flex md:flex-col justify-center items-center space-x-4 md:space-x-0 p-4 md:p-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#home"
                className="block w-8 h-8 text-primary/50 hover:text-primary transition-colors"
                aria-label="Navigate to home section"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2zm0 2.83L19.17 12H18v8h-4v-6H10v6H6v-8H4.83L12 4.83z"/>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#skills"
                className="block w-8 h-8 text-primary/50 hover:text-primary transition-colors"
                aria-label="Navigate to skills section"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9 2C8.2 2 5.2 5 5.2 8.7c0 3.4 2.2 6.3 5.2 7.3v4c0 .6.4 1 1 1s1-.4 1-1v-4c3-.9 5.2-3.8 5.2-7.3C17.6 5 14.6 2 11.9 2zm0 12c-2.9 0-5.2-2.3-5.2-5.3S9 3.5 11.9 3.5s5.2 2.3 5.2 5.3-2.3 5.2-5.2 5.2z"/>
                  <path d="M11.9 6.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2z"/>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Skills</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#education"
                className="block w-8 h-8 text-primary/50 hover:text-primary transition-colors"
                aria-label="Navigate to education section"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6l11-6L12 3M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Education & Work</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#projects"
                className="block w-8 h-8 text-primary/50 hover:text-primary transition-colors"
                aria-label="Navigate to projects section"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.2l2 2H20v10z"/>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#contact"
                className="block w-8 h-8 text-primary/50 hover:text-primary transition-colors"
                aria-label="Navigate to contact section"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact</p>
            </TooltipContent>
          </Tooltip>

          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </TooltipProvider>

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

      {/* Scroll to top button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>
            <p>Scroll to top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.main>
  )
}
