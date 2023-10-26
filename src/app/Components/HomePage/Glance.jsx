import React from "react";
import Button from "../Hero/Button/Button";

export default function Glance() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
     <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        InspireEd school at a glance
      </h1>

      <div className="flex flex-col sm:flex-row mt-5">
        <section className=" bg-Yellow px-[3%] py-8 sm:py-6 md:py-8 lg:py-12 w-full sm:w-1/2 ">
          <small className=" text-[0.8rem] ">Build your kids dream</small>
          <h2 className=" text-[1.3rem] ssm:text-[1.9rem] sm:text-[1.3rem] md:text-[1.6rem]   lg:text-[1.9rem] pt-2 ">
            15 years of undefeated success
          </h2>
          <p className=" text-[0.9rem] ssm:text-[0.95rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-base pt-2 pb-6 ">
            Discover excellence with 'Build Your Kids' Dream.' Celebrating a
            remarkable 15-year journey of unparalleled success in empowering
            young minds. We're dedicated to nurturing potential and creating a
            promising path to the future. Join us in making dreams come true.
          </p>
          <Button text="ENROLL" />
        </section>

        <section className=" w-full sm:w-1/2 flex flex-wrap ">
          <div className=" w-1/2 px-[3%] py-4 lg:py-6 xl:py-8 border-solid border-black border-r-[2px] border-b-[2px] ">
            <h2 className=" font-montserrat font-semibold text-[1.2rem] ssm:text-[1.3rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.45rem] ">
              1.2k
            </h2>
            <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-base leading-[150%]  ">
              Over 15 years, 12K students flourish within our nurturing and
              empowering educational community.
            </p>
          </div>
          <div className=" w-1/2 px-[3%] py-4 lg:py-6 xl:py-8 border-solid border-black border-b-[2px] ">
            <h2 className=" font-montserrat font-semibold text-[1.2rem] ssm:text-[1.3rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.45rem] ">
              100
            </h2>
            <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-base leading-[150%]  ">
              Proudly thriving with 100 branches across the globe, shaping and
              inspiring minds internationally."
            </p>
          </div>
          <div className=" w-1/2 px-[3%] py-4 lg:py-6 xl:py-8 border-solid border-black border-r-[2px]  ">
            <h2 className=" font-montserrat font-semibold text-[1.2rem] ssm:text-[1.3rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.45rem] ">
              200
            </h2>
            <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-base leading-[150%]  ">
              Our graduates thrive at the top 200 universities, a testament to
              their excellence and dedication.
            </p>
          </div>
          <div className=" w-1/2 px-[3%] py-4 lg:py-6 xl:py-8 border-solid border-black border-l-[0px]  ">
            <h2 className=" font-montserrat font-semibold text-[1.2rem] ssm:text-[1.3rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.45rem] ">
              6.8k
            </h2>
            <p className=" text-[0.8rem] ssm:text-[0.9rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-base leading-[150%]  ">
              Currently, we educate and inspire 6.8K students across the globe.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
