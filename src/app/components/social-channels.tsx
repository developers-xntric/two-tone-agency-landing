"use client";

import Image from "next/image";

export function SocialChannelsSection() {
    const channels = [
        {
            name: "Facebook",
            src: "/socials/facebook.png",
        },
        {
            name: "Instagram",
            src: "/socials/insta.png",
        },
        {
            name: "Tiktok",
            src: "/socials/tiktok.png",
        },
        {
            name: "Snapchat",
            src: "/socials/snap.png",
        },
        {
            name: "LinkedIn",
            src: "/socials/linkedin.png",
        },
        {
            name: "Youtube",
            src: "/socials/yt.png",
        },
    ];

    return (
        <section className="py-1 md:py-6 relative overflow-hidden">
            <div className="w-[90%] 2xl:w-[100%] 2xl:max-w-[1440px] mx-auto relative z-10">
                {/* Title */}
                <h2 className="text-[25px] md:text-4xl 2xl:text-5xl font-normal text-white text-left md:text-center mb-6 tracking-wide">
                    Channels We Focus On
                </h2>

                {/* Mobile - Infinite Scrolling Marquee */}
                <div className="md:hidden overflow-hidden relative w-screen -ml-[5%]">
                    <div className="flex animate-marquee">
                        {/* First set */}
                        {channels.map((channel, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 flex items-center justify-center ] px-6 py-3 w-[180px] h-20"
                            >
                                <div className="relative w-full h-full border-y border-[#2A2A2A]">
                                    <Image
                                        src={channel.src}
                                        alt={channel.name}
                                        width={2000}
                                        height={2000}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {channels.map((channel, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 flex items-center justify-center  px-6 py-3 w-[180px] h-20"
                            >
                                <div className="relative w-full h-full border-y border-[#2A2A2A]">
                                    <Image
                                        src={channel.src}
                                        alt={channel.name}
                                        width={2000}
                                        height={2000}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop - Grid Layout */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center border-t border-b border-[#2A2A2A] px-4 py-3 hover:border-[#CAED63] transition-all  w-full h-20"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={channel.src}
                                    alt={channel.name}
                                    width={2000}
                                    height={2000}
                                    className="object-contain w-52 h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
                    animation: marquee 6s linear infinite;
                }
            `}</style>
        </section>
    );
}
