"use client"
import StoreProvider from '@/app/StoreProvider';
import Navbar from '@/components/Common/Navbar';
import ComponentSearchPage from '@/components/websiteComponents/ComponentSearchPage';
import SearchComponents from '@/components/websiteComponents/SearchComponents';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'

const page = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Navbar/>
            <SearchComponents/>
            <ComponentSearchPage type={'component'} />
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page