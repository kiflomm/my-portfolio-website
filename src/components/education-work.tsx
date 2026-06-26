"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from "lucide-react"

interface TimelineItem {
  type: "education" | "work"
  title: string
  subtitle: string
  duration: string
  location: string
  description: string
  details: string[]
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Laravel and Vue.js Developer Intern",
    subtitle: "Ahaz Platforms",
    duration: "March 2025 - June 2025",
    location: "Mekelle, Tigray, Ethiopia",
    description: "Developed and maintained responsive web applications, integrating secure RESTful APIs, optimizing front-end performance in Vue.js, and implementing backend authorization protocols using Laravel.",
    details: [
      "Crafted dynamic front-end views using Vue.js Composition API",
      "Constructed secure relational database migrations and backend business rules with Laravel",
      "Collaborated with project managers and designers to execute sprint objectives"
    ]
  },
  {
    type: "work",
    title: "Mobile App and Full Stack Web Developer",
    subtitle: "Tugza Innovations P.L.C",
    duration: "June 2024 - June 2025",
    location: "Mekelle, Tigray, Ethiopia",
    description: "Built mobile applications and full stack web solutions. Utilized Next.js for high-SEO web targets and the MERN stack with Expo for cross-platform mobile app deployments.",
    details: [
      "Authored custom cross-platform applications in React Native / Expo",
      "Built landing pages and management dashboards in Next.js & Tailwind CSS",
      "Handled client consultation, gathering requirements and setting deployment milestones"
    ]
  },
  {
    type: "education",
    title: "BSc in Software Engineering",
    subtitle: "Mekelle University",
    duration: "2020 - Present",
    location: "Mekelle, Ethiopia",
    description: "Currently completing a Bachelor's degree in Software Engineering. Deepening knowledge in system design, algorithms, databases, networking, and software engineering management methodologies.",
    details: [
      "Acquired solid engineering foundations in data structures and object-oriented design",
      "Led university project groups for software prototyping and full stack implementations",
      "Maintained a high level of academic curiosity and technical adaptability"
    ]
  }
]

export function EducationWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress for the timeline line drawing animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  })

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-36 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Journey & Milestones
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A chronological look at my academic foundations and professional software engineering experience.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">
          
          {/* Base Background Track Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[3px] bg-muted/60 dark:bg-muted/15 transform -translate-x-1/2" />

          {/* Active Animated Path-Drawing Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[3px] bg-gradient-to-b from-primary via-purple-500 to-cyan-500 transform -translate-x-1/2 origin-top rounded-full"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0
              
              return (
                <div 
                  key={`${item.subtitle}-${idx}`} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-10 h-10 rounded-full border-4 border-background flex items-center justify-center shadow-lg transition-colors duration-300 ${
                        item.type === "work" 
                          ? "bg-purple-600 text-white" 
                          : "bg-cyan-500 text-white"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="h-4.5 w-4.5" />
                      ) : (
                        <GraduationCap className="h-4.5 w-4.5" />
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer or Side Padding to push content */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12 md:pl-0" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 45 : -45, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full md:w-1/2 md:px-12 pl-12 md:pl-0 mt-3 md:mt-0"
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-8 relative hover:border-primary/20 dark:hover:border-primary/45 transition-all duration-300">
                      
                      {/* Floating Badge (Work / Education) */}
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
                        item.type === "work"
                          ? "bg-purple-600/10 text-purple-600 dark:text-purple-400 border border-purple-500/25"
                          : "bg-cyan-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25"
                      }`}>
                        {item.type === "work" ? "Professional" : "Academic"}
                      </span>

                      {/* Header details */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-primary/80 mb-4">
                        {item.subtitle}
                      </h4>

                      {/* Location & Time details */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground/80" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-muted-foreground/80" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Brief overview */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Bullet metrics/achievements */}
                      <div className="space-y-2 pt-2 border-t border-border/40">
                        {item.details.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                            <Award className="h-4 w-4 text-primary/70 mt-0.5 flex-shrink-0" />
                            <span className="leading-normal">{bullet}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}