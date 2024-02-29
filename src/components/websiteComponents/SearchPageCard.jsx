import React from "react";
import likeSound from "../../../public/audio/likeSound.wav";
import unlikeSound from "../../../public/audio/unlike.mp3";
import addToLovedSound from "../../../public/audio/addToLovedItemsSound.wav";
import removeFromLovedSound from "../../../public/audio/removeFromLovedItemsSound.wav";
import addToBagSound from "../../../public/audio/addToBagSound.wav";
import removeFromBagSound from "../../../public/audio/removeFromBagSound.wav";
import followSound from "../../../public/audio/followSound.wav";
import { BiLike } from "react-icons/bi";
import { FaEye, FaHeartCirclePlus, FaUserMinus } from "react-icons/fa6";
import { TbHeartMinus } from "react-icons/tb";
import { IoBagAdd, IoBagRemove } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { useAppSelector } from "@/lib/hooks";
import { Avatar, Badge, Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

const SearchPageCard = ({component}) => {
  const user = useAppSelector((state)=> state.user);
  const truncateOverview = (overview) => {
    const lines = overview.split(".");
    const truncatedOverview = lines.slice(0, 2).join("\n");
    if (lines.length > 2) {
      return truncatedOverview + "...";
    }
    return truncatedOverview;
  };

  const handleFollow = (authorId, authorUsername) => {
    if (user.role === "USER") {
      store.dispatch(handleFollowAuthor(authorId)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
          const audio = new Audio(followSound);
          audio.play();
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    } else if (user.role === "AUTHOR") {
      store
        .dispatch(handleGetInspiredByAuthor(authorUsername))
        .then((response) => {
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

  const handleUnfollow = (authorId, authorUsername) => {
    if (user.role === "USER") {
      store.dispatch(handleUnfollowAuthor(authorId)).then((response) => {
        if (response?.payload?.success) {
          store.dispatch(handleGetItemsWhenLoggedIn(category, "component"));
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    } else if (user.role === "AUTHOR") {
      store
        .dispatch(handleRemoveFromInspiration(authorUsername))
        .then((response) => {
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
        store.dispatch(handleGetItemsWhenLoggedIn(category, "template"));
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
  return (
    <Flex gap={5} height={"300px"} overflow={"hidden"}>
      <Image
        borderRadius={"30px"}
        width={"35%"}
        height={"200px"}
        src={component.thumbnailImage}
        alt={component.title}
      />
      <Stack p={5}>
        <Flex justifyContent={"space-between"} alignItems={"top"}>
          <Flex>
            <Avatar src={component.authorProfileImage} />
            <Box ml="3">
              <Text fontWeight="bold">
                {component.authorName}
                {/* <Badge ml="1" colorScheme="green">
                  {component.monetizationLevel}
                  NOVICE
                </Badge> */}
              </Text>
              <Text fontSize="sm">{component.username}</Text>
            </Box>
          </Flex>
          {/* {(
            user.role === "AUTHOR"
              ? component.isAuthorInInspirationList
              : component.isFollowingAuthor
          ) ? (
            <Button
              variant={"outline"}
              border={"2px solid #0A66C2"}
              borderRadius={"20px"}
              color={"#0A66C2"}
              _hover={{ bg: "#E4F1FE" }}
              leftIcon={<FaUserMinus />}
              onClick={() =>
                handleUnfollow(component.authorId, component.authorUsername)
              }
            >
              {user.role == "AUTHOR" ? "Remove From Inspiration" : "Unfollow"}
            </Button>
          ) : (
            <Button
              variant={"outline"}
              border={"2px solid #0A66C2"}
              borderRadius={"20px"}
              color={"#0A66C2"}
              _hover={{ bg: "#E4F1FE" }}
              leftIcon={<IoMdPersonAdd />}
              onClick={() =>
                handleFollow(component.authorId, component.authorUsername)
              }
            >
              {user.role == "AUTHOR" ? "Add To Inspiration" : "Follow"}
            </Button>
          )} */}
        </Flex>

        <Text fontWeight={"bold"}>{component.title}</Text>
        <Text textAlign={"start"}>
          {truncateOverview(component?.templatePage?.overview)}
        </Text>
        {/* <Flex
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
              <Text>{component.price == 0 ? null : user.currencySymbol}</Text>
              <Text>
                {component.price == 0
                  ? "Free"
                  : convertCurrencyFromINR(component.price, user.currency)}
              </Text>
            </Flex>
          </Badge>
        </Flex> */}
      </Stack>
    </Flex>
  );
};

export default SearchPageCard;
