import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Rohitaswa Singha | UI/UX Designer',
  description: 'UI/UX Designer, Graphic Designer & Creative Explorer. I design clean, functional digital experiences while learning and exploring design and technology.',
  keywords: ['UI/UX Design', 'Graphic Design', 'Product Design', 'Portfolio', 'Figma', 'Interface Design'],
  authors: [{ name: 'Rohitaswa Singha' }],
  creator: 'Rohitaswa Singha',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0f1729',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
