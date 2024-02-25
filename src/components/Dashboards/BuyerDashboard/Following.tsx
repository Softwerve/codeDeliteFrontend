import {
  handleGetAllFollowedAuthors,
  handleGetAuthorsPublishedComponents,
  handleGetAuthorsPublishedWebsites,
} from "@/apiActions/followAction";
import NotFollowingAnyAuthor from "@/components/CustomLoaders/NotFollowingAnyAuthor";
import TemplateEmptyCard from "@/components/CustomLoaders/TemplateEmptyCard";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Following = () => {
  const store = useAppStore();
  const {
    authorPublishedWebsites,
    authorPublishedComponents,
    followedAuthors,
  } = useAppSelector((state) => state.follow);
  
  const [selectedAuthor, setSelectedAuthor] = useState(0);
  useEffect(() => {
    store.dispatch(handleGetAllFollowedAuthors()).then((response)=>{
      setSelectedAuthor(response?.payload[0]?.authorId);
    })
    console.log(selectedAuthor);
    store.dispatch(handleGetAuthorsPublishedWebsites(selectedAuthor));
    store.dispatch(handleGetAuthorsPublishedComponents(selectedAuthor));
  }, []);

  const handleClick=(authorId:number)=> {

  }
  
  return (
    <Stack p={5} background={"#FFEFEF"} minH={"90vh"} spacing={5}>
      <Heading>Authors You Are Following</Heading>
      <Divider />
      {followedAuthors.length > 0 ? (
        <Stack>
          <Slide
            autoplay={false}
            onChange={function noRefCheck() {}}
            onStartChange={function noRefCheck() {}}
            slidesToShow={1}
            indicators={true}
          >
            {followedAuthors?.map((author, index) => (
              <Flex
              justifyContent={'center'}
                alignItems={"center"}
                backgroundSize={"cover"}
                borderRadius={"10px"}
                key={index}
                minH={'200px'}
              >
                <Stack
                  spacing={1}
                  height={"180px"}
                  borderRadius={'10px'}
                  backgroundColor={'#ffffff'}
                  boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'
                  padding={5}
                  justifyContent={'center'}
                  alignItems={'center'}
                  cursor={'pointer'}
                >
                  <Avatar size={'xl'} src={author.profileImage} name={author.username} onClick={() => handleClick(author.authorId)} />
                  <Text>{author.name}</Text>
                  <Text>{author.username}</Text>
                </Stack>
              </Flex>
            ))}
          </Slide>
          <Tabs isFitted>
            <TabList>
              <Tab>Websites</Tab>
              <Tab>Components</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
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
                  {authorPublishedWebsites.length > 0 ? (
                    authorPublishedWebsites?.map((card, index) => (
                      <GridItem key={index}>
                      </GridItem>
                    ))
                  ) : (
                    <TemplateEmptyCard isWeb={true} />
                  )}
                </Grid>
              </TabPanel>
              <TabPanel>
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
                  {authorPublishedComponents.length > 0 ? (
                    authorPublishedComponents?.map((card, index) => (
                      <GridItem key={index}>
                      </GridItem>
                    ))
                  ) : (
                    <TemplateEmptyCard isWeb={false} />
                  )}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      ) : (
        <NotFollowingAnyAuthor />
      )}
    </Stack>
  );
};

export default Following;
