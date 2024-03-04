import StoreProvider from "@/app/StoreProvider";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import TemplatesPage from "@/components/websiteTemplates/WebsiteTemplatesPage";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {title:string, id: number };
};

export async function generateMetadata({ params }: Props,parent: ResolvingMetadata): Promise<Metadata> {
  
  const id = params.id;

  const template = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/template/item?templateId=${id}`).then((res) => res.json());
  
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Web Template - ${params.title.split("-").join(" ")}`,
    description: `${template?.templatePage?.overview}`,
    openGraph: {
      title: `Web Template - ${params.title.split("-").join(" ")}`,
      description: `${template?.templatePage?.overview}`,
      url: `${process.env.NEXT_CODEDELITE_URL}/webtemplates/${params.title}/${params.id}`,
      images: [`${template?.thumbnailImage}`, ...previousImages],
    },
  };
}

const TemplatesContent = ({
  params,
}: {
  params: { title: string; id: number };
}) => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <Navbar />
        <TemplatesPage id={params.id} />
        <Footer />
      </ChakraProvider>
    </StoreProvider>
  );
};

export default TemplatesContent;
