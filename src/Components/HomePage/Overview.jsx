import React from "react";
import Image from "next/image";
import OverviewData from "./OverviewData";

export default function Overview() {
  return (
    <div className=" px-[5%] mt-16 ">
      <section className="flex mb-5">
        <h1 className=" text-[3.3rem] leading-none capitalize  w-1/2 ">
          Curriculum Overview
        </h1>
        <div className=" flex w-1/2 ">
          <div className="">
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <p className=" pl-2 font-montserrat text-base leading-[180%] ">
            Empowering with a rich curriculum, sparking curiosity, critical
            thinking, and nurturing well-rounded, empowered individuals.
          </p>
        </div>
      </section>

      <section className=" flex justify-between gap-y-6 pt-6 flex-wrap ">
        {OverviewData.map((overview) => (
          <div className=" w-[31.5%]  " key={overview.id}>
            <div>
              <Image src={overview.img} alt="Enrollment" className="w-full" />
            </div>
            <h2 className="font-semibold font-montserrat  text-[1.3rem] pt-1 ">
              {overview.title}
            </h2>
            <p className=" font-normal text-base leading-[150%] ">
              {overview.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
