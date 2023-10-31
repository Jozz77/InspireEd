"use client";

import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Assets/LogoBlack.png";
import { useRouter } from "next/navigation";

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileSectionClick = () => {
    setIsOpen(false); // Close the menu when a section link is clicked on mobile
  };

  const router = useRouter();

  const navLink = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Academics",
      link: "/academics",
    },
    {
      name: "Classes",
      link: "/classes",
    },
    {
      name: "Faq",
      link: "/faq",
    },
    {
      name: "Reviews",
      link: "/reviews",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="bg-Primary overflow-hidden z-10 fixed top-0 w-full py-2 sm:py-3 xl:py-4">
      <div className="sm:flex sm:justify-between md:items-center px-[5%] ">
        <div className="flex items-center justify-between w-full sm:w-[15%] md:w-[14%]">
          <section className=" w-auto sm:w-full ">
            <Image
              src={Logo}
              alt="Vercel Logo"
              className="w-full cursor-pointer"
              onClick={() => router.push("/")}
            />
          </section>
          <div className=" sm:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black hover:text-gray cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 transform transition-transform ${
                  isOpen ? "duration-300 rotate-90" : "duration-1000"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav
          className={`${
            isOpen
              ? "h-[100vh] transition-all duration-1000 ease-in-out"
              : " h-0 sm:h-full duration-500"
          } w-[100%] sm:w-[70%] md:w-[65%] lg:w-[60%] xl:w-[50%] items-start overflow-hidden text-[1rem] lg:text-[1.2rem] font-medium text-otherWhite flex justify-center sm:justify-between`}
        >
          {/* Desktop navigation links */}
          {navLink.map(({ link, name }) => (
            <section className="hidden sm:flex">
              <Link
                key={name}
                href={link}
                className={`${
                  router.pathname === link ? " text-red-800 bg-black" : ""
                }`}
              >
                {name}
              </Link>
            </section>
          ))}

          {/* Mobile navigation links */}
          <div className="flex flex-col gap-8 justify-center pt-12 items-center text-[1.1rem] font-Montserrat font-bold sm:hidden">
            <Link
              href="about"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              About
            </Link>
            <Link
              href="academics"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Academics
            </Link>
            <Link
              href="acadeclassesmics"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Classes
            </Link>
            <Link
              href="faq"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              FAQ
            </Link>
            <Link
              href="reviews"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Reviews
            </Link>
            <Link
              href="contact"
              className="block hover:text-gray cursor-pointer"
              onClick={handleMobileSectionClick}
            >
              Contact
            </Link>
           
          </div>
        </nav>
      </div>
    </header>
  );
}
