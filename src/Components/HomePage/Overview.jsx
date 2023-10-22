import React from "react";
import Image from "next/image";
import Eli1 from "./Assets/Eli1.png";
import Eli2 from "./Assets/Eli2.png";
import Eli3 from "./Assets/Eli3.png";
import OverviewData from "./OverviewData";

export default function Overview() {
  return (
    <div className=" px-[5%] mt-20 ">
      <section className="flex">
        <h1 className=" text-[3.3rem] leading-none capitalize pb-5 w-1/2 ">
          Enrollment Eligibility
        </h1>
        <div className=" flex w-1/2 ">
          <div className="">
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <p className=" pl-2 font-montserrat text-base leading-[180%] ">
            Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
            senectus mattis laoreet sed. Elit mattis nulla cras viverra purus 
            venenatis{" "}
          </p>
        </div>
      </section>

      <section className=" flex justify-between gap-y-3 pt-6 flex-wrap ">
        {OverviewData.map((overview) => (
          <div className=" w-[31.5%]  " key={overview.id} >
            <div>
              <Image src={Eli1} alt="Enrollment" className="w-full" />
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
