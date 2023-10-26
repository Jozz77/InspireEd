import React from "react";
// import Image from 'next/image'

export default function ContactHero() {
  return (
    <div className="faq-hero h-[100vh] flex flex-col items-center text-center text-white justify-center ">
      <div className="w-[90%] md:w-[80%]  lg:w-[75%] xl:w-[65%]">
        <h1 className=" font-medium text-[3rem] leading-[130%] ssm:text-[3.5rem] sm:text-[4rem] ">
          Contact Us
        </h1>
        <p className=" font-medium text-[1rem] ssm:text-[1.3rem] sm:text-[1.45rem] mt-2 ">
          Reach Out to Us for Questions, Support, and Information. We're Here to
          Assist You!
        </p>
      </div>
    </div>
  );
}
