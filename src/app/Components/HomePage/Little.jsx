import React from "react";
import Image from "next/image";
import Pic1 from "./Assets/Pic1.png";
import Pic2 from "./Assets/Pic2.png";
import Link from "next/link";

export default function Little() {
  return (
    <div className=" px-[5%] mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <h1 className=" text-[1.9rem] ssm:text-[2.5rem] sm:text-[3rem] lg:text-[3.3rem] leading-none capitalize ">
        A little about us
      </h1>

      <div className=" flex flex-col sm:flex-row justify-between pt-5 gap-x-[3%] lg:gap-x-[5%] text-[0.9rem] ssm:text-base sm:text-[0.9rem] md:text-base">
        <section className="w-[100%] sm:w-[48%] flex gap-x-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className="  leading-[150%] ">
            <p>
            The InspireEd School website stands as a gateway to a vibrant and
              innovative learning environment, where the seeds of inspiration
              are sown and educational aspirations are nurtured.
            </p>
            <p className=" pt-2 ">
            It serves as a thriving digital campus, bringing together an
              enriching community of students, dedicated parents, and passionate
              educators. At InspireEd, we believe in the power of knowledge as a
              transformative force. Our website is a dynamic hub where
              exploration, discovery, and a boundless thirst for learning find a
              home.
            </p>
          </div>
        </section>
        <section className="w-[100%] sm:w-[48%] flex  gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[100%] flex items-center " />
          </div>
          <div className=" leading-[150%] ">
            <p>
            We are committed to fostering academic excellence, where students
              are encouraged to uncover their unique interests and intellectual
              potential.
            </p>
            <p className=" pt-2 ">
            Our mission is to empower students, instilling in them a lifelong
              love for learning. Our website is more than just a platform; it is
              a conduit for dreams, a bridge between aspiration and achievement.
            </p>
            <p className=" pt-2 ">
              Together, we embark on a profound journey of inspiration and
              growth, shaping the future of education and ensuring that every
              student's potential is fully realized in our ever-evolving world.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap pt-10">
        <section className=" w-[100%] sm:w-[50%] ">
          <Image src={Pic1} alt="Vercel Logo" className="w-full" />
        </section>
        <section className="w-[100%] sm:w-[50%] ">
          <Image src={Pic2} alt="Vercel Logo" className="w-full" />
        </section>
      </div>

      <div className="mt-5 text-center">
        <Link href="">
          <button className=" text-Secondary text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.45rem]  font-semibold leading-[0.48px] underline  ">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
