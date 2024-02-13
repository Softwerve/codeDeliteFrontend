import { handleGetAllAuthorsFollowCards } from "@/apiActions/authors";
import { handleFollowAuthor, handleUnfollowAuthor } from "@/apiActions/followAction";
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
import followSound from '../../../../public/audio/followSound.wav';
const AuthorsFollowCards = ({ searchParams }: { searchParams: any }) => {
  const store = useAppStore();
  const toast = useToast();
  const { authorsCards } = useAppSelector((state) => state.authors);
  useEffect(() => {
    store.dispatch(handleGetAllAuthorsFollowCards());
  }, []);

  const handleFollow = (authorId: number) => {
    store.dispatch(handleFollowAuthor(authorId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetAllAuthorsFollowCards());
        const audio = new Audio(followSound);
        audio.play();
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleUnfollow = (authorId: number) => {
    store.dispatch(handleUnfollowAuthor(authorId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetAllAuthorsFollowCards());
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
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
    <Stack background={"#FDF6F6"} p={"20"}>
      {authorsCards.map((authorCard, index) => (
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
            <Avatar src={authorCard.profileImage} name={authorCard.name} />
            <Box ml="3">
              <Text fontWeight="bold">
                {authorCard.name}
                <Badge ml="1" colorScheme="green">
                  {authorCard.monetizationLevel}
                </Badge>
              </Text>
              <Text fontSize="sm">{authorCard.username}</Text>
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
          {!authorCard.followed ? (
            <Button
              borderRadius={"30px"}
              variant={"outline"}
              colorScheme="blue"
              leftIcon={<IoMdPersonAdd />}
              onClick={()=> handleFollow(authorCard.authorId)}
            >
              Follow
            </Button>
          ) : (
            <Button
              borderRadius={"30px"}
              variant={"outline"}
              colorScheme="blue"
              leftIcon={<FaUserCheck />}
              onClick={()=> handleUnfollow(authorCard.authorId)}
            >
              Following
            </Button>
          )}
        </Flex>
      ))}
    </Stack>
  );
};

export default AuthorsFollowCards;
