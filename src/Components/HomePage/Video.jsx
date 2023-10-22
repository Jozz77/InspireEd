import React from "react";

const YouTubeEmbed = () => {
  return (
    <div className=" px-[5%] mt-20 bg-LightRed ">
      <section className=" relative pb-[56.25%] h-0 overflow-hidden ">
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
      <section className=" italic font-medium text-[2rem] ">
        <p>
          cras viverra purus venenatis proin molestie senectus. Adipiscing
          tellus elit ante sed sit faucibus egestas dapibus posuere. Lacinia
          vitae tincidunt purus.
        </p>
      </section>
    </div>
  );
};

export default YouTubeEmbed;
