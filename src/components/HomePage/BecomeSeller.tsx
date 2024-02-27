import Loading from '@/app/loading';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import author from '../../assets/becomeAnAuthor.png';
import unique from '../../assets/unique.png'
import pricing from '../../assets/choosepricing.png'
import submitCode from '../../assets/submitCode.png'
import review from '../../assets/reviewAnpApproval.png'
import global from '../../assets/globalAudience.png'
const BecomeSeller = () => {
    const cards = [
        {
            id: 1,
            image: author.src,
            title: 'Register as An Author',
            description: 'Begin your journey by registering as an author on our platform. Create your author profile to showcase your expertise and templates to potential buyers.',
        },
        {
            id: 2,
            image: unique.src,
            title: 'Develop Your Unique Templates',
            description: 'Develop innovative and high-quality website templates or code components. Ensure that your templates offer functionality, uniqueness, and value to potential buyers.',
        },
        {
            id: 3,
            image: pricing.src,
            title: 'Choose Offering Options and Pricing',
            description: 'Decide on the offering strategy: Free/Paid. Offer your code-based templates for free or set a price that reflects the value of your creations. Earn revenue through sales and monetization options.',
        },
        {
            id: 4,
            image: submitCode.src,
            title: 'Submit Your Code-Based Templates',
            description: "Upload your code-based templates along with comprehensive descriptions, preview images, and any supplementary materials necessary for buyers to understand the template's functionality.",
        },
        {
            id: 5,
            image: review.src,
            title: 'Expert Review and Approval',
            description: 'Our expert team will meticulously review your submitted code-based templates, ensuring quality, functionality, and adherence to platform guidelines. Monetization-ready templates receive priority review.',
        },
        {
            id: 6,
            image: global.src,
            title: 'Reach a Global Audience',
            description: 'Upon approval, your code-based templates will be listed on our platform, ready to be discovered and utilized by a global audience of potential buyers. Earn revenue from sales and platform monetization features.',
        },
    ];
    
  return (
    <Stack bg={'#8C53FF'} spacing={'10'} p={['5%','10%']}>
        <Heading textAlign={'center'} color={'#ffffff'}>Become An Author - Showcase Your Templates</Heading>
        <Text textAlign={'center'} color={'#ffffff'}>Are you a talented designer or developer with unique web templates or code components? Join our platform and transform your creative skills into revenue! Becoming a author on our marketplace is simple and rewarding.</Text>
        {
            cards.map((card, index)=>(
                <Flex direction={['column-reverse','row']} gap={5} borderRadius={'10'} p={'2%'} key={index} bg={'#FFFFFF'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                    <Stack spacing={'4'} width={['100%','60%']}>
                        <Heading fontSize={['20px','25px','30px','35px']} color={"#525252"}>{card.title}</Heading>
                        <Text fontStyle={'oblique'}>{card.description}</Text>
                    </Stack>
                    <Box width={['0px','5px']} bg={'#0793E1'}></Box>
                    <Box width={['100%','40%']} >
                        <Image margin={'auto'}  src={card.image} />
                    </Box>
                </Flex>
            ))
        }
    </Stack>
  )
}

export default BecomeSeller