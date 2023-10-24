import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";


export default function Address() {
  return (
    <div className=" px-[5%] my-16 ">
      <h1 className=" text-[3.3rem] leading-none capitalize pb-5 text-center ">
        Our address & contact details
      </h1>

      <div className=" font-neucha flex justify-between pt-4 ">
        <section className=" flex items-center flex-col w-[23%] ">
          <div className=" text-[2rem] ">
            <GrLocation />
          </div>
          <h2 className=" text-[1.7rem] ">Postal Address</h2>
          <p className=" text-[1rem] text-center ">
            No 85, Jakande street, off Newland, Lagos,
          </p>
          <p>Zip Code: 1101119</p>
        </section>
        <section className=" flex items-center flex-col w-[23%] ">
          <div className=" text-[2rem] ">
            <BiMessageDetail />
          </div>
          <h2 className=" text-[1.7rem] ">Phone & Email</h2>
          <p className=" text-[1rem] text-center ">+123 456 7890</p>
          <p className=" text-[1rem] text-center ">helloispireed@gmail.com</p>
        </section>
        <section className=" flex items-center flex-col w-[23%] ">
          <div className=" text-[2rem] ">
            <BsClock />
          </div>
          <h2 className=" text-[1.7rem] ">Business Hours</h2>
          <p className=" text-[1rem] text-center ">Days: Mon - Fri</p>
          <p className=" text-[1rem] text-center ">Time: 9:00am-6:00pm</p>
        </section>
        <section className=" flex items-center flex-col w-[23%] ">
          <div className=" text-[2rem] ">
            <VscCalendar />
          </div>
          <h2 className=" text-[1.7rem] ">Sessions</h2>
          <p className=" text-[1rem] text-center ">Days: Mon - Fri</p>
          <p className=" text-[1rem] text-center ">Time: 9:00am-6:00pm</p>
        </section>
      </div>
    </div>
  );
}
