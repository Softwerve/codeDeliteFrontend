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
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/codedelite.png";
import logoTop from "../../assets/logo.png";
import { FaBars, FaChevronDown, FaLocationArrow } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { handleLogout, handleUserDetails } from "@/apiActions/userAction";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Cookies from "universal-cookie";
import Link from "next/link";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const store = useAppStore();
  const data = useAppSelector((state) => state.user);
  const navItemsDisplay = useBreakpointValue({ base: "none", md: "flex" });
  const showLoginButton = useBreakpointValue({ base: false, md: true });
  const cookies = new Cookies();
  const token = cookies.get("token");
  const toast = useToast();
  const softwerveLink = process.env.NEXT_PUBLIC_SOFTWERVE_URL;
  useEffect(() => {
    if (token != null) {
      store.dispatch(handleUserDetails());
    }
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

  const logout = () => {
    store.dispatch(handleLogout()).then((response) => {
      if (response?.payload?.success) {
        handleToast(response?.payload?.message, "success");
        window.location.reload();
      } else {
        handleToast(response?.payload?.message, "error");
      }
    });
  };

  const handleToast = (message: any, status: any) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const router = useRouter();
  const authorDashboard = "http://localhost:3002/";
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
          <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/pricingandcharges")}
          >
            Pricing & Charges
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
            onClick={() => router.push("/about")}
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
            <Link href={`${softwerveLink}/blog`} target="blank">Blog</Link>
          </Button>
          {/* <Button
            className="underline-on-hover"
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/author")}
          >
            Become An Author
          </Button> */}
        </Flex>
      ) : (
        ""
      )}
      {showLoginButton == true ? (
        data.user.username != null ? (
          <Flex justifyContent={"space-between"} gap={3} alignItems={"center"}>
            <Avatar
              name={data.user?.username}
              src={data?.user.profileImage}
              size={"sm"}
            />
            <Text color={isTop ? "#ffffff" : "#000000"}>
              {data?.user.username}
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<MdOutlineArrowDropDownCircle />}
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
                color={"#000000"}
                _expanded={{ bg: "transparent" }}
              />
              <MenuList>
                <MenuItem
                  as="a"
                  href={
                    data.user.role === "USER"
                      ? "/dashboard"
                      : `${authorDashboard}`
                  }
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  as="a"
                  href={
                    data.user.role === "USER"
                      ? "/dashboard/bag"
                      : `${authorDashboard}bag`
                  }
                >
                  Bag
                </MenuItem>
                <MenuItem
                  as="a"
                  href={
                    data.user.role === "USER"
                      ? "/dashboard/purchased"
                      : `${authorDashboard}purchased`
                  }
                >
                  Purchase
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          // <Button
          //   variant={"outline"}
          //   color={isTop ? "white" : "black"}
          //   _hover={{ bg: "none" }}
          //   onClick={() =>
          //     (window.location.href = "http://localhost:3000/login")
          //   }
          // >
          //   Login <FiArrowUpRight fontWeight="bold" />
          // </Button>
          <Button
            // className="underline-on-hover"
            variant={"outline"}
            color={isTop ? "white" : "black"}
            bg={"none"}
            as={Button}
            _hover={{ bg: "none" }}
            onClick={() => router.push("/author")}
            rightIcon={<FiArrowUpRight fontWeight="bold" />}
          >
            Become An Author
          </Button>
        )
      ) : null}

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

          <DrawerBody>
            <Button
              className="underline-on-hover"
              color={"black"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
              onClick={() => router.push("/templates")}
            >
              Templates
            </Button>
            <Button
              className="underline-on-hover"
              color={"black"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
              onClick={() => router.push("/components")}
            >
              Components
            </Button>
            <Button
              className="underline-on-hover"
              color={"black"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
              onClick={() => router.push("/about")}
            >
              About Us
            </Button>
            <Button
              className="underline-on-hover"
              color={"black"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
              onClick={() => router.push("/blog")}
            >
              Blog
            </Button>
            <Button
              className="underline-on-hover"
              color={"black"}
              bg={"none"}
              as={Button}
              _hover={{ bg: "none" }}
              onClick={() => router.push("/author")}
            >
              Become An Author
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
