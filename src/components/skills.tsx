"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Server, Settings, Terminal, ChevronRight, X, Smartphone, MessageSquare, Cloud } from "lucide-react"
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

// Category icons mapping
const categoryIcons = {
  Frontend: <Code className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  "Mobile App Development": <Smartphone className="h-5 w-5" />,
  "Database and ORM": <Database className="h-5 w-5" />,
  "DevOps & Tools": <Settings className="h-5 w-5" />,
  "Operating Systems": <Terminal className="h-5 w-5" />,
  "Communication Languages": <MessageSquare className="h-5 w-5" />,
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
      name: "Vue.js",
      description: "Building reactive and component-based user interfaces with Vue.js framework",
      tags: ["Composition API", "Options API", "Vuex", "Pinia", "Vue Router"],
      icon: <Code className="h-6 w-6" />,
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
      name: "Laravel",
      description: "Building modern web applications with the Laravel PHP framework",
      tags: ["Eloquent ORM", "Blade Templates", "Artisan CLI", "Migrations", "Authentication"],
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
      icon: <Cloud className="h-6 w-6" />,
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
  const [showMobileSkills, setShowMobileSkills] = useState(false)

  // Handle skill click for detailed view
  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill)
  }

  // Close detailed view
  const closeDetailView = () => {
    setSelectedSkill(null)
  }

  // Handle category selection on mobile
  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
    setShowMobileSkills(true)
  }

  // Close mobile skills view
  const closeMobileSkills = () => {
    setShowMobileSkills(false)
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

        {/* Modern Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Mobile/Tablet Layout - Grid */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {Object.keys(skills).map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 group relative overflow-hidden
                      ${activeCategory === category 
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
                        : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-md'
                      }
                    `}
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      {/* Icon */}
                      <div className={`p-3 rounded-full transition-all duration-300 ${
                        activeCategory === category 
                          ? 'bg-primary text-primary-foreground shadow-lg' 
                          : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                      }`}>
                        {categoryIcons[category as keyof typeof categoryIcons]}
                      </div>
                      
                      {/* Category name */}
                      <div>
                        <h4 className={`font-semibold text-sm transition-colors duration-300 ${
                          activeCategory === category 
                            ? 'text-primary' 
                            : 'text-foreground group-hover:text-primary'
                        }`}>
                          {category}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {skills[category].length} skill{skills[category].length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    
                    {/* Active indicator */}
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:flex gap-8">
            {/* Categories Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="space-y-3">
                {Object.keys(skills).map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full p-4 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden text-left
                        ${activeCategory === category 
                          ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
                          : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-md'
                        }
                      `}
                    >
                      {/* Background gradient effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-4">
                        {/* Icon */}
                        <div className={`p-2 rounded-full transition-all duration-300 ${
                          activeCategory === category 
                            ? 'bg-primary text-primary-foreground shadow-lg' 
                            : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                        }`}>
                          {categoryIcons[category as keyof typeof categoryIcons]}
                        </div>
                        
                        {/* Category name and count */}
                        <div className="flex-1">
                          <h4 className={`font-semibold text-sm transition-colors duration-300 ${
                            activeCategory === category 
                              ? 'text-primary' 
                              : 'text-foreground group-hover:text-primary'
                          }`}>
                            {category}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {skills[category].length} skill{skills[category].length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      
                      {/* Active indicator */}
                      {activeCategory === category && (
                        <motion.div
                          layoutId="activeIndicatorDesktop"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-primary rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Content */}
            <div className="flex-1">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{activeCategory}</h3>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {skills[activeCategory].map((skill, index) => (
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
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Skills Modal */}
        <AnimatePresence>
          {showMobileSkills && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileSkills}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute bottom-0 left-0 right-0 bg-card border-t-2 border-primary/20 rounded-t-3xl shadow-2xl max-h-[85vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-6 pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        {categoryIcons[activeCategory as keyof typeof categoryIcons]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{activeCategory}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skills[activeCategory].length} skill{skills[activeCategory].length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={closeMobileSkills}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Drag indicator */}
                  <div className="w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto" />
                </div>

                {/* Skills Content */}
                <div className="p-6 pt-2 overflow-y-auto max-h-[calc(85vh-120px)]">
                  <div className="space-y-4">
                    {skills[activeCategory].map((skill, index) => (
                      <motion.div
                        key={`mobile-${skill.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        onClick={() => handleSkillClick(skill)}
                        className="cursor-pointer"
                      >
                        <Card className="transition-all duration-300 hover:shadow-lg hover:border-primary/50 overflow-hidden group">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                {skill.icon}
                              </div>
                              <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>

                            <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>

                            <div className="flex flex-wrap gap-1.5">
                              {skill.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {skill.tags.length > 3 && (
                                <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                                  +{skill.tags.length - 3}
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
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                    <h3 className="text-lg font-medium mb-3">Technologies & Tools</h3>
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
