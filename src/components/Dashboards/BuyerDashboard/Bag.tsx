import {handleGetBag, handleRemoveItemFromBag } from "@/apiActions/bagAction";
import { useAppSelector, useAppStore } from "@/lib/hooks";
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
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBagHandle, IoBagRemove } from "react-icons/io5";

const Bag = () => {
  const store = useAppStore();
  const {bagItems,bagTotalAmount} = useAppSelector((state)=> state.bag);
  useEffect(()=>{
    store.dispatch(handleGetBag());
  },[bagItems])

  const handleRemoveItem = (tempId: any) => {
    store.dispatch(handleRemoveItemFromBag(tempId));
  }
  let flexStyle = {
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "20",
  };
  return (
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
            {bagItems?.map((item, index) => (
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
                <Image src={item?.thumbnailImage}height={'100%'} />
                <Stack spacing={2}>
                  <Text fontWeight={"bold"}>{item?.authorName}</Text>
                  <Text>{item?.authorUserName}</Text>
                </Stack>
                <Text>{item?.price <= 0 ? "Free" : "$ " + item?.price}</Text>
                <Button
                  bg={"#2D7F80"}
                  color={"#ffffff"}
                  _hover={{ bg: "#277273" }}
                >
                  Buy
                </Button>
                <IoBagRemove className="temp-icons" fontSize="25" onClick={()=>handleRemoveItem(item?.tempId)} />
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
                <Text>{"$ " + bagTotalAmount}</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text>GST & Taxes</Text>
                <Text>{"$ " + 0}</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text fontWeight={"bold"}>Total</Text>
                <Text fontWeight={"bold"}>{"$ " + bagTotalAmount}</Text>
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
  );
};

export default Bag;
