import Image from "next/image";
import React from "react";
import Image1 from "../Assets/Image.png";
import Image2 from "../Assets/link.png";

export default function Founder() {
  return (
    <div className=" px-[5%] bg-[#F6FEFB] py-8 lg:py-12 xxl:py-16 mt-10 lg:mt-12 xl:mt-16 flex flex-col sm:flex-row items-center justify-between ">
      <div className=" w-[100%] sm:w-[30%] ">
        <Image src={Image1} className=" w-full " alt="" />
      </div>

      <div className=" mt-8 sm:mt-0 w-[100%] sm:w-[65%] ">
        <div className=" w-[15%] sm:w-[10%] ">
          <Image src={Image2} className=" w-full " alt="" />
        </div>
        <p className=" text-[1.1rem] ssm:text-[1.2rem]  sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.8rem] xl:text-[2.1rem] mt-2 lg:mt-0 font-medium pb-2 lg:pb-2 italic leading-[180%] ">
          Unlock your child's potential at InspireEd School, where a nurturing
          environment and innovative programs lay the foundation for lifelong
          success
        </p>
        <small className=" text-[0.8rem] ssm:text-[0.9rem sm:text-[0.85rem]  md:text-[1rem]  lg:text-[1.1rem] xl:text-[1.2rem] font-semibold sm:font-medium  ">
          Founder of inspireEd - Whiney Samson
        </small>
      </div>
    </div>
  );
}
