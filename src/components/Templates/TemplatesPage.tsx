import { handleGetTemplateorComponentById } from '@/apiActions/templatesAction';
import { useAppSelector, useAppStore } from '@/lib/hooks'
import { Avatar, Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { RiUserAddFill } from 'react-icons/ri';

const TemplatesPage = ({id}:{id:number}) => {
    // const store = useAppStore();
    // const {templateOrComponent} = useAppSelector((state)=> state.templates);
    // useEffect(()=>{
    //     store.dispatch(handleGetTemplateorComponentById(id));
    // },[]);
    const templateOrComponent = {
        title: "Business Website Template",
        templatePage: {
            overview: "Introducing a sleek, coded business website template designed for entrepreneurs seeking a professional online presence. Crafted with efficiency in mind, this template boasts clean lines, modern fonts, and intuitive navigation. Its responsive design ensures seamless viewing across devices, capturing audiences on desktops, tablets, and smartphones alike. With customizable sections for services, portfolios, and client testimonials, it empowers businesses to showcase their offerings and credibility effortlessly. Built-in SEO optimization enhances visibility, while integration with popular CMS platforms simplifies content management. Elevate your brand with this versatile template, accelerating your online success",
            images: [
                "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"
            ],
            technologiesUsed: [
                "HTML",
                "CSS",
                "JavaScript",
                "Jquery",
                "BootStrap",
                "ES6",
                "JUnit"
            ],
            highlights: [
                "Responsive Design",
                "SEO Friendly",
                "2 Pages",
                "Having Paid Image"
            ],
            sections: [
                "Navbar",
                "Footer",
                "Client Testinomial",
                "Hero",
                "Contact Us",
            ]

        }
    }
  return (
    <Flex minH={'100vh'} background={"#343F51"} color={'#ffffff'}>
        <Stack p={10} width={'70%'} marginTop={'50px'} spacing={5} >
            <Flex alignItems={'center'} gap={10} >
                <Link href={""}>
                  <Heading fontSize={'50px'} >{templateOrComponent.title}</Heading>
                </Link>
                <Link href={""} >
                    <BsBoxArrowUpRight fontSize={"40px"} />
                </Link>
            </Flex>
            <Flex height={'105vh'} borderRadius={'30px'} justifyContent={'space-between'} p={10} overflow={'hidden'} bg={'#fff'} gap={5}>
                <Stack width={'60%'} gap={5} >
                    <Image borderRadius={'30px'} height={'45vh'} src={templateOrComponent.templatePage?.images[0]} />
                    <Image borderRadius={'30px'} height={'45vh'} src={templateOrComponent.templatePage?.images[1]} />
                </Stack>
                <Stack width={'40%'}  gap={2}>
                    <Image borderRadius={'30px'} height={'30vh'} src={templateOrComponent.templatePage?.images[2]} />
                    <Image borderRadius={'30px'} height={'30vh'} src={templateOrComponent.templatePage?.images[3]} />
                    <Image borderRadius={'30px'} height={'30vh'} src={templateOrComponent.templatePage?.images[4]} />
                </Stack>
            </Flex>
            <Stack spacing={3} p={5}>
                <Heading>Overview</Heading>
                <Text>{templateOrComponent.templatePage?.overview}</Text>
            </Stack>
            <Stack p={5} spacing={6}>
                <Heading>Technologies Used</Heading>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                    {
                        templateOrComponent.templatePage.technologiesUsed.map((techStack: string,index:number)=>(
                            <Box key={index} bg={"#ffffff"} p={"10px"} borderRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" _hover={{boxShadow: "rgba(241, 138, 46, 1) 0px 10px 20px, rgba(241, 138, 46, 1) 0px 6px 6px;"}} >
                                <Text color={'#000000'} fontWeight={'bold'}>{techStack}</Text>
                            </Box>
                        ))
                    }
                </Flex>
            </Stack>
            <Flex gap={5} justifyContent={'space-between'} p={5}>
                <Stack border={'1px solid #ffffff'} p={5} borderRadius={'10px'} spacing={5} >
                    <Heading>Sections</Heading>
                    <Grid gap={5} templateColumns={'repeat(3,1fr)'} templateRows={'repeat(auto,auto)'}>
                        {
                            templateOrComponent.templatePage.sections.map((section,index)=>(
                                <GridItem key={index}>
                                    <Box bg={"#ffffff"} p={"10px"} borderRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" _hover={{boxShadow: "rgba(241, 138, 46, 1) 0px 10px 20px, rgba(241, 138, 46, 1) 0px 6px 6px;"}} >
                                        <Text color={"#000000"} fontWeight={'bold'}>{section}</Text>
                                    </Box>
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Stack>
                <Stack border={'1px solid #ffffff'} p={5} borderRadius={'10px'} spacing={5}>
                    <Heading>Highlights</Heading>
                    <Grid gap={5} templateColumns={'repeat(3,1fr)'} templateRows={'repeat(auto,auto)'}>
                        {
                            templateOrComponent.templatePage.highlights.map((highlight,index)=>(
                                <GridItem key={index}>
                                    <Box bg={"#ffffff"} p={"10px"} borderRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" _hover={{boxShadow: "rgba(241, 138, 46, 1) 0px 10px 20px, rgba(241, 138, 46, 1) 0px 6px 6px;"}} >
                                        <Text color={'#000000'} fontWeight={'bold'}>{highlight}</Text>
                                    </Box>
                                </GridItem>
                            ))
                        }
                    </Grid>
                </Stack>
            </Flex>
            <Flex gap={5} p={5} width={'60%'}>
                <Button width={'40%'} color={"#ffffff"} bg={"#673DE6"} _hover={{ bg: "#6537F0" }} variant={"solid"}>Buy Now</Button>
                <Button width={'40%'} >Add To Bag</Button>
            </Flex>
        </Stack>
        <Stack width={'25%'} marginTop={'100px'} p={5}  height={"fit-content"}  borderRadius={'30px'} border={'2px solid #ffffff'}>
            <Flex justifyContent={"space-between"} alignItems={'center'} >
                <Flex>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                            Segun Adebayo
                        <Badge ml='1' colorScheme='green'>
                            New
                        </Badge>
                        </Text>
                        <Text fontSize='sm'>UI Engineer</Text>
                    </Box>
                </Flex>
                <RiUserAddFill fontSize={"30px"}/>
            </Flex>
            <Image borderRadius={'10px'} border={'2px solid #ffffff'} src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            <Text>Title: {templateOrComponent.title}</Text>
            
        </Stack>
    </Flex>
  )
}

export default TemplatesPage