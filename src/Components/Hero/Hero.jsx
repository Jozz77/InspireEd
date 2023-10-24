'use client'

import React from "react";
import Button from "./Button/Button";
import HeroSlider from "./HeroSlider";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <div>
      <Swiper
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
      </Swiper>
    </div>
  );
}
