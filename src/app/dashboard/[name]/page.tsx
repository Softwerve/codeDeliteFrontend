import Navbar from "@/components/Dashboards/Common/Navbar";
import Sidebar from "@/components/Dashboards/Common/Sidebar";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Sidebar/>
      </Box>
    </ChakraProvider>
  );
};

export default page;
