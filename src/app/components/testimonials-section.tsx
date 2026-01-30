"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            clientName: "Sharon Hoskin",
            clientRole: "Marketing Director",
            clientImage: "/beach.png", // Replace with actual client image
            quote: "Working with Two Tone Agency was a fantastic experience. Their thoughtful approach to getting our organization's story, Their thoughtful creativity, strategic insight, and strong understanding of what resonates in markets like MENA shows dedication to delivering the utmost excellent.. This campaign delivered great results, and we look forward to collaborating again!",
        },
        {
            id: 2,
            clientName: "John Doe",
            clientRole: "CEO, Tech Corp",
            clientImage: "/beach.png",
            quote: "Two Tone Agency transformed our brand identity completely. Their innovative approach and attention to detail exceeded all our expectations.",
        },
        {
            id: 3,
            clientName: "Jane Smith",
            clientRole: "Brand Manager",
            clientImage: "/beach.png",
            quote: "Outstanding work! The team at Two Tone Agency understood our vision and brought it to life with exceptional creativity and professionalism.",
        },
    ];

    const clientLogos = [
        { name: "Client 1", src: "/logo.svg" },
        { name: "Client 2", src: "/logo.svg" },
        { name: "Client 3", src: "/logo.svg" },
        { name: "Client 4", src: "/logo.svg" },
        { name: "Client 5", src: "/logo.svg" },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#4A1B6D] via-[#5C2184] to-[#3D1558] relative overflow-hidden">
            <div className="w-[80%] 2xl:w-full 2xl:max-w-[1250px] mx-auto">
                {/* Header */}
                <div className=" mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        What Our Clients Say About Two Tone Agency
                    </h2>
                    <p className="text-white/80 text-base lg:text-lg ">
                        Two Tone Agency remains globally recognized for pushing modern storytelling with innovative design to ensure
                        result-conductive advertising
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 mb-16">
                    {/* Left - Success Stories */}
                    <div className="bg-gradient-to-b from-[#000301] to-[#CAED63] rounded-2xl p-8 ">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Success
                            <br />
                            Stories
                        </h3>
                        <p className="text-white/70 text-base mb-8 leading-relaxed pt-20">
                            See how we turned creative vision into unforgettable brand experiences.
                        </p>
                        {/* Client Avatars */}
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-12 h-12 rounded-full border-2 border-purple-900 overflow-hidden bg-gray-700 relative"
                                >
                                    <Image
                                        src="/beach.png"
                                        alt={`Client ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>

                    {/* Right - Testimonial Card */}
                    <div className="bg-white rounded-2xl pl-5 pt-5 pb-6 lg:pl-5 pt-5 pb-6 relative">
                        {/* Client Info */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-200">
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
                                <p className="text-gray-600 text-sm">
                                    {testimonials[currentSlide].clientRole}
                                </p>
                            </div>
                        </div>

                        {/* Quote */}
                        <p className="text-gray-800 text-base leading-relaxed mb-8">
                            "{testimonials[currentSlide].quote}"
                        </p>

                        {/* Navigation Arrows */}
                        {/* <div className="flex gap-3 absolute bottom-8 right-8">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div> */}
                    </div>

                    {/* Client Logos */}
                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="relative w-20 h-20 grayscale hover:grayscale-0 transition-all">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                    </div>
                </div>

               

                {/* Slider Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/40"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
