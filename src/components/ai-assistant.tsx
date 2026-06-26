"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, Bot, User, RefreshCw, Sparkles, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  sender: "bot" | "user"
  text: string
  timestamp: Date
}

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

const suggestedPrompts = [
  "What are your core technical skills?",
  "Tell me about your work experience.",
  "What projects have you built?",
  "How can I contact or hire you?",
]

const responses = [
  {
    keys: ["skill", "technolog", "react", "next", "expo", "laravel", "vue", "backend", "frontend", "stack"],
    answer: "I am a Full Stack Developer. On the Frontend, I specialize in Next.js, React, Vue, and Tailwind CSS. For backend databases and APIs, I build secure services with Node.js/Express, Laravel, and GraphQL, paired with PostgreSQL, MySQL, MongoDB, Prisma, and Drizzle. I also develop cross-platform mobile apps with React Native/Expo."
  },
  {
    keys: ["experience", "work", "job", "tugza", "ahaz", "intern"],
    answer: "I have worked with two great tech firms: \n1. Tugza Innovations PLC (2024-2025) as a Full Stack Web & Mobile App Developer, where I delivered Next.js web applications and Expo mobile applications.\n2. Ahaz Platforms (2025) as a Laravel & Vue.js Intern, designing backend API schemas and crafting interactive frontend templates."
  },
  {
    keys: ["project", "portfolio", "github", "build", "code"],
    answer: "I've built several public projects. A few highlights:\n- Expo Authentication App (Offline support, Express/Prisma)\n- Student Registration System (React, Express, MongoDB)\n- Cloudinary File Uploader (Next.js 15, Tailwind)\n- E-Commerce Landing Page (React, Tailwind CSS)\n- Birthday Teller Telegram Bot (TypeScript, Grammy API)\nCheck out my 'Featured Projects' section to see source code links!"
  },
  {
    keys: ["contact", "hire", "email", "phone", "whatsapp", "telegram", "linkedin", "reach", "message"],
    answer: "I'd love to connect! You can reach me via:\n- Email: kiflomberihu@outlook.com\n- Phone: +251 937 409 088\n- Telegram: @brogrammer_kiflom\n- WhatsApp: +251 937 409 088\n- LinkedIn: linkedin.com/in/kiflom-berihu\nOr simply scroll down and use the Contact Form on this page!"
  },
  {
    keys: ["education", "university", "degree", "school", "study", "student"],
    answer: "I am currently pursuing a Bachelor of Science (BSc) in Software Engineering at Mekelle University (2020 - Present) in Mekelle, Tigray, Ethiopia. I focus on software design patterns, data structures, database design, and systems engineering."
  },
  {
    keys: ["who", "are", "you", "name", "kiflom"],
    answer: "I'm Kiflom Berihu Abay, a software engineering student and full-stack developer. I love crafting clean, high-performance web and mobile apps with modern user interfaces. Feel free to explore my background here!"
  },
  {
    keys: ["hello", "hi", "hey", "greet"],
    answer: "Hello there! I am Kiflom's AI Portfolio Assistant. Ask me anything about Kiflom's technical skills, professional work experience, projects, or how to get in touch!"
  }
]

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hi! I am Kiflom's AI Portfolio Assistant. How can I help you learn more about his developer skills and achievements today?",
          timestamp: new Date(),
        },
      ])
    }
  }, [messages])

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      sender: "user",
      text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate chatbot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(text)
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1200)
  }

  const generateBotResponse = (query: string): string => {
    const cleanQuery = query.toLowerCase().trim()
    
    // Search responses for keyword match
    for (const res of responses) {
      const match = res.keys.some((key) => cleanQuery.includes(key))
      if (match) {
        return res.answer
      }
    }

    return "I'm not fully sure about that specific query, but Kiflom is highly adaptable and loves learning new technologies! For specific inquiries, you can email him at kiflomberihu@outlook.com or reach out via Telegram @brogrammer_kiflom."
  }

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chat history cleared! Ask me anything about Kiflom's skills, experience, or projects.",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 pointer-events-auto"
            onClick={onClose}
          />

          {/* Chat drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-card/95 border-l border-border/80 dark:border-border/20 shadow-2xl flex flex-col z-50 pointer-events-auto backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-full bg-primary/10 text-primary animate-pulse">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base flex items-center gap-1.5">
                    Portfolio AI Assistant
                  </h3>
                  <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Online
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={clearChat}
                  title="Clear Chat"
                >
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-purple-600/10 text-purple-600 dark:text-purple-400"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  
                  <div
                    className={`p-3.5 rounded-2xl text-xs sm:text-sm shadow-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted/80 text-foreground rounded-tl-none border border-border/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 max-w-[80%] mr-auto">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-muted/80 border border-border/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2 pt-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Suggested Topics
                </p>
                <div className="flex flex-col gap-1.5">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left text-xs px-3 py-2 rounded-xl bg-card border border-border/80 dark:border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-foreground"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-4 border-t border-border/50 bg-background/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }}
                className="flex items-center gap-2"
              >
                <Input
                  type="text"
                  placeholder="Ask me something about Kiflom..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 text-xs sm:text-sm bg-background border-border/80 dark:border-border/30 focus-visible:ring-primary rounded-xl"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className="rounded-xl flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground h-9 w-9 sm:h-10 sm:w-10"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
