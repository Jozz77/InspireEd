import React from 'react'
import Link from 'next/link'

export default function Button({text}) {
  return (
    <div>
         <Link href="/academics" >
            <button className=' bg-Secondary text-white hover:bg-Purple px-8 py-2 rounded-[32px] font-semibold text-[1.3rem] tracking-[0.48px] '>{text} </button>
         </Link>
    </div>
  )
}
