import { convertCurrency } from "@/apiActions/currencyExchange";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ComponentNotAvailable from "../CustomLoaders/ComponentNotAvailable";
import { handleComponentsByCategory } from "@/apiActions/components";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useRouter } from "next/navigation";


const PublicComponentCard = ({ category }: { category: string }) => {
  const store = useAppStore();
  const router = useRouter();
  const { components } = useAppSelector((state) => state.components);

  useEffect(() => {
    store.dispatch(handleComponentsByCategory(category));
  }, []);

  return components.length > 0 ? (
    <Grid
      templateColumns={"repeat(3,1fr)"}
      templateRows={"repeat(auto,200px)"}
      gap={5}
    >
      {components.map((component, index) => (
        <GridItem key={index}>
          <Stack
            backgroundColor={"#ffffff"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            borderRadius={"10px"}
          >
            <Flex
              p={2}
              cursor={"pointer"}
              onClick={() =>
                (window.location.href = `http://localhost:3003/profile/public/${component.username}`)
              }
            >
              <Avatar
                src={component.authorProfileImage}
                name={component.authorName}
              />
              <Box ml="3">
                <Text fontWeight="bold">
                  {component.authorName}
                  <Badge ml="1" colorScheme="green">
                    {component.monetizationLevel}
                  </Badge>
                </Text>
                <Text fontSize="sm">{component.username}</Text>
              </Box>
            </Flex>
            <Box>
              <Image
                src={component.thumbnailImage}
                width={"100%"}
                height={"200px"}
                onClick={()=> router.push("http://www.softwerve.com/login")}
              />
            </Box>
            <Flex p={2} justifyContent={"space-between"} alignItems={'center'}>
              <Flex gap={2} alignItems={'center'}>
                <BiSolidLike color="#0A66C2" fontSize={'20px'} />
                <Text>Liked By {component.likes} peoples</Text>
              </Flex>
              <Badge colorScheme="purple" p={2}>
                <Flex gap={2} alignItems={"center"}>
                  <Text>
                    {component.price == 0 ? null : component.currency}
                  </Text>
                  <Text>
                    {component.price == 0
                      ? "Free"
                      : component.price}
                  </Text>
                </Flex>
              </Badge>
            </Flex>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  ) : (
    <ComponentNotAvailable />
  );
};

export default PublicComponentCard;
