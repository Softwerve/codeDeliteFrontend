"use client";
import { Box, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../../../assets/codedelite.png";
import { useRouter } from "next/navigation";
import { IoBagHandle } from "react-icons/io5";
import { CgComponents } from "react-icons/cg";
import { HiTemplate, HiUsers } from "react-icons/hi";
import { BiSolidDashboard } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter();
  const displayValue = useBreakpointValue({base: "none", md: "block"});
  const navItems = [
    {
      icon: <BiSolidDashboard />,
      title: "Home",
      link: "/dashboard/",
    },
    {
      icon: <FaHeartCirclePlus/>,
      title: "Loved Items",
      link: "/dasboard/favourites"
    },
    {
      icon: <HiUsers />,
      title: "Following",
      link: "/dashboard/following",
    },
    {
      icon: <HiTemplate />,
      title: "Templates",
      link: "/dashboard/templates",
    },
    {
      icon: <CgComponents />,
      title: "Components",
      link: "/dashboard/components",
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
            bg={"none"}
            _hover={{ bg: "none" }}
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
