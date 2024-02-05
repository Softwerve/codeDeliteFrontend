import { handleGetAllAuthorsFollowCards } from "@/apiActions/authors";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaCubes, FaUserCheck, FaUserFriends } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

const AuthorsFollowCards = ({ searchParams }: { searchParams: any }) => {
  const store = useAppStore();
  const { authorsCards } = useAppSelector((state) => state.authors);
  useEffect(() => {
    store.dispatch(handleGetAllAuthorsFollowCards());
  }, []);

  return (
    <Stack background={"#FDF6F6"} p={'20'}>
      {authorsCards.map((authorCard, index) => (
        <Flex
        borderRadius={'10px'}
          width={"50%"}
          bg={'#ffffff'}
          justifyContent={"space-between"}
          alignItems={"top"}
          p={5}
          key={index}
          margin={"auto"}
          gap={5}
          boxShadow= 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
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
          <Button
            borderRadius={"30px"}
            variant={"outline"}
            colorScheme="blue"
            leftIcon={
              authorCard.followed ? <FaUserCheck /> : <IoMdPersonAdd />
            }
          >
            {authorCard.followed ? "Following" : "Follow"}
          </Button>
        </Flex>
      ))}
    </Stack>
  );
};

export default AuthorsFollowCards;
