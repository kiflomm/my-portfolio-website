"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient similar to page.tsx */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all"
        >
          <Image
            src="https://res.cloudinary.com/dpheomaz9/image/upload/v1740572514/144546891_fq7aqn.jpg" 
            alt="Kiflom Berihu Abay"
            width={192}
            height={192}
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Kiflom Berihu Abay
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl mb-6"
        >
          <span className="text-primary">Fullstack Web Developer</span>
          <span className="mx-2">&</span>
          <span className="text-primary">Mobile App Developer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Passionate about creating seamless digital experiences through innovative web and mobile solutions. 
          Specialized in React, Next.js, and React Native development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6 mb-8"
        >
          {[
            { Icon: GithubIcon, href: "https://github.com/yourusername", label: "GitHub" },
            { Icon: LinkedinIcon, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
            { Icon: TwitterIcon, href: "https://twitter.com/yourusername", label: "Twitter" }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
        >
          Explore My Work
        </motion.a>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
            <motion.div
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-2 h-2 bg-primary rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
