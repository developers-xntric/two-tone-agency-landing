import Image from 'next/image'

export function RamadanSection() {
    return (
        <div className="w-[80%] 2xl:max-w-[1250px] mx-auto">
            {/* Hero Section */}
            <div className="bg-[#078B38] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 py-8  lg:py-12 lg:px-8">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-4xl 2xl:text-5xl font-bold text-white leading-tight">
                            Ramadan Moves Fast. Your Content Should Move Faster
                        </h1>
                        <p className="text-white text-base lg:text-lg leading-relaxed">
                            This most crowded month in marketing demands more than just a presence. It demands velocity. Research driven content turnarounds designed to capture the spirit of the season and the attention of the region. From scroll-stopping short-form video to precision-targeted ad shifts, we ensure your brand stays at the center of the conversation.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/beach.png"
                                alt="Ramadan lantern at sunset"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Section */}
            <div className="py-16 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                    Fast. Creative. Ramadan-Ready.
                </h2>
            </div>

            {/* Pricing Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
                {/* Card 1 - Ramadan Special Offers */}
                <div className="bg-gradient-to-b from-[#181818] via-[#181818] to-[#134223] border border-foreground/20 rounded-[10px] p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-2">
                            Ramadan Special Offers
                        </h3>
                        <p className="text-white text-sm xl:text-base">
                            Unlock premium content & Social Media at special Ramadan Rates
                        </p>
                    </div>
                    <button className="mt-6 cursor-pointer hover:bg-transparent hover:text-white hover:border-[#CAED63] border bg-[#CAED63] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full">
                        Enquire Now
                    </button>
                </div>

                {/* Card 2 - Content Creation */}
                <div className="bg-[#078B38] rounded-[10px] p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-2">
                            Content Creation
                        </h3>
                        <p className="text-white/90 text-sm xl:text-base mb-6">
                            5 Premium Videos
                        </p>
                        <p className="text-white text-3xl font-bold">
                            AED7,000
                        </p>
                    </div>
                    <button className="mt-6 cursor-pointer hover:bg-transparent hover:text-white hover:border-[#CAED63] border-[#CAED63] border bg-[#CAED63] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full">
                        Enquire Now
                    </button>
                </div>

                {/* Card 3 - Social Media Package */}
                <div className="bg-[#B1CB34] rounded-[10px] p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-black text-2xl font-bold mb-2">
                            Social Media Package
                        </h3>
                        <p className="text-black/70 text-sm xl:text-base mb-4">
                            {`(2 Deliverables (8 Statics + 4 Videos)`}
                        </p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-black font-semibold text-sm mt-1">
                                Now
                            </p>
                            <p className="text-black text-3xl font-bold">
                                AED8,000
                            </p>
                            <span className="text-black/60 text-sm line-through">
                                (Was 12,000)
                            </span>
                        </div>

                    </div>
                    <button className="mt-6 cursor-pointer hover:bg-transparent hover:border-[#CAED63] border-[#CAED63] border bg-[#fff] text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all w-full">
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    )
}
