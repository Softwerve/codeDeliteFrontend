"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SlHome } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../../assets/codedelite.png";
import { IoBagHandle, IoCodeDownloadSharp } from "react-icons/io5";
import { Stack, Text } from "@chakra-ui/react";

export default function Sidebar({ show, setter }) {
  const router = useRouter();

  const className =
    "bg-white w-[300px] transition-[margin-left] ease-in-out duration-500 sticky md:static top-0 bottom-0 left-0 z-40";

  const appendClass = show ? " ml-0" : " ml-[-300px] md:ml-0";

  const MenuItem = ({ icon, name, route }) => {
    const colorClass =
      router.pathname === route
        ? "text-black"
        : "text-black/50 hover:text-black";

    return (
      <Link
        href={route}
        onClick={() => {
          setter((oldVal) => !oldVal);
        }}
        className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-black/30 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setter((oldVal) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`} style={{ padding: "2%", position:'sticky',top:0,bottom:0,left:0}}>
        <div className="p-2 flex">
          <Link href="/">
            <img src={logo.src} alt="Company Logo" width={300} height={300} />
          </Link>
        </div>
        <Stack
          spacing={"5"}
          style={{
            width: "70%",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            src="https://avatars.githubusercontent.com/u/102046087?v=4"
            alt="Anshul"
          />
          <Text textAlign={"center"} color={"black.50"}>
            Anshul
          </Text>
        </Stack>
        <div className="flex flex-col">
          <MenuItem name="Home" route="/dashboard" icon={<SlHome />} />
          {/* <MenuItem
            name="Explore Templates"
            route="/dashboard/templates"
            icon={<HiTemplate />}
          /> */}
          <MenuItem
            name="Loved Templates"
            route="/dashboard/fovouritetemplates"
            icon={<FaRegHeart />}
          />
          <MenuItem
            name="Your Bag"
            route="/dashboard/bag"
            icon={<IoBagHandle />}
          />
          <MenuItem
            name="Your Puchase"
            route="/dashboard/purchased"
            icon={<IoCodeDownloadSharp />}
          />
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
