"use client"

import { motion } from "framer-motion" 
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Server, Settings, Terminal } from "lucide-react"

const skills = {
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
      description: "Building mobile applications using the React native Expo framework ",
      tags: ["React Native", "Expo", "Cross-Platform"],
      icon: <Code className="h-6 w-6" />,
    },
  ],
  "Database and ORM": [
    {
      name: "NoSQL Databases",
      description: "Working with NoSQL databases, aggregation pipelines, and schemas",
      tags: ["MongoDB","Aggregation", "Indexing"],
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
      description:"Expertise in database Object-Relational Mapping tools",
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
    }
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
  return (
    <section className="py-20 min-h-screen flex items-center bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Technical Expertise
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">A showcase of my technical skills and proficiencies</p>
        </motion.div>

        <Tabs defaultValue="Frontend" className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-2 overflow-x-auto h-fit">
            {Object.keys(skills).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className=" m-0 rounded-full transition-all duration-300
                  data-[state=active]:bg-primary/10 data-[state=active]:text-primary
                  hover:bg-muted/50 hover:text-foreground
                  text-muted-foreground font-medium
                  border border-transparent data-[state=active]:border-primary/20
                  shadow-sm hover:shadow-md"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skills).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {skill.icon}
                          {skill.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}