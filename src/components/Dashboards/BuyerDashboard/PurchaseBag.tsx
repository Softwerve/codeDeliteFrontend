import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
import { useAppSelector } from "@/lib/hooks";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { BiDownload } from "react-icons/bi";
import { MdRemoveShoppingCart } from "react-icons/md";

const PurchaseBag = () => {
  const purchasedItems: any[] = [];
  const {user} = useAppSelector((state)=> state.user);
  return (
    <Stack p={5}>
      <Heading>Your Purchases</Heading>
      <Divider />
      {purchasedItems.length > 0 ? (
        <Flex gap={5} flexWrap={"wrap"}>
          {purchasedItems?.map((item, index) => (
            <Flex
              key={index}
              height={"200px"}
              gap={5}
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
            >
              <Image src={item.image} width={"250px"} />
              <Stack p={5}>
                <Flex>
                  <Avatar src="https://bit.ly/sage-adebayo" />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      item.authorName
                      <Badge ml="1" colorScheme="green">
                        New
                      </Badge>
                    </Text>
                    <Text fontSize="sm">UI Engineer</Text>
                  </Box>
                </Flex>
                <Text>{item.title}</Text>
                <Text> Purchased Price: {convertCurrencyFromINR(item?.priceOfPurchase,user?.currency)}</Text>
                <Flex justifyContent={"flex-end"}>
                  <BiDownload
                    cursor="pointer"
                    fontSize={"40px"}
                    color={"green"}
                  />
                </Flex>
              </Stack>
            </Flex>
          ))}
        </Flex>
      ) : (
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
