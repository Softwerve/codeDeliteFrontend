"use client";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { Suspense } from "react";
import StoreProvider from "../StoreProvider";
import Loading from "../loading";

const templates = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <head>
          <title>Templates</title>
          <meta name="description" content="A Code Website Template Hub" />
        </head>
        <Box>
          <Navbar />
          <SearchSection />
          <Templates />
          <Footer />
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default templates;
