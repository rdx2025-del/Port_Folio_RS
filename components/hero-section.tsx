"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-6 pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.12_185_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.72_0.12_185_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col gap-6">
          {/* Tag line */}
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm tracking-wide uppercase">Creative Explorer</span>
          </div>

          {/* Main heading - Arsenica inspired bold modern font */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-balance">
            Rohitaswa
            <br />
            <span className="text-primary">Singha</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            ECE Engineer | UI/UX Designer | Graphic Designer | Creative Explorer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            I design clean, functional digital experiences while learning and exploring design and technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="group">
              <a href="#contact">
                Interested? Wanna Collab?
                <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group bg-transparent">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
