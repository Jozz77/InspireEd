import React from "react";

export default function Get() {
  return (
    <div>
      <h1 className="mt-20 text-[3.3rem] leading-none capitalize pb-5 text-center ">
        get in touch
      </h1>

      <form action="">
        <section>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="" id="name" />
          </div>
          <div>
            <label htmlFor="name">Email Address</label>
            <input type="text" name="" id="name" />
          </div>
        </section>
        <button className=" uppercase ">Submit Queries</button>
      </form>
    </div>
  );
}
