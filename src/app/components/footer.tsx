"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-[97%] bg-gradient-to-r from-[#0A4520] via-[#0D5929] to-[#4A7C3D] rounded-t-[40px] mb-10 mt-10 ">
            <div className="w-[90%] 2xl:w-full 2xl:max-w-[1440px] mx-auto px-8 pt-10 pb-4">
                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center mb-12">
                    {/* Logo */}
                    <div className="flex justify-start">
                        <div className="relative w-24 h-16">
                            <Image
                                src="/logo.svg"
                                alt="Two Tone Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="text-left">
                        <p className="text-white text-base lg:text-lg leading-relaxed">
                            Every project begins with your vision and ends with a message that resonates.
                            Our team is here to help you share powerful Ramadan moments with
                            authenticity and impact.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end">
                        <button className="inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full font-semibold
    bg-white/20 backdrop-blur-md text-white
    border border-white/20
    hover:bg-white/20 transition-all duration-300
    group cursor-pointer">

                            Connect with an expert

                            <div className="bg-[#CAED63]/90 rounded-full p-2 backdrop-blur-sm">
                                <ArrowRight
                                    size={18}
                                    className="text-black group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </div>
                        </button>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/20">
                    <p className="text-white text-sm mb-4 md:mb-0">
                        © 2026 Twotone Inc. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-white text-sm hover:text-[#CAED63] transition-colors">
                            Privacy
                        </a>
                        <span className="text-white text-sm">/</span>
                        <a href="#" className="text-white text-sm hover:text-[#CAED63] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
