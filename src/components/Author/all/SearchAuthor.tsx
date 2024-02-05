import { Button, Flex, Heading, Input,Stack } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../../assets/followBg.png";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchAuthor = () => {
  return (
    <Stack
      p={"10"}
      justifyContent={"center"}
      width={"100%"}
      height={"80vh"}
      background={`url(${bgImage.src})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Stack width={"50%"} spacing={5}>
        <Heading fontSize={"45px"} color={"#ffffff"}>
        Follow Creators for Exclusive Updates On Their Work
        </Heading>
        <Flex width={'70%'} gap={5}>
          <Input backgroundColor={'#ffffff'} type="text" placeholder="Find Talented Creators" />
          <Button leftIcon={<BiSearchAlt2/>} colorScheme="yellow" >Search</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SearchAuthor;
