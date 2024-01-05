import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import BecomeSeller from '@/components/HomePage/BecomeSeller'
import TopSection from '@/components/HomePage/TopSection'
import WhyFromUs from '@/components/HomePage/WhyFromUs'
import SelectTemplate from '@/components/HomePage/selectTemplate'
import { ChakraProvider } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
   <ChakraProvider>
       <Navbar/>
       <TopSection/>
       <SelectTemplate/>
       <BecomeSeller/>
       <WhyFromUs/>
       <Footer/>
   </ChakraProvider>
  )
}
