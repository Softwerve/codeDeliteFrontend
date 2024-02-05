"use client";
import StoreProvider from "@/app/StoreProvider";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Box p={"2%"} bg={"#FDE1FB"}>
          <SearchSection />
            <Templates/>
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default Home;
