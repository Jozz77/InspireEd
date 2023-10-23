'use client'

import React, { useState } from 'react'
import AboutFaqData from './AboutFaqData'
import { PiPlusBold, PiMinusBold } from "react-icons/pi";


export default function AboutFaq() {
    const [isOpen, setIsOpen] = useState([]);

  // FAQ data goes here

  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
      <div className=" w-[60%] py-10 px-[5%] ">
          <ul className=" flex flex-col gap-y-3 ">
            {AboutFaqData.map((item, index) => (
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
  )
}
