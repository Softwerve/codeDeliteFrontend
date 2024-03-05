"use client";
import { Heading, Stack, Box, Flex } from "@chakra-ui/react";
import React, {useEffect, useState } from "react";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import CurrentUserBasedTemplates from "./CurrentUserBasedTemplates";
import PublicTemplates from "./PublicWebTemplates";
import { handleGetAllCategories } from "@/apiActions/templatesAction";
import { useRouter, useSearchParams } from "next/navigation";

const TemplatesSection = () => {
  const store = useAppStore();
  const { user } = useAppSelector((state) => state.user);
  const { categories } = useAppSelector((state) => state.categories);
  const router  = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const selectedTab = decodeURIComponent(`${categoryParam}`);
  useEffect(() => {
    store.dispatch(handleGetAllCategories());
  }, []);

  const handleTabChange = (category: string) => {
    router.push(`/webtemplates?category=${category.split(" ").join("-")}`)
  }
  
  return (
    <Stack spacing={10} p={"5%"}>
      <Heading>Templates</Heading>
      <Stack align="center">
        <Flex gap={"3"} flexWrap={"wrap"} alignItems={"center"}>
          <Box
            bg={selectedTab=="All"?"#8C53FF":"none"}
            color={selectedTab=="All"?"#ffffff":"#000000"}
            cursor={'pointer'}
            borderRadius={"30px"}
            p={2}
            border={selectedTab=="All"?"#ffffff":"1px solid gray"}
            onClick={() => handleTabChange("All")}
          >
            All
          </Box>
          {categories.map((tab, id) => (
            <Box
            bg={selectedTab==tab.category ?"#8C53FF":"none"}
            color={selectedTab==tab.category ?"#ffffff":"#000000"}
              borderRadius={"30px"}
              p={2}
              border={"1px solid gray"}
              key={id}
              cursor={"pointer"}
              onClick={() => handleTabChange(tab?.category)}
            >
              {tab?.category}
            </Box>
          ))}
        </Flex>
        <Stack>
          {
            selectedTab==="All" ?
            user.email != null && user.email != "" ? <CurrentUserBasedTemplates category={selectedTab}  />:<PublicTemplates category={selectedTab} />
            : categories.map((category,index)=>(
               selectedTab===category.category ? user.email != null && user.email != "" ? <CurrentUserBasedTemplates category={selectedTab}  />:<PublicTemplates category={selectedTab} /> : null
            ))
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TemplatesSection;

