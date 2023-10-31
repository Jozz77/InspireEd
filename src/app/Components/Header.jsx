"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./Assets/LogoBlack.png";
// import { useActiveRouter } from "active-link-nextjs";

// const config = { activeClass: "active" };

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileSectionClick = () => {
    setIsOpen(false); // Close the menu when a section link is clicked on mobile
  };

  const router = useRouter();

  // const { registerRoute } = useActiveRouter(config);

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
    <header className="hidden px-[5%] py-4 fixed top-0 z-10 w-full sm:flex items-center justify-between ">
      <section className=" w-[18%] md:w-[15%] ">
        <Image
          src={Logo}
          alt="Vercel Logo"
          className="w-full cursor-pointer"
          onClick={() => router.push("/")}
        />
      </section>
      <section className=" sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray cursor-pointer"
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
          </section>
      <nav className={`${
            isOpen
              ? "h-[100vh] transition-h duration-1000 ease-in-out"
              : " h-0 sm:h-full duration-500"
          } w-[70%] md:w-[65%] lg:w-[60%] xl:w-[50%] text-[1rem] lg:text-[1.2rem] font-medium text-otherWhite flex justify-between`} >
        {navLink.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={`${
              router.pathname === link ? " text-red-800 bg-black" : ""
            }`}
          >
            {name}
          </Link>
        ))}
        {/* <Link
          href="/about"
          {...registerRoute(['/about'])}
        >
          About
        </Link>
        <Link
          href="/academics"
          {...registerRoute(['/academics'])}
        >
          Academics
        </Link>
        <Link
          href="/classes"
          {...registerRoute(['/classes'])}
        >
          Classes
        </Link>
        <Link
          href="/faq"
          {...registerRoute(['/faq'])}
        >
          FAQ
        </Link>
        <Link
          href="/reviews"
          {...registerRoute(['/reviews'])}
        >
          Reviews
        </Link>
        <Link
          href="/contact"
          {...registerRoute(['/contact'])}
        >
          Contact
        </Link> */}

       
      </nav>
    </header>
  );
}
