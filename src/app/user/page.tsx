"use client"
import LogIn from "@/components/Author/Login";
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
import { useRouter } from "next/navigation";
import UserSignup from "@/components/HomePage/UserSignup";

const Page = () => {
  const router = useRouter();
  return (
    <StoreProvider>
      <ChakraProvider>
        <Flex
          bg={"#5E17EB"}
          margin={"auto"}
          justifyContent={"space-between"}
          h={"100vh"}
          direction={['column','row']}
        >
          <Stack spacing={50} width={['100%','60%']} p={"5%"}  >
            <Image src={logo.src} cursor={'pointer'} alt="softwerve" width={"200px"} onClick={()=> router.push('/')} />
            <Box>
              <Box>
                <Heading fontSize="6xl" color={"#ffffff"}>
                  Join the Creative Hub
                </Heading>
                <Box fontSize="xl" opacity={0.8} color={"#fff"}>
                  Sign in or Create Your Account to Enjoy Templates.
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box bg={"#ffffff"} width={['100%',"50%"]} p={'3%'}>
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
                  <UserSignup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default Page;
