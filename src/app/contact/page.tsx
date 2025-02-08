import React from "react";
import { Metadata, NextPage } from "next";
import { LayoutBreak, LayoutWrapper } from "../LayoutWrapper";
import WideContainer from "../WideContainer";
import ContactBanner from "../ContactBanner";

const title = "Contact – ZynoraX";
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

const ContactUs: NextPage = () => {
  return (
    <LayoutWrapper>
      <LayoutBreak />
      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
};

export default ContactUs;
