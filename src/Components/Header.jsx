'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from './Assets/Logo.svg'

export default function Header() {
    const router = useRouter()
  return (
    <div className='px-[5%] py-6 fixed top-0 w-full flex items-center justify-between text-[white] '>
        <section className=' w-[15%] '>
            <Image
                src={Logo}
                alt="Vercel Logo"
                className='w-full cursor-pointer'
                onClick={() => router.push('/')}
            />
        </section>
        <nav className='w-[45%] text-[1.2rem] text-otherWhite flex justify-between'>
        <Link href="/about">About</Link>
        <Link href="/academics">Academics</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
        </nav>
    </div>
  )
}
