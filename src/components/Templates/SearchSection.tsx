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
import tempBg from '../../assets/tempBg.jpg'

const SearchSection = () => {
  return (
    <Box p={"15%  15% 5% 15%"} color={'#ffffff'} textAlign={"center"} backgroundImage={tempBg.src} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
      <Stack width={["90%","80%","60%"]} margin={"auto"} spacing={5}>
        <Heading>Explore Our Templates</Heading>
        <InputGroup borderRadius={"10px"} bg={"#ffffff"} color={"#000000"}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>

          <Input type="text" placeholder="Search Templates...." />
        </InputGroup>
        <Text>
          Looking for a specific template? Use our search function to find the
          perfect match for your project. Enter keywords, categories, or
          features you are seeking, and explore a wide range of templates
          tailored to your needs.
        </Text>
      </Stack>
    </Box>
  );
};

export default SearchSection;
