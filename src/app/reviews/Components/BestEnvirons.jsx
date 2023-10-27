import ButtonOther from "@/app/Components/Hero/Button/ButtonOther";
import React from "react";

export default function BestEnvirons() {
  return (
    <div className="bg-[#94AEB6] py-8 sm:py-10 lg:py-12 xl:py-16 px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16  text-center ">
         <h1 className=" text-[1.8rem] ssm:text-[2rem] sm:text-[2.5rem] lg:text-[3.3rem]  leading-none capitalize text-center ">
        Best environment for your kids
      </h1>
      <p className=" text-[1rem] ssm:text-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.2rem] px-0 lg:px-[5%] mt-2 sm:mt-4 lg:mt-6 font-neucha leading-[180%] ">
        Choose InspireEd School for a well-rounded education, inspiring
        creativity, critical thinking, and a loveg for learning in every child.
      </p>
      <div className=" uppercase mt-6 ">
        <ButtonOther text="MAKE ENQUIRIES" link="/contact" />
      </div>
    </div>
  );
}
