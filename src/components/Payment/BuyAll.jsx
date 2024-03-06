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
    handleCreateAnOrderAccordingToAuthor,
    handleOrderPaymentSuccess,
  } from "@/apiActions/paymentAction";
  import { FaCircleCheck } from "react-icons/fa6";
  import { useRouter } from "next/navigation";
  import { handleGetBag } from "@/apiActions/bagAction";
  import logo from "@/assets/codedelite.png";
  import { handleUserDetails } from "@/apiActions/userAction";
  import Cookies from "universal-cookie";
  import Script from "next/script";
  
  
  const BuyAll = ({ authorId }) => {
    const store = useAppStore();
    const toast = useToast();
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [options, setOptions] = useState({});
    const { user } = useAppSelector((state) => state.user);
    const cookies = new Cookies();
    const token = cookies.get("token");
    const { isLoading } = useAppSelector((state) => state.payment);
    useEffect(() => {
      store.dispatch(handleUserDetails());
    }, []);
  
    const handleCreateOrder = () => {
      onOpen();
      store.dispatch(handleCreateAnOrderAccordingToAuthor(authorId)).then((response) => {
        if (response?.payload?.orderId && response?.payload?.orderId != null) {
          const { amount, name, description, orderId, prefill } =
            response?.payload;
          setOptions({
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: amount,
            currency: "INR",
            name: name,
            description: description,
            image: logo.src,
            order_id: orderId,
            handler: function (response) {
              store.dispatch(handleOrderPaymentSuccess({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                })
              ).then((purchasedResponse)=> {
                 console.log(purchasedResponse);
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
              name: prefill.name,
              email: prefill.email,
            },
            theme: {
              color: "#6D2EEA",
            },
          });
        } else {
          handleToast(response?.payload?.message || "Something went wrong");
          onClose();
        }
      });
    };
  
    const handlePayNow = () => {
      const paymentObject = window.Razorpay(options);
      paymentObject.open();
    };
  
    const handleToast = (message) => {
      toast({
        title: message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    };
  
    return (
      <>
        <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />
        <Button
          bg={"#8C53FF"}
          color={"#ffffff"}
          _hover={{ bg: "#6D2EEA" }}
          onClick={handleCreateOrder}
          width={['fit-content','200px']}
        >
          Buy All
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Creating Order</ModalHeader>
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
              ) : options?.order_id != null ? (
                <Stack alignItems={"center"}>
                  <Text fontSize={"30px"}>Order Created</Text>
                  <FaCircleCheck fontSize={"50px"} color="green" />
                  <Text fontSize={"15px"}>Now Pay and Purchase This Creation</Text>
                </Stack>
              ) : (
                <Text textAlign={"center"} color={"red.500"} fontSize="30px">
                  Something Went Wrong
                </Text>
              )}
            </ModalBody>
  
            {!isLoading && options?.order_id != null && (
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Pay Later
                </Button>
                <Button
                  bg={"#8C53FF"}
                  color={"#ffffff"}
                  _hover={{ bg: "#6D2EEA" }}
                  onClick={handlePayNow}
                >
                  Pay Now
                </Button>
              </ModalFooter>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default BuyAll;
  