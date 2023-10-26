"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./Assets/Logo.svg";
// import { useActiveRouter } from "active-link-nextjs";

// const config = { activeClass: "active" };

export default function Header() {
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
    <header className="hidden px-[5%] py-4 fixed top-0 z-10 w-full sm:flex items-center justify-between text-NormalWhite">
      <section className=" w-[18%] md:w-[15%] ">
        <Image
          src={Logo}
          alt="Vercel Logo"
          className="w-full cursor-pointer"
          onClick={() => router.push("/")}
        />
      </section>
      <nav className="w-[70%] md:w-[65%] lg:w-[60%] xl:w-[50%] text-[1rem] lg:text-[1.2rem] font-medium text-otherWhite flex justify-between">
        {navLink.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={`${router.pathname === link ? " text-red-800 bg-black" : ""}`}
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
