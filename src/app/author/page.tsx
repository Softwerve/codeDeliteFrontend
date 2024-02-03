"use client"
import LogIn from "@/components/Author/Login";
import SignUp from "@/components/Author/Signup";
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import StoreProvider from "../StoreProvider";

const page = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Flex
          bg={"#191919"}
          margin={"auto"}
          justifyContent={"space-between"}
          h={"100vh"}
        >
          <Stack spacing={150} width={'60%'} p={"5%"}>
            <Image src={logo.src} alt="softwerve" width={"200px"} />
            <Box>
              <Box>
                <Heading fontSize="6xl" color={"#ffffff"}>
                  Join the Creative Hub
                </Heading>
                <Box fontSize="xl" opacity={0.8} color={"#fff"}>
                  Sign in or Create Your Account to Begin Your Author Journey
                  with CodeDelite
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box bg={"#ffffff"} width={"40%"} p={"5%"}>
            <Tabs isFitted>
              <TabList mb="1em">
                <Tab>LogIn</Tab>
                <Tab>SignUp</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LogIn />
                </TabPanel>
                <TabPanel>
                  <SignUp />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default page;
