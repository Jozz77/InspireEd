import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Video = () => {
  return (
    <div className=" mt-8 sm:mt-10 lg:mt-12 xl:mt-16 ">
      <section className=" relative pb-[56.25%] mx-[5%] h-0 overflow-hidden ">
        <iframe
          width="100%"
          height="100%"
          className=" w-full absolute top-0 left-0 "
          src={`https://www.youtube.com/embed/-X7okpS9Ufc?si=QMQ7_XeSoPquhR_r`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube video"
        />
      </section>
      <section className=" italic bg-LightRed px-[5%] flex gap-2 sm:gap-3 items-start font-medium text-[1rem] ssm:ext-[1.2rem] sm:text-[1.5rem] md:text-[1.7rem] lg:text-[2rem] xl:text-[2.2rem] py-4 ">
        <div className=" transform scale-y-[-1] ">
          <BiSolidQuoteLeft />
        </div>
        <p>
          "Enriching minds, fostering growth, and shaping futures; our school is
          a beacon of educational excellence and boundless possibilities."
        </p>
      </section>
    </div>
  );
};

export default Video;
