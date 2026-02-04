"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Delmonte",
    accordionDescription:
      "TROPICAL BUZZ – A Shelf-to-Social Rollout for Del Monte’s Star Pineapple",
    challenge:
      "Creating buzz for a premium fruit in a competitive market takes more than just shelf space—it takes influence. Del Monte set out to enhance product visibility and drive in-store traffic for HoneyGlow Pineapple across MENA, and we made sure the region took notice.",
    solution:
      "We harnessed the power of influencer marketing, crafting a campaign that blended authenticity with impact:​ Partnered with top influencers across MENA to create engaging Instagram Stories and a high-impact Reel.​ Highlighted HoneyGlow Pineapple’s uniqueness, sparking organic user-generated content.​ Extended reach with influencer-led dark ads in KSA & UAE, amplifying both paid and organic engagement.​",
    plotTwist:
      "From social feeds to store shelves, HoneyGlow Pineapple became a talking point. The campaign drove high engagement, strengthened brand affinity, and reinforced Del Monte’s position in the premium fruit segment.​",
    media: {
      type: "single-video",
      src: "/case-studies/1.webm",
    },
  },
  {
    id: 2,
    title: "Delmonte",
    accordionDescription:
      "NUTRITION MEETS NARRATIVE – Driving Relevance & Recall for Del Monte Across Platform ",
    challenge:
      "Our objective was set to craft a holistic digital strategy that integrates social media, influencer collaborations, and paid media to enhance brand visibility and consumer engagement.",
    solution:
      "Through dynamic social media management, we curated engaging content, trend-driven campaigns, and interactive formats that foster community engagement. Our precise digital strategy aligns with business objectives, optimizing paid media campaigns with clear KPIs to maximize reach and conversions. Additionally, high-quality product shoots and strategic brand alliances elevate Del Monte’s positioning, reinforcing its fresh and healthy brand identity across all touchpoints.",
    plotTwist:
      "This comprehensive approach has significantly amplified Del Monte’s digital footprint, leading to higher audience engagement, stronger brand recall, and increased consumer trust ",
    media: {
      type: "single-video",
      src: "/case-studies/2.webm", 
    },
  },
  {
    id: 3,
    title: "Jollibee Dips Of Joy",
    accordionDescription:
      "Bringing Bold Flavors to a Beloved Classic to Reach Across Cultures",
    challenge:
      "Jollibee wanted to make its iconic original Chickenjoy even more exciting and appealing to a wider audience. To do this, we suggested to launch four new sauces, each carefully crafted to suit a variety of tastes and bring something new to the table for people from all walks of life.",
    solution:
      "We started by exploring popular flavors across cultures, then brought these sauces to life with unique names, perfected recipes, and irresistible visuals. The hero video focused on the joy of eating - showing moments like dipping, dunking, and swirling - emphasizing not just the sauces, but the emotions they evoke. Each scene showcased how these new sauces elevate Jollibee’s Chickenjoy experience.",
    plotTwist:
      "The approach brought forth awareness for the launch of the new sauces thus enhancing the Original Chickenjoy consumption experience. The wide variety of sauces also helped the brand reach out to newer target audiences and expose them to the flavors of Jollibee.",
    media: {
      type: "single-video",
      src: "/case-studies/3.webm", 
    },
  },
  {
    id: 4,
    title: "Jolliburger by Jollibee",
    accordionDescription:
      "Bringing Bold Flavors to a Beloved Classic to Reach Across Cultures",
    challenge:
      "Fried chicken favorites, Jollibee, was introducing their maiden beef product with the Jolliburger – a cheesy, meaty treat for the tastebuds. While this would intrigue new consumers it would stir interesting conversation on the internet. Typically, brands keep away from online feuds. But we used it to our advantage on a platform that is always lit with debates and brawls – live game streams. ",
    solution:
      "We leveraged our 1,000-game streamer network and in-house game streaming service, hacking into their live game streams with non-skippable, non-intrusive customized creatives on game streams, we enticed viewers to try the Jolliburger on Twitch. Fans who interacted we promised the opportunity to win a yearlong supply of Jolliburgers and party vouchers.  We also onboarded influencers to act out their ‘beef with Jollibee’ using their own style. This got picked up by Lovin Dubai and other PR channels. ",
    plotTwist:
      "We received 180+ entries, 850k live stream views on gaming, 5200+ clicks, and a CTR of 5.28%, the kind the brand had never seen before.    ",
    media: {
      type: "single-video",
      src: "/case-studies/4.webm",
    },
  },
  {
    id: 5,
    title: "Bayara / Gym Foods",
    accordionDescription:
      "ROOTED IN TRADITION, DRIVEN BY DATA – Performance-Led Growth for Bayara Across MENA",
    challenge:
      "To elevate brand awareness, drive engagement, and achieve performance-driven KPIs across key platforms like Facebook, Instagram, LinkedIn, and YouTube.",
    solution:
      "Through a data-driven social media strategy, we crafted compelling content, interactive campaigns, and targeted paid media initiatives to amplify Bayara’s reach. By leveraging platform-specific engagement tactics, we optimized content formats, influencer collaborations, and strategic ad placements, ensuring maximum resonance with the audience.",
    plotTwist:
      "Our efforts surpassed engagement and reach KPIs, resulting in an impressive 71% and 98% QoQ growth in 2021. By continuously refining content, audience targeting, and engagement strategies, we successfully positioned Bayara as a dominant brand in the region, reinforcing its digital leadership and community connection.",
    media: {
      type: "two-images-one-video",
      leftTopImage: "/case-studies/5-upper.png",
      leftBottomImage: "/case-studies/5-lower.png",
      videoSrc: "/case-studies/5-right.webm",
    },
  },

  {
    id: 7,
    title: "Al Foah (Date Crown)",
    accordionDescription:
      "ROOTED IN TRADITION, DRIVEN BY CONTENT – A Regional Brand Storytelling Campaign for Al Foah",
    challenge:
      "To enhance brand storytelling, increase product awareness, and drive consumer engagement through a visually compelling and strategically driven approach.",
    solution:
      "Through a content-driven and data-backed social strategy, we had successfully elevated Al Foah’s digital footprint, increasing brand engagement, audience reach, and product visibility. Our localized approach has not only strengthened consumer connection but also reinforced Al Foah’s position as a leading brand in the region.",
    plotTwist:
      "To bring Al Foah’s brand vision to life, we orchestrated high-quality photo shoots, develops engaging animated content, and executes targeted paid media campaigns. By combining authentic product storytelling with culturally relevant narratives, we ensure Al Foah’s social presence remains dynamic, engaging, and visually distinctive.",
    media: {
      type: "two-videos-30-70",
      leftVideo: "/case-studies/6-left.webm",
      rightVideo: "/case-studies/6-right.webm",
    },
  },
  {
    id: 8,
    title: "Coffee Planet",
    accordionDescription: "",
    challenge:
      "Transform Coffee Planet from a coffee producer into a holistic specialty coffee brand with a compelling narrative: Everyone’s Cup of Specialty.",
    solution:
      "With just four days to roll out the rebrand, we made impact our priority. A bold corporate manifesto and a sharp brand narrative set the stage. We brought Coffee Planet’s full value chain to life through: High-fidelity corporate films & brand videos Product photoshoots & visual storytelling A targeted go-to-market strategy We expanded the brand’s ecosystem with Campus, an incubator for baristas, and Refresh, an office coffee solution cementing Coffee Planet’s role in the specialty coffee space.",
    plotTwist:
      "The rebrand resonated with coffee lovers and business partners alike, elevating Coffee Planet’s market presence. TwoTone’s ability to execute high-quality campaigns at speed proved why we’re the go-to strategic branding partner.",
    media: {
      type: "single-video",
      src: "/case-studies/7.webm", 
    },
  },
  {
    id: 9,
    title: "NAI",
    accordionDescription: "",
    challenge:
      "Design an aesthetically beautiful, culturally rich and nostalgia-evoking video that promote Nai authenticity and natural goodness through its ingredients: hibiscus, pomegranate and rose water, positioning it as the ideal drink this Ramadan.",
    solution: "",
    plotTwist:
      'We hammered in on the term "fill me up" to play on the consumers subconscious, especially when combined with appetizing liquid shots that evoke the desired mouthwatering effect. This approach was strengthened even more by our use of Classical Arabic - a style no other beverage is using, and one that reflected off the brands authentic heritage in such an intrinsically Arabian month.  We drafted a poem, and our poetic tone of voice captured the sophisticated and artistic essence of previous brand communications. The poem now becomes a manifesto for the brand and a springboard for future communication.  Our concept captured all aspects of the brief - embodying the Ramadan feel... showcasing the product ingredients... conveying goodness, generosity, nostalgia and the brands Arabian heritage... in a way that deeply speaks to the consumers heart and soul.',
    media: {
      type: "single-video",
      src: "/case-studies/8.webm", 
    },
  },
];

export default function ResultsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [expandedId, setExpandedId] = useState<number | null>(projects[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<
    "challenge" | "solution" | "plotTwist"
  >("challenge");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleProject = (project: any) => {
    setSelectedProject(project);
    setExpandedId(expandedId === project.id ? null : project.id);
  };

  const currentProject = projects[currentSlide];

  const renderMedia = (project: any) => {
    const commonVideoProps = {
      className: "w-full h-full object-cover",
    };

    const heightClass = "h-80 md:h-[480px]";

    switch (project.media.type) {
      case "single-video":
        return (
          <div className={`relative w-full  ${heightClass} overflow-hidden `}>
            <video
              loop
              autoPlay
              src={project.media.src}
              {...commonVideoProps}
              
            />
          </div>
        );

      case "two-videos-30-70":
        return (
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4">
            <div className="relative overflow-hidden">
              <video
                src={project.media.leftVideo}
                loop
                muted
                autoPlay
                {...commonVideoProps}
                className="w-full h-[300px] object-cover md:h-[480px]"
              />
            </div>
            <div className="relative overflow-hidden ">
              <video
                src={project.media.rightVideo}
                {...commonVideoProps}
                loop
                muted
                autoPlay
                className="w-full h-[300px] object-cover md:h-[480px]"
              />
            </div>
          </div>
        );

      case "two-images-one-video":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-40 md:h-56  overflow-hidden ">
                <Image
                  src={project.media.leftTopImage}
                  alt="Upper image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-40 md:h-56  overflow-hidden ">
                <Image
                  src={project.media.leftBottomImage}
                  alt="Lower image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden ">
              <video
                src={project.media.videoSrc}
                loop
                muted
                autoPlay
                className="w-full h-[300px] md:h-[465px] object-cover "
              />
            </div>
          </div>
        );

      default:
        return (
          <div
            className={`relative w-full ${heightClass} rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center text-white/40`}
          >
            No media available
          </div>
        );
    }
  };

  const hasSolution = selectedProject.solution?.trim().length > 0;

  return (
    <div className="relative">
      {/* Gradients */}
      <div className="hidden md:block absolute left-[-40%] top-60 w-[300px] lg:w-[800px] h-full pointer-events-none">
        <Image
          src="/left-gradient.png"
          alt="left"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="hidden md:block absolute right-[-35%] 2xl:right-[-42%] top-[-5%] w-[300px] lg:w-[800px] h-full pointer-events-none">
        <Image
          src="/right-gradient.png"
          alt="right"
          fill
          className="object-contain object-right"
        />
      </div>

      <section className="w-full text-white py-16 relative">
        <div className="w-[90%] md:w-[80%] 2xl:max-w-[1440px] 2xl:w-[85%] mx-auto relative z-10">
          {/* Header */}
          <div className="mx-auto 2xl:w-[50%]">
            <div className="mb-12 md:text-center">
              <h2 className="text-[25px] md:text-4xl 2xl:text-5xl font-normal mb-3 text-balance">
                Results That Turn Heads
              </h2>
              <p className="text-white text-base 2xl:text-lg tracking-wide">
                Our clients are hitting new milestones, driving solid ROI, and
                standing out from the crowd.
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-6">
            {renderMedia(currentProject)}

            <div className="space-y-3 px-2">
              <h3 className="text-2xl font-normal text-white tracking-wide">
                {currentProject.title}
              </h3>
              {currentProject.accordionDescription && (
                <p className="text-xs text-white/80 leading-relaxed tracking-wide">
                  {currentProject.accordionDescription}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 px-2">
              <button
                onClick={() => setActiveTab("challenge")}
                className={`py-3 px-2 text-sm font-normal tracking-wide rounded-lg transition-all ${
                  activeTab === "challenge"
                    ? "text-[#CAED63] underline"
                    : "text-white"
                }`}
              >
                Brief
              </button>

              {currentProject.id !== 9 && (
                <button
                  onClick={() => setActiveTab("solution")}
                  className={`py-3 px-2 text-sm font-normal tracking-wide rounded-lg transition-all ${
                    activeTab === "solution"
                      ? "text-[#CAED63] underline"
                      : "text-white"
                  }`}
                >
                  Execution
                </button>
              )}

              <button
                onClick={() => setActiveTab("plotTwist")}
                className={`py-3 px-2 text-sm font-normal tracking-wide rounded-lg transition-all ${
                  activeTab === "plotTwist"
                    ? "text-[#CAED63] underline"
                    : "text-white"
                }`}
              >
                Impact
              </button>
            </div>

            <div className="rounded-lg p-4 min-h-[150px] bg-black/30">
              <p className="text-sm text-white/80 leading-relaxed tracking-wide">
                {activeTab === "challenge" && currentProject.challenge}
                {activeTab === "solution" && currentProject.solution}
                {activeTab === "plotTwist" && currentProject.plotTwist}
              </p>
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === i ? "bg-[#CAED63] w-8" : "bg-white/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Accordion */}
            <div className="lg:col-span-1 space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`border-b ${project.id === 1 ? "border-t" : ""} border-[#DDDDDD] overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleProject(project)}
                    className={`w-full text-left pt-3 pb-4 flex items-center justify-between text-white`}
                  >
                    <span className="font-medium text-sm md:text-[20px]">
                      {project.title}
                    </span>
                    <div className="w-8 h-6 flex-shrink-0 relative">
                      <Image
                        src={
                          expandedId === project.id
                            ? "/images/active-accordan.png"
                            : "/images/unactive -accordan.png"
                        }
                        alt="accordion"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                  {expandedId === project.id &&
                    project.accordionDescription && (
                      <div className="border-t border-slate-800 py-4 pr-4 animate-in fade-in duration-300">
                        <p className="text-xs text-white/60 leading-relaxed tracking-wide">
                          {project.accordionDescription}
                        </p>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Content + Media */}
            <div className="lg:col-span-2 space-y-6 ">
              {renderMedia(selectedProject)}

              {hasSolution ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-normal text-white tracking-wide">
                        Brief
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-normal text-white tracking-wide">
                        Impact
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                        {selectedProject.plotTwist}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-normal text-white tracking-wide">
                      Execution
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                      {selectedProject.solution}
                    </p>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-normal text-white tracking-wide">
                      Brief
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-normal text-white tracking-wide">
                      Impact
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed tracking-wide">
                      {selectedProject.plotTwist}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
