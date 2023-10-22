import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Assets/Logo.svg";

export default function Footer() {
  return (
    <div className=" bg-red-400 mt-20 py-10 text-NormalWhite px-[5%] ">
      <section className=" w-[10%] flex mx-auto ">
        <Link href="https://en.wikipedia.org" target="_blank" ><Image src={Logo} alt="Vercel Logo" className="w-full" /></Link>
      </section>
      <section className="w-[50%] mx-auto pt-6 ">
        <p className=" text-[1.3rem] leading-[180%] font-neucha capitalize  ">
          cras viverra purus venenatis proin molestie senectus. Adipiscing
          tellus elit cras viverra purus venenatis proin molestie senectus.
          Adipiscing tellus elit cras viverra purus venenatis proin molestie
          senectus. Adipiscing tellus elit cras viverra purus venenatis proin
          molestie senectus. Adipiscing tellus elit
        </p>
      </section>

      <section className=" pt-8 ">
        <hr className="border-solid border-[1px] border-NormalWhite"/>
        <div className=" flex justify-between text-[1.3rem] capitalize pt-2 ">
            <small>Copyright @ 2023 Joygirl</small>
            <small>Powered by InspireEd</small>
        </div>
      </section>
    </div>
  );
}
