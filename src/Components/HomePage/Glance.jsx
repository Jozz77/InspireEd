import React from "react";
import Button from "../Hero/Button/Button";

export default function Glance() {
  return (
    <div className=" px-[5%] mt-16 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">
        InspireEd school at a glance
      </h1>

     <div className="flex mt-5">
     <section className=" bg-Yellow px-[3%] py-12 w-1/2 ">
        <small className=" text-[0.8rem] ">Build your kids dream</small>
        <h2 className=" text-[1.9rem] pt-2 ">15 years of undefeated success</h2>
        <p className=" text-base pt-2 pb-2 ">
          Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
          senectus mattis laoreet sed. Elit mattis nulla cras viverra purus
          venenatis proin molestie senectus. Adipiscing tellus elit ante sed sit
          faucibus egestas dapibus posuere. Lacinia vitae tincidunt purus.
        </p>
        <Button text="ENROLL" />
      </section>

      <section className=" w-1/2 flex flex-wrap ">
        <div className=" w-1/2 px-[3%] py-8 border-solid border-black border-r-[2px] border-b-[2px] ">
          <h2 className=" font-montserrat font-semibold text-[1.45rem] ">100+</h2>
          <p className=" text-base leading-[150%]  ">
            Build your kids dream. Build your kids dream Build your kids dream
            Build your kids dream
          </p>
        </div>
        <div className=" w-1/2 px-[3%] py-8 border-solid border-black border-b-[2px] ">
          <h2 className=" font-montserrat font-semibold text-[1.45rem] ">100+</h2>
          <p className=" text-base leading-[150%]  ">
            Build your kids dream. Build your kids dream Build your kids dream
            Build your kids dream
          </p>
        </div>
        <div className=" w-1/2 px-[3%] py-8 border-solid border-black border-r-[2px]  ">
          <h2 className=" font-montserrat font-semibold text-[1.45rem] ">100+</h2>
          <p className=" text-base leading-[150%]  ">
            Build your kids dream. Build your kids dream Build your kids dream
            Build your kids dream
          </p>
        </div>
        <div className=" w-1/2 px-[3%] py-8 border-solid border-black border-l-[0px]  ">
          <h2 className=" font-montserrat font-semibold text-[1.45rem] ">100+</h2>
          <p className=" text-base leading-[150%]  ">
            Build your kids dream. Build your kids dream Build your kids dream
            Build your kids dream
          </p>
        </div>
      </section>
     </div>
    </div>
  );
}
