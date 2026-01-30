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
        <div className="relative ">
            <div className="hidden md:block absolute  2xl:left-[-55%] left-[-35%] top-[52%] w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/left-gradient.png"
                    alt="left "
                    fill
                    className="object-contain object-left"
                />
            </div>

            {/* Right Gradient */}
            <div className="hidden md:block absolute right-[-30%] 2xl:right-[-55%] top-[10%] w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/right-gradient.png"
                    alt="right"
                    fill
                    className="object-contain object-right"
                />
            </div>

            <section className="py-10 relative ">

                <div className="w-[90%] md:w-[80%] 2xl:w-[100%] 2xl:max-w-[1250px] mx-auto relative z-10">
                    <h2 className="text-[25px] md:text-4xl 2xl:text-5xl font-normal text-left md:text-center text-white md:mb-16 mb-10 leading-tight md:max-w-[50%] mx-auto">
                        Delivering Solutions

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
                                    <h3 className="text-[20px] md:text-2xl font-normal text-white transition-colors tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-white text-base leading-relaxed tracking-wide">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
