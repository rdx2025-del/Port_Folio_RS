"use client"

import { Search, PenTool, Palette, Play, RefreshCw } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Research",
    description: "Understanding the problem, users, and context through discovery and analysis.",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Wireframing",
    description: "Sketching ideas and creating low-fidelity layouts to explore solutions.",
    number: "02",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Crafting visual designs with attention to typography, color, and spacing.",
    number: "03",
  },
  {
    icon: Play,
    title: "Prototyping",
    description: "Building interactive prototypes to test flows and micro-interactions.",
    number: "04",
  },
  {
    icon: RefreshCw,
    title: "Iteration",
    description: "Refining designs based on feedback and continuous improvement.",
    number: "05",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-4 md:px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-wider uppercase text-muted-foreground">Process</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
            How I Work
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My design process is iterative and user-centered, focusing on understanding problems before jumping to solutions.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <span className="absolute -top-2 right-0 md:right-auto md:-top-4 text-[10px] font-mono text-primary/60">
                  {step.number}
                </span>
                
                {/* Icon container */}
                <div className="relative z-10 mb-4 p-4 rounded-xl bg-card border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Text */}
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
