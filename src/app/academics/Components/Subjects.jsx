import React from "react";
import Image from "next/image";

import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";
import Image3 from "../Assets/Image3.png";
import Image4 from "../Assets/Image4.png";
import Image5 from "../Assets/Image5.png";
import Image6 from "../Assets/Image6.png";
import Image7 from "../Assets/Image7.png";
import Image8 from "../Assets/Image8.png";
import Image9 from "../Assets/Image9.png";

export default function Subjects() {
  return (
    <div className=" bg-[#F6FEFB] flex flex-col gap-y-5 sm:gap-y-10 px-[5%] mt-10 py-6 sm:py-10 md:py-12 xl:py-16 ">
      <section className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Computer Science</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            Computer Science at InspireEd is a dynamic program, fostering
            digital literacy, problem-solving, and creativity. Students explore
            coding, algorithms, and emerging technologies, preparing for a
            tech-driven future.
          </p>
        </div>
        <div className=" w-[100%] sm:w-[45%] mt-6 sm:mt-0 ">
          <Image src={Image1} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Fine Art</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            Fine Art at InspireEd celebrates creativity through painting,
            sculpture, and more. Our program encourages self-expression,
            artistic skills, and an appreciation for aesthetics in a supportive,
            vibrant environment.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image2} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Agriculture</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            Agriculture at InspireEd is an immersive experience in sustainable
            farming. Students gain hands-on knowledge, understanding of crops,
            and animal care. Our program cultivates a love for agriculture and
            environmental responsibility.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image3} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Science</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            Science education at InspireEd encompasses a diverse range of
            disciplines. Our program encourages inquiry, critical thinking, and
            hands-on experimentation, fostering a deep understanding of the
            natural world and scientific principles.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image4} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">English</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            InspireEd's English program is a journey through literature,
            writing, and communication. Students develop strong language skills,
            engage with diverse texts, and foster effective communication,
            preparing for a language-rich future.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image5} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Mathematics</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            InspireEd's Mathematics program is a comprehensive exploration of
            mathematical concepts. Students engage with problem-solving,
            critical thinking, and mathematical reasoning, building a strong
            foundation for future academic and real-world success.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image6} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Catering</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            InspireEd's Catering program is a culinary adventure. Students
            explore the art of food preparation, presentation, and management.
            They gain skills for a career in the vibrant and ever-evolving world
            of hospitality.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image7} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row-reverse items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Ecommerce</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            InspireEd's E-commerce program is a journey through the digital
            marketplace. Students delve into online business strategies, digital
            marketing, and e-commerce technology, preparing for success in the
            e-commerce industry.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image8} className=" w-full " alt="" />
        </div>
      </section>
      <section className=" flex flex-col sm:flex-row items-center justify-between">
        <div className=" w-[100%] sm:w-[52.5%] ">
          <h2 className="text-[1.6rem] ssm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  ">Chemistry</h2>
          <p className="text-[0.85rem] ssm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] leading-[150%] mt-1 md:mt-2 ">
            Chemistry is the scientific study of matter, its properties,
            composition, and how substances interact. It delves into the atomic
            and molecular structure, bonding, reactions, and the transformation
            of matter, playing a pivotal role in numerous industries, from
            healthcare to environmental science.
          </p>
        </div>
         <div className=" w-[100%] sm:w-[45%] mt-2 sm:mt-0 ">
          <Image src={Image9} className=" w-full " alt="" />
        </div>
      </section>
    </div>
  );
}
