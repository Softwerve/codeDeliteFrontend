"use client"
import LogIn from "@/components/Author/Login";
import SignUp from "@/components/Author/Signup.jsx";
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
          <Stack spacing={30} width={['100%','60%']} p={"5%"}  >
            <Image src={logo.src} cursor={'pointer'} alt="softwerve" width={"200px"} onClick={()=> router.push('/')} />
            <Stack p={3} border={'1px solid #FFC09C'} borderRadius={'10px'} color={'#ffffff'}>
              <IoWarning fontSize='30px' color='#FFC09C'/>
              <Text fontSize={'15px'}>{"Important Notice: Please ensure accurate credentials during signup, as these details will be utilized for payment processing on our platform."}</Text>
              <Text fontSize={'10px'} opacity={0.8} >{"When Signup,Kindly provide your full name, valid email address, country, and preferred currency for seamless transactions."}</Text>
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

export default Page;
