import React, { useState } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import MenuBarMobile from "./MenuBarMobile";
import Home from "../BuyerDashboard/Home";

export default function Layout({ pageTitle, children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
