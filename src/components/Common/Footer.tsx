import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import softwerve from "../../assets/softwerveLogo.png";
import { useRouter } from "next/navigation";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  const link = "softwerve.com";
  const router = useRouter();
  return (
    <Stack borderTop={"1px solid white"} spacing={"5"} p={"5% 5% 2% 5%"} bg={'#343434'} color={'#FFFFFF'}>
      <Image style={{cursor:'pointer'}} onClick={()=>router.push(`https://www.${link}`)} src={softwerve} alt="codedelite" width={"200"} />
      <Flex justifyContent={"space-between"} p={"5%"} borderBottom={'1px solid white'}>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Products</Text>
          <a href={`https://www.codedelite.${link}`} style={{opacity:'0.6', fontSize:"15px"}}>CodeDelite</a>
          <a style={{opacity:'0.6', fontSize:"15px"}}>WebTailory</a>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Explore</Text>
          <a href={`/templates`} style={{opacity:'0.6', fontSize:"15px"}}>Templates</a>
          <a href="/components" style={{opacity:'0.6', fontSize:"15px"}}>Components</a>
          <a href={`https://www.${link}/blog`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Blogs</a>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Company</Text>
          <a href={`https://www.${link}`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Softwerve</a>
          <a href={`https://${link}/about`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>About Softwerve</a>
          <a href={`https://${link}/termsandconditions`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Terms & Conditions</a>
          <a href={`https://${link}/privacypolicy`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Privacy Policy</a>
          <a href={`/paymentpolicy`} style={{opacity:'0.6', fontSize:"15px"}}>Payment Policy</a>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Contact Us</Text>
          <a href="mailto:support@softwerve.com" style={{opacity:'0.6', fontSize:"15px"}}>Mail to: support@softwerve.com</a>
          <a href="tel:+917060476249" style={{opacity:'0.6', fontSize:"15px"}}>Call Us +917060476249</a>
          <a href="/faq" style={{opacity:'0.6', fontSize:"15px"}}>FAQ</a>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Follow Us On</Text>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <IoLogoLinkedin/>
            <a href={`https://www.linkedin.com/company/softwerve`} style={{opacity:'0.6', }}>Linkedin</a>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <FaXTwitter/>
            <a href={`https://www.codedelite.${link}`} style={{opacity:'0.6', }}>Twitter</a>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <RiInstagramFill/>
            <a href={`https://www.codedelite.${link}`} style={{opacity:'0.6', }}>Instagram</a>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <FaYoutube/>
            <a href={`https://www.youtube.com/@Softwerve`} style={{opacity:'0.6', }}>YouTube</a>
          </Flex>
        </Stack>
      </Flex>
      <Box textAlign={'center'}>
        Copright © {currentYear} Softwerve Company. All Rights Reserved
      </Box>
    </Stack>
  );
};

export default Footer;
