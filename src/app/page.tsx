import { Metadata } from "next";
import Carousel from "./Carousel";
import ExploreOurBlog from "./ExploreOurBlog";
import ContactBanner from "./ContactBanner";
import OurJourney from "./OurJourney";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";
import WideContainer from "./WideContainer";
import StandardContainer from "./StandardContainer";
import { LayoutBreak, LayoutWrapper } from "./LayoutWrapper";
import TableOfContents from "./TableOfContents";

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
        width: 1200,
        height: 630,
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

// Define sections for Table of Contents
const sections = [
  { name: "Overviw", id: "what-we-do" },
  { name: "Edge", id: "why-choose-us" },
  { name: "Journey", id: "our-journey" },
  { name: "Blog", id: "explore-our-blog" },
];

export default function Home() {
  return (
    <LayoutWrapper>
      <WideContainer>
        <Carousel />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="what-we-do">
        <WhatWeDo />
      </StandardContainer>

      <WideContainer id="why-choose-us">
        <WhyChooseUs />
      </WideContainer>

      <StandardContainer id="our-journey">
        <OurJourney />
      </StandardContainer>

      <StandardContainer id="explore-our-blog">
        <ExploreOurBlog />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
}
