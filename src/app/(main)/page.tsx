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

export const metadata: Metadata = {
  title: "ZynoraX",
  description:
    "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.",
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
