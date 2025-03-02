'use client';

import StandardContainer from '../StandardContainer';
import Topic from '../Topic';
import WideContainer from '../WideContainer';

const Vision: React.FC = () => {
  return (
    <WideContainer id="vision">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-300 " />

        <div className="relative">
          <StandardContainer>
            <div className="pt-10 pb-10">
              <div>
                <Topic text="Our Vision" />
              </div>

              <div className="pt-6 px-8">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  To be the leading innovator in AI-driven solutions and web
                  development, empowering businesses to transform through
                  cutting-edge technologies, creativity, and seamless user
                  experiences.
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default Vision;
