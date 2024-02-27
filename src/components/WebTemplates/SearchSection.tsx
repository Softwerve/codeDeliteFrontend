import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import tempBg from '../../assets/templates.png'
import { useAppStore } from "@/lib/hooks";
import { handleSearchTemplate } from "@/apiActions/templatesAction";

const SearchSection = () => {
  const [keyword,setKeyword] = useState("");
  const store = useAppStore();
  const handleSearch=()=>{
    store.dispatch(handleSearchTemplate(keyword));
  }
  const handleInput = (e: string) => {
    setKeyword(e);
    handleSearch();
  }
  return (
    <Stack justifyContent={'center'} alignItems={'center'} minH={'50vh'} color={'#ffffff'} textAlign={"center"} backgroundImage={tempBg.src} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
      <Stack width={["90%","80%","60%"]} spacing={5}>
        <Heading>Explore Our Templates</Heading>
        <Flex gap={3} alignItems={'center'} justifyContent={'space-between'}>
          <InputGroup borderRadius={"10px"} bg={"#ffffff"} color={"#000000"}>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search Templates...." onChange={(e)=>handleInput(e.target.value)} />
          </InputGroup>
          <Button leftIcon={<FaSearch/>} w={'fit-content'} bg={'#F0F848'} color={'#585857'} _hover={{bg:'#ECEC23'}} onClick={handleSearch}>Search</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SearchSection;
