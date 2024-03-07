import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { FcFeedback } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleGetPurchasedBag, handleGiveFeedbackToPurchasedItem } from "@/apiActions/purchaseAction";
const GiveFeedback = ({itemId}:{itemId:number}) => {
  const router = useRouter();
  const store = useAppStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [feedback,setFeedback] = useState("");
  const [feedbackError,setFeedbackError] = useState("");
  const {isLoading} = useAppSelector((state)=>state.purchase);
  const handleOpen = () => {
    router.push("/dashboard/purchased?screen=Purchased&feedback=true");
    onOpen();
  };
  const handleClose = () => {
    router.push("/dashboard/purchased?screen=Purchased");
    onClose();
  };
  const handleSubmitFeedback = () => {
    store.dispatch(handleGiveFeedbackToPurchasedItem(itemId,feedback)).then((response)=> {
        if(response?.payload?.success)
        {
            store.dispatch(handleGetPurchasedBag());
            handleClose();
        }
        else{
            setFeedbackError(response?.payload?.message);
        }
    })
  };
  return (
    <>
      <Button
        bg={"#8C53FF"}
        color={"#ffffff"}
        leftIcon={<FcFeedback />}
        _hover={{ bg: "#6D2EEA" }}
        isLoading={isLoading}
        loadingText="Submitting"
        onClick={handleOpen}
      >
        Give Feedback
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Give Feedback About Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
                feedbackError!="" ? 
                <Box border={'1px solid red'} p={2} bg={'red.50'}>
                    <Text>{feedbackError}</Text>
                </Box> : null
            }
            <Text>
              Help author to improve their creation by giving feedback.
            </Text>
            <Textarea placeholder="Enter Your Feedback" onChange={(e)=> setFeedback(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              bg={"#8C53FF"}
              color={"#ffffff"}
              _hover={{ bg: "#6D2EEA" }}
              onClick={handleSubmitFeedback}
            >
              Submit Feedback
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GiveFeedback;
