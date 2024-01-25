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
} from "@chakra-ui/react";
import React, { useEffect } from "react";

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

const Favourites = () => {
  const store = useAppStore();
  const {lovedItems} = useAppSelector((store)=> store.templates);
  useEffect(()=>{
    store.dispatch(handleGetAllLovedLists());
  },[lovedItems])
  return (
    <ChakraProvider>
      <Stack spacing={10} p={"5%"}>
        <Heading fontSize={"40"}>Your Loved Templates</Heading>
        <Divider />
        <Grid
          templateColumns={"repeat(3,1fr)"}
          templateRows={"repeat(auto,auto)"}
          gap={"10"}
        >
          {lovedItems?.map((card, index) => (
            <GridItem key={index} color={"#17171A"}>
              <TemplateCard card={card} isLoved={true} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </ChakraProvider>
  );
};

export default Favourites;
