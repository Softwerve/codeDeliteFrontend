import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import BrowseByCategory from '@/components/Templates/BrowseByCategory'
import SearchSection from '@/components/Templates/SearchSection'
import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const templates = () => {
  return (
    <ChakraProvider>
        <Navbar/>
        <SearchSection/>
        <BrowseByCategory/>
        <Footer/>
    </ChakraProvider>
  )
}

export default templates