"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const y = useTransform(scrollY, [0, 300], [0, 20])

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest < 100)
    })
    return () => unsubscribe()
  }, [scrollY])

  if (!isVisible) return null

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-8 right-8 z-30 flex flex-col items-center gap-2 pointer-events-none"
    >
      <span className="text-xs md:text-sm text-foreground/60 dark:text-foreground/40 font-medium mb-1">
        Scroll to explore
      </span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Mouse Icon */}
        <svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground/70 dark:text-foreground/50"
        >
          {/* Mouse body */}
          <rect
            x="4"
            y="4"
            width="16"
            height="28"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Scroll wheel */}
          <motion.circle
            cx="12"
            cy="12"
            r="2"
            fill="currentColor"
            animate={{
              cy: [12, 20, 12],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

