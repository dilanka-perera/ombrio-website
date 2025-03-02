import React from 'react';

import MainButton from './MainButton';
import StandardContainer from './StandardContainer';
import WideContainer from './WideContainer';
import TopicWhite from './TopicWhite';

const OurJourney: React.FC = () => {
  return (
    <WideContainer id="our-journey">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900 " />

        <div className="relative">
          <StandardContainer>
            <div className="pb-8">
              <div className="pt-10">
                <TopicWhite text="Discover Who We Are" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  At <strong>Ombrio</strong>, we are driven by a passion for
                  technology and a commitment to innovation. Our team of experts
                  leverages the latest advancements in AI and web development to
                  create solutions that empower businesses to thrive. We believe
                  in pushing boundaries to deliver exceptional results and help
                  our clients navigate the digital age with confidence.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
                  Learn more about our journey, our mission, and how we bring
                  transformative solutions to businesses around the globe.
                </p>

                <div className="pt-6 sm:flex items-end">
                  <div className="mr-6 mb-4 sm:mb-0">
                    <MainButton text="View Our Story" link="/about" />
                  </div>
                </div>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default OurJourney;
