import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const templates = () => {
  return (
    <ChakraProvider>
      <Box bgColor={"#121212"}>
        <Navbar />
        <SearchSection />
        <Templates/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default templates;
