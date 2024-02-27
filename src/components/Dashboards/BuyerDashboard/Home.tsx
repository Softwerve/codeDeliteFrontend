"use client";
import StoreProvider from "@/app/StoreProvider";
import SearchSection from "@/components/WebTemplates/SearchSection";
import Templates from "@/components/WebTemplates/WebTemplatesSection";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Box p={"2%"}>
          <SearchSection />
          <Templates/>
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default Home;
