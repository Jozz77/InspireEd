"use client";

import React, { useEffect } from "react";
import Button from "./Button/Button";
import HeroSlider from "./HeroSlider";
import { useRef, useState } from "react";

export default function Hero() {
  // const [activeSection, setActiveSection] = useState(1);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Toggle between sections after a specified interval (in milliseconds)
  //     setActiveSection(activeSection === 1 ? 2 : 1);
  //   }, 5000); // Change sections every 5 seconds (adjust the interval as needed)

  //   return () => {
  //     clearInterval(interval); // Clear the interval to prevent memory leaks
  //   };
  // }, [activeSection]);
  const [activeSection, setActiveSection] = useState(1);
  const totalSections = 7; // Define the total number of sections
  const switchInterval = 5000; // Interval to switch sections (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      // Toggle between sections in a cyclic manner
      setActiveSection((activeSection % totalSections) + 1);
    }, switchInterval);

    return () => {
      clearInterval(interval);
    };
  }, [activeSection]);

  // Create an array of sections
  const sections = [...Array(totalSections)].map((_, index) => (
    <section key={index} className={`section ${activeSection === index + 1 ? "active" : ""}`}>
      <HeroSlider
        title={`Section ${index + 1} Title`}
        text={`Content for section ${index + 1}`}
      />
    </section>
  ));
  
  return (
    <div className="">
      {activeSection === 1 && (
        <section
          className={`home-hero ${
            activeSection === 1 ? "fade-animation active" : "fade-animation"
          }`}
        >
          <HeroSlider
            title="Shaping Tomorrow's Leaders Today"
            text="For generations, InspireEd has always been a beacon of academic excellence. Join us and become a part of this proud legacy."
          />
        </section>
      )}
      {activeSection === 2 && (
         <section
         className={`about-slider ${
           activeSection === 2 ? "fade-animation active" : "fade-animation"
         }`}
       >
         <HeroSlider
           title="Pioneering Excellence"
           text="Transforming Education for a Brighter Future"
         />
       </section>
      )}
     
      {/* <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        // pagination={{
        //   clickable: false,
        // }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="home-hero ">
            <HeroSlider
              title="Shaping Tomorrow's Leaders Today"
              text="For generations, InspireEd has always been a beacon of academic excellence. Join us and become a part of this proud legacy."
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="about-slider ">
            <HeroSlider
              title="Pioneering Excellence"
              text="Transforming Education for a Brighter Future"
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="academics-slider ">
            <HeroSlider
              title="Inspiring Growth and Success"
              text="Together, We Reach for the Stars"
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="classes-slider ">
            <HeroSlider
              title="Championing Academic Excellence"
              text="Unleashing Potential, Creating Leaders"
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="faq-slider ">
            <HeroSlider
              title="Igniting Potential"
              text="Transforming Education for a Brighter Future"
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="reviews-slider ">
            <HeroSlider
              title="Empowering Young Minds"
              text="Charting a Course to Success Together"
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="contact-slider ">
            <HeroSlider
              title="Fostering Future Success"
              text="Empowering Students for a Bright and Impactful Future"
            />
          </section>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
