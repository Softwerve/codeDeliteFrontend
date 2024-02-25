"use client"
import StoreProvider from '@/app/StoreProvider'
import AuthorsFollowCards from '@/components/Author/all/AuthorsFollowCards'
import SearchAuthor from '@/components/Author/all/SearchAuthor'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const page = ({params}:{params:any}) => {
    
  return (
    <StoreProvider>
        <ChakraProvider>
            <Navbar/>
            <SearchAuthor/>
            <AuthorsFollowCards searchParams={params}/>
            <Footer/>
        </ChakraProvider>
    </StoreProvider>
  )
}

export default page