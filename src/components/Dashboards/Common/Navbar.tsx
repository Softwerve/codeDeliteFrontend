"use client";
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
  IconButton,
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
import { IoBagHandle } from "react-icons/io5";
import {
  MdOutlineArrowDropDownCircle,
  MdOutlineFileDownload,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleUserDetails } from "@/apiActions/userAction";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displayValue = useBreakpointValue({ base: "flex", md: "none" });
  const btnRef = React.useRef();
  const router = useRouter();
  const store = useAppStore();
  const { user } = useAppSelector((state) => state.user);
  const navItems = [
    {
      icon: <BiSolidDashboard />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <HiUsers />,
      title: "Followers",
      link: "/dashboard/followers",
    },
    {
      icon: <HiTemplate />,
      title: "Explore WebTemplates",
      link: "/webtemplates?category=All",
    },
    {
      icon: <CgComponents />,
      title: "Explore Components",
      link: "/components",
    },
    {
      icon: <FaUserAlt />,
      title: "Connect With Authors",
      link: "/authors",
    },
    {
      icon: <IoBagHandle />,
      title: "Bag",
      link: "/dashboard/bag",
    },
    {
      icon: <MdOutlineFileDownload />,
      title: "Purchase Bag",
      link: "/dashboard/purchase",
    },
  ];
  const navItemsSmall = [
    {
      icon: <HiTemplate />,
      title: "Explore WebTemplates",
      link: "/webtemplates?category=All",
    },
    {
      icon: <CgComponents />,
      title: "Explore Components",
      link: "/components",
    },
    {
      icon: <FaUserAlt />,
      title: "Connect With Authors",
      link: "/author/all",
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
      justifyContent={"space-between"}
      padding={"5px 15px 5px 5px"}
      position={"sticky"}
      top={0}
      right={0}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      alignItems={"center"}
      bg={"#ffffff"}
    >
      <Flex
        display={displayValue}
        width={"30%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HiMenuAlt1 ref={btnRef} colorScheme="teal" onClick={onOpen} />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
      <Flex display={["none", "flex"]}>
        {navItemsSmall?.map((item, index) => (
          <Button
            key={index}
            bg={"none"}
            _hover={{ bg: "none" }}
            onClick={() => router.push(item.link)}
            leftIcon={item.icon}
            fontSize={"15"}
          >
            {item.title}
          </Button>
        ))}
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={5}>
        <Menu>
          {({ isOpen }) => (
            <>
              <Avatar
                name={user.username}
                src={user.profileImage}
                size={"md"}
              />
              <Text>{user.name}</Text>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<MdOutlineArrowDropDownCircle />}
                  backgroundColor={"transparent"}
                  _hover={{ backgroundColor: "transparent" }}
                  _expanded={{ bg: "transparent" }}
                />
                <MenuList>
                  <MenuItem as="a" href="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
