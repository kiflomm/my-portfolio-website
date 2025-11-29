"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

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
      <span className={showCursor ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  )
}

// Animated code snippet component
function CodeSnippet({ code, delay = 0, position = "top" }: { code: string; delay?: number; position?: string }) {
  const lines = code.split("\n")
  const getColor = (line: string) => {
    if (line.trim().startsWith("//") || line.trim().startsWith("/*")) {
      return "text-green-600 dark:text-green-400"
    }
    if (line.includes("function") || line.includes("const") || line.includes("let") || line.includes("export")) {
      return "text-blue-600 dark:text-blue-400"
    }
    if (line.includes("(") || line.includes(")")) {
      return "text-purple-600 dark:text-purple-400"
    }
    if (line.includes('"') || line.includes("'")) {
      return "text-yellow-600 dark:text-yellow-400"
    }
    return "text-gray-700 dark:text-gray-300"
  }

  return (
    <motion.pre
      initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      animate={{ 
        opacity: [0, 0.7, 0.7],
        y: 0
      }}
      transition={{ 
        duration: 1.5, 
        delay,
        opacity: { times: [0, 0.5, 1] }
      }}
      className="text-xs md:text-sm font-mono leading-relaxed select-none pointer-events-none opacity-70 dark:opacity-60 max-h-64 overflow-hidden"
    >
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 0.1, duration: 0.3 }}
          className={getColor(line)}
        >
          {line}
        </motion.div>
      ))}
    </motion.pre>
  )
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXRelative = (e.clientX - rect.left) / width - 0.5
    const mouseYRelative = (e.clientY - rect.top) / height - 0.5
    mouseX.set(mouseXRelative)
    mouseY.set(mouseYRelative)
  }

  const codeSnippets = [
    {
      code: `// Welcome to my portfolio\nconst developer = {\n  name: "Kiflom Berihu",\n  role: "Full Stack Developer",\n  nickName: "The Brogrammer",\n  backEnd: ["Nest.js","Express.js","Laravel"],\n  mobileApp: ["Flutter","Expo"],\n  frontEnd: ["React.js","Next.js","Vue.js"]\n}`,
      delay: 0.2,
      position: "top" as const,
    },
    {
      code: `function buildAwesome() {\n  return {\n    code: "clean",\n    design: "modern",\n    passion: "infinite"\n  }\n}`,
      delay: 0.4,
      position: "bottom" as const,
    },
    {
      code: `export const Kiflom = () => {\n  return <Brogrammer />\n}`,
      delay: 0.6,
      position: "top" as const,
    },
  ]

  return (
    <section
      className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden py-8 md:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-600/30 dark:to-pink-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-500/20 via-cyan-500/20 to-blue-500/20 dark:from-green-600/30 dark:via-cyan-600/30 dark:to-blue-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Background Profile Image with Blend */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{ x, y }}
      >
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/dpheomaz9/image/upload/v1740572514/144546891_fq7aqn.jpg"
            alt="Kiflom Berihu Abay"
            fill
            className="object-cover mix-blend-overlay dark:mix-blend-soft-light"
            priority
            style={{ filter: "blur(40px) grayscale(100%)" }}
          />
        </div>
      </motion.div>

      {/* Animated Code Snippets Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <motion.div
          className="absolute top-20 left-4 md:left-6 lg:left-8 opacity-30 md:opacity-70 max-w-xs md:max-w-sm"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CodeSnippet code={codeSnippets[0].code} delay={codeSnippets[0].delay} position={codeSnippets[0].position} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 md:bottom-40 left-4 md:left-auto md:right-6 lg:right-8 opacity-30 md:opacity-70 max-w-xs md:max-w-sm"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CodeSnippet code={codeSnippets[1].code} delay={codeSnippets[1].delay} position={codeSnippets[1].position} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-4 md:left-6 lg:left-8 hidden md:block max-w-xs md:max-w-sm"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CodeSnippet code={codeSnippets[2].code} delay={codeSnippets[2].delay} position={codeSnippets[2].position} />
        </motion.div>
      </div>

      {/* Terminal-style Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-30 w-full max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-0"
      >
        {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-4 md:mb-6"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dpheomaz9/image/upload/v1740572514/144546891_fq7aqn.jpg"
                alt="Kiflom Berihu Abay"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Name with Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mb-4 md:mb-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 dark:from-primary dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent leading-tight md:leading-normal">
              <TypingText text="Kiflom Berihu Abay" delay={0.5} />
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] sm:text-xs md:text-base lg:text-lg font-semibold text-foreground leading-tight">
                Full Stack Developer | Web & Mobile Applications
              </p>
            </div>
          </motion.div>

          {/* Social Links - Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-4 mb-5 md:mb-8"
          >
            {[
              { href: "https://github.com/kiflomm", icon: "github", color: "hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900" },
              { href: "https://www.upwork.com/freelancers/~011e4bb830aeb14cd2?mp_source=share", icon: "upwork", color: "hover:bg-green-600 hover:text-white" },
              { href: "https://www.linkedin.com/in/kiflom-berihu", icon: "linkedin", color: "hover:bg-blue-600 hover:text-white" },
              { href: "https://wa.me/+251937409088", icon: "whatsapp", color: "hover:bg-green-500 hover:text-white" },
              { href: "https://t.me/brogrammer_kiflom", icon: "telegram", color: "hover:bg-blue-400 hover:text-white" },
            ].map((social, index) => (
              <motion.div
                key={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className={`block p-2 sm:p-2.5 md:p-4 rounded-lg md:rounded-xl bg-card/50 dark:bg-card/30 border border-border/50 transition-all duration-300 ${social.color}`}
                >
                  {social.icon === "github" && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social.icon === "upwork" && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === "whatsapp" && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {social.icon === "telegram" && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row justify-center gap-2.5 md:gap-4 w-full"
          >
            <motion.button
              onClick={() => window.open("https://github.com/kiflomm", "_blank")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-4 md:px-8 py-2.5 md:py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-xs md:text-base overflow-hidden border-2 border-primary/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                <span className="hidden sm:inline">Explore My Public Work</span>
                <span className="sm:hidden">Explore Work</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/myresume_.pdf"
                download="Kiflom Berihu Abay Resume"
                target="_blank"
                className="group relative block w-full px-4 md:px-8 py-2.5 md:py-4 rounded-lg bg-secondary/50 dark:bg-secondary/30 text-secondary-foreground font-semibold text-xs md:text-base overflow-hidden border-2 border-border text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                  Download Resume
                  <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-secondary/80"
                  initial={{ y: "-100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.button
              onClick={() => {
                // Placeholder for AI assistant functionality
                console.log("AI Assistant clicked")
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-4 md:px-8 py-2.5 md:py-4 rounded-lg bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 text-white font-semibold text-xs md:text-base overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/20 dark:shadow-purple-500/30"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="hidden sm:inline">Ask AI About Me</span>
                <span className="sm:hidden">Ask AI</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
      </motion.div>
    </section>
  )
}
