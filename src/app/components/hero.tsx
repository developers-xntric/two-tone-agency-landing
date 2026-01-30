"use client";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative 2xl:pt-36 pt-28 pb-20 flex items-center">
      <div className="2xl:w-[100%] w-[90%] 2xl:max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 items-center">
          {/* Left side - Video (70%) */}
          <div className="w-full">
            <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-teal-600 via-purple-600 to-purple-900 shadow-2xl">
              {/* Placeholder for video - you can replace with actual video */}
              <video src={"/video.mp4"} autoPlay muted loop className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right side - Content (30%) */}
          <div className="w-full space-y-6">
            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Where Bold Ideas Meet Big Results
            </h1>

            {/* Description */}
            <p className="text-white text-base leading-relaxed">
              Quick deadlines? No problem. Our team transforms bold concepts
              into standout Ramadan videos that deliver real results.
            </p>

            {/* CTA Button */}
            <button className="inline-flex bg-[#CAED63] text-black items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity group cursor-pointer">
              GET IN TOUCH
              <div className="bg-white rounded-full p-2">
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </button>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-8 items-center place-items-center">

              {/* Item 1 */}
              <div className="relative space-y-1  w-full">
                <p className="text-3xl font-bold text-[#CAED63] pb-3">250+</p>
                <p className="text-sm text-white border-t border-[#FFFFFF33] pt-2">
                  Projects Completed
                </p>

                {/* Separator */}
                {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#FFFFFF33]" /> */}
              </div>

              {/* Item 2 */}
              <div className="relative space-y-1 text-center w-full">
                <p className="text-3xl font-bold text-[#CAED63] pb-3">25+</p>
                <p className="text-sm text-white border-t border-[#FFFFFF33] pt-2">
                  Clients
                </p>

                {/* Separator */}
                {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#FFFFFF33]" /> */}
              </div>

              {/* Item 3 */}
              <div className="space-y-1 text-center w-full">
                <p className="text-3xl font-bold text-[#CAED63] pb-3">5+</p>
                <p className="text-sm text-white border-t border-[#FFFFFF33] pt-2">
                  Years in the Industry
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
