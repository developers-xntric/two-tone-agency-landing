"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export function ContactForm() {
    const [formMessage, setFormMessage] = useState(""); // new
    const [isError, setIsError] = useState(false);      // new


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "+971",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name === "phone") {
            if (!/^\+?\d*$/.test(value)) return;
            if (value.startsWith("+971") && value.length > 13) return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setFormMessage(""); // reset message
        setIsError(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            const data = await res.json();

            if (!res.ok || data.error) {
                setIsError(true);
                setFormMessage(data.error || "Failed to submit. Try again.");
            } else {
                setIsError(false);
                setFormMessage("Thank you! Your message has been sent.");
                setFormData({ name: "", email: "", phone: "", message: "" });
            }

        } catch (err) {
            console.error("Submit error:", err);
            setIsError(true);
            setFormMessage("An unexpected error occurred. Try again.");
        } finally {
            setLoading(false);
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


            <section id="contact-form" className="py-10 relative overflow-hidden">

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

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white ml-1">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Joseph"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white focus:outline-none focus:border-[#CAED63] transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="inline-flex bg-[#CAED63] text-black items-center gap-2 pl-6 pr-2 py-2 rounded-full font-normal hover:opacity-90 transition-opacity group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending..." : "Submit"}
                                    <div className="bg-white rounded-full p-2">
                                        <ArrowRight
                                            size={18}
                                            className={`group-hover:translate-x-1 transition-transform ${loading ? "opacity-50" : ""
                                                }`}
                                        />
                                    </div>
                                </button>

                            </div>
                        </form>

                        {formMessage && (
                            <p
                                className={`text-sm mt-4 text-center ${isError ? "text-red-500" : "text-green-500"
                                    }`}
                            >
                                {formMessage}
                            </p>
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
}
