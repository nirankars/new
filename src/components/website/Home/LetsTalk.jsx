import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const LetsTalk = () => {
    return <>
            <div className="container mx-auto mt-40">
        <div className="  text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <h1 className="text-[250px] font-extrabold">
            let's <br />
            <span className="ml-[500px]">talk</span>
          </h1>
          <div className="ml-[400px] mt-24">
            <p className="w-96 text-2xl">
              We are always on the lookout for great clients who are passionate
              about their products and customers.
            </p>
            <a className="inline-flex mt-16" href>
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
};

export default LetsTalk;