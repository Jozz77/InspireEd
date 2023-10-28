"use client";

import React, { useEffect } from "react";
import Button from "./Button/Button";
import HeroSlider from "./HeroSlider";
import { useRef, useState } from "react";

export default function Hero() {
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

  // Create an array of objects, each containing the content for a section
  const sectionContent = [
    {
      id: 1,
      title: "Shaping Tomorrow's Leaders Today",
      text: "For generations, InspireEd has always been a beacon of academic excellence. Join us and become a part of this proud legacy.",
      class: "home-hero",
    },
    {
      id: 2,
      title: "Pioneering Excellence",
      text: "Transforming Education for a Brighter Future",
      class: "about-slider",
    },
    {
      id: 3,
      title: "Inspiring Growth and Success",
      text: "Together, We Reach for the Stars",
      class: "academics-slider",
    },
    {
      id: 4,
      title: "Championing Academic Excellence",
      text: "Unleashing Potential, Creating Leaders",
      class: "classes-slider",
    },
    {
      id: 5,
      title: "Igniting Potential",
      text: "Transforming Education for a Brighter Future",
      class: "faq-slider",
    },
    {
      id: 6,
      title: "Empowering Young Minds",
      text: "Charting a Course to Success Together",
      class: "reviews-slider",
    },
    {
      id: 7,
      title: "Fostering Future Success",
      text: "Empowering Students for a Bright and Impactful Future",
      class: "contact-slider",
    },
  ];

  return (
    <div className="">
      {sectionContent.map((content) => (
        <section
          key={content.id}
          className={`section ${content.class} ${
            activeSection === content.id
              ? "fade-animation active"
              : "fade-animation"
          }`}
        >
          {activeSection === content.id && (
            <HeroSlider title={content.title} text={content.text} />
          )}
        </section>
      ))}
    </div>
  );
}
