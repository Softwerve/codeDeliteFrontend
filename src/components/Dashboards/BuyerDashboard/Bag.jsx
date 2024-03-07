import { handleGetBag, handleRemoveItemFromBag } from "@/apiActions/bagAction";
import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { IoBagHandle, IoBagRemove } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";
import BuyNow from "@/components/Payment/Buynow";
import BuyAll from "@/components/Payment/BuyAll";
const Bag = () => {
  const store = useAppStore();
  const { bagAccordingToAuthor } = useAppSelector((state) => state.bag);
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(handleGetBag());
  }, []);

  const handleRemoveItem = (tempId) => {
    store.dispatch(handleRemoveItemFromBag(tempId)).then((response) => {
      if (response?.payload?.success) {
        store.dispatch(handleGetBag());
      }
    });
  };
  let flexStyle = {
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "20",
  };

  return (
    <Stack minH={"90vh"} p={"5%"}>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>Your Bag</Heading>
        <IoBagHandle fontSize="30px" />
      </Flex>
      <Divider />
      <Text fontStyle={"oblique"} fontSize={"20px"}>
        Building Your Web Solution: Finalize Your Selections
      </Text>
      {bagAccordingToAuthor.length > 0 ? (
        <Stack mt={"2%"}>
          {bagAccordingToAuthor?.map((bag, index) => (
            bag.bagItems.length > 0 ? 
            <Stack
              bg={"#ffffff"}
              padding={"2%"}
              boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
              key={index}
            >
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <Avatar src={bag.authorProfileImage} name={bag.authorName} />
                  <Box ml="3">
                    <Text fontWeight="bold">{bag.authorName}</Text>
                    <Text fontSize="sm">{bag.authorUsername}</Text>
                  </Box>
                </Flex>
                <Text><strong>Total Amount: </strong> {user.currencySymbol}{convertCurrencyFromINR(bag.totalPrice, user?.currency)}</Text>
              </Flex>
              <Stack p={5} borderRadius={"10"} bg={"#F5F2FC"}>
                {bag.bagItems.map((item, ind) => (
                  <Flex
                    height={"120px"}
                    key={ind}
                    bg={"#ffffff"}
                    padding={"2%"}
                    borderRadius={10}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    mb={"5"}
                  >
                    <Image src={item?.thumbnailImage} width={'30%'} height={"100%"} />
                    <Stack spacing={2}>
                      <Text fontWeight={"bold"}>{item?.title}</Text>
                      <Text>{item?.tempType}</Text>
                    </Stack>
                    <Flex alignItems={"center"}>
                      <Text>{user?.currencySymbol}</Text>
                      <Text>
                        {convertCurrencyFromINR(item?.price, user?.currency)}
                      </Text>
                    </Flex>
                    <BuyNow itemId={item?.tempId} />
                    <IoBagRemove
                      color="red"
                      className="temp-icons"
                      fontSize="25"
                      onClick={() => handleRemoveItem(item?.tempId)}
                    />
                  </Flex>
                ))}
              </Stack>
              <Flex justifyContent={'flex-end'}>
                <BuyAll authorId={bag.authorId} />
              </Flex>
            </Stack> : null
          ))}
        </Stack>
      ) : (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Stack justifyContent={"center"} alignItems={"center"} p={20}>
            <MdRemoveShoppingCart fontSize="120px" />
            <Text fontSize={"20px"}>You have not purchased any item</Text>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Bag;
