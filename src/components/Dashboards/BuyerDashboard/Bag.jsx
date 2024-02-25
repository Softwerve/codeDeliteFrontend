import { handleGetBag, handleRemoveItemFromBag } from "@/apiActions/bagAction";
import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
import { handleCreateAnOrder, handleOrderPaymentSuccess } from "@/apiActions/paymentAction";
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
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBagHandle, IoBagRemove } from "react-icons/io5";
import { MdRemoveShoppingCart } from "react-icons/md";
import logo from '../../../app/favicon.ico';
const Bag = () => {
  const store = useAppStore();
  const { bagItems, bagTotalAmount } = useAppSelector((state) => state.bag);
  const {user} = useAppSelector((state)=> state.user);
  const {orderResponse,success} = useAppSelector((state)=> state.payment);
  useEffect(() => {
    store.dispatch(handleGetBag());
  }, []);

  const handleRemoveItem = (tempId) => {
    store.dispatch(handleRemoveItemFromBag(tempId)).then((response)=>{
      if(response?.payload?.success)
      {
        store.dispatch(handleGetBag());
      }
    })
  };
  let flexStyle = {
    justifyContent: "space-between",
    alignContent: "center",
    fontSize: "20",
  };

  const handleBuyItem = (tempId) => {
    store.dispatch(handleCreateAnOrder(tempId)).then((response) => {
      if (response?.payload?.success && response?.payload.orderResponse.orderId) {
        const { amount, name, description, orderId, prefill } = response?.payload?.orderResponse;
        const options = {
          "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
          "amount": amount,
          "currency": "INR",
          "name": name,
          "description": description,
          "image": logo.src,
          "order_id": orderId,
          "handler": function(response) {
            store.dispatch(handleOrderPaymentSuccess({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature
            }));
            store.dispatch(handleGetBag());
          },
          "prefill": {
            "name": prefill.name,
            "email": prefill.email
          },
          "theme": {
            "color": "#3399cc"
          }
        };
  
        const paymentObject = new Razorpay(options);
        paymentObject.open();
      }
    });
  }
  


  const handleCheckout = (e) => {
    e.preventDefault();
    var options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
      "amount": "4566",
      "currency": "INR",
      "name": "Acme Corp", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_NapUflHuPa8q3e", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  
  const paymentObject = new Razorpay(options);
    paymentObject.open();

  }

  return (
    <Stack p={"5%"}>
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading>Your Bag</Heading>
        <IoBagHandle fontSize="30px" />
      </Flex>
      <Divider />
      <Text fontStyle={"oblique"} fontSize={"20px"}>
        Building Your Web Solution: Finalize Your Selections
      </Text>
      {bagItems.length > 0 ? (
        <Flex justifyContent={"space-between"} mt={"2%"}>
          <Box width={"60%"}>
            {bagItems?.map((item, index) => (
              <Flex
                height={"120px"}
                key={index}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"2%"}
                boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                mb={"5"}
              >
                <Image src={item?.thumbnailImage} height={"100%"} />
                <Stack spacing={2}>
                  <Text fontWeight={"bold"}>{item?.authorName}</Text>
                  <Text>{item?.authorUserName}</Text>
                </Stack>
                <Flex alignItems={'center'}>
                  <Text>{user?.currencySymbol}</Text>
                  <Text>{convertCurrencyFromINR(item?.price,user?.currency)}</Text>
                </Flex>
                <Button
                  bg={"#2D7F80"}
                  color={"#ffffff"}
                  _hover={{ bg: "#277273" }}
                  onClick={()=> handleBuyItem(item?.tempId)}
                >
                  Buy
                </Button>
                <IoBagRemove
                  className="temp-icons"
                  fontSize="25"
                  onClick={() => handleRemoveItem(item?.tempId)}
                />
              </Flex>
            ))}
          </Box>
          <Box
            width={"35%"}
            p={"3%"}
            borderRadius={"10px"}
            height={'min-content'}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            position={'sticky'}
          >
            <Stack spacing={5}>
              <Text fontSize={"20"} fontWeight={"bold"}>
                Order Summary
              </Text>
              <Flex style={flexStyle}>
                <Text>Subtotal</Text>
                <Text>{user?.currencySymbol}{convertCurrencyFromINR(bagTotalAmount,user.currency) }</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text>GST & Taxes(18%)</Text>
                <Text>{user?.currencySymbol}{convertCurrencyFromINR(bagTotalAmount*0.18,user.currency)}</Text>
              </Flex>
              <Flex style={flexStyle}>
                <Text fontWeight={"bold"}>Total</Text>
                <Text fontWeight={"bold"}>{user?.currencySymbol}{convertCurrencyFromINR((bagTotalAmount+(bagTotalAmount*0.18)),user.currency)}</Text>
              </Flex>
              <Button
                id="rzp-button1"
                bg={"#2D7F80"}
                color={"#ffffff"}
                _hover={{ bg: "#277273" }}
                onClick={handleCheckout}
              >
                Checkout <FaArrowRightLong />
              </Button>
             
            </Stack>
          </Box>
        </Flex>
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
