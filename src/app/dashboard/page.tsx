"use client";
import LayoutPage from "@/components/Dashboards/LayoutPage";
import React, { useState } from "react";
import StoreProvider from "../StoreProvider";

export default function dashboard() {
  return (
    <StoreProvider>
      <LayoutPage title={"Home"} />
    </StoreProvider>
  );
}
