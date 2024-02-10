import React from 'react'
import blogbg from '../../assets/blog.png'
import { Box, Button, Flex, Heading, Image, Input, Stack, Text } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
const Blogs = () => {
    const articles = [
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },
        {
            thumbnail: 'https://blog.hubspot.com/hs-fs/hubfs/best-cms-systems.jpg?width=903&height=450&name=best-cms-systems.jpg',
            title: "How To Create Templates",
        },

    ]
  return (
    <Stack >
        <Stack minH={'80vh'} background={`url(${blogbg.src})`} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} justifyContent={'center'} p={10}>
            <Stack width={["100%",'60%']}>
                <Heading color={"#fff"}>Insights Hub: Explore Our Latest Articles and Resources</Heading>
                <Flex display={["block","flex"]} alignItems={'center'} gap={5}>
                    <Input type='text' color={'#ffffff'} placeholder='Search For Articles' />
                    <Button leftIcon={<BiSearch/>} >Search</Button>
                </Flex>
            </Stack>
        </Stack>
        <Flex gap={10} flexWrap={'wrap'} p={10}>
            {
                articles.length > 0 ? 
                articles.map((article,index)=> (
                    <Stack spacing={5} borderRadius={'10px'} p={5} key={index} width={'300px'} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
                        <Image src={article.thumbnail} />
                        <Text>{article.title}</Text>
                    </Stack> 
                ))
                : null
            }
        </Flex>
    </Stack>
  )
}

export default Blogs