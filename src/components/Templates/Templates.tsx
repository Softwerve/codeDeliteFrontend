"use client";
import {
  Heading,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import {
  handleGetAllCategories,
  handleGetAllPublishedTemplatesOfACategory,
} from "@/apiActions/templatesAction";

interface TabData {
  id: number;
  title: string;
}

const Templates = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const store = useAppStore();
  const data = useAppSelector((state) => state.templates);
  const templates = data.templates;
  const tabs = useAppSelector((state) => state.categories).categories;
  const router = useRouter();
  useEffect(() => {
    store.dispatch(handleGetAllCategories());
    store.dispatch(handleGetAllPublishedTemplatesOfACategory("All"));
  }, []);
  const handleTabChange = (title: string) => {
    setSelectedTab(title);
    store.dispatch(handleGetAllPublishedTemplatesOfACategory(title));
  };
  // console.log("Templates: ",data,templates);

  return (
    <Stack spacing={10} p={"5%"}>
      <Heading>Templates</Heading>
      <Tabs variant="soft-rounded" align="center">
        <TabList gap={"3"} flexWrap={"wrap"}>
          <Tab border={"1px solid gray"} onClick={() => handleTabChange("All")}>All</Tab>
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
                {templates?.map((card, index) => (
                  <GridItem key={index}>
                    <TemplateCard card={card} isLoved={false} />
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
