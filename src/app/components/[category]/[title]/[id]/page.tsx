import StoreProvider from '@/app/StoreProvider';
import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
import TemplatesPage from '@/components/websiteTemplates/WebsiteTemplatesPage';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {category:string, title:string, id: number };
};

export async function generateMetadata({ params }: Props,parent: ResolvingMetadata): Promise<Metadata> {
  
  const id = params.id;

  const component = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/template/item?templateId=${id}`).then((res) => res.json());
  
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${params.category} - ${params.title.split("-").join(" ")}`,
    description: `${component?.templatePage?.overview}`,
    openGraph: {
      title: `${params.category} - ${params.title.split("-").join(" ")}`,
      description: `${component?.templatePage?.overview}`,
      url: `${process.env.NEXT_CODEDELITE_URL}/components/${params.category}/${params.title}/${params.id}`,
      images: [`${component?.thumbnailImage}`, ...previousImages],
    },
  };
}

const ComponentsContent = ({ params }: { params: { id: number } }) => {
  return (
    <StoreProvider>
        <ChakraProvider>
        <Navbar />
        <TemplatesPage id={params.id} />
        <Footer />
        </ChakraProvider>
    </StoreProvider>
  )
}

export default ComponentsContent;