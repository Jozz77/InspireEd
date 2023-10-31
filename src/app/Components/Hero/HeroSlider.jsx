import React from 'react'
import Button from './Button/Button'

export default function HeroSlider({title, text}) {
  
  return (
    <section className=" h-[100vh] flex flex-col items-center text-center text-white justify-center ">
    <div className="w-[90%] md:w-[80%]  lg:w-[75%] xl:w-[65%]">
         <h1 className=" font-medium text-[2.3rem] leading-[100%] ssm:text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] ">{title}</h1>
         <p className=" font-medium text-[1rem] ssm:text-[1.3rem] sm:text-[1.45rem] mt-2 ">{text}</p>
         <div className='mt-8 '>
            <Button text='ENROLL' />
         </div>
         </div>
    </section>
  )
}
