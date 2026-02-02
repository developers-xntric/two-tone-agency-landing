"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            clientName: "Shivangi Madan",
            clientRole: "Country Head of Marketing",
            clientImage: "/shivangi.png",
            quote: "Working with Two Tone Agency was a fantastic experience. Their thoughtful approach to gaming and social media marketing helped us connect with our audience in a fresh and engaging way. The team brought creativity, strategic insight, and a strong understanding of our brand’s goals, making the entire process seamless. The campaign delivered great results, and we appreciated their attention to detail and commitment to excellence.",
        },
        {
            id: 2,
            clientName: "Ketki Shah",
            clientRole: "Head of Marketing, Landmark Hospitality",
            clientImage: "/ketki.png",
            quote: "Partnering with Two Tone Agency on our social media mandate has been a smooth and effective experience. The team brings clarity to the process, consistency to the output, and just the right amount of creative push when needed. They've been reliable collaborators who understand both our brand tone and business goals.",
        },
        {
            id: 3,
            clientName: "Anup Kondakundi",
            clientRole: "Country Head of Marketing",
            clientImage: "/anup.png",
            quote: "Collaborating with Two Tone Agency on The Untold Stories campaign from initial briefing through launch and beyond was a deeply rewarding experience. It is crucial for an agency to accurately grasp the campaign brief and channel creativity into a direction that generates excitement and achieves the core objective. The team at Two Tone Agency ensured we accomplished both, all within a demanding timeline",
        },
    ];

    // Client logos from logos folder (1.png to 9.png)
    const clientLogos = [
        "/logos/1.png",
        "/logos/2.png",
        "/logos/3.png",
        "/logos/4.png",
        "/logos/5.png",
        "/logos/6.png",
        "/logos/7.png",
        "/logos/8.png",
        "/logos/9.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 2000); // change slide every 5 seconds

        return () => clearInterval(interval); // cleanup
    }, [testimonials.length]);


    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    // };

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // };

    return (
        <div className="relative w-[100%] md:w-[80%] 2xl:w-[100%] 2xl:max-w-[1250px] mx-auto">
            {/* Right Gradient */}
            <div className="hidden md:block absolute right-[-57%] 2xl:right-[-46%] 2xl:right-[-55%] top-[27%] w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/right-gradient.png"
                    alt="right"
                    fill
                    className="object-contain object-right"
                />
            </div>

            <section className="px-5 md:px-20 py-10 md:py-20 my-10 bg-[#4B0768] md:rounded-3xl relative overflow-hidden">
                <div className="">
                    {/* Header */}
                    <div className="mb-12">
                        <h2 className="text-[25px] md:text-4xl 2xl:text-5xl font-normal text-white mb-4">
                            What Our Clients Say About Two Tone Agency
                        </h2>
                        <p className="text-white text-base 2xl:text-lg">
                            Two Tone Agency remains globally recognized for pushing modern storytelling with innovative design to ensure
                            result-conductive advertising
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-16">
                        {/* Left - Success Stories */}
                        <div className="bg-gradient-to-b w-[100%] from-[#000] via-[#55602f] to-[#55602f] rounded-2xl p-5 md:p-8 flex flex-col justify-between">
                            <h3 className="text-3xl font-normal text-white mb-6 font-myfont">
                                Success
                                <br />
                                Stories
                            </h3>
                            <p className="text-white text-base mb-8 leading-[20px] pt-20">
                                See how we turned creative vision into unforgettable brand experiences through expert social media marketing services in Dubai.
                            </p>
                            {/* Client Avatars */}
                            <div className="flex ">

                                <div className="w-32 md:w-42  h-9 md:h-12 rounded-full relative">
                                    <Image
                                        src="/clients.png"
                                        alt={`Client 6`}
                                        fill
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[70%]">
                            {/* Right - Testimonial Card */}
                            <div className="bg-white rounded-2xl p-5 md:p-8">
                                {/* Client Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden relative bg-gray-200">
                                        <Image
                                            src={testimonials[currentSlide].clientImage}
                                            alt={testimonials[currentSlide].clientName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">
                                            {testimonials[currentSlide].clientName}
                                        </h4>
                                        <p className="text-[#0C1D17] text-sm">
                                            {testimonials[currentSlide].clientRole}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="text-[#0C1D17] text-sm md:text-base leading-relaxed mb-8">
                                    "{testimonials[currentSlide].quote}"
                                </p>
                            </div>

                            {/* Client Logos - Infinite Marquee */}
                            <div className="mt-8 overflow-hidden">
                                <div className="flex gap-4 animate-marquee">
                                    {/* First set of logos */}
                                    {clientLogos.map((logo, index) => (
                                        <div key={`first-${index}`} className="flex-shrink-0 w-32 md:h-24 h-20 relative grayscale hover:grayscale-0 transition-all">
                                            <Image
                                                src={logo}
                                                alt={`Client logo ${index + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {clientLogos.map((logo, index) => (
                                        <div key={`second-${index}`} className="flex-shrink-0 w-24 md:h-24 h-20 relative grayscale hover:grayscale-0 transition-all">
                                            <Image
                                                src={logo}
                                                alt={`Client logo ${index + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Dots */}
                    <div className="flex justify-center gap-2 mt-0 md:mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/30 w-2"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* CSS for marquee animation */}
                <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 15s linear infinite;
                }
                @media (max-width: 768px) {
                    .animate-marquee {
                        animation: marquee 7s linear infinite;
                    }
                }
            `}</style>
            </section>
        </div>
    );
}
