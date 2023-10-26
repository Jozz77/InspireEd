import React from "react";

export default function Great() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        great InspireEd school
      </h1>
      <div className=" flex flex-col sm:flex-row justify-between pt-5 gap-x-[3%] lg:gap-x-[5%] text-[0.9rem] ssm:text-base sm:text-[0.9rem] md:text-base">
        <section className=" flex gap-x-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className="  leading-[150%] ">
            <p>
              Welcome to InspireEd School, where education is an art of
              nurturing young minds, fostering character, and igniting a
              lifelong love for learning.
            </p>
            <p className=" pt-2 ">
              Our mission is to empower students to explore their unique
              potential while providing a rich academic curriculum. We believe
              in the power of dedicated educators and innovative programs that
              encourage holistic growth.
            </p>
          </div>
        </section>
        <section className=" flex  gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className=" leading-[150%] ">
            <p>
              InspireEd fosters a vibrant community dedicated to instilling
              values of integrity, respect, and inclusivity.
            </p>
            <p className=" pt-2 ">
              We go beyond being just a school, aiming to shape responsible,
              empathetic, and confident leaders of tomorrow. Join us for a
              transformative educational journey and witness your child's
              growth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
