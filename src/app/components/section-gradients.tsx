import Image from "next/image";

export function SectionGradients() {
    return (
        <>
            {/* Left Gradient */}
            <div className="hidden md:block absolute left-[-35%] top-0 w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/left-gradient.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                />
            </div>

            {/* Right Gradient */}
            <div className="hidden md:block absolute right-0 top-0 w-[300px] lg:w-[800px] h-full pointer-events-none">
                <Image
                    src="/right-gradient.png"
                    alt=""
                    fill
                    className="object-contain object-right"
                />
            </div>
        </>
    );
}
