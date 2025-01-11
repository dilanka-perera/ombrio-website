import Carousel from "./Carousel";
import OurProcess from "./OurProcess";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChoosUs";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto min-h-screen">
      <div className="py-8">
        <Carousel />
        <WhatWeDo />
        <WhyChooseUs />
        <OurProcess />
      </div>
    </div>
  );
}
