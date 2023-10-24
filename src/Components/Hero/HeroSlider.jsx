import React from 'react'
import Button from './Button/Button'

export default function HeroSlider({title, text}) {
  return (
    <section className=' h-[100vh] flex flex-col items-center text-center text-white justify-center '>
         <div className='w-[65%]'>
         <h1 className=' font-normal text-[4rem] '>{title}</h1>
        <p className=' font-medium text-[1.4rem] mt-2  '>{text}</p>
         <div className='mt-8 '>
            <Button text='ENROLL' />
         </div>
         </div>
    </section>
  )
}
