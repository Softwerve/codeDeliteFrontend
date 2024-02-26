"use client";
import StoreProvider from "@/app/StoreProvider";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import TemplatesPage from "@/components/Templates/TemplatesPage";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";


const TemplatesContent = ({ params }: { params: { id: number } }) => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Navbar />
        <TemplatesPage id={params.id} />
        <Footer />
      </ChakraProvider>
    </StoreProvider>
  );
};

export default TemplatesContent;
