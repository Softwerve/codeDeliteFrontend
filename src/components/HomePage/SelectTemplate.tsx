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
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const SelectTemplate = () => {
  const tabs = [
    {
      id: 1,
      tabName: "All",
      panelContent: [
        {
          pId: 1,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 2,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 3,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 4,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 5,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 6,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
      ],
    },
    {
      id: 2,
      tabName: "Business",
      panelContent: [
        {
          pId: 1,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 2,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 3,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 4,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 5,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 6,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
      ],
    },
    {
      id: 3,
      tabName: "Portfolio",
      panelContent: [
        {
          pId: 1,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 2,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 3,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
        {
          pId: 4,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 5,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Paid",
        },
        {
          pId: 6,
          image: "",
          author: "Anshul Kumar Yadav",
          authorPic: "",
          authorProfileLink: "",
          pricing: "Free",
        },
      ],
    },
  ];
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"]
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
        <Tabs onChange={(index) => setTabIndex(index)} bg={bgColor} p={'2%'} borderRadius={'10'}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index}>{tab.tabName}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <Grid gridTemplateColumns={'repeat(4,1fr)'} gridTemplateRows={'repeat(2,200px)'} gap={'10'}>
                  {tab.panelContent.map((panelContent, ind) => (
                    <GridItem bgColor={'#ffffff'} boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px' borderRadius={'10'}  >
                      <Image
                        src={panelContent.image}
                        alt={panelContent.author}
                      />
                      <Text>By {panelContent.author}</Text>
                      <a href={panelContent.authorProfileLink}>
                        <Image
                          src={panelContent.authorPic}
                          alt={panelContent.author}
                        />
                      </a>
                    </GridItem>
                  ))}
                </Grid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SelectTemplate;
