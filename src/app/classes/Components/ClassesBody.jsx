"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PrimaryData from "./PrimaryData";
import JuniorData from "./JuniorData";
import SeniorData from "./SeniorData";
import EnrollForm from "@/app/Components/HomePage/EnrollForm";

export default function ClassesBody() {
  const [activeTab, setActiveTab] = useState("tab1"); // Set the default active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" px-[5%] my-4 ssm:my-6 sm:my-10 lg:my-12 xl:my-16 ">
      <section className=" flex flex-col sm:flex-row justify-between items-start md:items-center pb-4 lg:pb-8 ">
        <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
          Classes
        </h1>

        <div className="flex justify-between mt-3 sm:mt-0 w-[100%] sm:w-[70%] md:w-[70%] xl:w-[60%] items-center text-[0.5rem] ssm:text-[0.7rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[1rem] ">
          <div
            onClick={() => handleTabClick("tab1")}
            className={`cursor-pointer rounded-[32px] py-1 sm:py-2 px-2 ssm:px-3 md:px-4 lg:px-8 xl:px-10 uppercase ${
              activeTab === "tab1"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray border-solid bg-transparent border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            }  font-semibold `}
          >
            PRIMARY
          </div>
          <div
            onClick={() => handleTabClick("tab2")}
            className={`cursor-pointer rounded-[32px] py-1 sm:py-2 px-2 ssm:px-3 md:px-4 lg:px-8 xl:px-10 uppercase  ${
              activeTab === "tab2"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray bg-transparent border-solid border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            }  font-semibold `}
          >
            Junior secondary
          </div>
          <div
            onClick={() => handleTabClick("tab3")}
            className={`cursor-pointer rounded-[32px] py-1 sm:py-2 px-2 ssm:px-3 md:px-4 lg:px-8 xl:px-10 uppercase  ${
              activeTab === "tab3"
                ? "bg-[#4747D7] text-NormalWhite transition duration-800 ease-in-out"
                : " text-gray border-solid bg-transparent border-[1px] border-[#0A0A1F] transition duration-800 ease-in-out"
            }  font-semibold `}
          >
            Senior secondary
          </div>
        </div>
      </section>

      {activeTab === "tab1" && (
        <section className=" flex justify-between gap-y-3 sm:gap-y-4 md:gap-y-6 lg:md:gap-y-10 flex-wrap ">
          {PrimaryData.map((primary) => (
            <div className="w-[47%] sm:w-[31%]  " key={primary}>
              <div>
                <Image
                  src={primary.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.1rem] ssm:text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] my-0 sm:my-0 md:my-2 ">
                {primary.class}
              </h3>
              <p className=" text-[0.55rem] ssm:text-[0.75rem] sm:text-[0.85rem] lg:text-[1rem] font-medium h-[25%] ssm:h-[30%] sm:h-[35%] md:h-[30%]  xl:h-[20%] mb-6 md:mb-4 ">
                {primary.text}
              </p>

              <button
                onClick={openModal}
                className=" text-[0.7rem] ssm:text-[0.85rem]  sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-1 ssm:py-2 "
              >
                Enroll
              </button>
              <EnrollForm isOpen={isModalOpen} onClose={closeModal} />
            </div>
          ))}
        </section>
      )}

      {activeTab === "tab2" && (
        <section className=" flex justify-between gap-y-3 sm:gap-y-4 md:gap-y-6 lg:md:gap-y-10 flex-wrap ">
          {JuniorData.map((junior) => (
            <div className="w-[47%] sm:w-[31%]  " key={junior}>
              <div>
                <Image
                  src={junior.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.1rem] ssm:text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] my-0 sm:my-0 md:my-2 ">
                {junior.class}
              </h3>
              <p className=" text-[0.55rem] ssm:text-[0.75rem] sm:text-[0.85rem] lg:text-[1rem] font-medium h-[25%] ssm:h-[30%] sm:h-[35%] md:h-[30%]  xl:h-[20%] mb-6 md:mb-4 ">
                {junior.text}
              </p>

              <button
                onClick={openModal}
                className=" text-[0.7rem] ssm:text-[0.85rem]  sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-1 ssm:py-2 "
              >
                Enroll
              </button>
              <EnrollForm isOpen={isModalOpen} onClose={closeModal} />
            </div>
          ))}
        </section>
      )}

      {activeTab === "tab3" && (
        <section className=" flex justify-between gap-y-3 sm:gap-y-4 md:gap-y-6 lg:md:gap-y-10 flex-wrap ">
          {SeniorData.map((senior) => (
            <div className="w-[47%] sm:w-[31%]  " key={senior}>
              <div>
                <Image
                  src={senior.img}
                  className=" w-full "
                  alt="Children Pic"
                />
              </div>
              <h3 className=" text-[1.1rem] ssm:text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] my-0 sm:my-0 md:my-2 ">
                {senior.class}
              </h3>
              <p className=" text-[0.55rem] ssm:text-[0.75rem] sm:text-[0.85rem] lg:text-[1rem] font-medium h-[25%] ssm:h-[30%] sm:h-[35%] md:h-[30%]  xl:h-[20%] mb-6 md:mb-4 ">
                {senior.text}
              </p>

              <button
                onClick={openModal}
                className=" text-[0.7rem] ssm:text-[0.85rem]  sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-semibold uppercase hover:bg-[#4747D7] hover:text-NormalWhite hover:border-none border-solid border-[1px] border-[#0A0A1F] w-full rounded-[32px] py-1 ssm:py-2 "
              >
                Enroll
              </button>
              <EnrollForm isOpen={isModalOpen} onClose={closeModal} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
