import React from "react";
import Image from "next/image";
import OverviewData from "./OverviewData";

export default function Overview() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <section className="flex flex-col gap-2 sm:gap-0 sm:flex-row mb-5">
      <h1 className=" text-[1.9rem] ssm:text-[2.2rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3.3rem] leading-none w-full sm:w-1/2 capitalize ">
          Curriculum Overview
        </h1>
        <div className=" flex w-full sm:w-1/2 ">
          <div className="">
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <p className=" pl-2 font-montserrat text-[0.9rem] ssm:text-[1rem] sm:text-[0.7rem] md:text-[0.9rem] lg:text-base leading-[180%] ">
            Empowering with a rich curriculum, sparking curiosity, critical
            thinking, and nurturing well-rounded, empowered individuals.
          </p>
        </div>
      </section>

      <section className=" flex flex-col sm:flex-row justify-between lg:gap-y-10 gap-y-6 pt-2 lg:pt-4 xl:pt-6 flex-wrap ">
        {OverviewData.map((overview) => (
          <div className=" w-full sm:w-[31.5%]  " key={overview.id}>
            <div>
              <Image src={overview.img} alt="Enrollment" className="w-full" />
            </div>
            <h2 className="font-semibold font-montserrat  text-[1.1rem] ssm:text-[1.3rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] pt-2 sm:pt-1 ">
              {overview.title}
            </h2>
            <p className=" font-normal text-[0.9rem] ssm:text-[1rem] sm:text-[0.7rem] md:text-[0.9rem] lg:text-base leading-[150%] ">
              {overview.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
