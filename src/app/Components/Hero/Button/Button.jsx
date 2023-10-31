"use client";

import React, { useState } from "react";
import EnrollForm from "../../HomePage/EnrollForm";

export default function Button({ text }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={openModal}
        className=" bg-Secondary text-white hover:bg-[#2F2F8F] px-8 py-2 rounded-[32px] font-semibold text-[0.9rem] ssm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] tracking-[0.48px] "
      >
        {text}{" "}
      </button>
      <EnrollForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
