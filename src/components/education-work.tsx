"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    duration: "2024 - Present",
    location: "Mekelle, Ethiopia",
    description: "Working as a Full Stack Developer at a technology innovation company, building web and mobile solutions using Next.js, MERN stack, and Expo framework.",
    responsibilities: [
      "Developing responsive web applications",
      "Creating cross-platform mobile apps",
      "Client consultation and project management"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
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

          {/* Work Experience Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            {workData.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
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
        </div>
      </div>
    </section>
  )
} 