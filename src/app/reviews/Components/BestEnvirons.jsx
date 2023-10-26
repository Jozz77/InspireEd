import Button from "@/Components/Hero/Button/Button";
import ButtonOther from "@/Components/Hero/Button/ButtonOther";
import React from "react";

export default function BestEnvirons() {
  return (
    <div className="bg-[#94AEB6] py-16 px-[5%] mt-20 text-center ">
      <h1 className=" text-[3.3rem] leading-none capitalize pb-5  ">
        Best environment for your kids
      </h1>
      <p className=" text-[2.2rem] px-[5%] font-neucha leading-[180%] ">
        Choose InspireEd School for a well-rounded education, inspiring
        creativity, critical thinking, and a love for learning in every child.
      </p>
      <div className=" uppercase mt-6 ">
        <ButtonOther text="MAKE ENQUIRIES" link="/contact" />
      </div>
    </div>
  );
}
