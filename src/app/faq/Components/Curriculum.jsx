"use client";

import React, { useState } from "react";
import Image from "next/image";
import CurriculumPic from "../Assets/Curriculum.png";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";
import CurriculumData from "./CurriculumData";

export default function Curriculum() {
  const [isOpen, setIsOpen] = useState([]);

  // FAQ data goes here

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        Curriculum Questions
      </h1>

      <section className=" flex flex-col-reverse gap-6 sm:gap-0 sm:flex-row-reverse justify-between items-center mt-4 sm:mt-6 lg:mt-10 ">
        <div className="w-[100%] sm:w-[35%] lg:w-[40%] xl:w-[35%] ">
          <Image className=" w-full " src={CurriculumPic} alt="School Bus" />
        </div>
        <div className=" w-[100%] sm:w-[60%] lg:w-[55%] xl:w-[60%] py-4 lg:py-6 px-[2.5%] curriculum-faq ">
          <ul className=" flex flex-col gap-y-3 ">
            {CurriculumData.map((item, index) => (
              <li key={index} className="   ">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex  w-full text-left"
                >
                  <div
                    className={`transform flex items-center text-[1.1rem] lg:text-[1.3rem] pt-1 lg:pt-3 font-bold ${
                      isOpen[index] ? "rotate-180" : "rotate-0"
                    } transition-transform duration-500`}
                  >
                    {isOpen[index] ? (
                      <div className=" text-otherPurple">
                        <PiMinusBold />
                      </div>
                    ) : (
                      <div className=" text-otherPurple">
                        <PiPlusBold />
                      </div>
                    )}
                  </div>
                  <section className=" pl-2 sm:pl-4">
                    <h2 className="text-[1.1rem] ssm:text-[1.2rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] font-neucha capitalize ">
                      {item.question}
                    </h2>
                    <div
                      className={`overflow-hidden transition-max-height duration-300 ${
                        isOpen[index] ? "max-h-" : "max-h-0"
                      }`}
                    >
                      <p className=" text-[0.7rem] ssm:text-[0.8rem] sm:text-[0.7rem] lg:text-[0.8rem] xl:text-base font-medium leading-[150%] py-1 sm:py-2 ">
                        {item.answer}
                      </p>
                    </div>
                  </section>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
