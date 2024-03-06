import {
    Button,
    Spinner,
    Stack,
    Text,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import { useAppSelector, useAppStore } from "@/lib/hooks";
  import {
    handleOrderPaymentSuccess,
  } from "@/apiActions/paymentAction";
  import { useRouter } from "next/navigation";
  import logo from "@/assets/codedelite.png";
  import { handleUserDetails } from "@/apiActions/userAction";
  import Cookies from "universal-cookie";
  import Script from "next/script";
  
  
  const Paynow = ({ orderId, amount}) => {
    const store = useAppStore();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useAppSelector((state) => state.user);
    const cookies = new Cookies();
    const token = cookies.get("token");
    const { isLoading } = useAppSelector((state) => state.payment);
    useEffect(() => {
      store.dispatch(handleUserDetails());
    }, []);
  
    const handlePayNow = () => {
       const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount,
        currency: "INR",
        name: user.name,
        description: "Enjoy smooth transactions with our secure Razorpay gateway on CodeDelite. Purchase favorite coded templates hassle-free",
        image: logo.src,
        order_id: orderId,
        handler: function (response) {
          store.dispatch(handleOrderPaymentSuccess({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            })
          ).then((purchasedResponse)=> {
            if(purchasedResponse?.success)
            {
              if (user.role == "AUTHOR") {
                router.push(
                  `${process.env.NEXT_PUBLIC_AUTHOR_DASHBOARD_URL}/purchased?screen=Purchased-Bag&access=${token}`
                );
              } else {
                router.push("/dashboard/purchased?screen=Purchase-Bag");
              }
            }
          })
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#6D2EEA",
        },
      }
      const paymentObject = window.Razorpay(options);
      paymentObject.open();
    };
  
    return (
      <>
        <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
        <Button
          bg={"#8C53FF"}
          color={"#ffffff"}
          _hover={{ bg: "#6D2EEA" }}
          onClick={handlePayNow}
        >
          Pay Now
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Order Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {isLoading ? (
                <Stack alignItems={"center"}>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                  <Text>Processing...</Text>
                </Stack>
              ) : null}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default Paynow;
  