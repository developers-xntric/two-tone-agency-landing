'use client'

import { Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="w-[90%] 2xl:max-w-[1440px] h-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="text-accent">two</span>
          <br />
          <span className="text-accent">tone</span>
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
          Get in touch
          <Mail size={18} />
        </button>
      </div>
    </nav>
  )
}
