"use client";
import React, { useEffect, useState } from "react";
import Home from "./BuyerDashboard/Home";
import Favourites from "./BuyerDashboard/Favourites";
import Bag from "./BuyerDashboard/Bag";
import StoreProvider from "@/app/StoreProvider";
import Navbar from "./Common/Navbar";
import { Box, ChakraProvider, Flex, Stack, Text } from "@chakra-ui/react";
import Sidebar from "./Common/Sidebar";
import Following from "./BuyerDashboard/Following";
import PurchaseBag from "./BuyerDashboard/PurchaseBag";
import Templates from "../Templates/Templates";
import { useAppSelector } from "@/lib/hooks";
export default function LayoutPage({ title }: { title: any }) {
  const { user } = useAppSelector((state) => state.user);
  return (
    <ChakraProvider>
      {user.role === "USER" ? (
        <Flex>
          <Box position={"sticky"} width={["0%", "20%"]}>
            <Sidebar />
          </Box>
          <Stack width={["100%", "80%"]}>
            <Navbar />
            {title == "Home" ? (
              <Home />
            ) : title == "Templates" ? (
              <Templates />
            ) : title == "Following" ? (
              <Following />
            ) : title == "Bag" ? (
              <Bag />
            ) : title == "Loved Items" ? (
              <Favourites />
            ) : title == "Purchase Bag" ? (
              <PurchaseBag />
            ) : (
              "Error"
            )}
          </Stack>
        </Flex>
      ) : 
      <Stack justifyContent={'center'} minH={'100vh'} alignItems={'center'}>
        <Text fontSize='80px'>No Access</Text>
      </Stack>
      }
    </ChakraProvider>
  );
}
