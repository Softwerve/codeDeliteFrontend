import StoreProvider from '@/app/StoreProvider'
import AuthorsFollowCards from '@/components/Author/all/AuthorsFollowCards'
import SearchAuthor from '@/components/Author/all/SearchAuthor'
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Connect With Authors - CodeDelite Authors',
  description: 'Connect with fellow authors on CodeDelite. Follow or unfollow authors to stay updated on their latest creations. Authors can also add or remove inspirations from other authors, fostering a supportive and collaborative community of creators',
}

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