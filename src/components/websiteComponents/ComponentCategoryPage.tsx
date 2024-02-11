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
import { IoBagHandleSharp, IoPricetags } from "react-icons/io5";
import ComponentNotAvailable from "../CustomLoaders/ComponentNotAvailable";
import {
  convertCurrency,
  getCurrencySymbol,
} from "@/apiActions/currencyExchange";
import { handleUserDetails } from "@/apiActions/userAction";
import { FaTag } from "react-icons/fa";

const ComponentCategoryPage = ({ category }: { category: string }) => {
  const store = useAppStore();
  const toast = useToast();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const { components } = useAppSelector((state) => state.components);
  const { isLoading, isSuccess, message } = useAppSelector(
    (state) => state.bag
  );
  const data = useAppSelector((state) => state.templates);
  useEffect(() => {
    store.dispatch(handleComponentsByCategory(category));
  }, []);

  const handleFollow = (authorId: number) => {
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
      <Heading>{decodeURIComponent(category || "")}</Heading>
      {components.length > 0 ? (
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
                borderRadius={'10px'}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  p={3}
                >
                  <Flex
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
                  <IoMdPersonAdd
                    cursor="pointer"
                    onClick={() => handleFollow(component.authorId)}
                  />
                </Flex>
                <Box>
                  <Image src={component.thumbnailImage} width={'100%'} height={'200px'} />
                </Box>
                <Flex
                  justifyContent={"space-between"}
                  alignContent={"center"}
                  p={"5%"}
                  fontSize={"20"}
                >
                  <BiLike className="temp-icons" cursor="pointer" />
                  <FaEye
                    cursor="pointer"
                    className="temp-icons"
                    onClick={() => router.push(`${component?.tempLink}`)}
                  />

                  <FaHeartCirclePlus
                    className="temp-icons"
                    cursor="pointer"
                    onClick={() => handleAddLovedItem(component?.tempId)}
                  />

                  <IoBagHandleSharp className="temp-icons" cursor="pointer" />
                  <Badge colorScheme="purple" p={2}>
                    <Flex gap={2} alignItems={'center'}>
                      <Text>{getCurrencySymbol(user.currency)}</Text>
                      <Text>
                        {convertCurrency(
                          component.price,
                          component.currency,
                          user.currency
                        )}
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
      )}
    </Stack>
  );
};

export default ComponentCategoryPage;
