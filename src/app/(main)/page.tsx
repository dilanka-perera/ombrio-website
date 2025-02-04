import { Metadata } from "next";
import Carousel from "./Carousel";
import ExploreOurBlog from "./ExploreOurBlog";
import FadeInWrapper from "./FadeInWrapper";
import GetInTouch from "./GetInTouch";
import OurProcess from "./OurProcess";
import OurWork from "./OurWork";
import StayAhead from "./StayAhead";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";

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
      <div className="pb-8">
        <Carousel />
        <WhatWeDo />
        <WhyChooseUs />
        <OurProcess />
        <OurWork />
        <ExploreOurBlog />
        <GetInTouch />
        <StayAhead />
      </div>
    </FadeInWrapper>
  );
}
