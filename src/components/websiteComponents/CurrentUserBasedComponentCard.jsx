import {
  handleAddItemToBag,
  handleRemoveItemFromBag,
} from "@/apiActions/bagAction";
import {
  handleFollowAuthor,
  handleGetInspiredByAuthor,
  handleRemoveFromInspiration,
  handleUnfollowAuthor,
} from "@/apiActions/followAction";
import {
  handleGetItemsWhenLoggedIn,
  handleLikeTemplate,
  handleUnlikeTemplate,
} from "@/apiActions/loggedInActions";
import {
  handleAddItemToLovedList,
  handleRemoveItemFromLovedList,
} from "@/apiActions/templatesAction";
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
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import {
  FaEye,
  FaHeartCircleMinus,
  FaHeartCirclePlus,
  FaUserMinus,
} from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { IoBagAdd, IoBagHandleSharp, IoBagRemove } from "react-icons/io5";
import ComponentNotAvailable from "../CustomLoaders/ComponentNotAvailable";
import { TbHeartMinus } from "react-icons/tb";
import { BsBox2HeartFill } from "react-icons/bs";
import likeSound from "../../../public/audio/likeSound.wav";
import unlikeSound from "../../../public/audio/unlike.mp3";
import addToLovedSound from "../../../public/audio/addToLovedItemsSound.wav";
import removeFromLovedSound from "../../../public/audio/removeFromLovedItemsSound.wav";
import addToBagSound from "../../../public/audio/addToBagSound.wav";
import removeFromBagSound from "../../../public/audio/removeFromBagSound.wav";
import followSound from "../../../public/audio/followSound.wav";
import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";

const CurrentUserBasedComponentCard = ({ category }) => {
  const store = useAppStore();
  const toast = useToast();
  const router = useRouter();
  const { templates } = useAppSelector((state) => state.loggedIn);
  const { user } = useAppSelector((state) => state.user);

  const { isLoading, isSuccess, message } = useAppSelector(
    (state) => state.bag
  );
  useEffect(() => {
    store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
  }, []);

  const handleFollow = (authorId,authorUsername) => {
    if(user.role === "USER")
    {
      store.dispatch(handleFollowAuthor(authorId)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
          const audio = new Audio(followSound);
          audio.play();
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    }else if(user.role === "AUTHOR")
    {
      store.dispatch(handleGetInspiredByAuthor(authorUsername)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
          const audio = new Audio(followSound);
          audio.play();
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    }
  };

  const handleUnfollow = (authorId,authorUsername) => {
    if(user.role === "USER")
    {
      store.dispatch(handleUnfollowAuthor(authorId)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    }
    else if(user.role === "AUTHOR")
    {
      store.dispatch(handleRemoveFromInspiration(authorUsername)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    }
  };

  const handleAddLovedItem = (tempId) => {
    store.dispatch(handleAddItemToLovedList(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(addToLovedSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleRemoveLovedItem = (tempId) => {
    store.dispatch(handleRemoveItemFromLovedList(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(removeFromLovedSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleAddToBag = (tempId) => {
    store.dispatch(handleAddItemToBag(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(addToBagSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleRemoveFromBag = (tempId) => {
    store.dispatch(handleRemoveItemFromBag(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(removeFromBagSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleLike = (tempId) => {
    store.dispatch(handleLikeTemplate(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(likeSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleUnLike = (tempId) => {
    store.dispatch(handleUnlikeTemplate(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        const audio = new Audio(unlikeSound);
        audio.play();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return templates.length > 0 ? (
    <Grid
      templateColumns={
        user.role == "AUTHOR" ? "repeat(2,1fr)" : "repeat(3,1fr)"
      }
      templateRows={"repeat(auto,200px)"}
      gap={5}
    >
      {templates.map((component, index) => (
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
                  (window.location.href = `${process.env.NEXT_PUBLIC_AUTHOR_PROFILE_URL}/${component.authorUsername}`)
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
                  <Text fontSize="sm">{component.authorUsername}</Text>
                </Box>
              </Flex>
              { user.role==="AUTHOR" ? component.isAuthorInInspirationList : component.isFollowingAuthor ? (
                <Button
                  variant={"outline"}
                  border={"2px solid #0A66C2"}
                  borderRadius={"20px"}
                  color={"#0A66C2"}
                  _hover={{ bg: "#E4F1FE" }}
                  leftIcon={<FaUserMinus />}
                  onClick={() => handleUnfollow(component.authorId,component.authorUsername)}
                >
                  {user.role == "AUTHOR"
                    ? "Remove From Inspiration"
                    : "Unfollow"}
                </Button>
              ) : (
                <Button
                  variant={"outline"}
                  border={"2px solid #0A66C2"}
                  borderRadius={"20px"}
                  color={"#0A66C2"}
                  _hover={{ bg: "#E4F1FE" }}
                  leftIcon={<IoMdPersonAdd />}
                  onClick={() => handleFollow(component.authorId,component.authorUsername)}
                >
                  {user.role == "AUTHOR" ? "Add To Inspiration" : "Follow"}
                </Button>
              )}
            </Flex>
            <Box>
              <Image
                src={component.thumbnailImage}
                width={"100%"}
                height={"200px"}
                onClick={()=> router.push(`/webtemplates/${component.tempId}`)}
              />
            </Box>
            <Divider/>
            <Text>{component.title}</Text>
            <Divider/>
            <Flex
              justifyContent={"space-between"}
              alignContent={"center"}
              p={"5%"}
              fontSize={"20"}
            >
              {component.isLiked ? (
                <Box
                  onClick={() => handleUnLike(component.tempId)}
                  transition="transform 0.5s"
                  cursor={"pointer"}
                  _hover={{ transform: "scale(2)" }}
                >
                  {" "}
                  <BiSolidLike cursor="pointer" color="#0A66C2" />{" "}
                </Box>
              ) : (
                <Box
                  onClick={() => handleLike(component.tempId)}
                  transition="transform 0.5s"
                  cursor={"pointer"}
                  _hover={{ transform: "scale(2)" }}
                >
                  {" "}
                  <BiLike />{" "}
                </Box>
              )}

              <Box
                transition="transform 0.5s"
                cursor={"pointer"}
                _hover={{ transform: "scale(2)" }}
                color="#5E6EF7"
              >
                <a href={component.tempLink} target="blank">
                  <FaEye />
                </a>
              </Box>

              {user.role == "USER" ? (
                component.isItemInLovedlist ? (
                  <Box
                    transition="transform 0.5s"
                    cursor={"pointer"}
                    _hover={{ transform: "scale(2)" }}
                    color="#E14545"
                    onClick={() => handleRemoveLovedItem(component?.tempId)}
                  >
                    <TbHeartMinus />
                  </Box>
                ) : (
                  <Box
                    transition="transform 0.5s"
                    cursor={"pointer"}
                    _hover={{ transform: "scale(2)" }}
                    color="#FE6B6B"
                    onClick={() => handleAddLovedItem(component?.tempId)}
                  >
                    <FaHeartCirclePlus />
                  </Box>
                )
              ) : null}
              {component.isItemInBag ? (
                <Box
                  transition="transform 0.5s"
                  cursor={"pointer"}
                  _hover={{ transform: "scale(2)" }}
                  color={"#E24D4D"}
                  onClick={() => handleRemoveFromBag(component?.tempId)}
                >
                  <IoBagRemove />
                </Box>
              ) : (
                <Box
                  transition="transform 0.5s"
                  cursor={"pointer"}
                  _hover={{ transform: "scale(2)" }}
                  color="#5EB921"
                  onClick={() => handleAddToBag(component?.tempId)}
                >
                  <IoBagAdd />
                </Box>
              )}
              <Badge colorScheme="purple" p={2}>
                <Flex gap={2} alignItems={"center"}>
                  <Text>
                    {component.price == 0 ? null : user.currencySymbol}
                  </Text>
                  <Text>
                    {component.price == 0
                      ? "Free"
                      : convertCurrencyFromINR(component.price, user.currency)}
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

export default CurrentUserBasedComponentCard;
