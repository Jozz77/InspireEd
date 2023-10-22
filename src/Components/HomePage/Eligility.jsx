import React from "react";
import Image from "next/image";
import Eli1 from "./Assets/Eli1.png";
import Eli2 from "./Assets/Eli2.png";
import Eli3 from "./Assets/Eli3.png";

export default function Eligility() {
  return (
    <div className=" px-[5%] mt-20 ">
      <h1 className=" text-[3.3rem] leading-none capitalize pb-5 ">
      Curriculum Overview
      </h1>
      <section className=" flex gap-[3%] ">
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli1} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-1 ">Primary 1-5</p>
        </div>
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli2} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-1 ">Primary 1-5</p>
        </div>
        <div className=" w-1/3 font-semibold text-[1.5rem] ">
          <div>
            <Image src={Eli3} alt="Enrollment" className="w-full" />
          </div>
          <p className=" pt-1 ">Primary 1-5</p>
        </div>
      </section>
    </div>
  );
}
