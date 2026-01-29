'use client'

import { ArrowRight, Mail } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 bg-background min-h-screen flex items-center">
      <div className="w-[90%] 2xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side - Video (70%) */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-teal-600 via-purple-600 to-purple-900 shadow-2xl">
              {/* Placeholder for video - you can replace with actual video */}
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://videos.pexels.com/video-files/18069247/18069247-hd_1920_1080_30fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right side - Content (30%) */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Where Bold Ideas Meet Big Results
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed">
              Quick deadlines? No problem. Our team transforms bold concepts into standout Ramadan videos that deliver real results.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity group">
              GET IN TOUCH
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">250+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">25+</p>
                <p className="text-sm text-gray-500">Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-sm text-gray-500">Years in the Industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
