"use client";
import { Heading, Stack, Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { Suspense, useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  handleGetAllCategories,
  handleGetAllPublishedTemplatesOfACategory,
} from "@/apiActions/templatesAction";
import { handleGetItemsWhenLoggedIn } from "@/apiActions/loggedInActions";

interface TabData {
  id: number;
  title: string;
}

const Templates = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const store = useAppStore();
  const data = useAppSelector((state) => state.templates);
  const {templates} = useAppSelector((state)=> state.loggedIn); 
  const {isLogin} = useAppSelector((state)=> state.auth);
  const beforeLogintemplates = data.templates;
  const tabs = useAppSelector((state) => state.categories).categories;
  useEffect(() => {
    store.dispatch(handleGetAllCategories());
    if(isLogin)
    {
      store.dispatch(handleGetItemsWhenLoggedIn("All","Template"));
    }
    else{
      store.dispatch(handleGetAllPublishedTemplatesOfACategory("All"));
    }
  }, []);
  const handleTabChange = (title: string) => {
    setSelectedTab(title);
    if(isLogin)
    {
      store.dispatch(handleGetItemsWhenLoggedIn(title,"Template"));
    }
    else{
      store.dispatch(handleGetAllPublishedTemplatesOfACategory(title));
    }
  };

  const cards = isLogin ? templates : beforeLogintemplates;

  return (
    <Stack spacing={10} p={"5%"}>
      <Heading>Templates</Heading>
      <Tabs variant="soft-rounded" align="center">
        <TabList gap={"3"} flexWrap={"wrap"}>
          <Tab border={"1px solid gray"} onClick={() => handleTabChange("All")}>
            All
          </Tab>
          {tabs.map((tab, id) => (
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
          {tabs?.map((tab, index) => (
            <TabPanel key={index}>
              <Grid
                templateColumns={[
                  "repeat(1,1fr)",
                  "repeat(2,1fr)",
                  "repeat(3,1fr)",
                  "repeat(4,1fr)",
                ]}
                templateRows={"repeat(auto,auto)"}
                gap={5}
              >
                {cards?.map((card, index) => (
                  <GridItem key={index}>
                    <Suspense>
                      <TemplateCard card={card} isLoved={false} />
                    </Suspense>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Templates;
