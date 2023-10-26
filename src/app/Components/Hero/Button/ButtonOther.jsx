import React from "react";
import Link from "next/link";

export default function ButtonOther({ text, link }) {
  return (
    <div>
      <Link href={link}>
      <button className=" bg-Secondary text-white hover:bg-[#2F2F8F] px-8 py-2 rounded-[32px] font-semibold text-[1.3rem] tracking-[0.48px] ">
        {text}
      </button>
      </Link>
    </div>
  );
}
