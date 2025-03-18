"use client"
import {
  handleGetAllAuthorsFollowCards,
  handleGetAllAuthorsFollowCardsWithoutLogin,
} from "@/apiActions/authors";
import {
  handleFollowAuthor,
  handleGetInspiredByAuthor,
  handleRemoveFromInspiration,
  handleUnfollowAuthor,
} from "@/apiActions/followAction";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaCubes, FaUserCheck, FaUserFriends } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import followSound from "../../../../public/audio/followSound.wav";
import { handleUserDetails } from "@/apiActions/userAction";
import Link from "next/link";
import { FaUserMinus } from "react-icons/fa6";
const AuthorsFollowCards = ({ searchParams }) => {
  const store = useAppStore();
  const toast = useToast();
  const { authorsCards } = useAppSelector((state) => state.authors);
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(handleUserDetails());
    if (user.email != "") {
      store.dispatch(handleGetAllAuthorsFollowCards());
    } else {
      store.dispatch(handleGetAllAuthorsFollowCardsWithoutLogin());
    }
  }, []);

  const handleFollow = (authorId, authorUsername) => {
    if (user.role === "USER") {
      store.dispatch(handleFollowAuthor(authorId)).then((response) => {
        if (response?.payload?.success) {
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
        if (!response?.payload?.success) {
          handleToast(response?.payload.message, "error");
        }
      });
    } else if (user.role === "AUTHOR") {
      store
        .dispatch(handleRemoveFromInspiration(authorUsername))
        .then((response) => {
          if (!response?.payload?.success) {
            handleToast(response?.payload.message, "error");
          }
        });
    }
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
    <Stack background={"#FDF6F6"} p={"20"}>
      {authorsCards?.map((authorCard, index) => (
        <Flex
          borderRadius={"10px"}
          width={"50%"}
          bg={"#ffffff"}
          justifyContent={"space-between"}
          alignItems={"top"}
          p={5}
          key={index}
          margin={"auto"}
          gap={5}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Flex>
            <Avatar onClick={()=> router.push(`${process.env.NEXT_PUBLIC_AUTHOR_PROFILE_URL}/${authorCard.username}`)} src={authorCard.profileImage} name={authorCard.name} />
            <Box ml="3">
              <Text fontWeight="bold">
                {authorCard.name}
                <Badge ml="1" colorScheme="green">
                  {authorCard.monetizationLevel}
                </Badge>
              </Text>
              <Link style={{textDecoration:"underline"}} href={`${process.env.NEXT_PUBLIC_AUTHOR_PROFILE_URL}/${authorCard.username}`} target={'blank'}>
                <Text fontSize="sm" >{authorCard.username}</Text>
              </Link>
              <Text color="gray">{authorCard.profileTitle}</Text>
              <Flex gap={"3"} alignItems={"center"}>
                <FaUserFriends />
                <Text>{authorCard.totalFollowers} Followers</Text>
              </Flex>
              <Flex gap={"3"} alignItems={"center"}>
                <FaCubes />
                <Text>{authorCard.totalCreation} Creations</Text>
              </Flex>
            </Box>
          </Flex>
          {(
            user.role === "AUTHOR"
              ? authorCard.isInInspirationList
              : authorCard.followed
          ) ? (
            <Button
              variant={"outline"}
              border={"2px solid #6D2EEA"}
              borderRadius={"20px"}
              color={"#6D2EEA"}
              _hover={{ bg: "#E0D3FA" }}
              leftIcon={<FaUserMinus />}
              onClick={() =>
                handleUnfollow(authorCard.authorId, authorCard.username)
              }
            >
              {user.role == "AUTHOR" ? "Remove From Inspiration" : "Unfollow"}
            </Button>
          ) : (
            <Button
              variant={"outline"}
              border={"2px solid #6D2EEA"}
              borderRadius={"20px"}
              color={"#6D2EEA"}
              _hover={{ bg: "#E0D3FA" }}
              leftIcon={<IoMdPersonAdd />}
              onClick={() =>
                handleFollow(authorCard.authorId, authorCard.username)
              }
            >
              {user.role == "AUTHOR" ? "Add To Inspiration" : "Follow"}
            </Button>
          )}
        </Flex>
      ))}
    </Stack>
  );
};

export default AuthorsFollowCards;
