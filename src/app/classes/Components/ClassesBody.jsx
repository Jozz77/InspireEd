"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PrimaryData from "./PrimaryData";
import JuniorData from "./JuniorData";
import SeniorData from "./SeniorData";

export default function ClassesBody() {
  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" px-[5%] my-16 ">
      <section className=" flex justify-between items-center pb-8 ">
        <h1 className=" text-[3.3rem] leading-none capitalize ">Classes</h1>

        <div className="flex justify-between w-[60%] items-center ">
          <div
            onClick={() => handleTabClick("tab1")}
            className={`cursor-pointer rounded-[32px] py-2 px-10 uppercase ${
              activeTab === "tab1"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray border-solid bg-transparent border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            } text-[1rem] font-semibold `}
          >
            PRIMARY
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={`cursor-pointer rounded-[32px] py-2 px-10 uppercase  ${
              activeTab === "tab2"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray bg-transparent border-solid border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            } text-[1rem] font-semibold `}
          >
            Junior secondary
          </div>
          <div
            onClick={() => handleTabClick("tab3")}
            className={`cursor-pointer rounded-[32px] py-2 px-10 uppercase  ${
              activeTab === "tab3"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray border-solid bg-transparent border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            } text-[1rem] font-semibold `}
          >
            Senior secondary
          </div>
        </div>
      </section>

      {activeTab === "tab1" && (
        <section className=" flex justify-between gap-y-10 flex-wrap ">
          {PrimaryData.map((primary) => (
            <div className="w-[31%]  " key={primary}>
              <div>
                <Image
                  src={primary.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.8rem] ">{primary.class}</h3>
              <p className=" text-[1rem] font-medium mt-2 mb-4 ">
                {primary.text}
              </p>
              <Link href="">
                <button className=" text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-2 ">
                  Enroll
                </button>
              </Link>
            </div>
          ))}
        </section>
      )}

      {activeTab === "tab2" && (
        <section className=" flex justify-between gap-y-10 flex-wrap ">
          {JuniorData.map((junior) => (
            <div className="w-[31%]  " key={junior}>
              <div>
                <Image
                  src={junior.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.8rem] ">{junior.class}</h3>
              <p className=" text-[1rem] font-medium mt-2 mb-4 ">
                {junior.text}
              </p>
              <Link href="">
                <button className=" text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-2 ">
                  Enroll
                </button>
              </Link>
            </div>
          ))}
        </section>
      )}

      {activeTab === "tab3" && (
        <section className=" flex justify-between gap-y-10 flex-wrap ">
          {SeniorData.map((senior) => (
            <div className="w-[31%]  " key={senior}>
              <div>
                <Image
                  src={senior.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.8rem] ">{senior.class}</h3>
              <p className=" text-[1rem] font-medium mt-2 mb-4 ">
                {senior.text}
              </p>
              <Link href="">
                <button className=" text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-2 ">
                  Enroll
                </button>
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
