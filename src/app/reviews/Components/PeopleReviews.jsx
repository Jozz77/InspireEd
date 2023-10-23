import React from "react";
import Image from "next/image";
import Top from "../Assets/link.png";
import Pic1 from "../Assets/Pic1.png"
import PeopleReviewsData from "./PeopleReviewsData";

export default function PeopleReviews() {
  return (
    <div className=" px-[5%] mt-20 flex justify-between gap-y-10  flex-wrap ">
        {PeopleReviewsData.map((PeopleReview) => (
            <section className=" w-[45%] px-[1%] " key={PeopleReview.id}>
            <div className=" w-[15%] ">
              <Image src={Top} alt="Top Image" className="w-full" />
            </div>
            <p className=" text-[1.05rem] py-4 capitalize font-normal leading-[180%] font-neucha "> 
              {PeopleReview.review}
            </p>
            <div className=" flex items-center gap-[2%] ">
            <div className=" w-[10%] ">
              <Image src={PeopleReview.img} alt="Top Image" className="w-full" />
            </div>
            <div>
                <p className=" text-[0.9rem] font-medium ">{PeopleReview.name}</p>
                <small className=" text-[0.85rem] font-medium ">{PeopleReview.date}</small>
            </div>
            </div>
          </section>
        ))}
      
    </div>
  );
}
