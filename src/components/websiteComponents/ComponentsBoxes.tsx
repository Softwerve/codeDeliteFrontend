import { Divider, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { TbLayoutNavbarFilled, TbProgress } from "react-icons/tb";
import { RxButton } from "react-icons/rx";
import { FaWpforms } from "react-icons/fa";
import { FaRegAddressCard, FaRegRectangleList } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { IoIosAlert, IoIosRadioButtonOn, IoIosSwitch } from "react-icons/io";
import { TbInputAi } from "react-icons/tb";
import { BsTable , BsMenuButtonFill, BsPostcard,BsThreeDots} from "react-icons/bs";
import { ImSpinner } from "react-icons/im";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { PiSlideshowFill } from "react-icons/pi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useRouter } from "next/navigation";
const ComponentsBoxes = () => {
  const router = useRouter();
  const components = [
    {
      icon: <TbLayoutNavbarFilled fontSize='50px' color='' />,
      category: "Navbar",
    },
    {
      icon: <FaWpforms fontSize='50px' />,
      category: "Forms",
    },
    {
      icon: <FaRegAddressCard fontSize='50px' />,
      category: "Cards",
    },
    {
      icon: <VscGraph fontSize='50px' />,
      category: "Graphs",
    },
    {
      icon: <RxButton fontSize='50px' />,
      category: "Buttons",
    },
    {
      icon: <IoIosSwitch fontSize='50px' />,
      category: "Switch",
    },
    {
      icon: <TbInputAi fontSize='50px' />,
      category: "Inputs",
    },
    {
      icon: <BsTable fontSize='50px' />,
      category: "Tables",
    },
    {
      icon: <FaRegRectangleList fontSize='50px' />,
      category: "Lists",
    },
    {
      icon: <IoIosRadioButtonOn fontSize='50px' />,
      category: "Steppers",
    },
    {
      icon: <TbProgress fontSize='50px' />,
      category: "Progress",
    },
    {
      icon: <ImSpinner fontSize='50px' />,
      category: "Spinners",
    },
    {
      icon: <IoIosAlert fontSize='50px' />,
      category: "Alerts",
    },
    {
      icon: <RiArchiveDrawerFill fontSize='50px' />,
      category: "Drawers",
    },
    {
      icon: <BsMenuButtonFill fontSize='50px' />,
      category: "Menus",
    },
    {
      icon: <BsPostcard fontSize='50px' />,
      category: "Modals",
    },
    {
      icon: <PiSlideshowFill fontSize='50px' />,
      category: "Slider",
    },
    {
      icon: <MdCheckBoxOutlineBlank fontSize='50px' />,
      category: "PIN OTP Inputs",
    },
    {
      icon: <BsThreeDots fontSize='50px' />,
      category: "Others",
    },

  ]
  return (
    <Stack p={10} spacing={'5'}>
      <Heading>Components</Heading>
      <Divider/>
      <Grid gap={5} gridTemplateColumns={'repeat(4,1fr)'} gridTemplateRows={'repeat(auto,auto)'}>
        {
          components.map((component,index)=> (
            <GridItem key={index}>
              <Stack  key={index} height={'200px'} borderRadius={'10px'} justifyContent={'center'} alignItems={'center'} p={5} backgroundColor={'#ffffff'} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'>
                {component.icon}
                <Text _hover={{cursor: 'pointer', color:'#4D22CA'}} onClick={()=>router.push(`/components/${component.category}`)} fontSize={'20px'}>{component.category}</Text>
              </Stack>
            </GridItem>
          ))
        }
      </Grid>
    </Stack>
  );
};

export default ComponentsBoxes;
