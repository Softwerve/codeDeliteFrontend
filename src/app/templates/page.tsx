"use client";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import StoreProvider from "../StoreProvider";

const templates = () => {
  const param = useParams();
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
          <Templates selectedCategory={param.toString()} />
          <Footer />
        </Box>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default templates;
