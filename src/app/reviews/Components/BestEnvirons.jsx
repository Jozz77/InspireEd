import Button from "@/Components/Hero/Button/Button";
import React from "react";

export default function BestEnvirons() {
  return (
    <div className="bg-[#94AEB6] py-16 px-[5%] mt-20 text-center ">
      <h1 className=" text-[3.3rem] leading-none capitalize pb-5  ">
        Best environment for your kids
      </h1>
      <p className=" text-[2.2rem] px-[5%] font-neucha leading-[180%] " >
        Texts to convince parent to enroll their kids and also mention the
        benefit of enrolling their kids in our school. everything should’nt be
        more than two lines
      </p>
      <div className=" uppercase mt-6 ">
        <Button text="Make enquires" />
      </div>
    </div>
  );
}
