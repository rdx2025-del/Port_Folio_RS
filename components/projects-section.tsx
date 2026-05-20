"use client"

import { ArrowUpRight, Layers, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Rangrez Website Redesign",
    icon: Globe,
    problem: "The existing fest website was outdated, cluttered, and failed to capture the energy of a college cultural event.",
    approach: "Conducted user research with students, created wireframes focusing on event discovery, and designed a vibrant yet clean interface that maintains usability.",
    tools: ["Figma", "Canva"],
    outcome: "A concept redesign featuring improved navigation, event categorization, and a modern visual identity that better represents student culture.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    link: undefined,
  },
  {
    title: "SORA Website Redesign",
    icon: Smartphone,
    problem: "Existing productivity apps felt overwhelming with features, making simple task management unnecessarily complex.",
    approach: "Focused on minimalism and clarity. Designed around the core loop of adding, organizing, and completing tasks with zero friction.",
    tools: ["Figma", "Affinity"],
    outcome: "A clean mobile app concept with intuitive gestures, thoughtful micro-interactions, and a calming color palette to reduce cognitive load.",
    gradient: "from-primary/15 via-primary/5 to-transparent",
    link: "https://www.figma.com/proto/pNWTiGsxYzHWgpZE5lLGId/Workplace?node-id=824-33&p=f&viewport=-2298%2C-582%2C0.24&t=7aU7HfiXQ3scBBsh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=824%3A33&page-id=0%3A1&show-proto-sidebar=1",
  },
  {
    title: "Startup Landing Page",
    icon: Layers,
    problem: "Imaginary SaaS startup needed a landing page that clearly communicates value proposition and drives conversions.",
    approach: "Studied high-converting landing pages, structured content hierarchy for scanning, and designed compelling visual storytelling.",
    tools: ["Figma", "Canva"],
    outcome: "A conversion-focused landing page concept with clear CTAs, trust signals, and responsive design across all breakpoints.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    link: undefined,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-wider uppercase text-muted-foreground">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            Concept Case Studies
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personal projects and concept designs that showcase my design thinking and problem-solving approach.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="shrink-0 p-3 rounded-xl bg-primary/10 text-primary w-fit">
                    <project.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all cursor-pointer" />
                        </a>
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Problem</h5>
                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Approach</h5>
                        <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground italic">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
