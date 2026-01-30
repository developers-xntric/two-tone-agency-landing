'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'All Tiger Holidays',
    image: '/images/al-tayer.png',
    accordionDescription: 'Al Tayer Holidays had strong brand recognition, but many potential customers perceived it as exclusive and high-end only. This misconception meant people overlooked key benefits such as free consultations and fully customized travel itineraries.',
    challenge: 'Al Tayer Holidays had the name, but not the approachability people assumed it was all high-end, missing out on perks like free consultations and tailor-made itineraries. Time to bust that myth!',
    solution: 'Sales doubled (yep, you read that right)! Enquiries skyrocketed, the follower count surged, and suddenly, Al Tayer Holidays wasn’t just known it was trusted and booked! ',
    plotTwist: 'We ditched the usual “package deal” posts and crafted content that made travel feel exciting and accessible. Think dreamy destinations, expert travel tips, and reels showcasing must-visit spots for sightseeing and foodies alike! Plus, we made sure customers got the full scoop—transparent pricing and all the awesome perks included.'
  },
  {
    id: 2,
    title: 'Shark Truck on Demand',
    image: '/images/image.png',
    accordionDescription: 'Shark Truck faced fierce competition in the food delivery market and struggled to differentiate itself. Despite offering premium quality food, the brand was perceived as just another delivery app, losing market share to better-positioned competitors.',
    challenge: 'A food delivery startup needed to differentiate themselves in a crowded market with premium positioning.',
    solution: 'We created a bold, modern interface that emphasized speed and quality. The redesign resulted in 3x increase in order volume and expanded into 5 new cities.',
    plotTwist: 'Real-time tracking with gamification features kept users engaged and increased repeat orders by 65%.'
  },
  {
    id: 3,
    title: 'Kalyan Bikes',
    image: '/images/image.png',
    accordionDescription: 'Kalyan Bikes struggled to connect with younger riders who viewed the brand as outdated and traditional. Despite producing quality motorcycles, the brand failed to communicate its innovation and performance capabilities to the demographic it needed to reach.',
    challenge: 'A motorcycle brand needed to reach younger audiences while maintaining premium brand positioning.',
    solution: 'We developed an immersive digital experience with 3D bike configurators and virtual showrooms, resulting in 2.5x more qualified leads.',
    plotTwist: 'Community features like ride-sharing and events transformed users into brand ambassadors.'
  },
  {
    id: 4,
    title: 'Thar Airways',
    image: '/images/image.png',
    accordionDescription: 'Thar Airways faced a complex booking process that frustrated customers and led to high cart abandonment. The platform was desktop-centric, making it difficult for users to search and book flights on mobile devices, missing a critical market segment.',
    challenge: 'An airline needed a mobile-first booking experience that simplified complex flight options.',
    solution: 'We streamlined the booking process and added smart filters. Mobile bookings increased by 4x, and average booking time dropped by 60%.',
    plotTwist: 'Loyalty program integration with personalized offers increased customer lifetime value by 140%.'
  },
  {
    id: 5,
    title: 'Yash Bhaji',
    image: '/images/image.png',
    accordionDescription: 'Yash Bhaji was perceived as an old-fashioned brand, unable to attract younger customers despite its authentic recipes and quality ingredients. The outdated branding made it invisible in the modern food market where online presence is crucial for growth.',
    challenge: 'A traditional food brand needed to modernize their image without losing authentic appeal.',
    solution: 'We created a contemporary design system that honored heritage while embracing modern aesthetics, resulting in 180% increase in online orders.',
    plotTwist: 'Educational content about traditional recipes increased brand authority and organic traffic by 220%.'
  },
  {
    id: 6,
    title: 'Artistry by Malabar',
    image: '/images/image.png',
    accordionDescription: 'Artistry by Malabar faced overwhelming product choices that left customers confused and overwhelmed. Without proper guidance, customers struggled to find products matching their skin type, resulting in poor conversion rates and frequent returns.',
    challenge: 'An e-commerce beauty brand struggled with product discovery and customer retention.',
    solution: 'We implemented personalized beauty quizzes and AR try-on features, increasing conversion rates by 156%.',
    plotTwist: 'Community-driven user-generated content campaigns increased social engagement by 310%.'
  },
  {
    id: 7,
    title: 'The Indian Oven',
    image: '/images/image.png',
    accordionDescription: 'The Indian Oven struggled to manage orders across multiple delivery platforms and physical locations. Inconsistent menus, inventory conflicts, and operational inefficiencies led to customer dissatisfaction and lost revenue opportunities.',
    challenge: 'A restaurant chain needed a unified digital presence across multiple locations and delivery platforms.',
    solution: 'We built a central platform with real-time inventory, menu synchronization, and integrated ordering, increasing efficiency by 85%.',
    plotTwist: 'Subscription meal plans became a major revenue stream, contributing 28% of total income.'
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Results That Turn Heads
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Our clients are nailing new milestones and elevating real solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accordion - Left Side */}
          <div className="lg:col-span-1 space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border border-slate-800 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleProject(project)}
                  className={`w-full text-left p-4 transition-all duration-300 flex items-center justify-between ${
                    selectedProject.id === project.id
                      ? 'bg-lime-400 text-slate-950'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
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
                  <div className="bg-slate-900 border-t border-slate-800 p-4 animate-in fade-in duration-300">
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
                <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                  Challenge
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              {/* Plot Twist */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                  The Plot Twist?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.plotTwist}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
              <h3 className="text-sm font-semibold text-lime-400 uppercase tracking-wide">
                The Solution
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
