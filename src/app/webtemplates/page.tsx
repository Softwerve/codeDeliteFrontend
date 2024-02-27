"use client";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SearchSection from "@/components/websiteTemplates/SearchSection";
import Templates from "@/components/websiteTemplates/WebTemplatesSection";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import StoreProvider from "../StoreProvider";

const TemplatesPage = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
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

export default TemplatesPage;
