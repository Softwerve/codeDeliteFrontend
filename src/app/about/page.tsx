import Navbar from "@/components/Common/Navbar";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import StoreProvider from "../StoreProvider";
import Footer from "@/components/Common/Footer";
import about from "../../assets/aboutus.png";
const AboutPage = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Stack>
          <Navbar />
          <Stack minH={"80vh"} background={`url(${about.src})`} justifyContent={"center"} p={20}>
            <Box width={"60%"}>
              <Heading color={"#fff"} fontSize={["30px","40px","60px"]}>Welcome to Softwerve</Heading>
              <Text fontSize={["15","20","30px"]}>Empowering your coding journey with innovative solutions.</Text>
            </Box>
          </Stack>
          <Stack spacing={'10'} p={10}>
            <Stack width={["90%","80%",'60%']} margin={'auto'}>
                <Heading textAlign={'center'} color={'#494949'}>Our Story</Heading>
                <Text fontSize={'15px'} fontStyle={'oblique'} fontFamily={'cursive'} color={'#7B7B7B'}>At Softwerve, we're passionate about empowering developers and designers to bring their visions to life. Our journey began with a simple yet ambitious goal: to provide creators with the tools they need to thrive in the digital landscape.</Text>
                <Text fontSize={'15px'} fontStyle={'oblique'} fontFamily={'cursive'} color={'#7B7B7B'}>Founded by Anshul Kumar Yadav, CodeDelite emerged as a testament to our commitment to innovation, quality, and accessibility in web development. With a deep understanding of the challenges faced by modern developers, Anshul envisioned a platform where creativity knows no bounds, and where aspiring creators can turn their ideas into reality.</Text>
            </Stack>
            <Stack width={["90%","80%",'60%']} margin={'auto'}>
                <Heading color={'#494949'} textAlign={'center'}>Our Mission</Heading>
                <Text fontSize={'15px'} fontStyle={'oblique'} fontFamily={'cursive'} color={'#7B7B7B'}>At CodeDelite, our mission is to democratize web development by offering a comprehensive collection of templates and components that inspire creativity, streamline workflows, and drive success. We believe that everyone deserves access to high-quality resources that enable them to build exceptional digital experiences, regardless of their skill level or background.</Text>
            </Stack>
            <Stack width={["90%","80%",'60%']} margin={'auto'}>
                <Heading color={'#494949'} textAlign={'center'}>Our Vision</Heading>
                <Text fontSize={'15px'} fontStyle={'oblique'} fontFamily={'cursive'} color={'#7B7B7B'}>Our vision is to become the go-to destination for developers and designers seeking premium-quality templates and components that exceed expectations. We aspire to foster a thriving community of creators who share knowledge, collaborate on projects, and push the boundaries of what's possible in web development.</Text>
            </Stack>
            <Stack width={["90%","80%",'60%']} margin={'auto'}>
                <Heading color={'#494949'} textAlign={'center'}>Join Us</Heading>
                <Text fontSize={'15px'} fontStyle={'oblique'} fontFamily={'cursive'} color={'#7B7B7B'}>Join us on our journey to revolutionize web development. Whether you're a seasoned professional or just starting out, CodeDelite welcomes you to explore our platform, unleash your creativity, and embark on an exciting adventure in digital innovation.</Text>
            </Stack>
          </Stack>

          <Footer />
        </Stack>
      </ChakraProvider>
    </StoreProvider>
  );
};

export default AboutPage;
