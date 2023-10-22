import React from "react";
import Image from "next/image";
import Pic1 from "./Assets/Pic1.png";
import Pic2 from "./Assets/Pic2.png";
import Link from "next/link";

export default function Little() {
  return (
    <div className=" px-[5%] mt-20 ">
      <h1 className=" text-[3.3rem] leading-none capitalize ">
        A little about us
      </h1>
      <div className=" flex justify-between pt-5 gap-x-[5%]">
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
              senectus mattis laoreet sed. Elit mattis nulla cras viverra purus
              venenatis proin molestie senectus. Adipiscing tellus elit ante sed
              sit faucibus egestas dapibus posuere. Lacinia vitae tincidunt
              purus.
            </p>
            <p className=" py-4 ">
              Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
              senectus mattis laoreet sed. Elit mattis nulla cras viverra purus
              venenatis proin molestie senectus. Adipiscing tellus elit ante sed
              sit faucibus egestas dapibus posuere. Lacinia vitae tincidunt
              purus.
            </p>
          </div>
        </section>
        <section className=" flex gap-2 ">
          <div>
            <hr className=" border-solid border-[2px] border-Purple h-[90%] flex items-center " />
          </div>
          <div className=" text-base leading-[150%] ">
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
              senectus mattis laoreet sed. Elit mattis nulla cras viverra purus
              venenatis proin molestie senectus. Adipiscing tellus elit ante sed
              sit faucibus egestas dapibus posuere. Lacinia vitae tincidunt
              purus.
            </p>
            <p className=" py-4 ">
              Lorem ipsum dolor sit amet consectetur. Ac orci id quis tellus. Ut
              senectus mattis laoreet sed. Elit mattis nulla cras viverra purus
              venenatis proin molestie senectus. Adipiscing tellus elit ante sed
              sit faucibus egestas dapibus posuere. Lacinia vitae tincidunt
              purus.
            </p>
          </div>
        </section>
      </div>

      <div className="flex pt-5">
        <section className=" w-[50%] ">
          <Image src={Pic1} alt="Vercel Logo" className="w-full" />
        </section>
        <section className=" w-[50%] ">
          <Image src={Pic2} alt="Vercel Logo" className="w-full" />
        </section>
      </div>

      <div className="mt-5 text-center">
        <Link href="">
          <button className=" text-Secondary text-[1.45rem] font-semibold leading-[0.48px] underline  ">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
