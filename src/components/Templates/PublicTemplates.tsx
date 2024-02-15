import React, { useEffect } from "react";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import ComponentNotAvailable from "../CustomLoaders/ComponentNotAvailable";
import { handleGetAllPublishedTemplatesOfACategory } from "@/apiActions/templatesAction";
import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
const PublicTemplates = ({ category }: { category: string }) => {
  const store = useAppStore();
  const { templates } = useAppSelector((state) => state.templates);
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(handleGetAllPublishedTemplatesOfACategory(category));
  }, []);
  return templates.length > 0 ? (
    <Grid
      templateColumns={"repeat(3,1fr)"}
      templateRows={"repeat(auto,200px)"}
      gap={5}
    >
      {templates.map((template, index) => (
        <GridItem key={index}>
          <Stack
            backgroundColor={"#ffffff"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            borderRadius={"10px"}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"} p={3}>
              <Flex
                cursor={"pointer"}
                onClick={() =>
                  (window.location.href = `http://localhost:3003/profile/public/${template.username}`)
                }
              >
                <Avatar
                  src={template.authorProfileImage}
                  name={template.authorName}
                />
                <Box ml="3">
                  <Text fontWeight="bold">{template.authorName}</Text>
                  <Text fontSize="sm">{template.username}</Text>
                </Box>
              </Flex>
            </Flex>
            <Box>
              <Image
                src={template.thumbnailImage}
                width={"100%"}
                height={"200px"}
              />
            </Box>
            <Badge colorScheme="purple" p={2}>
              <Flex gap={2} alignItems={"center"}>
                <Text>{template.price == 0 ? null : user.currencySymbol}</Text>
                <Text>
                  {template.price == 0
                    ? "Free"
                    : convertCurrencyFromINR(template.price, user.currency)}
                </Text>
              </Flex>
            </Badge>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  ) : (
    <ComponentNotAvailable />
  );
};

export default PublicTemplates;
