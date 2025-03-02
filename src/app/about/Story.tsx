import StandardContainer from '../StandardContainer';
import TopicWhite from '../TopicWhite';
import WideContainer from '../WideContainer';

const Story: React.FC = () => {
  return (
    <WideContainer id="story">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900 " />

        <div className="relative">
          <StandardContainer>
            <div className="pb-10">
              <div className="pt-10">
                <TopicWhite text="Our Story" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Founded in 2025, <strong>Ombrio</strong> began as a small
                  group of passionate engineers with a vision to revolutionize
                  the way businesses use technology. Over the years, we&apos;ve
                  grown into a global leader in AI and web development,
                  delivering innovative solutions to hundreds of clients
                  worldwide.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
                  Our journey has been driven by a relentless commitment to
                  innovation, collaboration, and delivering transformative
                  results. We continuously learn and adapt to emerging trends,
                  ensuring our clients benefit from the latest advancements in
                  technology.
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default Story;
