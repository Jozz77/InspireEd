"use client";

import React, { useState } from "react";
import Image from "next/image";
import GeneralPic from "../Assets/General.png";
import GeneralData from "./GeneralData";
import { PiPlusBold, PiMinusBold } from "react-icons/pi";

export default function General() {
  const [isOpen, setIsOpen] = useState([]);

  // FAQ data goes here

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div className=" px-[5%] mt-20 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">
        General Questions
      </h1>

      <section className=" flex justify-between items-center mt-10 ">
        <div className=" w-[35%] ">
          <Image className=" w-full " src={GeneralPic} alt="School Bus" />
        </div>
        <div className=" w-[60%] py-6 px-[2.5%] general-faq ">
          <ul className=" flex flex-col gap-y-3 ">
            {GeneralData.map((item, index) => (
              <li key={index} className="   ">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex  w-full text-left"
                >
                  <div
                    className={`transform flex items-center text-[1.3rem] pt-3 font-bold ${
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
                  <section className=" pl-4">
                    <h2 className="text-[1.8rem] font-neucha capitalize ">{item.question}</h2>
                    <div
                      className={`overflow-hidden transition-max-height duration-300 ${
                        isOpen[index] ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <p className=" text-base font-medium leading-[150%] py-2 ">{item.answer}</p>
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
