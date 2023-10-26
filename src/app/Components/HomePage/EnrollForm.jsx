import React from "react";

export default function EnrollForm({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className=" fixed inset-0 flex items-center justify-center z-50 backdrop:filter ">
      <div className="absolute inset-0 bg-black opacity-100  " onClick={onClose} ></div>
        <section className="bg-white text-black text-left absolute w-[40%] translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] px-[2%] py-5   ">
          <h1 className="text-center text-[3rem]  leading-none capitalize pb-3  ">
            Enroll Now
          </h1>
          <form action="" className="flex flex-col gap-y-4 ">
            <div>
              <label htmlFor="name" className=" text-[1.2rem] font-semibold ">
                Full Name
              </label>
              <input
                type="text"
                className=" text-[#939393] text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[32px] border-[1px] border-solid border-black outline-none "
                placeholder="enter your full name"
                name=""
                id="name"
              />
            </div>
            <div>
              <label htmlFor="email" className=" text-[1.2rem] font-semibold ">
                Email Address
              </label>
              <input
                type="email"
                className=" text-[#939393] text-base opacity-80 w-full px-[5%] py-2 mt-2 rounded-[32px] border-[1px] border-solid border-black outline-none "
                placeholder="enter your email address"
                name=""
                id="email"
              />
            </div>
            <div>
              <label htmlFor="name" className=" text-[1.2rem] font-semibold ">
                Full Name
              </label>
              <div class="relative">
                <select class="block text-[#939393] text-base appearance-none w-full border-[1px] border-solid border-black px-[3%] py-2 rounded-[32px] outline-none ">
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
              <label htmlFor="name" className=" text-[1.2rem] font-semibold ">
                Full Name
              </label>
              <textarea
                rows={3}
                className=" resize-none text-[#939393] opacity-80 w-full px-[5%] py-2 mt-2 rounded-[32px] border-[1px] border-solid border-black outline-none "
                placeholder="Brief Description About Your Kid"
                name=""
                id="name"
              />
            </div>
          </form>
        </section>
      
    </div>
  );
}
