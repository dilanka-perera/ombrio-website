"use client";

import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import ExploreOurBlog from "./ExploreOurBlog";
import GetInTouch from "./GetInTouch";
import OurProcess from "./OurProcess";
import OurWork from "./OurWork";
import StayAhead from "./StayAhead";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-8">
      <div className={`content ${isMounted ? "fade-in" : ""}`}>
        <Carousel />
        <WhatWeDo />
        <WhyChooseUs />
        <OurProcess />
        <OurWork />
        <ExploreOurBlog />
        <GetInTouch />
        <StayAhead />
      </div>
    </div>
  );
}
