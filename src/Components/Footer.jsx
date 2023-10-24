import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Assets/Logo.svg";

export default function Footer() {
  return (
    <div className=" footer py-10 text-NormalWhite px-[5%] ">
      <section className=" w-[10%] flex mx-auto ">
        <Link href="https://en.wikipedia.org" target="_blank">
          <Image src={Logo} alt="Vercel Logo" className="w-full" />
        </Link>
      </section>
      <section className="w-[60%] mx-auto pt-10 ">
        <p className=" text-[1.3rem] leading-[180%] font-neucha capitalize  ">
          InspireEd School is a vibrant educational institution dedicated to
          nurturing young minds, fostering academic excellence within a
          supportive, engaging learning environment. Our innovative programs
          empower students to thrive with a love for lifelong learning.
        </p>
      </section>

      <section className=" pt-10 ">
        <hr className="border-solid border-[1px] border-NormalWhite" />
        <div className=" flex justify-between text-[1.3rem] capitalize pt-2 ">
          <small>Copyright @ 2023 Joygirl</small>
          <small>Powered by InspireEd</small>
        </div>
      </section>
    </div>
  );
}
