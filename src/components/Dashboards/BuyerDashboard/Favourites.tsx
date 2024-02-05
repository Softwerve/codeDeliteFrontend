import { handleGetAllLovedLists } from "@/apiActions/templatesAction";
import TemplateCard from "@/components/Templates/TemplateCard";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  ChakraProvider,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const Favourites = () => {
  const store = useAppStore();
  const { lovedItems } = useAppSelector((store) => store.templates);
  useEffect(() => {
    store.dispatch(handleGetAllLovedLists());
  }, [lovedItems]);
  return (
    <ChakraProvider>
      <Stack spacing={10} p={"5%"}>
        <Heading fontSize={"40"}>Your Loved Items</Heading>
        <Divider />
        <Tabs isFitted>
          <TabList>
            <Tab>Websites</Tab>
            <Tab>Components</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={"repeat(3,1fr)"}
                templateRows={"repeat(auto,auto)"}
                gap={"10"}
              >
                {lovedItems?.map((card, index) =>
                  card?.tempType === "Website" ? (
                    <GridItem key={index} color={"#17171A"}>
                      <TemplateCard card={card} isLoved={true} />
                    </GridItem>
                  ) : null
                )}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateColumns={"repeat(3,1fr)"}
                templateRows={"repeat(auto,auto)"}
                gap={"10"}
              >
                {lovedItems?.map((card, index) =>
                  card?.tempType === "Components" ? (
                    <GridItem key={index} color={"#17171A"}>
                      <TemplateCard card={card} isLoved={true} />
                    </GridItem>
                  ) : null
                )}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </ChakraProvider>
  );
};

export default Favourites;
