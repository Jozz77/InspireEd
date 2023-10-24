import React from "react";

export default function OurStory() {
  return (
    <div className=" px-[5%] mt-10 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">Our story</h1>
      <div className=" flex justify-between pt-5 gap-x-[5%]">
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              InspireEd School is a testament to the power of education, where
              young minds flourish in a nurturing environment. Our journey began
              with a vision to kindle the flames of curiosity, creativity, and
              character.
            </p>
            <p className=" py-4 ">
              We empower students to explore their passions and potentials while
              fostering a love for lifelong learning. The heart of InspireEd
              lies in our dedicated educators, innovative programs, and a
              supportive community that encourages academic excellence and
              holistic growth.
            </p>
          </div>
        </section>
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              Through a rich curriculum, extracurricular opportunities, and
              personalized support, we're shaping individuals who not only excel
              academically but also become responsible, empathetic, and
              confident leaders of tomorrow. purus.
            </p>
            <p className=" py-4 ">
              Join us at InspireEd for a transformative educational experience
              that paves the way for lifelong success.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
