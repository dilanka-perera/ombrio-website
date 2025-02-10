import React from "react";
import { Metadata, NextPage } from "next";
import WideContainer from "../WideContainer";
import HeadBanner from "../HeadBanner";
import StandardContainer from "../StandardContainer";
import Vision from "./Vision";
import Mission from "./Mission";
import CoreValues from "./CoreValues";
import Story from "./Story";
import Team from "./Team";
import { LayoutBreak, LayoutWrapper } from "../LayoutWrapper";
import ContactBanner from "../ContactBanner";
import AboutUs from "./AboutUs";
import Breadcrumb from "../Breadcrumb";
import TableOfContents from "../TableOfContents";

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
  const sections = [
    { name: "About Us", id: "about-us" },
    { name: "Vision", id: "vision" },
    { name: "Mission", id: "mission" },
    { name: "Core Values", id: "core-values" },
    { name: "Story", id: "story" },
    { name: "Team", id: "team" },
  ];

  return (
    <LayoutWrapper>
      <WideContainer>
        <Breadcrumb />
      </WideContainer>
      <WideContainer>
        <HeadBanner slug="about" />
      </WideContainer>
      <TableOfContents sections={sections} />
      <StandardContainer id="about-us">
        <AboutUs />
      </StandardContainer>
      <StandardContainer id="vision">
        <Vision />
      </StandardContainer>
      <StandardContainer id="mission">
        <Mission />
      </StandardContainer>
      <WideContainer id="core-values">
        <CoreValues />
      </WideContainer>
      <StandardContainer id="story">
        <Story />
      </StandardContainer>
      <StandardContainer id="team">
        <Team />
      </StandardContainer>
      <LayoutBreak />
      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
};

export default About;
