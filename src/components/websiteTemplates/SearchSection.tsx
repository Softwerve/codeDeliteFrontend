import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import tempBg from '../../assets/templates.png'
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleSearchTemplate } from "@/apiActions/templatesAction";
import { useRouter, useSearchParams } from "next/navigation";
import { convertCurrencyFromINR } from "@/apiActions/currencyExchange";

const SearchSection = () => {
  const store = useAppStore();
  const params = useSearchParams();
  const router = useRouter();
  const [keyword, setKeyword] = useState(params.get('keyword') || '');
  const {templates} = useAppSelector((state)=> state.templates);
  const {user} = useAppSelector((state)=> state.user);
  const [inp,setInp] = useState(false);
  const handleSearch=(e:any)=>{
    if(e.key=="Enter")
    {
      router.push(`/webtemplates/search?keyword=${keyword}`);
    }
  }

  const handleInput = (e: string) => {
    setKeyword(e);
    store.dispatch(handleSearchTemplate(e));
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
    <Stack justifyContent={'center'} alignItems={'center'} minH={'60vh'} color={'#ffffff'} textAlign={"center"} backgroundImage={tempBg.src} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
      <Stack p={5} borderRadius={'20px'} bg={inp?'#ffffff':'#transparent'} width={["90%","80%","60%"]} spacing={5}>
        <Heading>Explore Our Templates</Heading>
        <Flex gap={3} alignItems={'center'} justifyContent={'space-between'}>
          <InputGroup borderRadius={"10px"} bg={"#ffffff"} color={"#000000"}>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input defaultValue={keyword} onInput={()=>setInp(true)} onMouseLeave={()=> setInp(false)} type="text" placeholder="Search Templates...." onKeyDown={handleSearch} onChange={(e)=>handleInput(e.target.value)} />
          </InputGroup>
          <Button leftIcon={<FaSearch/>} w={'fit-content'} bg={'#F0F848'} color={'#585857'} _hover={{bg:'#ECEC23'}}  onClick={()=>router.push(`/templates/search?keyword=${keyword}`)}>Search</Button>
        </Flex>
        <Stack display={inp?'flex':'none'}>
          {
            inp && templates.length > 0 ? templates.map((template,index)=> (
              <Flex color={'#000000'} key={index} gap={5}  >
                <Image cursor={'pointer'} onClick={()=>router.push(`/webtemplates/${template.tempId}`)} width={'200px'} height={'100px'} src={template.thumbnailImage} alt={template.title} />
                <Stack alignItems={'flex-start'}>
                  <Text fontWeight={'bold'}>{template.title}</Text>
                  <Text textAlign={'start'}>{truncateOverview(template?.templatePage?.overview)}</Text>
                  <Text>{user.currencySymbol}{convertCurrencyFromINR(template.price,user.currency)}</Text>
                </Stack>
              </Flex>
            )) : <Flex justifyContent={'center'} >
              <Text color={'#000000'} fontWeight={'bold'}>No Record Found</Text>
            </Flex>
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchSection;
