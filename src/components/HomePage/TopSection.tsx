import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import bga from '../../assets/home.png'; 
import { useRouter } from 'next/navigation';

const TopSection = () => {
  const router = useRouter();
  return (
    <Flex p={['2%','4%']} minH={'60vh'} backgroundImage={`url(${bga.src})`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
        <Stack marginTop={['50px','0px']} spacing={'5'} p={'5%'} color={'#ffffff'} width={['100%','90%','80%','55%']}>
            <Heading fontSize={['30px','40px','50px','60px']}>Code Your Vision into Reality</Heading>
            <Text>Explore Our Comprehensive Coding Templates</Text>
            <Text>Dive into the world of code-based creativity! Discover our extensive library of website coding templates. From HTML to CSS, JavaScript to Python - unleash your ideas with our diverse coding components.</Text>
            <Flex gap={5} alignItems={'center'} flexWrap={'wrap'} >
              <Button w={['100%','fit-content']}  bg={'#F0F848'} color={'#585857'} _hover={{bg:'#ECEC23'}} onClick={()=>router.push("/webtemplates?category=All")} >Explore Templates</Button>
              <Button w={['100%','fit-content']}  bg={'#F0F848'} color={'#585857'} _hover={{bg:'#ECEC23'}} onClick={()=>router.push("/components")} >Explore Components</Button>
            </Flex>
        </Stack>

    </Flex>
  )
}

export default TopSection