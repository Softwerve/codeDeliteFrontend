"use client"
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
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
import OTPInput from "react-otp-input";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircle,
  IoEyeOff,
} from "react-icons/io5";
import { useTimer } from "react-timer-hook";
import Select from "react-select";
import {
  handleAvailableUsername,
  handleSendOtp,
  handleSignUpUser,
} from "@/apiActions/authActions";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { IoMdEye } from "react-icons/io";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const store = useAppStore();
  const data = useAppSelector((state) => state.user);
  const toast = useToast();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  const expiryTimestamp = time; 

  const { totalSeconds, minutes, seconds, isRunning, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const sendOtp = () => {
    store.dispatch(handleSendOtp(email)).then((response) => {
      if (response?.payload.success == true) {
        handleToast(response?.payload.message, "success");
        const restartTime = new Date();
        restartTime.setSeconds(restartTime.getSeconds() + 300);
        restart(restartTime);
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleSignUp = (event:any) => {
    event.preventDefault();
    const user = {
      name: name,
      profileImage: "dfadsf",
      email: email,
      password: password,
      username: username,
      otp : +otp,
    };
    console.log(user);
    store.dispatch(handleSignUpUser(user)).then((response) => {
      if (response?.payload.success == true) {
        handleToast(response?.payload.message, "success");
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleCountryChange = (selectedOption:any) => {
    setSelectedCountry(selectedOption);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryOptions = data.map((country:any) => ({
          value: country.name.common,
          label: (
            <Flex alignItems={"center"} gap={5}>
              <img
                src={country.flags.svg}
                alt={country.name.common}
                style={{ width: "40px", height: "30px" }}
              />
              {country.name.common}
            </Flex>
          ),
        }));
        setCountries(countryOptions);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleAvailableUserName = (value: string) => {
    setUsername(value);
    store.dispatch(handleAvailableUsername(value));
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

  const progressValue = isRunning ? (totalSeconds / 300) * 100 : 0;

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Stack>
      <Heading fontSize={"20"}>Create An Account</Heading>
      <form action="POST" onSubmit={(event)=> handleSignUp(event)}>
        <Stack spacing={3}>
          <Flex gap={5}>
            <Input
              isRequired
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <InputGroup>
              <Input
                isRequired
                type="text"
                placeholder="Enter UserName"
                onChange={(e) => handleAvailableUserName(e.target.value)}
              />
              <InputRightElement>
                {data.isLoading ? (
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="md"
                    aria-label="Loading..."
                  />
                ) : data.isAvailable ? (
                  <IoCheckmarkCircleSharp color="green" />
                ) : (
                  <IoCloseCircle color="red" />
                )}
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Input
            isRequired
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            placeholder="Select your country"
            value={selectedCountry}
            onChange={handleCountryChange}
            options={countries}
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
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
          {/* ... (your existing form fields) */}
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            {data.isOtpLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                label="Sending.."
              />
            ) : !data.otpSuccess ? (
              "Send Otp"
            ) : (
              <CircularProgress
                value={progressValue} // Calculate the progress percentage
                color="green.400"
                size="36px"
              >
                <CircularProgressLabel>
                  {minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}
                </CircularProgressLabel>
              </CircularProgress>
            )}
            <Button onClick={sendOtp} colorScheme="blue">
              Send OTP
            </Button>
          </Flex>
          <Box margin={"auto"}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              containerStyle={{ margin: "auto", width: "100%" }}
              placeholder="000000"
              inputStyle={{
                border: "1px solid gray",
                marginRight: "5px",
                height: "50px",
                width: "45px",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUp;
