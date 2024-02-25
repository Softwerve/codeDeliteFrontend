"use client"
import React from 'react'
import StoreProvider from '../StoreProvider'
import { ChakraProvider, Heading, Stack, Text } from '@chakra-ui/react'
import Navbar from '@/components/Common/Navbar'
import Footer from '@/components/Common/Footer'
import ChargesImg from '@/assets/Charges.png';
import Charges from '@/components/Charges/Charges'
const page = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Stack>
                <Navbar/>
                <Stack minH={'80vh'} justifyContent={'center'} background={`url(${ChargesImg.src})`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} >
                  <Stack p={20} width={'50%'}>
                    <Heading color={'#fff'} fontSize={'50px'}>{"Unlock Your Website's Potential"}</Heading>
                    <Text color={'#fff'} fontSize={'20px'}>Explore Our Pricing and Charges</Text>
                  </Stack>
                </Stack>
                <Charges/>
                <Footer/>
            </Stack>
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page