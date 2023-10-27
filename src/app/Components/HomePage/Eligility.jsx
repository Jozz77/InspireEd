import React from "react";
import Image from "next/image";
import Eli1 from "./Assets/Eli1.png";
import Eli2 from "./Assets/Eli2.png";
import Eli3 from "./Assets/Eli3.png";

export default function Eligility() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
    <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
      Enrollment Eligibility
      </h1>
      <section className=" flex gap-[3%] mt-4 ">
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli1} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-2 ">Primary 1-5</p>
        </div>
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli2} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-2 ">JS 1-3</p>
        </div>
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli3} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-2 ">SS 1-3</p>
        </div>
      </section>
    </div>
  );
}
