import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "../components/common/Navigation";

const WebsiteLayout = () => {
  return (
    <>
      <div className="dark:bg-darkBody">
        <Navigation />
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default WebsiteLayout;
