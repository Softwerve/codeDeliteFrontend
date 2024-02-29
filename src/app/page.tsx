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
import Head from "next/head";
import Script from "next/script";
import * as gtag from "../lib/gtag";
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
      <Head>
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${gtag.GA_TRACKING_ID}`}
            crossOrigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
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
