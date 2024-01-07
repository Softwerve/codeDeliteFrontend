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
import Image from "next/image";
import React, { useState } from "react";
import wall from "../../assets/wall1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import TemplateCard from "../Templates/TemplateCard";


interface Card {
  id: number;
  image: string;
  author: string;
  authorProfileLink: string;
  authorProfileImage: string;
  category: string;
  price: number;
  title: string;
}

interface TabData {
  id: number;
  title: string;
}


const SelectTemplate = () => {
  const tabs: TabData[] = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Business",
    },
    {
      id: 3,
      title: "E-commerce",
    },
    {
      id: 4,
      title: "Blog",
    },
    {
      id: 5,
      title: "Personal Website",
    },
    {
      id: 6,
      title: "Educational",
    },
    {
      id: 7,
      title: "Dashboards",
    },
  ];

  const cards: Card[] = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 2,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Dashboard",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 3,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Personal Website",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 4,
      image:
        "https://media.licdn.com/dms/image/sync/C4E18AQEA4FSD2o7Amg/companyUpdate-article-image-shrink_627_1200/0/1659679841281?e=1707350400&v=beta&t=s9esFURQuKP8m29oj-7OpGl3CAKPB9jltXm9GZ5S7-w",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

      category: "Educational",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 5,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "E-commerce",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 6,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

      category: "E-commerce",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 7,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

      category: "Blog",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 8,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

      category: "Dashboards",
      price: 50,
      title: "React Tutorial Website",
    },
  ];

  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50","red.50", "teal.50", "blue.50","red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900","red.900", "teal.900", "blue.900","red.900", "teal.900", "blue.900"]
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
          onChange={(index) => setTabIndex(index)}
          bg={bgColor}
          p={"2%"}
          borderRadius={"10"}
        >
          <TabList flexWrap={'wrap'}>
            {tabs.map((tab, index) => (
              <Tab key={index}>{tab.title}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <Grid
                  gridTemplateColumns={gridColumns}
                  gridTemplateRows={"repeat(2,auto)"}
                  gap={"10"}
                >
                  {cards.map((card, ind) => (
                    <GridItem
                      borderRadius={"10"}
                      key={ind}
                      color={'#ffffff'}
                    >
                      <TemplateCard card={card}/>
                    </GridItem>
                  ))}
                </Grid>
              </TabPanel>
            ))}
            <Button className="underline-on-hover"  bg={'none'} _hover={{bg:'none'}}>See All <FaLongArrowAltRight/> </Button>
          </TabPanels>
        </Tabs>
      </Stack>
    </Box>
  );
};

export default SelectTemplate;
