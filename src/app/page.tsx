import { Metadata } from "next";
import Carousel from "./Carousel";
import ExploreOurBlog from "./ExploreOurBlog";
import FadeInWrapper from "./FadeInWrapper";
import ContactSalesBanner from "./ContactSalesBanner";
import OurWork from "./OurWork";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";
import WideContainer from "./WideContainer";
import StandardContainer from "./StandardContainer";

const title = "ZynoraX";
const description =
  "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.";
const imageUrl = "/OG.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: "ZynoraX - AI and Web Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

export default function Home() {
  return (
    <FadeInWrapper>
      <WideContainer>
        <Carousel />
      </WideContainer>
      <StandardContainer>
        <WhatWeDo />
      </StandardContainer>
      <WideContainer>
        <WhyChooseUs />
      </WideContainer>
      <StandardContainer>
        <OurWork />
      </StandardContainer>
      <StandardContainer>
        <ExploreOurBlog />
      </StandardContainer>
      <WideContainer>
        <ContactSalesBanner />
      </WideContainer>
    </FadeInWrapper>
  );
}
