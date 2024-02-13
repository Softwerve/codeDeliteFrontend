"use client";
import { Heading, Stack, Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import CurrentUserBasedTemplates from "./CurrentUserBasedTemplates";
import PublicTemplates from "./PublicTemplates";
import { handleGetAllCategories } from "@/apiActions/templatesAction";
import { useRouter, useSearchParams } from "next/navigation";

interface TabData {
  id: number;
  title: string;
}

const Templates = () => {
  const store = useAppStore();
  const [selectedTab, setSelectedTab] = useState("All");
  const {user} = useAppSelector((state)=> state.user);
  const {categories} = useAppSelector((state) => state.categories);
  const router = useRouter();
  
  useEffect(()=>{
    store.dispatch(handleGetAllCategories());
  },[])
  
  const handleTabChange = (category:string) => {
    setSelectedTab(category);
  }

  return (
    <Stack spacing={10} p={"5%"}>
      <Heading>Templates</Heading>
      <Tabs variant="soft-rounded" align="center">
        <TabList gap={"3"} flexWrap={"wrap"}>
          <Tab border={"1px solid gray"} onClick={()=> handleTabChange("All")}>
            All
          </Tab>
          {categories.map((tab, id) => (
            <Tab
              mr={2}
              border={"1px solid gray"}
              key={id}
              onClick={() => handleTabChange(tab?.category)}
            >
              {tab?.category}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
          {user.email !=null ? <CurrentUserBasedTemplates category={selectedTab} /> : <PublicTemplates category={selectedTab} />}
          </TabPanel>
          {categories?.map((tab, index) => (
            <TabPanel key={index}>
              {user.email !=null ? <CurrentUserBasedTemplates category={selectedTab} /> : <PublicTemplates category={selectedTab} />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Templates;
