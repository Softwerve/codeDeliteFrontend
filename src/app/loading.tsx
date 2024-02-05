
import { Box, ChakraProvider, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <ChakraProvider>
      <Box padding="6" boxShadow="lg" bg="blue">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </ChakraProvider>
  );
};

export default Loading;
