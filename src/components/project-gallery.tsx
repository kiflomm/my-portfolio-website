"use client"
import { motion } from "framer-motion" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Landing Page",
    description: "A responsive and user-friendly landing page for an e-commerce website.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/kiflomm/tlfi-shop",
  },
  {
    title: "Expo Authentication App",
    description: "A mobile app for authentication with real-time updates and offline support.",
    tags: ["React Native", "Express", "Prisma", "Expo"],
    githubUrl: "https://github.com/kiflomm/expoplusexpress",
  },
  {
    title: "Student Management System",
    description: "A full-stack web application for managing students, courses, and grades.",
    tags: ["React", "Express", "Shadcn UI", "MongoDB"],
    githubUrl: "https://github.com/kua-University/Student_Registration_system_kiflom",
  },
  {
    title: "Birthday Teller Telegram Bot",
    description: "A Telegram bot that tells you when it's your birthday.",
    tags: ["Grammy", "Typescript", "Node.js"],
    githubUrl: "https://github.com/kiflomm/telegram-bots",
  },
  {
    title: "React Game Project",
    description: "A simple game built with React.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/kiflomm/react-game-project",
  },
  {
    title: "File Uploader (Cloudinary)",
    description: "A simple file uploader built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Cloudinary"],
    githubUrl: "https://github.com/kiflomm/cloudinary_file_uploader_nextjs15",
  }
]

export function ProjectGallery() {
  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground">Check out some of the public projects I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-4">
                  <CardTitle className="mb-2 text-lg">{project.title}</CardTitle>
                  <CardDescription className="mb-3 text-sm">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank" 
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      Source Code
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
