"use client"
import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CodeDelite from "../../../assets/codedelite.png";

import { useEffect, useState } from "react";
import { HiMenuAlt1, HiTemplate, HiUsers } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";
import { TbMoneybag } from "react-icons/tb";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleUserDetails } from "@/apiActions/userAction";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayValue = useBreakpointValue({base: "flex",md: "none"});
  const btnRef = React.useRef();
  const router = useRouter();
  const store = useAppStore();
  const {user,isloading} = useAppSelector((state)=> state.user); 
  const navItems = [
    {
      icon: <BiSolidDashboard />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <HiUsers />,
      title: "Followers",
      link: "/followers",
    },
    {
      icon: <HiTemplate />,
      title: "Templates",
      link: "/templates",
    },
    {
      icon: <CgComponents />,
      title: "Components",
      link: "/components",
    },
    {
      icon: <TbMoneybag />,
      title: "Earning",
      link: "/earnings",
    },
    {
      icon: <IoBagHandle />,
      title: "Bag",
      link: "/bag",
    },
    {
      icon: <MdOutlineFileDownload />,
      title: "Purchase Bag",
      link: "/purchase",
    },
  ];
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    store.dispatch(handleUserDetails());
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      justifyContent={["space-between","flex-end"]}
      padding={"5px 15px 5px 5px"}
      position={"sticky"}
      top={0}
      right={0}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      alignItems={"center"}
      bg={"#ffffff"}
    >
      <Flex display={displayValue} width={'30%'} justifyContent={'space-between'} alignItems={'center'}>
        <HiMenuAlt1 ref={btnRef} colorScheme="teal" onClick={onOpen}  />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              {navItems?.map((item, index) => (
                <Button
                  key={index}
                  bg={"none"}
                  _hover={{ bg: "none" }}
                  onClick={() => router.push(item.link)}
                  leftIcon={item.icon}
                  fontSize={"20"}
                >
                  {item.title}
                </Button>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Image src={CodeDelite.src} alt="codedelite" width={100} height={50} />
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={5}>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton _active={isOpen}>
                <Avatar name={user.username} src={user.profileImage} size={'md'} />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>LogOut</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Text>{user.name}</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
