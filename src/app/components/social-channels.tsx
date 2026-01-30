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
        <section className="py-6">
            <div className="w-[90%] 2xl:w-[100%] 2xl:max-w-[1440px] mx-auto">
                {/* Title */}
                <h2 className="text-4xl 2xl:text-5xl font-normal text-white text-center mb-6">
                    Channels We Focus On
                </h2>

                {/* Social Channels Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                    {channels.map((channel, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center border-t border-b border-[#2A2A2A] px-4 py-3 hover:border-[#CAED63] transition-all cursor-pointer w-full h-20"
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
        </section>
    );
}
