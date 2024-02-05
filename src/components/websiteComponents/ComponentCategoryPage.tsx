import { handleComponentsByCategory } from "@/apiActions/components";
import { handleFollowAuthor } from "@/apiActions/followAction";
import {
  handleAddItemToLovedList,
  handleRemoveItemFromLovedList,
} from "@/apiActions/templatesAction";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { FaEye, FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
import ComponentNotAvailable from "../CustomLoaders/ComponentNotAvailable";

const ComponentCategoryPage = ({ category }: { category: string }) => {
  const store = useAppStore();
  const { components } = useAppSelector((state) => state.components);
  const toast = useToast();
  const router = useRouter();
  const { isLoading, isSuccess, message } = useAppSelector(
    (state) => state.bag
  );
  const data = useAppSelector((state) => state.templates);
  useEffect(() => {
    store.dispatch(handleComponentsByCategory(category));
  }, []);

  const handleFollow = (authorId:number) => {
    store.dispatch(handleFollowAuthor(authorId)).then((response) => {
      if (response?.payload?.success) {
        handleToast(response?.payload.message, "success");
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleAddLovedItem = (tempId: number) => {
    store.dispatch(handleAddItemToLovedList(tempId));
    if (!data.isLoading && data.isSuccess) {
      handleToast(message, "success");
    } else if (!isLoading && !isSuccess) {
      handleToast(message, "error");
    }
  };

  const handleRemoveLovedItem = (tempId: any) => {
    store.dispatch(handleRemoveItemFromLovedList(tempId));
  };

  const handleToast = (message: any, status: any) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Stack p={10} spacing={5}>
      <Heading>{decodeURIComponent(category || '')}</Heading>
      {components.length > 0 ? (
        <Grid
          templateColumns={"repeat(2,1fr)"}
          templateRows={"repeat(auto,200px)"}
          gap={5}
        >
          {components.map((component, index) => (
            <GridItem key={index}>
              <Stack
                backgroundColor={"#ffffff"}
                boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
              >
                <Flex justifyContent={'space-between'} alignItems={'center'} p={3}>
                  <Flex>
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
                  <IoMdPersonAdd onClick={()=>handleFollow(component.authorId)} />
                </Flex>
                <Box>
                  <Image src={component.thumbnailImage} />
                </Box>
                <Flex
                  justifyContent={"space-between"}
                  alignContent={"center"}
                  p={"5%"}
                  fontSize={"20"}
                >
                  <BiLike className="temp-icons" />
                  <FaEye
                    className="temp-icons"
                    onClick={() => router.push(`${component?.tempLink}`)}
                  />

                  <FaHeartCirclePlus
                    className="temp-icons"
                    onClick={() => handleAddLovedItem(component?.tempId)}
                  />

                  <IoBagHandleSharp className="temp-icons" />
                </Flex>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <ComponentNotAvailable/>
      )}
    </Stack>
  );
};

export default ComponentCategoryPage;
