"use client";
import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/codedelite.png";
import logoTop from "../../assets/logo.png";
import { FaBars, FaChevronDown, FaLocationArrow } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleUserDetails } from "@/apiActions/userAction";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const store = useAppStore();
  const data = useAppSelector((state) => state.user);
  const navItemsDisplay = useBreakpointValue({ base: "none", md: "flex" });
  const showLoginButton = useBreakpointValue({ base: false, md: true });

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

  const router = useRouter();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem 2rem"
      bg={isTop ? "transparent" : "#ffffff"}
      boxShadow={isTop ? "none" : "rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      position={isTop ? "absolute" : "sticky"}
      top={0}
      left={0}
      right={0}
      zIndex={999}
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      <Box onClick={() => router.push("/")} cursor={"pointer"}>
        <Image
          src={isTop ? logoTop : logo}
          alt="coginite"
          height="30"
          width={"120"}
        />
      </Box>
      {navItemsDisplay == "flex" ? (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width={["60%", "50%"]}
        >
          
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/templates")}
          >
            Templates
          </Button>
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/components")}
          >
            Components
          </Button>
          {/* <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
          >
            Pricing
          </Button> */}
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
          >
            About Us
          </Button>
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
          >
            Blog
          </Button>
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/author")}
          >
            Become An Author
          </Button>
        </Flex>
      ) : (
        ""
      )}
      {showLoginButton == true ? (
        data.isLogin ? (
          <Flex justifyContent={"space-between"} gap={3} alignItems={"center"}>
            <Avatar
              name={data.user?.username}
              src={data?.user.profileImage}
              size={"sm"}
            />
            <Text color={isTop ? "#ffffff" : "#000000"}>
              {data?.user.username}
            </Text>
          </Flex>
        ) : (
          <Button
            variant={"outline"}
            color={isTop ? "white" : "black"}
            _hover={{ bg: "none" }}
            onClick={()=> window.location.href = 'http://localhost:3000/login'}
          >
            Login <FiArrowUpRight fontWeight="bold" />
          </Button>
        )
      ) : (
        ""
      )}

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        icon={<FaBars />}
        aria-label={"Menu"}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody bg={"#000000"}>
            <Menu>
              <MenuButton
                className="underline-on-hover"
                color="white"
                bg="none"
                as={Button}
                _hover={{ bg: "none" }}
                rightIcon={<FaChevronDown />}
              >
                Products
              </MenuButton>
              <MenuList bg="#000000">
                <MenuItem bg="#000000" color="#ffffff">
                  CodeDelite
                </MenuItem>
                <MenuItem bg="#000000" color="#ffffff">
                  WebTailory
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              className="underline-on-hover"
              color={"white"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
            >
              Templates
            </Button>
            <Button
              className="underline-on-hover"
              color={"white"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
            >
              Pricing
            </Button>
            <Button
              className="underline-on-hover"
              color={"white"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
            >
              About Us
            </Button>
            <Button
              className="underline-on-hover"
              color={"white"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
            >
              Blog
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
