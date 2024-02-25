import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaUserSlash } from 'react-icons/fa'

const NotFollowingAnyAuthor = () => {
  return (
    <Stack minH={'60vh'} p={'20'} alignItems={'center'} justifyContent={'center'} backgroundColor={'#ffffff'} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'>
        <FaUserSlash fontSize={'120px'}/>
        <Text fontSize={'40px'}>You are not following any author</Text>
    </Stack>
  )
}

export default NotFollowingAnyAuthor