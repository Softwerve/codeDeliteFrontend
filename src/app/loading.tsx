import { ChakraProvider, Spinner, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <ChakraProvider>
      <Stack minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text>Loading...</Text>
      </Stack>
    </ChakraProvider>
  );
};

export default Loading;
