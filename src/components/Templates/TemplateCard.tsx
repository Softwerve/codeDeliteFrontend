import {
  Box,
  Image,
  Flex,
  Text,
  Divider,
  useToast,
  Avatar,
} from "@chakra-ui/react";
import { IoBagHandleSharp } from "react-icons/io5";
import React, { useState } from "react";
import { FaEye, FaUserMinus } from "react-icons/fa";
import { FaHeartCircleMinus, FaHeartCirclePlus } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";
import "./TemplateCard.css";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleAddItemToBag } from "@/apiActions/bagAction";
import {
  handleAddItemToLovedList,
  handleRemoveItemFromLovedList,
} from "@/apiActions/templatesAction";
import { handleFollowAuthor } from "@/apiActions/followAction";
import { convertCurrency } from "@/apiActions/currencyExchange";
interface CardProps {
  card: {
    tempId: number;
    authorId: number;
    authorName: string;
    thumbnailImage: string;
    title: string;
    price: number;
    authorProfileImage: string;
    authorProfileLink: string;
    currency: string;
    tempLink: string;
  };
  isLoved: boolean;
}

const TemplateCard: React.FC<CardProps> = ({ card, isLoved }) => {
  // console.log("Cards: ",card);
  const router = useRouter();
  const store = useAppStore();
  const toast = useToast();
  const [isFollowed, setIsFollowed] = useState(false);
  const { isLoading, isSuccess, message } = useAppSelector(
    (state) => state.bag
  );
  const data = useAppSelector((state) => state.templates);
  const {user} = useAppSelector((state)=> state.user);
  const handleBag = () => {
    store.dispatch(handleAddItemToBag(card.tempId)).then((response) => {
      if (response?.payload.success) {
        handleToast(response?.payload.message, "success");
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleFollow = () => {
    store.dispatch(handleFollowAuthor(card.authorId)).then((response) => {
      if (response?.payload?.success) {
        setIsFollowed(true);
        handleToast(response?.payload.message, "success");
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };
  const handleAddLovedItem = () => {
    store.dispatch(handleAddItemToLovedList(card.tempId));
    if (!data.isLoading && data.isSuccess) {
      handleToast(message, "success");
    } else if (!isLoading && !isSuccess) {
      handleToast(message, "error");
    }
  };

  const handleRemoveLovedItem = (tempId: any) => {
    store.dispatch(handleRemoveItemFromLovedList(tempId));
  };

  const handleToast = (message: any, status: any) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
      borderRadius={"10px"}
      bg={"#ffffff"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} p={"5%"}>
        <Flex justifyContent={"space-between"} gap={5} alignItems={"center"}>
          <Avatar
            src={card.authorProfileImage}
            name={card.authorName.split(" ")[0]}
            borderRadius={"50%"}
            height={"20px"}
            width={"20px"}
            padding={"4"}
          />
          <Text>{card.authorName.split(" ")[0]}</Text>
        </Flex>
        {isFollowed ? (
          <FaUserMinus />
        ) : (
          <IoMdPersonAdd onClick={handleFollow} />
        )}
      </Flex>
      <Image src={card.thumbnailImage} alt={card.authorName} />
      <Flex justifyContent={"space-between"} alignContent={"center"} p={"2%"}>
        <Text>{card.title}</Text>
        <Text>{card.price <= 0 ? "Free" : `${user.currencySymbol} ${convertCurrency(card.price,card.currency,user.currency)}`}</Text>
      </Flex>
      <Divider />
      <Box p={"2%"}>
        <Text fontSize={"10"}>10</Text>
      </Box>
      <Divider />
      <Flex
        justifyContent={"space-between"}
        alignContent={"center"}
        p={"5%"}
        fontSize={"20"}
      >
        <BiLike className="temp-icons" />
        <FaEye
          className="temp-icons"
          onClick={() => router.push(`${card?.tempLink}`)}
        />
        {!isLoved ? (
          <FaHeartCirclePlus
            className="temp-icons"
            onClick={handleAddLovedItem}
          />
        ) : (
          <FaHeartCircleMinus
            className="temp-icons"
            onClick={() => handleRemoveLovedItem(card?.tempId)}
          />
        )}
        <IoBagHandleSharp className="temp-icons" onClick={handleBag} />
      </Flex>
    </Box>
  );
};

export default TemplateCard;
