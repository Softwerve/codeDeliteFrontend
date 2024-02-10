import React from 'react'
import StoreProvider from '../StoreProvider'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import Navbar from '@/components/Common/Navbar'
import Blogs from '@/components/Blog/Blogs'
import Footer from '@/components/Common/Footer'

const page = () => {
  return (
    <StoreProvider>
        <ChakraProvider>
            <Stack>
                <Navbar/>
                <Blogs/>
                <Footer/>
            </Stack>
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page