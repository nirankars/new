import React from "react";
import { Link } from "react-router-dom";
import growxp from "../Assests/growxp.png";

const Navigation = () => {
  return (
    <>
      <div className="container mx-auto text-white mt-16">
        <nav className="flex justify-between">
          <Link to="/">
            <img src={growxp} className="w-40" alt="Main Logo" />
          </Link>
          <Link to="/ContactUs" className="">
            
              <h1 className="text-4xl font-semibold">contact us</h1>

              <p>git</p>
           
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
