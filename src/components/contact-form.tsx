"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto max-w-md">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <Input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-3 -top-2.5 bg-muted px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Name
            </label>
          </div>
          <div className="mb-6 relative">
            <Input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-muted px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="mb-6 relative">
            <Textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="peer"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute left-3 -top-2.5 bg-muted px-1 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Message
            </label>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.div>
        </form>
      </div>
    </section>
  )
}

