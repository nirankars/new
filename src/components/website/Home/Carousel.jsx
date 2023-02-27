import React, { useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";
import { TiArrowBackOutline } from "react-icons/ti";
import { Carouseldata } from "./CarouselData";

const Carousel = () => {
const [currentState, setCurrentState] = useState(0)

    return <>
<div className="container mx-auto mt-20 text-white relative overflow-hidden">
        <div>
          <h3 className="text-4xl mt-40 ml-32">the happy customer family</h3>
          <button
            className="absolute top-[450px]"
            onClick={() => {
              if (currentState > 0) {
                setCurrentState(currentState - 1)
              } else {
                setCurrentState(Carouseldata.length - 1)
              }
            }}
          >
            <TiArrowBackOutline />
          </button>
          <button
            className="absolute top-[450px] right-0"
           onClick={() => {
            if (currentState + 1 < Carouseldata.length) {
              setCurrentState(currentState + 1)
            } else {
              setCurrentState(0);
            };
           }}
          >
            <TiArrowForwardOutline />
          </button>
        </div>

        <div>
          {Carouseldata.map((item) => (
            <div
              key={item.id}
              className={
                 item.id === currentState + 1 
                  ? "flex mt-20 mx-60"
                  : "hidden"
              }
            >
              <div className="basis-1/2">
                <img src={item.profileUrl} className="rounded-lg w-64 h-64" alt="/" />
                <p className="mt-8 text-xl">
                  {item.name}
                  <br />
                  {item.position} <br /> {item.companyName}
                </p>
              </div>

              <p className="my-auto text-2xl basis-1/2">"{item.description}"</p>
            </div>
          ))}
        </div>
      </div>
    </>
};

export default Carousel