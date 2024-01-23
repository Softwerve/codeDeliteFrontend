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
import { handleGetAllPublishedTemplates } from "@/apiActions/templatesAction";

interface TabData {
  id: number;
  title: string;
}

interface Props {
  selectedCategory: String;
}

const Templates: React.FC<Props> = ({ selectedCategory }) => {
  const [selectedTab, setSelectedTab] = useState("all");

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

  // const cards: Card[] = [
  //   {
  //     id: 1,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
  //     category: "Business",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
  //     category: "Dashboard",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
  //     category: "Personal Website",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://media.licdn.com/dms/image/sync/C4E18AQEA4FSD2o7Amg/companyUpdate-article-image-shrink_627_1200/0/1659679841281?e=1707350400&v=beta&t=s9esFURQuKP8m29oj-7OpGl3CAKPB9jltXm9GZ5S7-w",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

  //     category: "Educational",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
  //     category: "Business",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
  //     category: "E-commerce",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

  //     category: "E-commerce",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

  //     category: "Blog",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
  //     author: "Anshul",
  //     authorProfileLink: "",
  //     authorProfileImage:
  //       "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",

  //     category: "Dashboards",
  //     price: 50,
  //     title: "React Tutorial Website",
  //   },
  // ];
  const store = useAppStore();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.templates);
  const templates = data.templates;
  const router = useRouter();
  useEffect(()=>{
    store.dispatch(handleGetAllPublishedTemplates());
  },[]);

  const handleTabChange = (title: string) => {
    setSelectedTab(title);
  };

  // const gridColumns = useBreakpointValue({
  //   base: "repeat(1, 1fr)",
  //   sm: "repeat(2, 1fr)",
  //   md: "repeat(3, 1fr)",
  //   lg: "repeat(4, 1fr)",
  // });

  return (
    <Stack spacing={10} p={"5%"}>
      <Heading>Templates</Heading>
      <Tabs variant="soft-rounded" align="center">
        <TabList gap={"3"} flexWrap={"wrap"}>
          {tabs.map((tab) => (
            <Tab
              mr={2}
              // border={"1px solid white"}
              key={tab.id}
              onClick={() => handleTabChange(tab.title)}
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              <Grid
                templateColumns={['repeat(1,1fr)',"repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]}
                templateRows={"repeat(auto,auto)"}
                gap={5}
              >
                {templates.map((card, index) => (
                    <GridItem key={index}>
                      <TemplateCard card={card} />
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
