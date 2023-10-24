import React from "react";
import Button from "../Hero/Button/Button";
import { FaQuoteRight } from "react-icons/fa";

export default function Satisfied() {
  return (
    <div className=" satisfied mt-16 text-NormalWhite px-[5%] py-16 text-center ">
      <h3 className="text-[1.7rem] font-montserrat ">Satisfied Parents</h3>
      <h2 className=" text-[3rem] capitalize ">parents testimonials</h2>

      <section className="pt-4">
        <div className=" text-[2rem] text-center p-3 flex justify-center ">
          <FaQuoteRight />
        </div>
        <p className=" text-[2.1rem] pt-2 text-center font-neucha ">
          "InspireEd School is a beacon of educational excellence, nurturing
          young minds with innovative programs, dedicated educators, and a
          supportive community."
        </p>
      </section>

      <section className=" pt-10 ">
        <hr className="order-solid border-[1px] w-[10%] mx-auto border-Purple" />
        <h3 className=" text-[1.7rem] font-medium font-montserrat pt-2 ">
          Oliver Twist
        </h3>
        <div className=" pt-6 ">
          <Button text="READ MORE" />
        </div>
      </section>
    </div>
  );
}
