"use client";
import { Heading, Stack, Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import TemplateCard from "../Common/TemplateCard";

interface Card {
  id: number;
  image: string;
  author: string;
  authorProfileLink: string;
  authorProfileImage: string;
  templateType: string;
  category: string;
  price: number;
  title: string;
}

interface TabData {
  id: number;
  title: string;
  subTabs: string[];
}

// const Templates: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState(1);
//   const [category, setCategory] = useState<string>("");

//   const tabs: TabData[] = [
//     {
//       id: 1,
//       title: "All Products",
//       subTabs: [],
//     },
//     {
//       id: 2,
//       title: "Websites",
//       subTabs: [
//         "All",
//         "Business",
//         "Personal",
//         "E-commerce",
//         "Blog",
//         "Educational",
//         "Portfolio",
//         "Media Outlets",
//         "Wedding",
//       ],
//     },
//     {
//       id: 3,
//       title: "Mobile",
//       subTabs: [
//         "All",
//         "E-commerce",
//         "Health and Fitness",
//         "Travel and Navigation",
//         "Educational App",
//         "Finance and Banking Apps",
//       ],
//     },
//   ];

//   const cards: Card[] = [
//     {
//       id: 1,
//       image:
//         "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//       author: "Anshul",
//       authorProfileLink: "",
//       authorProfileImage:
//         "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//       templateType: "Website",
//       category: "Business",
//       price: 50,
//       title: "React Tutorial Website",
//     },
//     {
//       id: 2,
//       image:
//         "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//       author: "Anshul",
//       authorProfileLink: "",
//       authorProfileImage:
//         "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//       templateType: "Website",
//       category: "Business",
//       price: 50,
//       title: "React Tutorial Website",
//     },
//     {
//       id: 3,
//       image:
//         "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//       author: "Anshul",
//       authorProfileLink: "",
//       authorProfileImage:
//         "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//       templateType: "Website",
//       category: "Business",
//       price: 50,
//       title: "React Tutorial Website",
//     },
//     {
//       id: 4,
//       image:
//         "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//       author: "Anshul",
//       authorProfileLink: "",
//       authorProfileImage:
//         "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//       templateType: "Website",
//       category: "Business",
//       price: 50,
//       title: "React Tutorial Website",
//     },
//     {
//         id: 4,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 5,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 6,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 7,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 8,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 9,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 10,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 11,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 12,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 13,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 14,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 15,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 16,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 17,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//       {
//         id: 18,
//         image:
//           "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
//         author: "Anshul",
//         authorProfileLink: "",
//         authorProfileImage:
//           "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
//         templateType: "Website",
//         category: "Business",
//         price: 50,
//         title: "React Tutorial Website",
//       },
//   ];

//   const handleTabChange = (index: number) => {
//     setSelectedTab(index);
//   };

//   const filterCards = (category: string) => {
//     if (category === "All" ) {
//       return cards;
//     } else {
//       return cards.filter(
//         (card) =>
//           card.templateType === tabs[selectedTab - 1].title &&
//           (card.category === category ||
//             card.category === tabs[selectedTab - 1].subTabs[0])
//       );
//     }
//   };

//   return (
//     <Stack spacing={5} p={"5%"} color={"#ffffff"}>
//       <Heading>Templates</Heading>
//       <Tabs isFitted variant="soft-rounded" colorScheme="green">
//         <TabList>
//           {tabs.map((tab) => (
//             <Tab key={tab.id} onClick={() => handleTabChange(tab.id)}>
//               {tab.title}
//             </Tab>
//           ))}
//         </TabList>
//         <TabPanels>
//           {tabs.map((tab) => (
//             <TabPanel key={tab.id}>
//               <Tabs variant={"soft-rounded"} colorScheme="green">
//                 <TabList>
//                   {tab.subTabs.map((subTab) => (
//                     <Tab key={subTab} onClick={() => setCategory(subTab)}>
//                       {subTab}
//                     </Tab>
//                   ))}
//                 </TabList>
//                 <TabPanels>
//                   <Grid
//                     gap={"5"}
//                     templateColumns={"repeat(4,1fr)"}
//                     templateRows={"repeat(auto,200px)"}
//                   >
//                     {filterCards(category).map((card) => (
//                       <GridItem key={card.id}>
//                         <TemplateCard card={card} />
//                       </GridItem>
//                     ))}
//                   </Grid>
//                 </TabPanels>
//               </Tabs>
//             </TabPanel>
//           ))}
//         </TabPanels>
//       </Tabs>
//     </Stack>
//   );
// };

// export default Templates;

// ... existing imports

const Templates: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedSubTab, setSelectedSubTab] = useState<string>("All");

  const tabs: TabData[] = [
    {
      id: 1,
      title: "All Products",
      subTabs: [],
    },
    {
      id: 2,
      title: "Website",
      subTabs: [
        "All",
        "Business",
        "Personal",
        "E-commerce",
        "Blog",
        "Educational",
        "Portfolio",
        "Media Outlets",
        "Wedding",
      ],
    },
    {
      id: 3,
      title: "Mobile",
      subTabs: [
        "All",
        "E-commerce",
        "Health and Fitness",
        "Travel and Navigation",
        "Educational App",
        "Finance and Banking Apps",
      ],
    },
  ];

  const cards: Card[] = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
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
      templateType: "Website",
      category: "Business",
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
      templateType: "Website",
      category: "Business",
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
      templateType: "Website",
      category: "Business",
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
      templateType: "Website",
      category: "Business",
      price: 50,
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
      templateType: "Website",
      category: "Personal",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 6,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 7,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "E-commerce",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 8,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 9,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 10,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Mobile",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 11,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Mobile",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 12,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 13,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 14,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Mobile",
      category: "Health and Fitness",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 15,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 16,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 17,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
    {
      id: 18,
      image:
        "https://media.licdn.com/dms/image/D4D12AQGzVSuOm5s_bw/article-cover_image-shrink_423_752/0/1703676903904?e=1709769600&v=beta&t=pU8Pbd8lDk9PdJzHzWGvi0CKdMQ8-bmMh0XVcINvJO0",
      author: "Anshul",
      authorProfileLink: "",
      authorProfileImage:
        "https://media.licdn.com/dms/image/D5603AQGZYqopva2AGw/profile-displayphoto-shrink_100_100/0/1703504983356?e=1709769600&v=beta&t=nV-tI9wlaNLEuzQ_qpex81cUNw3i74ZAoXFaQ_pJFKQ",
      templateType: "Website",
      category: "Business",
      price: 50,
      title: "React Tutorial Website",
    },
  ];

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    setSelectedSubTab("All");
  };

  const handleSubTabChange = (subTab: string) => {
    setSelectedSubTab(subTab);
  };

  const filterCards = () => {
    if (selectedTab === 1) {
      return cards;
    } else if (selectedSubTab === "All") {
      return cards.filter(
        (card) => card.templateType === tabs[selectedTab - 1].title
      );
    } else {
      return cards.filter(
        (card) =>
          card.templateType === tabs[selectedTab - 1].title &&
          card.category === selectedSubTab
      );
    }
  };
  console.log(tabs[selectedTab - 1].title + " ------ " + selectedSubTab);
  return (
    <Stack spacing={5} p={"5%"} color={"#ffffff"}>
      <Heading>Templates</Heading>
      <Tabs isFitted variant="soft-rounded" colorScheme="green">
        <TabList>
          {tabs.map((tab) => (
            <Tab key={tab.id} onClick={() => handleTabChange(tab.id)}>
              {tab.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.id}>
              <Tabs variant={"soft-rounded"} colorScheme="green">
                <TabList>
                  {tab.subTabs.map((subTab) => (
                    <Tab
                      key={subTab}
                      onClick={() => handleSubTabChange(subTab)}
                    >
                      {subTab}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  <Grid
                    gap={"5"}
                    templateColumns={"repeat(4,1fr)"}
                    templateRows={"repeat(auto,200px)"}
                  >
                    {filterCards().map((card) => (
                      <GridItem key={card.id}>
                        <TemplateCard card={card} />
                      </GridItem>
                    ))}
                  </Grid>
                </TabPanels>
              </Tabs>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Templates;
