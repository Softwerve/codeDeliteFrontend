import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import quality from '../../assets/qualityAssurance.png'
const WhyFromUs = () => {
  const cards = [{
    image: quality.src,
    reason: 'Quality Assurance'
  }, {
    video:'../../assets/variety.mp4', 
  }, {}, {}, {}, {}];
  return (
    <Stack p={"10%"} spacing={5}>
      <Heading textAlign={"center"}>
        Why Choose Our Templates and Components ?
      </Heading>
      <Text textAlign={'center'}>At CodeDelite, we're committed to providing you with the tools you need to succeed in your web development projects. Our templates and components offer unparalleled value, helping you streamline your workflow, enhance your designs, and deliver exceptional results. Here are the reasons why you should choose our offerings</Text>

      {cards.map((card, index) => (
        <Flex justifyContent={index%2!==0?'flex-end':'flex-start'}>
          <Flex
            borderRadius={10}
            key={index}
            bg={"yellow"}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            width={'45%'}
            height={'200px'}
            alignItems={'center'}
            gap={10}
          >
            {
              card.image==null ? <video src={card.video} autoPlay />:
            <Image src={card.image}/>
            }
            <Text fontSize={'30px'} fontWeight={'bold'} color={'#000'}>{card.reason}</Text>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default WhyFromUs;
