import Navbar from '@/components/Common/Navbar'
import TopSection from '@/components/HomePage/TopSection'
import { ChakraProvider } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
   <ChakraProvider>
       <Navbar/>
       <TopSection/>
   </ChakraProvider>
  )
}
