import { Button, Flex, Heading, Input,Stack } from "@chakra-ui/react";
import React from "react";
import componentsImage from "../../assets/components2.png";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchComponents = () => {
  return (
    <Stack
      p={"10"}
      justifyContent={"center"}
      width={"100%"}
      height={"80vh"}
      background={`url(${componentsImage.src})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Stack width={['100%',"60%"]} spacing={5}>
        <Heading fontSize={['30px',"45px"]} color={"#ffffff"}>
          Explore Powerful and Innovative Component Templates for Seamless
          Development
        </Heading>
        <Flex direction={['column','row']} width={['100%','70%']} gap={5}>
          <Input backgroundColor={'#ffffff'} type="text" placeholder="Search For Component Templates" />
          <Button leftIcon={<BiSearchAlt2/>}w={'fit-content'} bg={'#F0F848'} color={'#585857'} _hover={{bg:'#ECEC23'}}colorScheme="yellow" >Search</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SearchComponents;
