import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import ButtonOther from "../Hero/Button/ButtonOther";
import Image from "next/image";
import Image1 from './Assets/link.png'

export default function Satisfied() {
  return (
    <div className=" satisfied mt-8 sm:mt-10 lg:mt-12 xl:mt-16 text-NormalWhite px-[5%] py-8 sm:py-12 lg:py-16 text-center ">
      <h3 className="text-[1rem] ssm:text-[1.2rem] sm:text-[1.5rem] lg:text-[1.7rem] font-montserrat ">Satisfied Parents</h3>
      <h2 className=" text-[2rem] ssm:text-[2.2rem] sm:text-[2.7rem] lg:text-[3rem] capitalize ">parents testimonials</h2>

      <section className="pt-4 sm:pt-6">
        <div className=" text-center w-[10%] ssm:w-[10%] sm:w-[7.5%] lg:w-[5%] mx-auto ">
          <Image src={Image1} alt="" className=" w-full " />
        </div>
        <p className=" text-[1.1rem] ssm:ext-[1.3rem] sm:text-[1.7rem] lg:text-[2.1rem] pt-2 text-center font-neucha ">
          "InspireEd School is a beacon of educational excellence, nurturing
          young minds with innovative programs, dedicated educators, and a
          supportive community."
        </p>
      </section>

      <section className=" pt-6 ssm:pt-8 sm:pt-10 ">
        <hr className="order-solid border-[1px] w-[10%] mx-auto border-Purple" />
        <h3 className=" text-[1rem] ssm:text-[1.2rem] sm:text-[1.5rem] lg:text-[1.7rem] font-medium font-montserrat pt-2 ">
          Oliver Twist
        </h3>
        <div className=" pt-4 sm:pt-6 ">
          <ButtonOther text="READ MORE" link="/reviews" />
        </div>
      </section>
    </div>
  );
}
