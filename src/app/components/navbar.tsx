'use client'

import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=" pt-6 z-50 bg-black ">
      <div className="w-[90%] 2xl:max-w-[1440px] h-16 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link target="_blank" href="https://twotoneagency.com/" className="text-2xl font-bold tracking-tight">
          <Image src="/logo.svg" alt="Logo" width={2000} height={2000} className='w-24 h-24' />
        </Link>

        {/* CTA Button */}
        <button
          onClick={() => {
            document.getElementById('contact-form')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity text-xl cursor-pointer"
        >
          Get in touch
          <Mail size={18} />
        </button>
      </div>
    </nav>
  )
}
