import React from "react";

export default function Commitment() {
  return (
    <div className=" px-[5%] mt-20 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">
        A commitment to excellence
      </h1>
      <div className=" flex justify-between pt-5 gap-x-[5%]">
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[95%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              InspireEd School's curriculum is a commitment to excellence,
              meticulously designed to empower students with a holistic
              education that ignites their intellectual curiosity and personal
              growth.
            </p>
            <p className=" py-4 ">
              Our curriculum is a dynamic blend of traditional wisdom and
              contemporary innovation, tailored to meet the diverse learning
              styles and needs of every student. We offer a rich academic
              foundation that includes core subjects, ensuring a strong academic
              base. purus.
            </p>
          </div>
        </section>
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[95%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              The curriculum is delivered by a team of dedicated educators who
              employ innovative teaching methods and encourage critical
              thinking. We emphasize the importance of students taking ownership
              of their learning, fostering a lifelong love for education.
            </p>
            <p className=" py-4 ">
              InspireEd School's commitment to excellence in its curriculum
              reflects our mission to nurture young minds, promote character
              development, and inspire a passion for lifelong learning.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
