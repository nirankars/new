import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Card = () => {
  return (
    <>
      <div className="container mx-auto max-w-lg text-white mt-28 text-center">
        <div className="">
          <div>
            <p>
              We’d love to hear from you and show you more of our work! Just
              fill out the form and you will hear from one of us.
            </p>
          </div>
          <div className="my-12">
            <p className="text-start text-xl">info@growxp.com</p>
          </div>
          <hr />

          <div class="mt-12">
            <input
              type="email"
              id="email"
              class="border border-white bg-[#1b1d1d] text-gray-900 text-sm w-full p-2.5"
              placeholder="your name"
              required
            />
          </div>
          <div class="my-10">
            <input
              type="email"
              id="email"
              class="border border-white bg-[#1b1d1d] text-gray-900 text-sm w-full p-2.5"
              placeholder="your email"
              required
            />
          </div>
          <div class="my-10">
            <input
              type="email"
              id="email"
              class="border border-white bg-[#1b1d1d] text-gray-900 text-sm h-40 w-full p-2.5"
              placeholder="tell us more about your idea"
              required
            />
          </div>
          <div className="text-start">
            <a className="inline-flex" href>
              <span
                href="/"
                class="h-12 flex items-center justify-center text-lg px-8 border bg-[#c8c0b0] border-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                contact us
              </span>
              <span
                href="/"
                class="h-12 w-12 flex-shrink-0 flex items-center text-lg justify-center border border-l-0 border-[#c8c0b0] bg-[#c8c0b0] hover:bg-[#1b1d1d] text-[#1b1d1d] hover:text-white transition duration-500 ease-in-out"
              >
                <AiOutlineArrowRight />
              </span>
            </a>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Card;
