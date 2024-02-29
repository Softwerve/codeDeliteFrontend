import { handleSearchComponents } from "@/apiActions/components";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Box,
  Heading,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SearchPageCard from "./SearchPageCard";
import { handleSearchTemplate } from "@/apiActions/templatesAction";


const ComponentSearchPage = ({type}) => {
  const store = useAppStore();
  const searchparams = useSearchParams();
  const keyword = decodeURIComponent(`${searchparams.get("keyword")}`);
  const {components} = useAppSelector((state)=> state.components);
  const {templates} = useAppSelector((state)=> state.templates);
  useEffect(() => {
    store.dispatch(handleSearchComponents(keyword));
    store.dispatch(handleSearchTemplate(keyword));
  }, []);
  
  const cards = type=="website"?templates : components;

  return (
    <Stack spacing={10} p={10}>
      <Heading>{keyword !== "" ? keyword : "Components"}</Heading>
      <Stack width={"80%"} margin={"auto"}>
        {cards.length > 0
          ? cards.map((card, index) => (
              <Box key={index}>
                <SearchPageCard component={card} />
              </Box>
            ))
          : "No Search Results Found"}
      </Stack>
    </Stack>
  );
};

export default ComponentSearchPage;
