import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
import { handleGetPurchasedBag } from "@/apiActions/purchaseAction";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import GiveFeedback from "./GiveFeedback";

const PurchaseBag = () => {
  const store = useAppStore();
  const {user} = useAppSelector((state)=> state.user);
  const {purchasedBag} = useAppSelector((state)=> state.purchase);
  useEffect(()=>{
    store.dispatch(handleGetPurchasedBag());
  },[]);
  console.log(purchasedBag);
  return (
    <Stack p={5}>
      <Heading>Your Purchases</Heading>
      <Divider />
      {purchasedBag.length > 0 ? 
          purchasedBag?.map((item, index) => (
            <Flex
              key={index}
              gap={5}
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            >
              <Image src={item.thumbnailImage} width={"30%"} />
              <Stack p={5} width={'70%'}>
                <Flex justifyContent={"space-between"}>
                <Flex>
                  <Avatar src={item.authorProfileImage} name={item.authorName} />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {item.authorName}
                    </Text>
                    <Text fontSize="sm">{item.authorUsername}</Text>
                  </Box>
                </Flex>
                  <Link href={`${item.itemDownloadLink}`} target="blank">
                    <BiDownload
                      cursor="pointer"
                      fontSize={"40px"}
                      color={"green"}
                    />
                  </Link>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text>{item.itemTitle}</Text>
                  <Text>{item.purchaseTime}</Text>
                </Flex>
                <Text>{item.itemOverview}</Text>
                <Flex justifyContent={'space-between'}>
                  <Text> Purchased Price: {user.currencySymbol} {convertCurrencyFromINR(item?.purchaseAmount,user?.currency)}</Text>
                  <Text>Purchase Id: {item.purchaseId}</Text>
                  {
                    item.purchaseAmount==0 ? null : 
                    <Text>Payment Id: {item.razorpayPaymentId}</Text>
                  }
                </Flex>
                {
                  item.feedback==null ? null :
                  <Text><b>Your Feedback: </b>{item.feedback}</Text>
                }
                <Flex gap={5}>
                  {
                    item.feedback==null ? 
                    <GiveFeedback itemId={item.itemId}/> : null
                  }
                  {
                    item.allowedThankYouButton ?
                    item.purchaseAmount==0 && item.supportAmount==0 ?
                    <Button bg={"#8C53FF"}
                    color={"#ffffff"}
                    leftIcon={<AiOutlineDollarCircle/>}
                    _hover={{ bg: "#6D2EEA" }}>Say Thank You</Button> : <Badge colorScheme="purple">Said Thank You : {item.supportAmount}</Badge> : null
                  }
                </Flex>
                
              </Stack>
            </Flex>
          ))
       : (
        <Stack justifyContent={'center'} alignItems={'center'} boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" >
          <Stack justifyContent={'center'} alignItems={'center'} p={20}>
           <MdRemoveShoppingCart fontSize='120px'/>
           <Text fontSize={'20px'}>You have not purchased any item</Text>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default PurchaseBag;
