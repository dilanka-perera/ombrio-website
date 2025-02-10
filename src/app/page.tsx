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
  { name: "What We Do", id: "what-we-do" },
  { name: "Why Choose Us", id: "why-choose-us" },
  { name: "Our Journey", id: "our-journey" },
  { name: "Explore Our Blog", id: "explore-our-blog" },
  { name: "Contact", id: "contact" },
];

export default function Home() {
  return (
    <LayoutWrapper>
      <TableOfContents sections={sections} />

      <WideContainer>
        <Carousel />
      </WideContainer>

      <StandardContainer>
        <div id="what-we-do">
          <WhatWeDo />
        </div>
      </StandardContainer>

      <WideContainer>
        <div id="why-choose-us">
          <WhyChooseUs />
        </div>
      </WideContainer>

      <StandardContainer>
        <div id="our-journey">
          <OurJourney />
        </div>
      </StandardContainer>

      <StandardContainer>
        <div id="explore-our-blog">
          <ExploreOurBlog />
        </div>
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <div id="contact">
          <ContactBanner />
        </div>
      </WideContainer>
    </LayoutWrapper>
  );
}
