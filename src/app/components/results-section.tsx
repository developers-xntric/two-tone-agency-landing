'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Al Tayer Holidays',
    image: '/images/al-tayer.png',
    accordionDescription: 'Al Tayer Holidays had strong brand recognition, but many potential customers perceived it as exclusive and high-end only. This misconception meant people overlooked key benefits such as free consultations and fully customized travel itineraries.',
    challenge: 'Al Tayer Holidays had the name, but not the approachability people assumed it was all high-end, missing out on perks like free consultations and tailor-made itineraries. Time to bust that myth!',
    solution: 'Sales doubled (yep, you read that right)! Enquiries skyrocketed, the follower count surged, and suddenly, Al Tayer Holidays wasn’t just known—it was trusted and booked! ',
    plotTwist: 'We ditched the usual “package deal” posts and crafted content that made travel feel exciting and accessible. Think dreamy destinations, expert travel tips, and reels showcasing must-visit spots for sightseeing and foodies alike! Plus, we made sure customers got the full scoop—transparent pricing and all the awesome perks included.'
  },
  {
    id: 2,
    title: 'Shahn Truck on Demand',
    image: '/images/shahn.png',
    accordionDescription: 'Shahn offered a strong on-demand logistics platform, but increasing visibility and driving app downloads among the right audience was the primary challenge. The objective was clear: convert awareness into installs.',
    challenge: 'Shahn had an awesome platform, but getting users to see it, love it, and download it was the real challenge. The goal? More downloads! The hurdle? Making the right audience care enough to click.',
    solution: 'We cranked up the energy with a high-impact, hyper-targeted campaign teaming up with a hit radio station to blast Shahn’s message far and wide. Then came the golden ticket a giveaway so tempting, it set social media on fire! Add in some smartly placed ads, and boom Shahn was everywhere.',
    plotTwist: 'This wasn’t just a campaign it was a movement! Shahn went from “just another app” to a must-have, sparking excitement, driving downloads, and making waves in the digital space. '
  },
  {
    id: 3,
    title: 'Kalyan Silks',
    image: '/images/kalyan.png',
    accordionDescription: 'Kalyan Silks is a heritage brand with a strong legacy, but the challenge was to translate its traditional appeal into a contemporary digital presence that resonated with a younger, style-conscious audience.',
    challenge: 'After three decades, Thai Airways was making a thunderous return to the Jeddah-Bangkok route—but a simple flight announcement wouldn’t cut it. The mission? Shock the world, grab their attention, and make them feel the rush of this long-awaited comeback.',
    solution: 'We didn’t just launch a campaign—we unleashed a cinematic spectacle. With high-octane CGI visuals, we catapulted viewers into the heart of Thailand, hitting them with explosive adventure, unstoppable energy, and jaw-dropping luxury.',
    plotTwist: 'This wasn’t just an announcement—it was a full-blown comeback with power and attitude. After years off the map, Thai Airways stormed back onto the scene, and the world had no choice but to watch'
  },
  {
    id: 4,
    title: 'Thai Airways',
    image: '/images/thai.png',
    accordionDescription: 'After a gap of more than three decades, Thai Airways was reintroducing the Jeddah–Bangkok route. The challenge was to make the return impossible to ignore and create excitement beyond a standard route announcement.',
    challenge: 'Shahn had an awesome platform, but getting users to see it, love it, and download it was the real challenge. The goal? More downloads! The hurdle? Making the right audience care enough to click.',
    solution: 'We didn’t just launch a campaign—we unleashed a cinematic spectacle. With high-octane CGI visuals, we catapulted viewers into the heart of Thailand, hitting them with explosive adventure, unstoppable energy, and jaw-dropping luxury.',
    plotTwist: 'This wasn’t just an announcement—it was a full-blown comeback with power and attitude. After years off the map, Thai Airways stormed back onto the scene, and the world had no choice but to watch'
  },
  {
    id: 5,
    title: 'Yusuf Bhai',
    image: '/images/yusuf.png',
    accordionDescription: 'While Yusuf Bhai had strong name recognition, the challenge was to build an independent digital identity for the fragrance page one that could attract, engage, and retain followers on its own.',
    challenge: 'Get the fragrance page to shine on its own—not just ride the wave of Yusuf Bhai’s popularity!',
    solution: 'Hit them with can’t-scroll-past content! Think snappy, engaging posts that make people stop, sniff (virtually), and stay because when the content smells this good, they’ll keep coming back for more!',
    plotTwist: '20K+ new followers in just two months!  Engagement went through the roof! The fragrance page finally had its own identity no longer just riding the Yusuf Bhai wave, but standing tall, smelling irresistibly good, and keeping followers hooked!'
  },
  {
    id: 6,
    title: 'Artistry by Malabar',
    image: '/images/malabar.png',
    accordionDescription: 'Artistry, Malabar’s exclusive diamond jewelry sub-brand, was launching a new collection with a clear challenge: establish a distinct identity that stood apart from Malabar’s wider portfolio and resonated as a luxury brand in its own right.',
    challenge: 'Malabar was launching a dazzling new collection under Artistry, its exclusive diamond jewelry sub-brand. The mission? Make it shine on its own—not lost in the glittering sea of Malabar’s many offerings.',
    solution: 'We didn’t just showcase diamonds—we reimagined them. The approach? Whimsical. Luxurious. Unapologetically elegant. We crafted a visual narrative unlike anything seen in the UAE market, transforming Artistry into a world of dreamlike opulence where every piece told a story of grace and grandeur.',
    plotTwist: 'A campaign that stood out, setting apart in a league of its own. A brand presence that oozed exclusivity, sophistication, and luxury. A visual identity so striking, it turned heads and captured hearts.This wasn’t just a collection launch it was a statement. Artistry wasn’t just seen, it was felt, leaving a lasting impression that defined diamonds done differently.'
  },
  {
    id: 7,
    title: 'The Indian Oven',
    image: '/images/indian.png',
    accordionDescription: 'The Indian Oven aimed to connect with a local Arab audience while staying true to its authentic Indian menu. The challenge was to make the cuisine more approachable without altering the food itself.',
    challenge: 'The Indian Oven wanted to woo local Arabs, but with an all-Indian menu, the question was how do you spice things up without changing the recipe?',
    solution: 'Make takeout so easy, even your lazy cousin couldn’t mess it up! We hyped up the zero-effort factor—containers that go straight from bag to heat to feast. Perfect for Majlis gatherings, last-minute dinners, or impressing guests without lifting a finger.',
    plotTwist: 'A snappy, fun video proving that even reheating food can be a flex! No extra dishes, no stress—just hot, delicious Indian flavors ready to steal the show at picnics, parties, or that one friend’s place who never cooks. Because great food should come easy and now it does!'
  }
]

export default function ResultsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [expandedId, setExpandedId] = useState<number | null>(projects[0].id)

  const toggleProject = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setExpandedId(expandedId === project.id ? null : project.id)
  }

  return (
    <section className="w-full bg-slate-950 text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="w-[80%] 2xl:max-w-[1250px] mx-auto">
        {/* Header */}
        <div className="mx-auto w-[50%]">
  {/* Header */}
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
     Results That Turn Heads
    </h2>
    <p className="text-slate-400 text-base md:text-lg">
      Our clients are hitting new milestones, driving solid ROI, and standing out from the crowd.
    </p>
  </div>
</div>


        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accordion - Left Side */}
          <div className="lg:col-span-1 space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`border-b ${project.id === 1 ? 'border-t' : ''} border-slate-800 overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => toggleProject(project)}
                  className={`w-full text-left p-4 transition-all duration-300 flex items-center justify-between ${
                    selectedProject.id === project.id
                      ? 'bg-transparent text-white'
                      : 'bg-transparent text-white hover:bg-transparent'
                  }`}
                >
                  <span className="font-medium text-sm md:text-base">
                    {project.title}
                  </span>
                  <div className="w-4 h-4 flex-shrink-0 relative">
                    <Image
                      src={expandedId === project.id ? '/images/active-accordan.png' : '/images/unactive -accordan.png'}
                      alt="accordion icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedId === project.id && (
                  <div className="border-t border-slate-800 py-4 pr-4 animate-in fade-in duration-300">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.accordionDescription}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image - Right Side */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content Grid for expanded project */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Challenge */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  Challenge
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Plot Twist */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-white tracking-wide">
                  The Plot Twist?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.plotTwist}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
              <h3 className="text-sm font-semibold tracking-wide">
                The Game Plan?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
