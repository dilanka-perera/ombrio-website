import Carousel from "./Carousel";
import ExploreOurBlog from "./ExploreOurBlog";
import GetInTouch from "./GetInTouch";
import OurProcess from "./OurProcess";
import OurWork from "./OurWork";
import StayAhead from "./StayAhead";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";

export default function Home() {
  return (
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
  );
}
