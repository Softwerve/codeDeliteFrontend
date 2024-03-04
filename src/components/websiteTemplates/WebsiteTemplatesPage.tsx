"use client"
import { handleGetTemplateorComponentById } from '@/apiActions/templatesAction';
import { useAppSelector, useAppStore } from '@/lib/hooks'
import { Avatar, Badge, Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { RiUserAddFill } from 'react-icons/ri';

const WebTemplatesPage = ({id}:{id:number}) => {
    const store = useAppStore();
    const {templateOrComponent} = useAppSelector((state)=> state.templates);
    useEffect(()=>{
        store.dispatch(handleGetTemplateorComponentById(id));
    },[]);

  return (
    <Flex minH={'100vh'} background={"#343F51"} color={'#ffffff'}>
        <Stack p={10} width={['100%','70%']} marginTop={'50px'} spacing={5} >
            <Flex alignItems={'center'} gap={10} >
                <Link href={`${templateOrComponent.tempLink}`} target="blank">
                  <Heading fontSize={'50px'} >{templateOrComponent.title}</Heading>
                </Link>
                <Link href={`${templateOrComponent.tempLink}`} target="blank">
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
                        templateOrComponent.templatePage?.technologiesUsed.map((techStack: string,index:number)=>(
                            <Box key={index} bg={"#ffffff"} p={"10px"} borderRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" _hover={{boxShadow: "rgba(241, 138, 46, 1) 0px 10px 20px, rgba(241, 138, 46, 1) 0px 6px 6px;"}} >
                                <Text color={'#000000'} fontWeight={'bold'}>{techStack}</Text>
                            </Box>
                        ))
                    }
                </Flex>
            </Stack>
            <Flex display={['block','flex']} gap={5} justifyContent={'space-between'} p={5}>
                <Stack border={'1px solid #ffffff'} p={5} borderRadius={'10px'} spacing={5} mb={['10px','0px']} >
                    <Heading>Sections</Heading>
                    <Grid gap={5} templateColumns={['repeat(2,1fr)','repeat(3,1fr)']} templateRows={'repeat(auto,auto)'}>
                        {
                            templateOrComponent.templatePage?.sections.map((section,index)=>(
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
                    <Grid gap={5} templateColumns={['repeat(2,1fr)','repeat(3,1fr)']} templateRows={'repeat(auto,auto)'}>
                        {
                            templateOrComponent.templatePage?.highlights.map((highlight,index)=>(
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
            {/* <Flex gap={5} p={5} width={'60%'}>
                <Button width={'40%'} color={"#ffffff"} bg={"#673DE6"} _hover={{ bg: "#6537F0" }} variant={"solid"}>Buy Now</Button>
                <Button width={'40%'} >Add To Bag</Button>
            </Flex> */}
        </Stack>
        <Stack display={['none','flex']} width={'25%'} marginTop={'100px'} p={5}  height={"fit-content"}  borderRadius={'30px'} border={'2px solid #ffffff'}>
            <Flex justifyContent={"space-between"} alignItems={'center'} >
                <Flex>
                    <Avatar src={templateOrComponent.authorProfileImage} />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                            {templateOrComponent.authorName}
                        <Badge ml='1' colorScheme='green'>
                            {templateOrComponent.monetizationLevel}
                        </Badge>
                        </Text>
                        <Text fontSize='sm'>{templateOrComponent.authorUsername}</Text>
                    </Box>
                </Flex>
                <RiUserAddFill fontSize={"30px"}/>
            </Flex>
            <Image borderRadius={'10px'} border={'2px solid #ffffff'} src={templateOrComponent.thumbnailImage}/>
            <Text>Title: {templateOrComponent.title}</Text>
            
        </Stack>
    </Flex>
  )
}

export default WebTemplatesPage