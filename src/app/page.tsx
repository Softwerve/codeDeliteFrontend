"use client"
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import BecomeSeller from "@/components/HomePage/BecomeSeller";
import TopSection from "@/components/HomePage/TopSection";
import WhyFromUs from "@/components/HomePage/WhyFromUs";
import { ChakraProvider } from "@chakra-ui/react";
import StoreProvider from "./StoreProvider";
import SelectTemplate from "@/components/HomePage/SelectTemplate";
import Cookies from "universal-cookie";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const token = searchParams.get("access");
  const cookies = new Cookies();
  if(token){
    cookies.set("token",token,{path:'/',maxAge: 365 * 24 * 60 * 60});
  }
  return (
    <StoreProvider>
      <ChakraProvider>
        <Navbar />
        <TopSection />
        <SelectTemplate />
        <BecomeSeller />
        <WhyFromUs />
        <Footer />
      </ChakraProvider>
    </StoreProvider>
  );
}
