import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
  return (
    <Box p={"5%"} textAlign={"center"}>
      <Box p={"10%"} bg={"#FFDE59"} borderRadius={"10px"}>
      <Stack width={'60%'} margin={'auto'} spacing={5} >
        <Heading>Explore Our Templates</Heading>
        <InputGroup borderRadius={'10px'} bg={'#ffffff'} color={'#000000'}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>

          <Input type="text" placeholder="Search Templates...." />
        </InputGroup>
        <Text>
          Looking for a specific template? Use our search function to find the
          perfect match for your project. Enter keywords, categories, or
          features you're seeking, and explore a wide range of templates
          tailored to your needs.
        </Text>
      </Stack>

      </Box>
    </Box>
  );
};

export default SearchSection;
