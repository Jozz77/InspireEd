import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Assets/Logo.svg";

export default function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div className=" footer py-6 ssm:py-6 sm:py-8 md:py-10 text-NormalWhite px-[5%] ">
      <section className=" w-[30%] ssm:w-[25%] sm:w-[20%] md:w-[18%] lg:w-[12%] xl:w-[10%] flex mx-auto ">
        <Link href="https://en.wikipedia.org" target="_blank">
          <Image src={Logo} alt="Vercel Logo" className="w-full" />
        </Link>
      </section>
      <section className="w-[100%] sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto py-6 ssm:py-6 lg:py-10 xl:py-12 ">
        <p className=" text-[1rem] ssm:text-[1.1rem] sm:text-[1.3rem] leading-[180%] text-center font-neucha capitalize  ">
          InspireEd School is a vibrant educational institution dedicated to
          nurturing young minds, fostering academic excellence within a
          supportive, engaging learning environment. Our innovative programs
          empower students to thrive with a love for lifelong learning.
        </p>
      </section>

      <section className="  ">
        <hr className="border-solid border-[1px] border-NormalWhite" />
        <div className=" flex justify-between text-[0.8rem] ssm:text-[0.9rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] capitalize pt-2 ">
          <small>Copyright @ {currentYear} InspireEd</small>
          <small>
            Designed by{" "}
            <Link className=" hover:text-[#0000ffa9] " href="https://hijoygirl.com/" target="_blank">
              Joygirl
            </Link>{" "}
          </small>
        </div>
      </section>
    </div>
  );
}
