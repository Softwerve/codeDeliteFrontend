import TemplateCard from "@/components/Templates/TemplateCard";
import {
  ChakraProvider,
  Divider,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";

interface Card {
  id: number;
  image: string;
  author: string;
  authorProfileLink: string;
  authorProfileImage: string;
  category: string;
  price: number;
  title: string;
}

const Favourites = () => {
  const cards: Card[] = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Business",
      price: 0,
      title: "React Tutorial Website",
    },
    {
      id: 2,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Dashboard",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 3,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Personal Website",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 4,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "Business",
      price: 0,
      title: "React Tutorial Website",
    },
    {
      id: 5,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      category: "E-commerce",
      price: 50,
      title: "React Tutorial Website",
    },
  ];
  return (
    <ChakraProvider>
      <Stack spacing={10} p={"5%"}>
        <Heading fontSize={"40"}>Recommended Templates For Your</Heading>
        <Divider />
        <Grid
          templateColumns={"repeat(5,1fr)"}
          templateRows={"repeat(auto,auto)"}
          gap={"5"}
        >
          {cards.map((card, index) => (
            <GridItem key={index} color={"#ffffff"}>
              <TemplateCard card={card} />
            </GridItem>
          ))}
        </Grid>
        <Heading fontSize={"40"}>Your Loved Templates</Heading>
        <Divider />
        <Grid
          templateColumns={"repeat(3,1fr)"}
          templateRows={"repeat(auto,auto)"}
          gap={"10"}
        >
          {cards.map((card, index) => (
            <GridItem key={index} color={"#ffffff"}>
              <TemplateCard card={card} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </ChakraProvider>
  );
};

export default Favourites;
