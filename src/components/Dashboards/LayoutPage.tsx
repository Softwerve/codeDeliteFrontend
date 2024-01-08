import React from "react";
import BuyerDashboard from "./Common";
import Home from "./BuyerDashboard/Home";
import Favourites from "./BuyerDashboard/Favourites";
import Bag from "./BuyerDashboard/Bag";
export default function LayoutPage({ title }) {
  return (
    <BuyerDashboard pageTitle={title}>
      <div className="min-h-screen flex flex-col">
        {title === "Home" ? <Home /> : title === "Loved Templates" ? <Favourites/>: title === "Your Bag" ? <Bag/> : "Error"}
      </div>
    </BuyerDashboard>
  );
}
