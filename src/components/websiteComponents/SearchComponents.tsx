"use client"
import { Button, Flex, Heading, Input,Stack, Text,Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import componentsImage from "../../assets/components2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { convertCurrencyFromINR } from '@/apiActions/currencyExchange';
import { handleSearchComponents } from "@/apiActions/components";
import { handleGetAllPublishedTemplatesOfACategory } from "@/apiActions/templatesAction";

const SearchComponents = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState(params.get('keyword') || '');
  const store = useAppStore();
  const {components} = useAppSelector((state)=> state.components);
  const [inp,setInp] = useState(false);
  const {user} = useAppSelector((state)=> state.user);
  const handleSearch=(e:any)=>{
    if(e.key=="Enter")
    {
      router.push(`/components/search?keyword=${keyword}`)
    }
  }
  const handleInput = (e: string) => {
    setKeyword(e);
    store.dispatch(handleSearchComponents(keyword));
  }
  const truncateOverview = (overview: string) => {
    const lines = overview.split('.');
    const truncatedOverview = lines.slice(0, 2).join('\n');
    if (lines.length > 2) {
      return truncatedOverview + "...";
    }
    return truncatedOverview;
  }
  return (
    <Stack
      p={"10"}
      justifyContent={"center"}
      width={"100%"}
      height={"80vh"}
      background={`url(${componentsImage.src})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      <Stack width={['100%',"80%"]} spacing={5}>
        <Heading fontSize={['30px',"45px"]} color={"#ffffff"}>
          Explore Powerful and Innovative Component Templates for Seamless
          Development
        </Heading>
        <Flex  alignItems={'center'} direction={['column','row']} width={['100%','80%']} gap={5}>
          <Stack width={'100%'} p={5} borderRadius={'20px'} bg={inp?"#ffffff":"transparent"}>
           <Input defaultValue={keyword} onInput={()=>setInp(true)} onMouseLeave={()=> setInp(false)} backgroundColor={'#ffffff'} type="text" placeholder="Search For Component Templates" onKeyDown={handleSearch} onChange={(e)=>handleInput(e.target.value)} />
           {
            keyword!="" && inp && ( components.length > 0 ? 
             components.map((component,index)=>(
              <Flex gap={5} key={index} alignItems={'top'}>
                <Image cursor={'pointer'} width={'250px'} height={"auto"} cursor='pointer' src={component.thumbnailImage} alt={component.title} />
                <Stack>
                  <Text fontWeight={'bold'}>{component.title}</Text>
                  <Text textAlign={'start'}>{truncateOverview(component?.templatePage?.overview)}</Text>
                  <Text>{user.currencySymbol}{convertCurrencyFromINR(component.price,user.currency)}</Text>
                </Stack>
              </Flex>
             ))
             :
             <Text textAlign={'center'} fontWeight={'bold'}>No Result Found</Text>)
           }
          </Stack>
          <Button leftIcon={<BiSearchAlt2/>}w={'fit-content'} bg={'#F0F848'} onClick={()=> router.push(`/components/search?keyword=${keyword}`)} color={'#585857'} _hover={{bg:'#ECEC23'}}colorScheme="yellow" >Search</Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SearchComponents;
