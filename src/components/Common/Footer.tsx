import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import softwerve from "../../assets/softwerveLogo.png";
import { useRouter } from "next/navigation";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  const link = "softwerve.com";
  const router = useRouter();
  return (
    <Stack borderTop={"1px solid white"} spacing={"5"} p={"5% 5% 2% 5%"} bg={'#343434'} color={'#FFFFFF'}>
      <Image style={{cursor:'pointer'}} onClick={()=>router.push(`https://www.${link}`)} src={softwerve} alt="codedelite" width={"200"} />
      <Flex justifyContent={"space-between"} p={"5%"} borderBottom={'1px solid white'} flexWrap={'wrap'} gap={5}>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Products</Text>
          <Link href={`https://www.codedelite.${link}`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>CodeDelite</Link>
          <Link href={""} style={{opacity:'0.6', fontSize:"15px"}}>WebTailory</Link>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Explore</Text>
          <Link href={`/webtemplates?category=All`} style={{opacity:'0.6', fontSize:"15px"}}>Templates</Link>
          <Link href="/components" style={{opacity:'0.6', fontSize:"15px"}}>Components</Link>
          <Link href={`https://www.${link}/blog`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Blogs</Link>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Company</Text>
          <Link href={`https://www.${link}`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Softwerve</Link>
          <Link href={`https://${link}/about`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>About Softwerve</Link>
          <Link href={`https://${link}/termsandconditions`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Terms & Conditions</Link>
          <Link href={`https://${link}/privacypolicy`} target="blank" style={{opacity:'0.6', fontSize:"15px"}}>Privacy Policy</Link>
          <Link href={`/paymentpolicy`} style={{opacity:'0.6', fontSize:"15px"}}>Payment Policy</Link>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Contact Us</Text>
          <Link href="mailto:contact@softwerve.com" style={{opacity:'0.6', fontSize:"15px"}}>Mail to: contact@softwerve.com</Link>
          <Link href="tel:+917060476249" style={{opacity:'0.6', fontSize:"15px"}}>Call Us +917060476249</Link>
          <Link href="/faq" style={{opacity:'0.6', fontSize:"15px"}}>FAQ</Link>
        </Stack>
        <Stack>
          <Text fontWeight={'bold'} fontSize={'20px'} >Follow Us On</Text>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <IoLogoLinkedin/>
            <Link href={`https://www.linkedin.com/company/softwerve`} target="blank" style={{opacity:'0.6', }}>Linkedin</Link>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <FaXTwitter/>
            <Link href={`https://www.codedelite.${link}`} style={{opacity:'0.6', }}>Twitter</Link>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <RiInstagramFill/>
            <Link href={`https://www.instagram.com/softwerve/`} target="blank" style={{opacity:'0.6', }}>Instagram</Link>
          </Flex>
          <Flex alignItems={'center'} gap={2} fontSize="15px">
            <FaYoutube/>
            <Link href={`https://www.youtube.com/@Softwerve`} target="blank" style={{opacity:'0.6', }}>YouTube</Link>
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
