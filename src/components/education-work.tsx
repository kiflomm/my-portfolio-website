"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"

const educationData = [
  {
    institution: "Mekelle University",
    degree: "BSc in Software Engineering",
    duration: "2020 - Present",
    location: "Mekelle, Ethiopia",
    description: "Currently pursuing a Bachelor's degree in Software Engineering, specializing in modern web technologies, mobile app development, and software architecture. Coursework includes data structures, algorithms, database management, and software design patterns.",
    achievements: [
      "Proactive in learning new technologies",
      "Team work and collaboration"
    ]
  }
]

const workData = [
  {
    company: "Tugza innovations P.L.C (Part Time) - Mekelle, Ethiopia",
    position: "Mobile App and Full Stack Web Developer",
    duration: "June 2024 - June 2025",
    location: "Mekelle, Tigray, Ethiopia",
    description: "Worked as a Full Stack Developer at a technology innovation company, building web and mobile solutions using Next.js, MERN stack, and Expo framework.",
    responsibilities: [
      "Developing responsive web applications",
      "Creating cross-platform mobile apps",
      "Client consultation and project management"
    ]
  },
  {
    company: "Ahaz Platforms  (Internship) - Mekelle, Ethiopia",
    position: "Laravel and Vue.js Developer Intern",
    duration: "March 2025 - June 2025",
    location: "Mekelle, Tigray, Ethiopia",
    description: "Worked as a Vue.js and Laravel Developer, responsible for building and maintaining responsive web applications, integrating RESTful APIs, optimizing performance, and ensuring secure backend logic using Laravel best practices.",
    responsibilities: [
      "Developing dynamic and responsive front-end interfaces using Vue.js",
      "Building robust backend systems with Laravel, implementing authentication, authorization, and database management",
      "Collaborating with the development team to design and implement scalable solutions"
    ]
  }
]

export function EducationWork() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-muted-foreground">My academic and professional journey</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Work Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-6">
              {educationData.length === 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex flex-col gap-1">
                        <span className="text-xl">{educationData[0].institution}</span>
                        <span className="text-base font-normal text-muted-foreground">
                          {educationData[0].degree}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{educationData[0].duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{educationData[0].description}</p>
                      <ul className="space-y-2">
                        {educationData[0].achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <div className="grid gap-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="flex flex-col gap-1">
                            <span className="text-xl">{edu.institution}</span>
                            <span className="text-base font-normal text-muted-foreground">
                              {edu.degree}
                            </span>
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              {workData.length === 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="flex flex-col gap-1">
                        <span className="text-xl">{workData[0].position}</span>
                        <span className="text-base font-normal text-muted-foreground">
                          {workData[0].company}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>{workData[0].duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{workData[0].description}</p>
                      <ul className="space-y-2">
                        {workData[0].responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <div className="grid gap-6">
                  {workData.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <CardTitle className="flex flex-col gap-1">
                            <span className="text-xl">{work.position}</span>
                            <span className="text-base font-normal text-muted-foreground">
                              {work.company}
                            </span>
                          </CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>{work.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{work.description}</p>
                          <ul className="space-y-2">
                            {work.responsibilities.map((responsibility, i) => (
                              <li key={i} className="text-sm flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 