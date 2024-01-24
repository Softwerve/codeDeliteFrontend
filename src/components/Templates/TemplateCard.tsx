import { Box, Image, Flex, Text, Divider } from "@chakra-ui/react";
import { IoBagHandleSharp } from "react-icons/io5";
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import './TemplateCard.css';
import { useRouter } from "next/navigation";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleAddItemToBag } from "@/apiActions/bagAction";
interface CardProps {
  card: {
    tempId: number;
    authorName: string;
    thumbnailImage: string;
    title: string;
    price: number;
    authorProfileImage: string;
    authorProfileLink: string;
    category: string;
    tempLink: string;
  };
}

const TemplateCard: React.FC<CardProps> = ({ card }) => {
  // console.log("Cards: ",card);
  const router = useRouter();
  const store = useAppStore();
  const {isLoading, isSuccess, message} = useAppSelector((state)=>state.bag);
  const handleBag = (tempId: number) =>{
    store.dispatch(handleAddItemToBag(tempId));
  }
  return (
    <Box
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
      borderRadius={"10px"}
      bg={"#ffffff"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} p={"5%"}>
        <Flex justifyContent={"space-between"} gap={5} alignItems={"center"}>
          <Image
            src={card.authorProfileImage}
            alt={card.authorName}
            borderRadius={"50%"}
            height={"20px"}
            width={"20px"}
          />
          <Text>{card.authorName}</Text>
        </Flex>
        <IoMdPersonAdd />
      </Flex>
      <Image src={card.thumbnailImage} alt={card.authorName} />
      <Flex justifyContent={"space-between"} alignContent={"center"} p={"2%"}>
        <Text>{card.title}</Text>
        <Text>{card.price <= 0 ? "Free" : "₹ " + card.price}</Text>
      </Flex>
      <Divider />
      <Box p={"2%"}>
        <Text fontSize={"10"}>Liked By abhishek and 32 mores</Text>
      </Box>
      <Divider />
      <Flex
        justifyContent={"space-between"}
        alignContent={"center"}
        p={"5%"}
        fontSize={"20"}
      >
        <BiLike className="temp-icons" />
        <FaEye className="temp-icons" onClick={()=> router.push(`${card.tempLink}`) } />
        <FaHeartCirclePlus className="temp-icons" />
        <IoBagHandleSharp className="temp-icons" onClick={handleBag(`${card.tempId}`)} />
      </Flex>
    </Box>
  );
};

export default TemplateCard;
