import { Outlet } from "react-router-dom";
import React from "react";
// import Navigation from "../components/common/Navigation";

const Layout = () => {
  return (
    <>
      <div className="dark:bg-darkBody">
        {/* <Whatever you wanna put here /> 
            <Navigation />
        */}
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;  