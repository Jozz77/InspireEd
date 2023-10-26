import React from "react";
import Image from "next/image";
import Top from "../Assets/link.png";
import Pic1 from "../Assets/Pic1.png"
import { BiSolidQuoteRight } from 'react-icons/bi';
import PeopleReviewsData from "./PeopleReviewsData";

export default function PeopleReviews() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 flex justify-between gap-y-6 md:gap-y-8 flex-wrap ">
        {PeopleReviewsData.map((PeopleReview) => (
            <section className={`reviews pt-20 lg:pt-24 relative ${PeopleReview.class} hover:text-NormalWhite rounded-[32px] px-[5%] sm:px-[2%] py-4 w-full  sm:w-[48.5%] `} key={PeopleReview.id}>
            <div className="quote absolute top-[10%] p-3 rounded-full  border-solid border-black  border-[2px] text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] ">
              <BiSolidQuoteRight />
            </div>
            <p className="h-[75%] xl:h-[70%] text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] py-4 capitalize font-normal leading-[180%] font-neucha "> 
              {PeopleReview.review}
            </p>
            <div className=" flex items-center gap-[2%] ">
            <div className=" w-[15%] sm:w-[10%] ">
              <Image src={PeopleReview.img} alt="Top Image" className="w-full" />
            </div>
            <div>
                <p className=" text-[0.85rem] lg:text-[0.9rem] font-medium ">{PeopleReview.name}</p>
                <small className=" text-[0.8rem] lg:text-[0.85rem] font-medium ">{PeopleReview.date}</small>
            </div>
            </div>
          </section>
        ))}
      
    </div>
  );
}
