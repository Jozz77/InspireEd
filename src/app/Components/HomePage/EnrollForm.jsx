"use client";

import React, { useState } from "react";

export default function EnrollForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "",
    message: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      class: "",
      message: "",
    });
    setErrors({});
  };

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setIsModalOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please input Your Name";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must have at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please input Your Email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please input a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please input Your Message";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsModalOpen(true);
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      emailjs
        .sendForm(
          // "service_prpkq5j",
          // "template_0wd8eaa",
          // e.target,
          // "zfjNcVHR7ZKlJ9cLQ"
        )
        .then((result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsModalOpen(true);
          resetForm();
        })
        .catch((error) => {
          console.log(error.text);
          setIsLoading(false);
        });
    } else {
      // There are errors, update the state with the error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className=" w-full fixed inset-0 flex items-center justify-center z-50 backdrop:filter ">
      <div
        className="absolute inset-0 bg-black opacity-100  "
        onClick={onClose}
      ></div>
      <section className="bg-white text-black text-left absolute w-[90%] sm:w-[60%] lg:w-[50%] xl:w-[40%] translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] px-[2%] py-5   ">
        <h1 className="text-center text-[2rem] sm:text-[2.7rem] lg:text-[3rem] leading-none capitalize pb-3  ">
          Enroll Now
        </h1>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-y-3 sm:gap-y-4 "
        >
          <div>
            <label htmlFor="name" className=" text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]   font-semibold ">
              Full Name
            </label>
            <input
              type="text"
              className={` text-[#939393] text-[0.8rem] sm:text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[16px] sm:rounded-[32px] border-[1px] border-solid border-black outline-none ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="enter your full name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
             <small className="text-[red]">{errors.name && errors.name}</small>
          </div>
          <div>
            <label htmlFor="email" className="  text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]  font-semibold ">
              Email Address
            </label>
            <input
              type="email"
              className={` text-[#939393] text-[0.8rem] sm:text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[16px] sm:rounded-[32px] border-[1px] border-solid border-black outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="enter your email address"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
             <small className="text-[red]">{errors.email && errors.email}</small>
          </div>
          <div>
            <label htmlFor="name" className="  text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]  font-semibold ">
              Class
            </label>
            <div class="relative">
              <select
                className={` appearance-none text-[#939393] text-[0.8rem] sm:text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[16px] sm:rounded-[32px] border-[1px] border-solid border-black outline-none ${
                  errors.class ? "border-red-500" : ""
                }`}
                value={formData.class}
                onChange={handleChange}
                name="class"
              >
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value=" Primary 3">Primary 3</option>
                <option value=" Primary 4">Primary 4</option>
                <option value=" Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
                <option value="">JS 1</option>
                <option value="">JS 1</option>
                <option value="">JS 3</option>
                <option value="">SS 1</option>
                <option value="">SS 2</option>
                <option value="">SS 3</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[5%] text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.293 9.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="  text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem]  font-semibold ">
              Message
            </label>
            <textarea
              rows={3}
              className={` resize-none text-[#939393] text-[0.8rem] sm:text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[16px] sm:rounded-[32px] border-[1px] border-solid border-black outline-none ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Brief Description About Your Kid"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
             <small className="text-[red]">{errors.message && errors.message}</small>
          </div>
          <button className=" bg-Secondary  text-white hover:bg-[#2F2F8F] px-8 py-2 rounded-[32px] font-semibold text-[0.9rem] ssm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] tracking-[0.48px] ">
            Enroll
          </button>

          {isModalOpen && (
          <div className="text-[green] text-center text-[0.8rem] sm:text-base sm:text-[1.2rem] lg:text-[1.3rem] font-Montserrat font-bold mt-2 sm:mt-4 ">
            Thank you for submitting!
          </div>
        )}
        </form>
      </section>
    </div>
  );
}
