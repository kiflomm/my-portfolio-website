"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
  "Redux",
  "Tailwind CSS",
]

export function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative"
            >
              <Badge variant="outline" className="w-full py-3 text-lg font-semibold">
                {skill}
              </Badge>
              {hoveredSkill === skill && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 bg-primary text-primary-foreground flex items-center justify-center rounded-md"
                >
                  <span className="text-sm">Expert</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

