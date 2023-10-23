import React from 'react'
import Button from './Button/Button'
// import Image from 'next/image'
// import Link from 'next/link'

export default function Hero() {
  return (
    <div className='home-hero h-[100vh] flex flex-col items-center text-center text-white justify-center '>
         <div className='w-[65%]'>
         <h1 className=' font-normal text-[4rem] '>Shaping Tomorrow's Leaders Today</h1>
         <p className=' font-medium text-[1.4rem] mt-2 mb-4 '>For generations, InspireEd has been a beacon of academic excellence. Join us and become a part of this proud legacy.</p>
         <div>
            <Button text='ENROLL' />
         </div>
         </div>
    </div>
  )
}
