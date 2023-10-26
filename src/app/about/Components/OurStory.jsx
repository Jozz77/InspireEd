import React from "react";

export default function OurStory() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        Our story
      </h1>
      <div className=" flex flex-col sm:flex-row justify-between pt-5 gap-x-[3%] lg:gap-x-[5%] text-[0.9rem] ssm:text-base sm:text-[0.9rem] md:text-base">
        <section className=" flex gap-x-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className="  leading-[150%] ">
            <p>
              InspireEd School is a testament to the power of education, where
              young minds flourish in a nurturing environment. Our journey began
              with a vision to kindle the flames of curiosity, creativity, and
              character.
            </p>
            <p className=" pt-2 ">
              We empower students to explore their passions and potentials while
              fostering a love for lifelong learning. The heart of InspireEd
              lies in our dedicated educators, innovative programs, and a
              supportive community that encourages academic excellence and
              holistic growth.
            </p>
          </div>
        </section>
        <section className=" flex  gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className=" leading-[150%] ">
            <p>
              Through a rich curriculum, extracurricular opportunities, and
              personalized support, we're shaping individuals who not only excel
              academically but also become responsible, empathetic, and
              confident leaders of tomorrow.
            </p>
            <p className=" pt-2 ">
              Join us at InspireEd for a transformative educational experience
              that paves the way for lifelong success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
