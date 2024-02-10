import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import softwerve from "../../assets/softwerveLogo.png";

const Footer = () => {
  const boxes = [
    {
      id: 1,
      title: "Product",
      content: ["CodeDelite", "WebTailory"],
    },
    {
      id: 2,
      title: "Guides",
      content: ["Tutorials", "Guide Book"],
    },
    {
      id: 3,
      title: "Company",
      content: ["About Us", "Blog",'Terms & Conditions'],
    },
    {
        id: 4,
        title:"Social Media",
        content: ['LinkedIn','Instagram',"Twitter","Facebook"]
    }
  ];
  let currentYear = new Date().getFullYear();
  return (
    <Stack borderTop={"1px solid white"} spacing={"5"} p={"5% 5% 2% 5%"} bg={'#343434'} color={'#FFFFFF'}>
      <Image src={softwerve} alt="codedelite" width={"200"} />
      <Flex justifyContent={"space-between"} p={"5%"} borderBottom={'1px solid white'}>
        {boxes.map((box, index) => (
          <Stack key={index}>
            <Text fontWeight={"bold"}>{box.title}</Text>
            {box.content.map((item, ind) => (
              <a key={ind} style={{ textDecoration: "underline", cursor: "pointer" }}>
                {item}
              </a>
            ))}
          </Stack>
        ))}
      </Flex>
      <Box textAlign={'center'}>
        Copright © {currentYear} Softwerve Company. All Rights Reserved
      </Box>
    </Stack>
  );
};

export default Footer;
