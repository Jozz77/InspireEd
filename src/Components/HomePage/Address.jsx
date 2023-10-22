import React from 'react'
import { GrLocation } from 'react-icons/gr';

export default function Address() {
  return (
    <div className=" px-[5%] mt-20 ">   
     <h1 className=" text-[3.3rem] leading-none capitalize pb-5 text-center ">Our address & contact details</h1>

     <div className=' font-neucha flex justify-between pt-4 '>
        <section className=' flex items-center flex-col w-[23%] '>
           <div className=' text-[2rem] '>
           <GrLocation />
           </div>
            <h2 className=' text-[1.7rem] '>Postal Address</h2>
            <p className=' text-[1.1rem] text-center '>cras viverra purus venenatis proin molestie senectus. Adipiscing tellus elit</p>
        </section>
        <section className=' flex items-center flex-col w-[23%] '>
           <div className=' text-[2rem] '>
           <GrLocation />
           </div>
            <h2 className=' text-[1.7rem] '>Phone & Email</h2>
            <p className=' text-[1.1rem] text-center '>cras viverra purus venenatis proin molestie senectus. Adipiscing tellus elit</p>
        </section>
        <section className=' flex items-center flex-col w-[23%] '>
           <div className=' text-[2rem] '>
           <GrLocation />
           </div>
            <h2 className=' text-[1.7rem] '>Business Hours</h2>
            <p className=' text-[1.1rem] text-center '>cras viverra purus venenatis proin molestie senectus. Adipiscing tellus elit</p>
        </section>
        <section className=' flex items-center flex-col w-[23%] '>
           <div className=' text-[2rem] '>
           <GrLocation />
           </div>
            <h2 className=' text-[1.7rem] '>Sessions</h2>
            <p className=' text-[1.1rem] text-center '>cras viverra purus venenatis proin molestie senectus. Adipiscing tellus elit</p>
        </section>
     </div>
    </div>
  )
}
