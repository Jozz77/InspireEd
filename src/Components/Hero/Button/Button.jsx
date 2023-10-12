import React from 'react'
import Link from 'next/link'

export default function Button({text}) {
  return (
    <div>
         <Link href="/academics" >
            <button className=' mt-6 bg-Secondary text-white hover:bg-Purple px-8 py-2 rounded-[32px] font-semibold text-[1.4rem] tracking-[0.48px] '>{text} </button>
         </Link>
    </div>
  )
}
