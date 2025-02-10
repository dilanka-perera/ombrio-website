import React from "react";
import { Metadata, NextPage } from "next";
import WideContainer from "../WideContainer";
import HeadBanner from "../HeadBanner";
import StandardContainer from "../StandardContainer";
import { LayoutBreak, LayoutWrapper } from "../LayoutWrapper";
import ContactBanner from "../ContactBanner";
import StayTuned from "./StayTuned";
import Breadcrumb from "../Breadcrumb";
import TableOfContents from "../TableOfContents";

const title = "Careers – ZynoraX";
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

const Careers: NextPage = () => {
  const sections = [{ name: "Stay Tuned", id: "stay-tuned" }];

  return (
    <LayoutWrapper>
      <WideContainer>
        <Breadcrumb />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug="blog" />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="stay-tuned">
        <StayTuned />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
};

export default Careers;
