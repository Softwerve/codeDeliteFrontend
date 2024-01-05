import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const BecomeSeller = () => {
    const cards = [
        {
            id : 1,
            image: '',
            title: 'Register as a Seller',
            description: 'Begin your journey by registering as a seller on our platform. Create your seller profile to showcase your expertise and templates to potential buyers.',
        },
        {
            id : 2,
            image: '',
            title: 'Develop Your Unique Templates',
            description: 'Develop innovative and high-quality website templates or code components.Ensure that your templates offer functionality, uniqueness, and value to potential buyers.',
        },
        {
            id : 3,
            image: '',
            title: 'Choose Offering Options and Pricing',
            description: 'Decide on the offering strategy:Free/Donation: Offer your code-based templates for free with an optional donation.Paid: Set a price that reflects the value of your code-based creations.',
        },
        {
            id : 4,
            image: '',
            title: 'Submit Your Code-Based Templates',
            description: "Upload your code-based templates along with comprehensive descriptions, preview images, and any supplementary materials necessary for buyers to understand the template's functionality.",
        },
        {
            id : 5,
            image: '',
            title: 'Expert Review and Approval',
            description: 'Our expert team will meticulously review your submitted code-based templates, ensuring quality, functionality, and adherence to platform guidelines.',
        },
        {
            id : 6,
            image: '',
            title: 'Reach a Global Audience',
            description: 'Upon approval, your code-based templates will be listed on our platform, ready to be discovered and utilized by a global audience of potential buyers.',
        },
    ]
  return (
    <Stack bg={'#D7F1FF'} spacing={'5'} p={'10%'}>
        <Heading textAlign={'center'}>Become a Author - Showcase Your Templates</Heading>
        <Text textAlign={'center'}>Are you a talented designer or developer with unique web templates or code components? Join our platform and transform your creative skills into revenue! Becoming a author on our marketplace is simple and rewarding.</Text>
        {
            cards.map((card, index)=>(
                <Flex borderRadius={'10'} p={'2%'} key={index} bg={'#FFFFFF'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                    <Stack spacing={'4'} width={'60%'}>
                        <Heading fontSize={['20px','25px','30px','35px']}>{card.title}</Heading>
                        <Text fontStyle={'oblique'}>{card.description}</Text>
                    </Stack>
                    <Box width={'2px'} bg={'#0793E1'}></Box>
                    <Box width={'40%'}></Box>
                </Flex>
            ))
        }
    </Stack>
  )
}

export default BecomeSeller