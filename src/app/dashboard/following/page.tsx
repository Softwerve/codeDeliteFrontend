import StoreProvider from "@/app/StoreProvider";
import LayoutPage from "@/components/Dashboards/LayoutPage";
import React from "react";

const Following = () => {
  return (
    <StoreProvider>
      <LayoutPage title={"Following"} />
    </StoreProvider>
  );
};

export default Following;
