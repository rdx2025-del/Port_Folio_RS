import { Linkedin, Mail, Instagram } from "lucide-react"

const socialLinks = [
  {
    href: "mailto:rohitaswasingha@outlook.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/rohitaswa-singha-b46ba4318/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/measuredwrath/",
    icon: Instagram,
    label: "Instagram",
  },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center">
              <img 
                src="/images/rs-logo.png" 
                alt="RS Logo" 
                className="h-10 w-10 object-contain invert"
              />
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              UI/UX Designer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Rohitaswa Singha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
