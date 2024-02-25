
import { useAppSelector} from "@/lib/hooks";
import {
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import CurrentUserBasedComponentCard from "./CurrentUserBasedComponentCard";
import PublicComponentCard from "./PublicComponentCard";

const ComponentCategoryPage = ({ category }: { category: string }) => {
  const { user } = useAppSelector((state) => state.user);
  const itemCategory = decodeURIComponent(category || "");
  return (
    <Stack p={10} spacing={5}>
      <Heading>{itemCategory}</Heading>
      {
        user.email!=null ? <CurrentUserBasedComponentCard category={itemCategory}/> : <PublicComponentCard category={itemCategory} />
      }
    </Stack>
  );
};

export default ComponentCategoryPage;
