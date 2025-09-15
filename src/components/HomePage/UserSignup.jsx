"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
  useToast,
} from "@chakra-ui/react";
import OTPInput from "react-otp-input";
import {
  IoCheckmarkCircleSharp,
  IoCloseCircle,
  IoEyeOff,
} from "react-icons/io5";
import { useTimer } from "react-timer-hook";
import {
  handleAvailableUsername,
  handleSendOtp,
  handleSignUpUser,
} from "@/apiActions/authActions";
import { useAppSelector, useAppStore } from "@/lib/hooks";
import { IoMdEye } from "react-icons/io";

const steps = [
  { title: "Basic Details", description: "Enter Basic Details" },
  { title: "Password", description: "Set Your Password" },
  { title: "Submit", description: "Enter Otp and Submit" },
];

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const containsUppercase = /[A-Z]/.test(password);
  const containsLowercase = /[a-z]/.test(password);
  const containsNumeric = /\d/.test(password);
  const containsSpecial = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
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
        setActiveStep(2);
        const restartTime = new Date();
        restartTime.setSeconds(restartTime.getSeconds() + 300);
        restart(restartTime);
      } else {
        handleToast(response?.payload.message, "error");
      }
    });
  };

  const handleSignUp = (event) => {
    if (isChecked) {
      event.preventDefault();
      const user = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      store.dispatch(handleSignUp(user, +otp)).then((response) => {
        if (response?.payload.success == true) {
          handleToast(response?.payload.message, "success");
          window.location.reload();
        } else {
          handleToast(response?.payload.message, "error");
        }
      });
    } else {
      handleToast("Accept Terms & Conditions", "error");
    }
  };


  const handleToast = (message, status) => {
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

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Stack spacing={20}>
      <Stepper size="sm" index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Stack>
      <Heading fontSize={"25"}>Create An Account</Heading>
      <form action="POST" onSubmit={(event) => handleSignUp(event)}>
        {activeStep === 0 ? (
          <Stack spacing={5}>
            <Flex gap={5}>
              <Input
                isRequired
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              
            </Flex>
            <Input
              isRequired
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Button colorScheme="blue" onClick={()=>setActiveStep(1)} >Next</Button>
          </Stack>
        ) : activeStep === 1 ? (
          <Stack spacing={5}>
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
            <Stack>
              <Flex alignItems={"center"}>
                {!containsUppercase ? (
                  <IoCloseCircle color="red" />
                ) : (
                  <IoCheckmarkCircleSharp color="green" />
                )}
                <Text>at least one uppercase</Text>
              </Flex>
              <Flex alignItems={"center"}>
                {!containsLowercase ? (
                  <IoCloseCircle color="red" />
                ) : (
                  <IoCheckmarkCircleSharp color="green" />
                )}
                <Text>at least one lowercase</Text>
              </Flex>
              <Flex alignItems={"center"}>
                {!containsNumeric ? (
                  <IoCloseCircle color="red" />
                ) : (
                  <IoCheckmarkCircleSharp color="green" />
                )}
                <Text>at least one numeric</Text>
              </Flex>
              <Flex alignItems={"center"}>
                {!containsSpecial ? (
                  <IoCloseCircle color="red" />
                ) : (
                  <IoCheckmarkCircleSharp color="green" />
                )}
                <Text>at least one special character</Text>
              </Flex>
            </Stack>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Button width={'48%'} colorScheme="yellow" onClick={()=> setActiveStep(0)}>Back</Button>
            <Button width={'48%'} isLoading={data.isOtpLoading} loadingText={"Sending Otp"} colorScheme="blue" onClick={sendOtp}>Send Otp</Button>
            </Flex>
          </Stack>
        ) : null}
        {activeStep == 2 ? (
          <Stack spacing={3}>
            {/* ... (your existing form fields) */}
            <Flex>
              { !data.otpSuccess ? (
                null
              ) : (
                <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                <Text>Otp Expires After</Text>
                {
                  minutes.toString()==0 ? <Button isLoading={data.isOtpLoading} loadingText={"Resending"} onClick={sendOtp} colorScheme="blue" >Resend Otp</Button> :
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
                }
                </Flex>
              )}
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
            <Checkbox
              onChange={(e) => setIsChecked(e.target.checked)}
              isRequired
            >
              Read and Accept{" "}
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href="https://www.softwerve.com/termsandconditions"
                target="blank"
              >
                Terms & Conditions
              </a>
              ,{" "}
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href="https://www.softwerve.com/privacypolicy"
                target="blank"
              >
                Privacy Policy
              </a>
              , and{" "}
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href="https://www.softwerve.com/paymentpolicy"
                target="blank"
              >
                Payment Policy
              </a>
            </Checkbox>
            <Flex justifyContent={'space-between'} colorScheme='orange' alignItems={'center'}>
              <Button width={'48%'} colorScheme="yellow" onClick={()=> setActiveStep(1)}>Back</Button>
            <Button
              width={'48%'}
              isLoading={data.isLoading}
              loadingText="Submitting"
              type="submit"
              colorScheme="blue"
            >
              Submit
            </Button>
            </Flex>
          </Stack>
        ) : null}
      </form>
      </Stack>
    </Stack>
  );
};

export default UserSignup;
