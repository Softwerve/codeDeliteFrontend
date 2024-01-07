'use client'
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SearchSection from "@/components/Templates/SearchSection";
import Templates from "@/components/Templates/Templates";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";

const templates = () => {
  const param = useParams();
  return (
    <ChakraProvider>
      <head>
        <title>Templates</title>
        <meta name="description" content="A Code Website Template Hub"/>
      </head>
      <Box bgColor={"#121212"}>
        <Navbar />
        <SearchSection />
        <Templates selectedCategory={param.toString()}/>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default templates;
