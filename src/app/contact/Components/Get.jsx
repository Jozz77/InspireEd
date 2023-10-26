import React from "react";

export default function Get({text}) {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
    <h1 className=" text-[1.8rem] ssm:text-[2rem] sm:text-[2.5rem] lg:text-[3.3rem]  leading-none capitalize text-center ">
        {text}
      </h1>

      <form action="" className="mt-6 xl:mt-8">
        <div className=" flex flex-col sm:flex-row justify-between ">
          <section className=" w-[100%] sm:w-[47.5%] ">
            <div className=" w-full">
              <label htmlFor="name" className=" text-[1rem] sm:text-[1.2rem] font-medium ">Full Name</label>
              <input type="text" className="mt-2 w-full text-[0.9rem] sm:text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[16px] sm:rounded-[32px] py-2 px-[5%] lg:px-[3%] outline-none " name="" id="name" placeholder="enter your full name" />
            </div>
            <div className=" mt-4 ssm:mt-6 ">
              <label htmlFor="email" className=" text-[1rem] sm:text-[1.2rem] font-medium ">Email Address</label>
              <input type="email" className="mt-2 w-full text-[0.9rem] sm:text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[16px] sm:rounded-[32px] py-2 px-[5%] lg:px-[3%] outline-none " name="" id="email" placeholder="enter your emaill address" />
            </div>
          </section>
          <section className="w-[100%] sm:w-[47.5%] mt-4 sm:mt-0 ">
            <label htmlFor="message" className=" text-[1rem] sm:text-[1.2rem] font-medium ">Message</label> 
            <textarea rows={4} type="text" className="mt-2 h-auto sm:h-[80%] resize-none w-full text-[0.9rem] sm:text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[16px] sm:rounded-[32px] py-2 px-[5%] lg:px-[4%] outline-none " name="" id="message" placeholder="type here..." />
          </section>
        </div>
        <button className=' bg-Secondary text-white uppercase mt-4 ssm:mt-6 hover:bg-Purple px-8 py-2 rounded-[32px] font-semibold text-[1rem] ssm:text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] tracking-[0.48px] '>Submit Queries</button>
      </form>
    </div>
  );
}
