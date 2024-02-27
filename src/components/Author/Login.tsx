import { handleLogin } from "@/apiActions/authActions";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";

const LogIn = () => {
  const authorDashboard = process.env.NEXT_PUBLIC_AUTHOR_DASHBOARD_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const store = useAppStore();
  const toast = useToast();
  const data = useAppSelector((state) => state.auth);
  const handleLoginUser = (event: any) => {
    event.preventDefault();
    store
      .dispatch(handleLogin({ email: email, password: password }))
      .then((response) => {
        if (response?.payload.isSuccess == true) {
          handleToast("Logged In Successfully", "success");

          window.location.href = `${authorDashboard}?access=${response?.payload.token}`;
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
  };
  const handleToast = (message: string, status: any) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };
  
  return (
    <Stack>
      <Heading fontSize={"20"}>Login To Your Account</Heading>
      <Divider />
      <form onSubmit={(event) => handleLoginUser(event)}>
        <Stack>
          <Input
            type="email"
            placeholder="Enter Email"
            isRequired
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              isRequired
              placeholder="Enter password of minimum 8 "
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              {!show ? (
                <IoEyeOff onClick={handleClick} />
              ) : (
                <IoMdEye onClick={handleClick} />
              )}
            </InputRightElement>
          </InputGroup>
          <Flex justifyContent={"flex-end"}>
            <Link target="blank" href="https://www.softwerve.com/forgetpassword" style={{ color: "blue" }}>
              Forgot Password ?
            </Link>
          </Flex>
           (
            <Button isLoading={data?.isLoading} loadingText="Submitting" colorScheme="blue" type="submit">
              Submit
            </Button>
          )
        </Stack>
      </form>
      {/* <Divider />
      <Text textAlign={"center"}>Or</Text>
      <Divider />
      <Button variant={"outline"} colorScheme="blue" leftIcon={<FcGoogle />}>
        {"Continue With Google"}
      </Button>
      <Button variant={"outline"} colorScheme="gray" leftIcon={<FaGithub />}>
        {"Continue With GitHub"}
      </Button> */}
    </Stack>
  );
};

export default LogIn;
