"use client"

import React from "react"

import { useState } from "react"
import { Send, Mail, Linkedin, Instagram, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-wider uppercase text-muted-foreground">Contact</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold">
              {"Let's"} Create Something Together
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm"} always excited to connect with fellow designers, developers, and creative minds. Whether you have a project idea, feedback, or just want to say hi — {"I'd"} love to hear from you.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:rohitaswasingha@outlook.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">rohitaswasingha@outlook.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohitaswa-singha-b46ba4318/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a
                href="https://www.instagram.com/measuredwrath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </div>
                <span className="text-sm">Instagram</span>
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. {"I'll"} get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/30 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-secondary/30 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
