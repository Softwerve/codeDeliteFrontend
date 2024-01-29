"use client";
import React, { useEffect, useState } from "react";
import Home from "./BuyerDashboard/Home";
import Favourites from "./BuyerDashboard/Favourites";
import Bag from "./BuyerDashboard/Bag";
import StoreProvider from "@/app/StoreProvider";
import Navbar from "./Common/Navbar";
import { Box, ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "./Common/Sidebar";
import Following from "./BuyerDashboard/Following";
import PurchaseBag from "./BuyerDashboard/PurchaseBag";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { handleUserDetails } from "@/apiActions/userAction";
export default function LayoutPage({ title }) {
  const store = useAppStore();
  return (
    <ChakraProvider>
      <Flex>
        <Box position={"sticky"} width={["0%", "20%"]}>
          <Sidebar />
        </Box>
        <Stack width={["100%", "80%"]}>
          <Navbar />
          {title == "Home" ? (
            <Home />
          ) : title == "Following" ? (
            <Following />
          ) : title == "Bag" ? (
            <Bag />
          ) : title == "Loved Templates" ? (
            <Favourites />
          ) : title == "Purchase Bag" ? (
            <PurchaseBag />
          ) : (
            "Error"
          )}
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
