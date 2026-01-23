"use client"

import { Palette, Layout } from "lucide-react"

const skillCategories = [
  {
    title: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Canva"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Focus Domains",
    icon: Layout,
    skills: ["UI/UX Design", "Interface Design", "Creative Coding"],
    color: "from-primary/15 to-transparent",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-wider uppercase text-muted-foreground">Skills</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Tools & Technologies
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of tools and skills {"I'm"} developing to create beautiful, functional digital experiences.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-foreground">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
