import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TbComponentsOff } from "react-icons/tb";
const ComponentNotAvailable = () => {
  return (
    <Stack
      minH={"60vh"}
      p={"20"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#ffffff"}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
    >
      <TbComponentsOff fontSize={"120px"} />
      <Text fontSize={"40px"}>No Data Found</Text>
    </Stack>
  );
};

export default ComponentNotAvailable;
