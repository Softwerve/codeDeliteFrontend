"use client";
import { Box, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../assets/codedelite.png";
import { useRouter, useSearchParams } from "next/navigation";
import { IoBagHandle } from "react-icons/io5";
import { CgComponents } from "react-icons/cg";
import { HiTemplate, HiUsers } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFileInvoiceDollar, FaHeartCirclePlus } from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter();
  const displayValue = useBreakpointValue({base: "none", md: "block"});
  const params = useSearchParams();
  const nav = params.get("screen")?.split("-").join(" ");
  const navItems = [
    {
      icon: <BiSolidDashboard />,
      title: "Home",
      link: "/dashboard?screen=Home",
    },
    {
      icon: <FaHeartCirclePlus/>,
      title: "Loved Items",
      link: "/dashboard/loveditems?screen=Loved-Items"
    },
    {
      icon: <HiUsers />,
      title: "Following",
      link: "/dashboard/following?screen=Following",
    },
    {
      icon: <IoBagHandle />,
      title: "Bag",
      link: "/dashboard/bag?screen=Bag",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Orders",
      link: "/dashboard/orders?screen=Orders",
    },
    {
      icon: <MdOutlineFileDownload />,
      title: "Purchase Bag",
      link: "/dashboard/purchased?screen=Purchase-Bag",
    },
  ];

  return (
    <Stack
      padding="10"
      display={displayValue}
      boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px"}
      position={"sticky"}
      top={0}
      left={0}
      bottom={0}
      zIndex={999}
      minH={"100vh"}
      alignItems={"center"}
      alignContent={"center"}
      bg={"#ffffff"}
    >
      <Box
        marginBottom={"50"}
        onClick={() => router.push("/")}
        cursor={"pointer"}
      >
        <Image src={logo} alt="codedelite" />
      </Box>{" "}
      <Stack
        minH={"70vh"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        {navItems?.map((item, index) => (
          <Button
            key={index}
            bg={nav==item.title?"#673DE6":"transparent"}
            _hover={nav==item.title?{ bg: "#673DE6" }:{bg: "transparent"}}
            color={nav==item.title?"#ffffff":"#000000"}
            onClick={() => router.push(item.link)}
            leftIcon={item.icon}
            fontSize={"20"}
          >
            {item.title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
