"use client";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  handleGetAllCategories,
  handleGetAllPublishedTemplatesOfACategory,
} from "@/apiActions/templatesAction";
import { AiFillLike } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SelectTemplate = () => {
  const router = useRouter();
  const store = useAppStore();
  const { categories } = useAppSelector((state) => state.categories);
  const { templates } = useAppSelector((state)=> state.templates);
  const {user} = useAppSelector((state)=> state.user);
  const [selectedTab,setSelectedTab] = useState("");
  useEffect(() => {
    store.dispatch(handleGetAllCategories());
    store.dispatch(handleGetAllPublishedTemplatesOfACategory("All"));
  }, []);

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });


  const handleTabChange = (category:string) => {
    setSelectedTab(category);
    store.dispatch(handleGetAllPublishedTemplatesOfACategory(category));
  }
  return (
    <Box p={"5%"}>
      <Stack p={["2%","5%"]} spacing={'5'}>
        <Box textAlign={'center'}>
          <Heading>Find Your Perfect Fit - Select a Template</Heading>
          <Text>
            Explore our diverse range of meticulously crafted templates. Browse
            through various styles, functionalititees, and designs to discover the
            ideal foundation for your website project, Your vision starts here
          </Text>

        </Box>
        <Stack
          spacing={5}
          bg={'#FEF2DF'}
          p={["2%"]}
          borderRadius={"10"}
          alignItems={'center'}
        >
         <Flex gap={5} flexWrap={'wrap'}>
           <Text border={selectedTab=="All"?"#ffffff":'2px solid gray'} borderRadius={'30px'} color={selectedTab=="All"?"#ffffff":"gray"} p={2} bg={selectedTab==="All" ? 'blue' : 'none'} cursor={'pointer'} onClick={()=> handleTabChange("All")} >All</Text>
           {
            categories.map((category,index)=>(
              <Text border={selectedTab==category.category?"#ffffff":'2px solid gray'} borderRadius={'30px'} color={selectedTab==category.category?"#ffffff":"#626161"} p={2} bg={selectedTab==category.category ? 'blue' : 'none'} cursor={'pointer'} onClick={()=> handleTabChange(category.category)} key={index}>{category.category}</Text>
            ))
           }
         </Flex>
         <Grid templateRows={'repeat(2,auto)'} templateColumns={'repeat(3,1fr)'} gap={5}>
           {
            templates.map((template,index)=>(
              <GridItem key={index}>
                 <Stack spacing={3} bg={'#ffffff'} p={5} borderRadius={'20px'} boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
                 <Flex gap={3}>
                    <Avatar src={template.authorProfileImage} name={template.authorName} />
                    <Box textAlign={'start'}>
                      <Text fontSize={'sm'} fontWeight='bold'>
                        {template.authorName}
                      </Text>
                      <Text fontSize='sm'>{template.username}</Text>
                    </Box>
                  </Flex>
                  <Image cursor={'pointer'} onClick={()=>user.email!=null ? router.push(`/webtemplates/${template.title.split(" ").join("-")}/${template.tempId}`) : router.push(`/author`)} height={'150px'} src={template.thumbnailImage} alt={template.title} />
                  <Divider/>
                   <Text>{template.title}</Text>
                  <Divider/>
                  <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'} fontSize={'20px'} gap={3}>
                      <AiFillLike color={'#239AE3'} />
                      <Text>{template.likes} Likes</Text> 
                    </Flex>
                    <Badge colorScheme='purple'>
                      ₹{template.price}
                    </Badge>
                  </Flex>
                 </Stack>
              </GridItem>
            ))
           }
         </Grid>
         <Stack alignItems={'center'}>
            <Link href="/webtemplates?category=All" style={{textDecoration:"underline"}} >{"See All >"}</Link>
         </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SelectTemplate;
