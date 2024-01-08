"use client";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <ChakraProvider>
      <Box p={"2%"} bg={"#FDE1FB"}>
        <SearchSection />
        <Templates selectedCategory={"all"} />
      </Box>
    </ChakraProvider>
  );
};

export default Home;
