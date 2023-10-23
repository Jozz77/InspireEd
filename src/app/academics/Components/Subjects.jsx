import React from "react";
import Image from "next/image";

import Image1 from "../Assets/Image.png";
import Image2 from "../Assets/Image2.png";
import Image3 from "../Assets/Image3.png";
import Image4 from "../Assets/Image4.png";
import Image5 from "../Assets/Image5.png";
import Image6 from "../Assets/Image6.png";
import Image7 from "../Assets/Image7.png";

export default function Subjects() {
  return (
    <div className=" bg-[#F6FEFB] flex flex-col gap-y-10 px-[5%] mt-10 py-16 ">
      <section className=" flex items-center justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Computer Science</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image1} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center flex-row-reverse justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Fine Art</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image2} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Agriculture</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image3} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center flex-row-reverse justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Science</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image4} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >English</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image5} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center flex-row-reverse justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Mathematics</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image6} className=" w-full " alt="" />
      </div>
      </section>
      <section className=" flex items-center justify-between">
        <div className=" w-[52.5%] ">
          <h2 className="text-[2.2rem] " >Catering</h2>
          <p className="text-[1.2rem] leading-[150%] mt-2 " >
            Build your kids dream Build your kids dream Build your kids dream
            Build your kids dream build your kids dream Build your kids dream
            Build your kids dream Build your kids dream{" "}
          </p>
        </div>
        <div className=" w-[45%] ">
        <Image src={Image7} className=" w-full " alt="" />
      </div>
      </section>
    </div>
  );
}
