import React from "react";
import { Metadata, NextPage } from "next";
import FadeInWrapper from "../FadeInWrapper";
import ContactSalesBanner from "../ContactBanner";
import WideContainer from "../WideContainer";
import HeadBanner from "../HeadBanner";
import StandardContainer from "../StandardContainer";
import Vision from "./Vision";
import Mission from "./Mission";
import CoreValues from "./CoreValues";
import Story from "./Story";
import Team from "./Team";

const title = "About – ZynoraX";
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

const About: NextPage = () => {
  return (
    <FadeInWrapper>
      <WideContainer>
        <HeadBanner slug="about" />
      </WideContainer>
      <StandardContainer>
        <Vision />
      </StandardContainer>
      <StandardContainer>
        <Mission />
      </StandardContainer>
      <WideContainer>
        <CoreValues />
      </WideContainer>
      <StandardContainer>
        <Story />
      </StandardContainer>
      <StandardContainer>
        <Team />
      </StandardContainer>
      <WideContainer>
        <ContactSalesBanner />
      </WideContainer>
    </FadeInWrapper>
  );
};

export default About;
