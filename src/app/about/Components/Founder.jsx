import Image from "next/image";
import React from "react";
import Image1 from "../Assets/Image.png";
import Image2 from "../Assets/link.png";

export default function Founder() {
  return (
    <div className=" px-[5%] bg-[#F6FEFB] py-16 mt-10 flex items-center justify-between ">
      <div className=" w-[30%] ">
        <Image src={Image1} className=" w-full " alt="" />
      </div>

      <div className=" w-[65%] ">
        <div className=" w-[10%] ">
          <Image src={Image2} className=" w-full " alt="" />
        </div>
        <p className=" text-[2.1rem] pb-2 italic leading-[180%] ">
          Unlock your child's potential at InspireEd School, where a nurturing
          environment and innovative programs lay the foundation for lifelong
          success
        </p>
        <small className=" text-[1.2rem] font-medium  ">
          Founder of inspireEd - Whiney Samson
        </small>
      </div>
    </div>
  );
}
