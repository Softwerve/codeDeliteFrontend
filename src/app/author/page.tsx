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
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import StoreProvider from "../StoreProvider";
import { IoWarning } from "react-icons/io5";

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
          <Stack spacing={30} width={'60%'} p={"5%"}>
            <Image src={logo.src} alt="softwerve" width={"200px"} />
            <Stack p={3} border={'1px solid #FFC09C'} borderRadius={'10px'} color={'#ffffff'}>
              <IoWarning fontSize='30px' color='#FFC09C'/>
              <Text fontSize={'15px'}>Due to payment security concerns, we currently restrict paid services to India only. However, we continue to offer free services to all users, regardless of location.</Text>
              <Text fontSize={'10px'} opacity={0.8} >Paid services refer to the ability for authors to sell their templates for a fee.</Text>
            </Stack>
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
