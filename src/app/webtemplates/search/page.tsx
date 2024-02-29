"use client"
import StoreProvider from '@/app/StoreProvider'
import Navbar from '@/components/Common/Navbar'
import ComponentSearchPage from '@/components/websiteComponents/ComponentSearchPage'
import SearchSection from '@/components/websiteTemplates/SearchSection'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Navbar/>
            <SearchSection/>
            <ComponentSearchPage type={'website'} />
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page