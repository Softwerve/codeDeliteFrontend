"use client"
import React from 'react'
import StoreProvider from '../StoreProvider'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import Navbar from '@/components/Common/Navbar'
import SearchComponents from '@/components/websiteComponents/SearchComponents'
import ComponentsBoxes from '@/components/websiteComponents/ComponentsBoxes'
import Footer from '@/components/Common/Footer'

const page = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Stack backgroundColor={'#FDF6F6'}>
                <Navbar/>
                <SearchComponents/>
                <ComponentsBoxes/>
                <Footer/>
            </Stack>
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page