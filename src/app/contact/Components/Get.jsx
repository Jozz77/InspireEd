import React from "react";

export default function Get({text}) {
  return (
    <div className=" px-[5%] my-16 ">
      <h1 className="mt-20 text-[3.3rem] leading-none capitalize pb-5 text-center ">
        {text}
      </h1>

      <form action="">
        <div className=" flex justify-between ">
          <section className=" w-[47.5%] ">
            <div className=" w-full">
              <label htmlFor="name" className=" text-[1.2rem] font-medium ">Full Name</label>
              <input type="text" className="mt-2 w-full text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[32px] py-2 px-[3%] outline-none " name="" id="name" placeholder="enter your full name" />
            </div>
            <div className=" mt-6 ">
              <label htmlFor="email" className=" text-[1.2rem] font-medium ">Email Address</label>
              <input type="email" className="mt-2 w-full text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[32px] py-2 px-[3%] outline-none " name="" id="email" placeholder="enter your emaill address" />
            </div>
          </section>
          <section className=" w-[47.5%] ">
            <label htmlFor="message" className=" text-[1.2rem] font-medium ">Message</label> 
            <textarea type="text" className="mt-2 h-[80%] resize-none w-full text-[1rem] text-TextLight font-medium border-solid border-[1px] border-TextLight rounded-[32px] py-2 px-[4%] outline-none " name="" id="message" placeholder="type here..." />
          </section>
        </div>
        <button className=' bg-Secondary text-white uppercase mt-6 hover:bg-Purple px-8 py-2 rounded-[32px] font-semibold text-[1.3rem] tracking-[0.48px] '>Submit Queries</button>
      </form>
    </div>
  );
}
