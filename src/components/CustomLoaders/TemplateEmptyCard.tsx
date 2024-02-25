import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { TbComponentsOff, TbTemplateOff } from 'react-icons/tb'

const TemplateEmptyCard = ({isWeb}:{isWeb: Boolean}) => {
  return (
    <Stack minH={'30vh'} p={'5'} alignItems={'center'} justifyContent={'center'} backgroundColor={'#ffffff'} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'>
        {isWeb ? <TbTemplateOff fontSize='30px'/>:<TbComponentsOff fontSize='30px' />}
        <Text textAlign={'center'}>Author has not published any {isWeb ? "Website": "Web Component"}</Text>
    </Stack>
  )
}

export default TemplateEmptyCard