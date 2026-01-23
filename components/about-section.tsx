import { Lightbulb, Target, Zap } from "lucide-react"

const highlights = [
  {
    icon: Target,
    title: "Focused",
    description: "Dedicated to mastering UI/UX and product design fundamentals",
  },
  {
    icon: Lightbulb,
    title: "Curious",
    description: "Always exploring new tools, techniques, and design trends",
  },
  {
    icon: Zap,
    title: "Driven",
    description: "Turning ideas into tangible, well-crafted experiences",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm tracking-wider uppercase text-muted-foreground">About</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Main text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold leading-snug text-balance">
              A growing designer focused on creating meaningful digital experiences
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm"} Rohitaswa, a designer at the beginning of an exciting journey into the world of UI/UX and product design. While I may not have years of industry experience, what I bring is genuine passion, dedication to craft, and an insatiable curiosity for learning.
              </p>
              <p>
                My approach is simple: understand the problem, explore solutions with an open mind, and execute with attention to detail. {"I'm"} constantly absorbing new knowledge, practicing my skills, and pushing myself to create work {"I'm"} proud of.
              </p>
              <p>
                Every project is an opportunity to learn something new and grow as a designer. {"I'm"} here to prove that enthusiasm and hard work can create great things.
              </p>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
