import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";
import { handleGetAllOrders, handleGetAllPaidOrders, handleGetAllPendingOrders } from "@/apiActions/ordersAction";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Paynow from '@/components/Payment/Paynow'
import TemplateEmptyCard from "@/components/CustomLoaders/TemplateEmptyCard";
import ComponentNotAvailable from "@/components/CustomLoaders/ComponentNotAvailable";
const Orders = () => {
  const store = useAppStore();
  const {user} = useAppSelector((state)=> state.user);
  const { allOrdersResponse, allPaidOrdersResponse, allPendingOrdersResponse } =
    useAppSelector((state) => state.orders);
  
    useEffect(()=>{
      store.dispatch(handleGetAllOrders());
      store.dispatch(handleGetAllPaidOrders());
      store.dispatch(handleGetAllPendingOrders());
    },[]);

  return (
    <Stack p={5} spacing={5}>
      <Heading>Your Orders</Heading>
      <Divider />
      <Tabs>
        <TabList>
          <Tab>All Orders</Tab>
          <Tab>Paid Orders</Tab>
          <Tab>Pending Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {allOrdersResponse?.length > 0 ? (
              <Stack>
                {allOrdersResponse?.map((order, index) =>
                  order.items.length > 0 ? (
                    <Stack
                      bg={"#ffffff"}
                      padding={"2%"}
                      boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                      key={index}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Flex>
                          <Avatar
                            src={order.authorProfileImage}
                            name={order.authorName}
                          />
                          <Box ml="3">
                            <Text fontWeight="bold">{order.authorName}</Text>
                            <Text fontSize="sm">{order.authorUsername}</Text>
                          </Box>
                        </Flex>
                        <Text><strong>Order ID: </strong>{order.razorpayOrderId}</Text>
                        <Text>
                          <strong>Total Amount: </strong>
                           {user.currencySymbol}
                          {convertCurrencyFromINR(
                            order.amount,
                            user?.currency
                          )}
                        </Text>
                      </Flex>
                      <Stack p={5} borderRadius={"10"} bg={"#F5F2FC"}>
                        {order.items.map((item, ind) => (
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
                            <Image
                              src={item?.thumbnailImage}
                              width={"30%"}
                              height={"100%"}
                            />
                            <Stack spacing={2}>
                              <Text fontWeight={"bold"}>{item?.title}</Text>
                              <Text>{item?.overview}</Text>
                            </Stack>
                            <Flex alignItems={"center"}>
                              <Text>{user?.currencySymbol}</Text>
                              <Text>
                                {convertCurrencyFromINR(
                                  item?.itemAmount,
                                  user?.currency
                                )}
                              </Text>
                            </Flex>
                            {/* <BuyNow itemId={item?.tempId} /> */}
                            
                          </Flex>
                        ))}
                      </Stack>
                      {
                        order.orderStatus === "Paid" ? <Text color="green" p={2} bg={'green.50'}>Paid</Text> :
                        <Flex justifyContent={"flex-end"}>
                          <Paynow orderId={order.razorpayOrderId} amount={order.amount} />
                        </Flex>
                      }
                    </Stack>
                  ) : null
                )}
              </Stack>
            ) : <ComponentNotAvailable/>}
          </TabPanel>
          <TabPanel>
          {allPaidOrdersResponse?.length > 0 ? (
              <Stack>
                {allPaidOrdersResponse?.map((order, index) =>
                  order.items.length > 0 ? (
                    <Stack
                      bg={"#ffffff"}
                      padding={"2%"}
                      boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                      key={index}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Flex>
                          <Avatar
                            src={order.authorProfileImage}
                            name={order.authorName}
                          />
                          <Box ml="3">
                            <Text fontWeight="bold">{order.authorName}</Text>
                            <Text fontSize="sm">{order.authorUsername}</Text>
                          </Box>
                        </Flex>
                        <Text><strong>Order ID: </strong>{order.razorpayOrderId}</Text>
                        <Text><strong>Payment ID: </strong>{order.razorpayPaymentId}</Text>
                        <Text>
                          <strong>Total Amount: </strong>
                           {user.currencySymbol}
                          {convertCurrencyFromINR(
                            order.amount,
                            user?.currency
                          )}
                        </Text>
                      </Flex>
                      <Stack p={5} borderRadius={"10"} bg={"#F5F2FC"}>
                        {order.items.map((item, ind) => (
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
                            <Image
                              src={item?.thumbnailImage}
                              width={"30%"}
                              height={"100%"}
                            />
                            <Stack spacing={2}>
                              <Text fontWeight={"bold"}>{item?.title}</Text>
                              <Text>{item?.overview}</Text>
                            </Stack>
                            <Flex alignItems={"center"}>
                              <Text>{user?.currencySymbol}</Text>
                              <Text>
                                {convertCurrencyFromINR(
                                  item?.itemAmount,
                                  user?.currency
                                )}
                              </Text>
                            </Flex>
                            {/* <BuyNow itemId={item?.tempId} /> */}
                            
                          </Flex>
                        ))}
                      </Stack>
                      <Text color="green" p={2} bg={'green.50'}>Paid</Text>
                    </Stack>
                  ) : null
                )}
              </Stack>
            ) : <ComponentNotAvailable/>}
          </TabPanel>
          <TabPanel>
          {allPendingOrdersResponse?.length > 0 ? (
              <Stack>
                {allPendingOrdersResponse?.map((order, index) =>
                  order.items.length > 0 ? (
                    <Stack
                      bg={"#ffffff"}
                      padding={"2%"}
                      boxShadow="rgba(0, 0, 0, 0.08) 0px 4px 12px"
                      key={index}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Flex>
                          <Avatar
                            src={order.authorProfileImage}
                            name={order.authorName}
                          />
                          <Box ml="3">
                            <Text fontWeight="bold">{order.authorName}</Text>
                            <Text fontSize="sm">{order.authorUsername}</Text>
                          </Box>
                        </Flex>
                        <Text><strong>Order ID: </strong>{order.razorpayOrderId}</Text>
                        <Text>
                          <strong>Total Amount: </strong>
                           {user.currencySymbol}
                          {convertCurrencyFromINR(
                            order.amount,
                            user?.currency
                          )}
                        </Text>
                      </Flex>
                      <Stack p={5} borderRadius={"10"} bg={"#F5F2FC"}>
                        {order.items.map((item, ind) => (
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
                            <Image
                              src={item?.thumbnailImage}
                              width={"30%"}
                              height={"100%"}
                            />
                            <Stack spacing={2}>
                              <Text fontWeight={"bold"}>{item?.title}</Text>
                              <Text>{item?.overview}</Text>
                            </Stack>
                            <Flex alignItems={"center"}>
                              <Text>{user?.currencySymbol}</Text>
                              <Text>
                                {convertCurrencyFromINR(
                                  item?.itemAmount,
                                  user?.currency
                                )}
                              </Text>
                            </Flex>
                            {/* <BuyNow itemId={item?.tempId} /> */}
                            
                          </Flex>
                        ))}
                      </Stack>
                        <Flex justifyContent={"flex-end"}>
                          <Paynow orderId={order.razorpayOrderId} amount={order.amount} />
                        </Flex>
                    </Stack>
                  ) : null
                )}
              </Stack>
            ) : <ComponentNotAvailable/> }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Orders;
