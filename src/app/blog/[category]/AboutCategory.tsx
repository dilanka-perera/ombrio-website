import StandardContainer from '@/app/StandardContainer';
import TopicWhite from '@/app/TopicWhite';
import WideContainer from '@/app/WideContainer';

interface AboutCategoryProps {
  description: string;
}

const AboutCategory: React.FC<AboutCategoryProps> = ({ description }) => {
  return (
    <WideContainer id="intro">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900" />

        <div className="relative">
          <StandardContainer>
            <div className="pt-10 pb-8">
              <div>
                <TopicWhite text="Intro" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default AboutCategory;
