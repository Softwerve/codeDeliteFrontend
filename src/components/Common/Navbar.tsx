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
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/codedelite.png";
import { FaBars, FaChevronDown, FaLocationArrow } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navItemsDisplay = useBreakpointValue({ base: "none", md: "flex" });
  const showLoginButton = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
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
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem 2rem"
      bg={isTop ? "transparent" : "black"}
      boxShadow={isTop ? "none" : "rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      position={isTop ? "absolute" : "sticky"}
      top={0}
      left={0}
      right={0}
      zIndex={999}
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      <Box>
        <Image src={logo} alt="coginite" height="30" width={"120"} />
      </Box>
      {navItemsDisplay == "flex" ? (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width={["50%", "40%"]}
        >
          {" "}
          {/* Responsive width */}
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
              <MenuItem bg="#000000" color="#ffffff">
                Softwerve
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
        </Flex>
      ) : (
        ""
      )}
      {showLoginButton == true ? (
        <Button variant={"outline"} color={"white"} _hover={{ bg: "none" }}>
          Login <FiArrowUpRight fontWeight="bold" />
        </Button>
      ) : (
        ""
      )}

      <IconButton
        display={{ base: "flex", md: "none" }}
        ref={btnRef}
        onClick={onOpen}
        icon={<FaBars />}
      />
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
                <MenuItem bg="#000000" color="#ffffff">
                  Softwerve
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
