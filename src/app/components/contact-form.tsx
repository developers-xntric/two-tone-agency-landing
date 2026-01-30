"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export function ContactForm() {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allow numbers
        if (/^\d*$/.test(value)) {
            setPhone(value);
        }
    };

    return (
        <div className="relative ">

            <div className="hidden md:block absolute 2xl:left-[-55%] left-[-50%] top-[20%] w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/left-gradient.png"
                    alt="left "
                    fill
                    className="object-contain object-left"
                />
            </div>

           
            <section className="py-10 relative overflow-hidden">

                <div className="w-[90%] md:w-[80%] 2xl:w-[100%] 2xl:max-w-[1250px] mx-auto text-left md:text-center relative z-10">
                    {/* Header */}
                    <h2 className="text-[25px] md:text-4xl 2xl:text-5xl font-normal text-white mb-12">
                        Let's Talk Book A Free Consultation
                    </h2>

                    <div className="bg-[#181818] p-4 md:p-8 lg:p-14 text-left w-full">
                        <div className="mb-8">
                            <h3 className="text-[20px] md:text-2xl lg:text-3xl font-normal text-white mb-2">
                                Have a project in mind?
                            </h3>
                            <h3 className="text-[20px] md:text-2xl lg:text-3xl font-normal text-white mb-2">
                                Let's connect and turn your vision into reality.
                            </h3>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white ml-1">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Joseph"
                                        className="w-full bg-[#050505] placeholder:text-white border border-white/10 rounded-xl px-5 py-4 text-white  focus:outline-none focus:border-[#CAED63] transition-colors"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white ml-1">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="You@Example.com"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white focus:outline-none focus:border-[#CAED63] transition-colors"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white ml-1">
                                        Phone Number*
                                    </label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        placeholder="+971"
                                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white focus:outline-none focus:border-[#CAED63] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white ml-1">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Tell us more about your requirement"
                                    rows={4}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white focus:outline-none focus:border-[#CAED63] transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="inline-flex bg-[#CAED63] text-black items-center gap-2 pl-6 pr-2 py-2 rounded-full font-normal hover:opacity-90 transition-opacity group cursor-pointer"
                                >
                                    Submit
                                    <div className="bg-white rounded-full p-2">
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
