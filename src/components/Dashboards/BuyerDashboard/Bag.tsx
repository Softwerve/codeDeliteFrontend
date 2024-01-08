import {
  Box,
  Button,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBagHandle, IoBagRemove } from "react-icons/io5";

const Bag = () => {
  const cards = [
    {
      image:
        "https://media.licdn.com/dms/image/sync/D5610AQF98P9-VcgvBw/image-shrink_800/0/1704450784122/POwerPlatformDeveloper1920x1080jpg?e=1705338000&v=beta&t=O9xz0cJQI2vGh8sLA29HCBf7NvdLeVQVGqSo71UHs-I",
      authorName: "Rail Marcow",
      authorUserName: "rail-marcow-dev",
      price: 0,
    },
    {
      image:
        "https://media.licdn.com/dms/image/sync/D5610AQF98P9-VcgvBw/image-shrink_800/0/1704450784122/POwerPlatformDeveloper1920x1080jpg?e=1705338000&v=beta&t=O9xz0cJQI2vGh8sLA29HCBf7NvdLeVQVGqSo71UHs-I",
      authorName: "Rail Marcow",
      authorUserName: "rail-marcow-dev",
      price: 60,
    },
  ];
  let flexStyle = {
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "20",
  };
  let subTotal = 0;
  cards.forEach((c) => (subTotal += c.price));
  let tax = (subTotal * 18) / 100;
  let total = subTotal + tax;
  return (
    <ChakraProvider>
      <Stack p={"5%"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading>Your Bag</Heading>
          <IoBagHandle fontSize="30px" />
        </Flex>
        <Divider />
        <Text fontStyle={"oblique"} fontSize={"20px"}>
          Building Your Web Solution: Finalize Your Selections
        </Text>
        <Flex justifyContent={"space-between"} mt={"2%"}>
          <Box width={"60%"}>
            {cards.map((card, index) => (
              <Flex
                height={"120px"}
                key={index}
                justifyContent={"space-between"}
                // alignContent={"center"}
                alignItems={'center'}
                padding={"2%"}
                boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                mb={"5"}
              >
                <Image src={card.image}height={'100%'} />
                <Stack spacing={2}>
                  <Text fontWeight={"bold"}>{card.authorName}</Text>
                  <Text>{card.authorUserName}</Text>
                </Stack>
                <Text>{card.price <= 0 ? "Free" : "₹ " + card.price}</Text>
                <Button
                  bg={"#2D7F80"}
                  color={"#ffffff"}
                  _hover={{ bg: "#277273" }}
                >
                  Buy
                </Button>
                <IoBagRemove fontSize="25" />
              </Flex>
            ))}
          </Box>
          <Box
            width={"35%"}
            p={"3%"}
            borderRadius={"10px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <Stack spacing={5}>
              <Text fontSize={"20"} fontWeight={"bold"}>
                Order Summary
              </Text>
              <Flex style={flexStyle}>
                <Text>Subtotal</Text>
                <Text>{"₹ " + subTotal}</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text>GST & Taxes</Text>
                <Text>{"₹ " + tax}</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text fontWeight={"bold"}>Total</Text>
                <Text fontWeight={"bold"}>{"₹ " + total}</Text>
              </Flex>
              <Button
                bg={"#2D7F80"}
                color={"#ffffff"}
                _hover={{ bg: "#277273" }}
              >
                Checkout <FaArrowRightLong />
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </ChakraProvider>
  );
};

export default Bag;
