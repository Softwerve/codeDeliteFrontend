import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import quality from "../../assets/qualityAssurance.png";
import versatility from '@/assets/versatility.png';
import timecostefficiency from '@/assets/timecostefficiency.png';
import responsiveDesign from '@/assets/responsivedesign.png';
import continuoussupport from '@/assets/continuoussupport.png';
import communitycollab from '@/assets/communitycollaboration.png';
const WhyFromUs = () => {
  const cards = [
    {
      image: quality.src,
      reason: "Unparalleled Quality",
      description: 'Dive into a world of top-tier web templates and components meticulously crafted by expert developers. Our products are built to industry standards, ensuring reliability, scalability, and seamless integration.'
    },
    {
      image: versatility.src,
      reason: "Versatility at Your Fingertips",
      description: "Explore a vast collection of diverse web templates and components, covering a spectrum of industries, niches, and design aesthetics. Whether you're a startup, an established business, or a creative professional, we have the perfect solution for your unique needs."
    },
    {
      image: timecostefficiency.src,
      reason: "Time and Cost Efficiency",
      description: "Save valuable time and resources by leveraging our pre-designed web templates and components. Say goodbye to lengthy development cycles and hefty customization costs. With our ready-to-use solutions, you can launch your website faster and more affordably than ever before"
    },
    {
      image: responsiveDesign.src,
      reason: "Responsive and Intuitive Design",
      description: "Stay ahead of the curve with responsive and user-friendly web templates and components. Ensure a seamless browsing experience across all devices and screen sizes, enhancing user engagement and satisfaction."
    },
    {
      image: continuoussupport.src,
      reason: "Continuous Support and Updates",
      description: "Rest assured knowing that our commitment to your success extends beyond the initial purchase. Benefit from ongoing support, regular updates, and feature enhancements, ensuring your website remains cutting-edge and competitive in the ever-evolving digital landscape."
    },
    {
      image: communitycollab.src,
      reason: "Community Collaboration",
      description: "Join a vibrant community of buyers and developers who share your passion for excellence. Gain access to forums, tutorials, and resources, fostering collaboration, learning, and innovation"
    },
  ];
  return (
    <Stack p={"10%"} spacing={5}>
      <Heading textAlign={"center"}>
        Why Choose Our Templates and Components ?
      </Heading>
      <Text textAlign={"center"}>
        At CodeDelite, we're committed to providing you with the tools you need
        to succeed in your web development projects. Our templates and
        components offer unparalleled value, helping you streamline your
        workflow, enhance your designs, and deliver exceptional results. Here
        are the reasons why you should choose our offerings
      </Text>

      {cards.map((card, index) => (
        <Flex
          key={index}
          justifyContent={index % 2 !== 0 ? "flex-end" : "flex-start"}
        >
          <Flex
            borderRadius={10}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            width={"60%"}
            alignItems={"center"}
            gap={10}
          >
            <Image width={'35%'} src={card.image} />
            <Stack color={'#000'} p={5}>
            <Text fontSize={"20px"}>
              {card.reason}
            </Text>
            <Text opacity={'0.8'} fontStyle={'italic'}>{card.description}</Text>
            </Stack>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default WhyFromUs;
