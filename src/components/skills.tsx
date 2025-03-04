"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Server, Settings, Terminal, ChevronRight, X } from "lucide-react"
import { ReactNode } from "react"

interface Skill {
  name: string
  description: string
  tags: string[]
  icon: ReactNode
}

type SkillCategories = {
  [key: string]: Skill[]
}

// Remove proficiency from skills data
const skills: SkillCategories = {
  Frontend: [
    {
      name: "React",
      description: "Building complex web applications with React hooks, context, and modern patterns",
      tags: ["Hooks", "Context", "Redux", "Zustand", "React Query"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      name: "Next.js",
      description: "Creating performant full-stack applications with server-side rendering and API routes",
      tags: ["SSR", "API Routes", "Static Generation", "App Router"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      name: "Tailwind CSS",
      description: "Crafting responsive and modern UI designs with utility-first CSS",
      tags: ["Responsive Design", "Custom Themes", "Animations", "Shadcn UI", "Material UI"],
      icon: <Code className="h-6 w-6" />,
    },
  ],
  Backend: [
    {
      name: "Node.js",
      description: "Building scalable server-side applications and REST APIs",
      tags: ["Express", "REST APIs", "Middleware", "Authentication"],
      icon: <Server className="h-6 w-6" />,
    },
    {
      name: "Express",
      description: "Creating robust backend services with middleware and routing",
      tags: ["Routing", "Error Handling", "Security"],
      icon: <Server className="h-6 w-6" />,
    },
    {
      name: "GraphQL",
      description: "Designing efficient and flexible APIs with GraphQL schema and resolvers",
      tags: ["Apollo", "Schema Design", "Resolvers"],
      icon: <Database className="h-6 w-6" />,
    },
  ],
  "Mobile App Development": [
    {
      name: "Expo",
      description: "Building mobile applications using the React native Expo framework",
      tags: ["React Native", "Expo", "Cross-Platform"],
      icon: <Code className="h-6 w-6" />,
    },
  ],
  "Database and ORM": [
    {
      name: "NoSQL Databases",
      description: "Working with NoSQL databases, aggregation pipelines, and schemas",
      tags: ["MongoDB", "Aggregation", "Indexing"],
      icon: <Database className="h-6 w-6" />,
    },
    {
      name: "Relational Databases",
      description: "Managing relational databases with complex queries and optimizations",
      tags: ["SQL", "PostgreSQL", "MySQL", "Migrations"],
      icon: <Database className="h-6 w-6" />,
    },
    {
      name: "ORMs",
      description: "Expertise in database Object-Relational Mapping tools",
      tags: ["Prisma", "Drizzle", "Type Safety", "Migrations"],
      icon: <Database className="h-6 w-6" />,
    },
  ],
  "DevOps & Tools": [
    {
      name: "Version Control",
      description: "Proficient in Git version control and collaboration",
      tags: ["Git", "GitHub", "Branching", "CI/CD"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      name: "Docker",
      description: "Containerizing applications and managing multi-container environments",
      tags: ["Containers", "Docker Compose", "Networking"],
      icon: <Settings className="h-6 w-6" />,
    },
    {
      name: "Cloud Services",
      description: "Deploying and managing cloud infrastructure and services",
      tags: ["Vercel", "Coolify", "Hostinger", "Supabase", "Railway", "Firebase"],
      icon: <Globe className="h-6 w-6" />,
    },
  ],
  "Operating Systems": [
    {
      name: "Linux",
      description: "Experience with Linux-based operating systems",
      tags: ["Ubuntu", "Kali Linux", "Terminal", "Shell Scripting"],
      icon: <Terminal className="h-6 w-6" />,
    },
    {
      name: "Windows",
      description: "Proficient in Windows environment and development",
      tags: ["Windows 11", "PowerShell", "WSL"],
      icon: <Terminal className="h-6 w-6" />,
    },
  ],
  "Communication Languages": [
    {
      name: "English",
      description: "Professional proficiency in English communication",
      tags: ["Speaking", "Writing", "Technical Documentation"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      name: "Amharic",
      description: "Fluent in Amharic communication",
      tags: ["Speaking", "Writing"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      name: "Tigrigna",
      description: "Fluent in Tigrigna communication",
      tags: ["Speaking", "Writing"],
      icon: <Globe className="h-6 w-6" />,
    },
  ],
}

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  // Handle skill click for detailed view
  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill)
  }

  // Close detailed view
  const closeDetailView = () => {
    setSelectedSkill(null)
  }

  return (
    <section className="py-12 md:py-20 min-h-screen flex items-center bg-gradient-to-b from-background via-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50 animate-gradient">
              Technical Expertise
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and proficiencies across various domains
          </p>
        </motion.div>

        {/* Main tabs content */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          {/* Category tabs with icons */}
          <div className="relative mb-8 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="flex justify-start gap-2 h-fit p-1 w-max mx-auto">
                {Object.keys(skills).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full transition-all duration-300 px-4 py-2
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                      hover:bg-muted/80 hover:text-foreground
                      text-muted-foreground font-medium
                      border border-transparent data-[state=active]:border-primary/20
                      shadow-sm hover:shadow-md"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Category content */}
          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleSkillClick(skill)}
                    className="cursor-pointer"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            {skill.icon}
                          </div>
                          <h3 className="text-lg font-semibold">{skill.name}</h3>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{skill.description}</p>

                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {skill.tags.slice(0, 4).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {skill.tags.length > 4 && (
                            <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                              +{skill.tags.length - 4}
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-end mt-3">
                          <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View details <ChevronRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Detailed skill view modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeDetailView}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-card border rounded-xl shadow-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">{selectedSkill.icon}</div>
                      <h2 className="text-2xl font-bold">{selectedSkill.name}</h2>
                    </div>
                    <button onClick={closeDetailView} className="p-2 rounded-full hover:bg-muted transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Description</h3>
                    <p className="text-muted-foreground">{selectedSkill.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3"> </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tags.map((tag) => (
                        <Badge key={tag} className="bg-primary/10 text-primary px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
