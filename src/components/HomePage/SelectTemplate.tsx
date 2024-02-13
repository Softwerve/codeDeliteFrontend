"use client";
import {
  Box,
  Grid,
  Heading,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  GridItem,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import wall from "../../assets/wall1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import {
  handleGetAllCategories,
  handleGetAllPublishedTemplatesOfACategory,
} from "@/apiActions/templatesAction";
import CurrentUserBasedTemplates from "../Templates/CurrentUserBasedTemplates";
import PublicTemplates from "../Templates/PublicTemplates";

const SelectTemplate = () => {
  const store = useAppStore();
  const { categories } = useAppSelector((state) => state.categories);
  const {user} = useAppSelector((state)=> state.user);
  useEffect(() => {
    store.dispatch(handleGetAllCategories());
  }, []);

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const colors = useColorModeValue(
    [
      "red.50",
      "teal.50",
      "blue.50",
      "red.50",
      "teal.50",
      "blue.50",
      "red.50",
      "teal.50",
      "blue.50",
    ],
    [
      "red.900",
      "teal.900",
      "blue.900",
      "red.900",
      "teal.900",
      "blue.900",
      "red.900",
      "teal.900",
      "blue.900",
    ]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bgColor = colors[tabIndex];
  return (
    <Box p={"5%"}>
      <Stack p={"5%"} textAlign={"center"}>
        <Heading>Find Your Perfect Fit - Select a Template</Heading>
        <Text>
          Explore our diverse range of meticulously crafted templates. Browse
          through various styles, functionalititees, and designs to discover the
          ideal foundation for your website project, Your vision starts here
        </Text>
        <Box></Box>
        <Tabs
          bg={bgColor}
          p={"2%"}
          borderRadius={"10"}
        >
          <TabList flexWrap={"wrap"}>
            <Tab>All</Tab>
            {categories?.map((category, index) => (
              <Tab key={index}>{category?.category}</Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel>
            {user.email!="" ? <CurrentUserBasedTemplates category={'All'}/> : <PublicTemplates category={"All"} />}
            </TabPanel>
            {categories?.map((category, index) => (
              <TabPanel key={index}>
                  {user.email!="" ? <CurrentUserBasedTemplates category={category.category}/> : <PublicTemplates category={category.category} />}
              </TabPanel>
            ))}
            <Button
              className="underline-on-hover"
              bg={"none"}
              _hover={{ bg: "none" }}
            >
              See All <FaLongArrowAltRight />{" "}
            </Button>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SelectTemplate;
