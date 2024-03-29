import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";


export default function Address() {
  return (
    <div className=" px-[5%] my-8 sm:my-10 lg:my-12 xl:my-16 ">
    <h1 className=" text-[1.8rem] ssm:text-[2rem] sm:text-[2.5rem] lg:text-[3.3rem]  leading-none capitalize text-center ">
        Our address & contact details
      </h1>

      <div className=" font-neucha flex gap-y-4 sm:gap-y-0 flex-wrap justify-between mt-6 xl:mt-8 ">
        <section className=" flex items-center flex-col w-[46%] sm:w-[23%] ">
          <div className=" text-[1.8rem] lg:text-[2rem] ">
            <GrLocation />
          </div>
          <h2 className=" text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.4rem] md:text-[1.7rem] ">Postal Address</h2>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">
            No 85, Jakande street, off Newland, Lagos,
          </p>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">Zip Code: 1101119</p>
        </section>
        <section className=" flex items-center flex-col w-[46%] sm:w-[23%] ">
          <div className=" text-[1.8rem] lg:text-[2rem] ">
            <BiMessageDetail />
          </div>
          <h2 className=" text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.4rem] md:text-[1.7rem] ">Phone & Email</h2>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">+123 456 7890</p>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">helloispireed@gmail.com</p>
        </section>
        <section className=" flex items-center flex-col w-[46%] sm:w-[23%] ">
          <div className=" text-[1.8rem] lg:text-[2rem] ">
            <BsClock />
          </div>
          <h2 className=" text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.4rem] md:text-[1.7rem] ">Business Hours</h2>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">Days: Mon - Fri</p>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">Time: 9:00am-6:00pm</p>
        </section>
        <section className=" flex items-center flex-col w-[46%] sm:w-[23%] ">
          <div className=" text-[1.8rem] lg:text-[2rem] ">
            <VscCalendar />
          </div>
          <h2 className="  text-[1.3rem] ssm:text-[1.5rem] sm:text-[1.4rem] md:text-[1.7rem] ">Sessions</h2>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">Days: Mon - Fri</p>
          <p className=" text-[0.85rem] ssm:text-[0.9rem] sm:text-[0.85rem] md:text-[0.9rem] lg:text-base text-center ">Time: 9:00am-6:00pm</p>
        </section>
      </div>
    </div>
  );
}
