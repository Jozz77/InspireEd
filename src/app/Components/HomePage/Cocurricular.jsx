import Image from "next/image";
import React from "react";
import Corricular from "../Assets/Corricular.png";

export default function Cocurricular() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
    <h1 className=" text-[1.7rem] ssm:text-[2.2rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        Our Cocurricular activites
      </h1>

      <div className=" flex flex-col sm:flex-row justify-between items-center pt-5 gap-5 sm:gap-[5%]">
        <section className=" w-full sm:w-[50%] lg:w-[55%] flex flex-col gap-2 lg:gap-4 border-solid border-l-[4px] border-Purple pl-2 ">
          <div className="  ">
            <h3 className="text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] ">Athletics</h3>
            <p className=" text-[0.8rem] ssm:text-base sm:text-[0.9rem] md:text-base">
              Athletics, the arena of strength, speed, and endurance, where
              dedicated athletes push their limits and inspire with feats of
              excellence.
            </p>
          </div>
          <div className="  ">
            <h3 className=" text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] ">Inhouse publications</h3>
            <p className=" text-[0.8rem] ssm:text-base sm:text-[0.9rem] md:text-base leading-[180%]">
              In-house publications: Capturing our unique voice, sharing
              insights, and celebrating achievements, these publications reflect
              our identity and foster community.
            </p>
          </div>
          <div className="  ">
            <h3 className=" text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] capitalize ">
              performing arts & music
            </h3>
            <p className=" text-[0.8rem] ssm:text-base sm:text-[0.9rem] md:text-base leading-[180%]">
              Performing Arts & Music: Where creativity finds expression,
              talents shine, and the rhythm of life merges with the symphony of
              sound and movement.
            </p>
          </div>
          <div className="  ">
            <h3 className=" text-[1.1rem] ssm:text-[1.2rem] lg:text-[1.3rem] ">Tours</h3>
            <p className=" text-[0.8rem] ssm:text-base sm:text-[0.9rem] md:text-base leading-[180%]">
              Embark on unforgettable journeys to explore new horizons,
              cultures, and experiences through our tours.
            </p>
          </div>
        </section>
        
        <section className="w-full sm:w-[47%] lg:w-[40%] ">
          <Image src={Corricular} alt="" className="w-full" />
        </section>
      </div>
    </div>
  );
}
