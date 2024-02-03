"use client";
import StoreProvider from "@/app/StoreProvider";
import LayoutPage from "@/components/Dashboards/LayoutPage";
import React from "react";

const page = () => {
  return (
    <StoreProvider>
      <LayoutPage title={"Loved Items"} />
    </StoreProvider>
  );
};

export default page;
