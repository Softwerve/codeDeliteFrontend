import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import bga from '../../assets/wall1.png'; 
import { color } from 'framer-motion';

const TopSection = () => {
  return (
    <Flex p={'5%'} backgroundImage={`url(${bga.src})`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
        <Stack spacing={'5'} p={'5%'} color={'#ffffff'} width={['100%','90%','80%','60%']}>
            <Heading fontSize={['30px','40px','50px','60px']}>Code Your Vision into Reality</Heading>
            <Text>Explore Our Comprehensive Coding Templates</Text>
            <Text>Dive into the world of code-based creativity! Discover our extensive library of website coding templates. From HTML to CSS, JavaScript to Python - unleash your ideas with our diverse coding components.</Text>
            <Button w={'fit-content'} bg={'#0793E1'} color={'#ffffff'} _hover={{bg:'#076DE1'}} >Explore Templates</Button>
        </Stack>
    </Flex>
  )
}

export default TopSection