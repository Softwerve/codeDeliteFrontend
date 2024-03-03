"use client"
import { Box, ChakraProvider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Payment from '../../assets/paymentpolicy.png'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import StoreProvider from '../StoreProvider'
const Paymentpolicy = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Stack spacing={'5'}>
                <Navbar/>
                <Stack minH={'80vh'} justifyContent={'center'} background={`url(${Payment.src})`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                    <Box width={'55%'} p={'10'}>
                        <Heading color={'#fff'} fontSize={'45px'}>Seamless Transactions: Our Payment Policy Ensures Fair Compensation for Authors and a Secure Experience for Buyers</Heading>
                    </Box>
                </Stack>
                <Stack  width={'70%'} margin={'auto'}>
                    <Heading>Payment Policy</Heading>
                    <Text>Welcome to Codedelite, a platform provided by Softwerve! This Payment Policy outlines the terms and conditions regarding payments for purchasing templates on our platform.</Text>
                </Stack>
                <Stack  width={'70%'} margin={'auto'}>
                    <Text fontWeight={'bold'} >1. Payment Structure</Text>
                    <Text>When a buyer purchases a template on Codedelite, the payment is divided as follows:</Text>
                    <Text>80% to the Author: 80% of the purchase amount is directly transferred to the author of the template as their earnings for creating and providing the template.</Text>
                    <Text>20% to the Platform: 20% of the purchase amount is retained by the platform as a service fee for facilitating the transaction, maintaining the platform, and providing support to authors and buyers.</Text>
                    <Text fontWeight={'bold'}>2. Refunds:</Text>
                    <Text>Codedelite operates on a strict no-refund policy for purchased items. Once a template is purchased, the transaction is considered final.</Text>
                    <Text>{"In the event that a purchase attempt is unsuccessful, and the amount is deducted from the buyer's account, we will initiate a refund process."}</Text>
                    <Text>{"Refunds for unsuccessful transactions will be processed within 14 days from the date of the failed transaction. The refunded amount will be credited back to the original payment method used for the purchase."}</Text>
                    <Text>{"We strive to provide a transparent and fair payment experience for both buyers and authors on Codedelite. If you have any questions or concerns regarding our Payment Policy, please don't hesitate to contact us."}</Text>
                    <Text>Thank you for being a part of the Codedelite community!</Text>
                    <Text><a style={{textDecoration:'underline',color:'blue'}} href="mailto:contact@softwerve.com">Contact Us: contact@softwerve.com</a></Text>
                </Stack>
                <Footer/>
            </Stack>
        </ChakraProvider>
    </StoreProvider>
  )
}

export default Paymentpolicy;