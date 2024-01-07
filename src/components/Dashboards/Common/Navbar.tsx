import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../../assets/codedelite.png'
import pic from '../../../assets/logo.png'
const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} p={'2%'} bg={'#000000'} position={'sticky'} top={0} left={0} right={0}>
        <Image height={'20px'} src={logo.src} alt='logo'/>
        <Image borderRadius={'50%'} height='20px' src={pic.src} alt='profile'/>
    </Flex>
  )
}

export default Navbar