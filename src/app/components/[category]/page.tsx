"use client"
import StoreProvider from '@/app/StoreProvider'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import ComponentCategoryPage from '@/components/websiteComponents/ComponentCategoryPage'
import SearchComponents from '@/components/websiteComponents/SearchComponents'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const page = ({params}:{params:{category:string}}) => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Navbar/>
            <SearchComponents/>
            <ComponentCategoryPage category={params.category} />
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page