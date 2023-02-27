import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import {BaseSetting} from "../utilities/common";


const AppRouter = () => {
    //Design console output
    const ex1234nsdbduehe8re = ["padding: 1rem 1.5rem;", "background: #3872e1;", "font: 1rem/1 Arial;", "color: #ffffff;"].join("");
    console.log("%c%s", ex1234nsdbduehe8re, BaseSetting.name)
    return (
        <Routes>
            <Route path="/" element={<WebsiteLayout />} >
                <Route index element={<Home />} />
             
                <Route path="/contactus" element = {<ContactUs />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout/>}>
                {/* Common */}
                <Route index element = {<Dashboard />} />                
            </Route>
        </Routes>
    )
}

export default AppRouter;