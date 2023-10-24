import React from "react";

export default function Great() {
  return (
    <div className=" px-[5%] mt-20 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">
        great InspireEd school
      </h1>
      <div className=" flex justify-between pt-5 gap-x-[5%]">
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              Welcome to InspireEd School, where education is an art of
              nurturing young minds, fostering character, and igniting a
              lifelong love for learning.
            </p>
            <p className=" py-4 ">
              Our mission is to empower students to explore their unique
              potential while providing a rich academic curriculum. We believe
              in the power of dedicated educators and innovative programs that
              encourage holistic growth
            </p>
          </div>
        </section>
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              InspireEd fosters a vibrant community dedicated to instilling
              values of integrity, respect, and inclusivity. purus.
            </p>
            <p className=" py-4 ">
              We go beyond being just a school, aiming to shape responsible,
              empathetic, and confident leaders of tomorrow. Join us for a
              transformative educational journey and witness your child's
              growth. purus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
