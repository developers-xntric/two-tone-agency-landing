"use client";

import Image from "next/image";

export function SolutionsSection() {
    const solutions = [
        {
            title: "Brand Strategy",
            description: "Let's give your brand its why and its wow.",
            src: "/services-icons/brand.svg",
        },
        {
            title: "Social Media",
            description: "Making your feeds addictive",
            src: "/services-icons/social.png",
        },
        {
            title: "Graphic Designs",
            description: "Building websites that don't just look good, but work hard.",
            src: "/services-icons/designs.png",
        },
        {
            title: "Content Creation",
            description: "From words to videos content that stirs, sells, and sticks.",
            src: "/services-icons/content.png",
        },
        {
            title: "Paid Media",
            description: "Ads so precise, you'll think we're reading your customers minds.",
            src: "/services-icons/paid.png",
        },
        {
            title: "SEO & Web Design",
            description: "Turning search engines into your personal hype machine.",
            src: "/services-icons/seo.png",
        },
    ];

    return (
        <section className="py-10 ">
            <div className="w-[80%] 2xl:w-[100%] 2xl:max-w-[1250px] mx-auto">
                <h2 className="text-4xl 2xl:text-5xl font-bold text-center text-white mb-16 leading-tight">
                    Delivering Solutions
                    <br />
                    with Unmatched Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-[8px] bg-[#181818]  hover:border-[#CAED63] transition-colors duration-300 flex flex-col items-start justify-between gap-4 min-h-[220px] 2xl:min-h-[270px]"
                        >
                            <div className="w-full">
                                <div className="mb-4 relative w-12 h-12">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-white text-base leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
