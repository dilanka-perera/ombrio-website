import StandardContainer from '../StandardContainer';
import TopicWhite from '../TopicWhite';
import WideContainer from '../WideContainer';

const AboutCompany: React.FC = () => {
  return (
    <WideContainer id="about-us">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900 " />

        <div className="relative">
          <StandardContainer>
            <div className="pt-10 pb-10">
              <div>
                <TopicWhite text="About Ombrio" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  Ombrio is a leading AI and web development company dedicated
                  to providing innovative solutions that drive digital
                  transformation. With expertise in artificial intelligence,
                  machine learning, and web technologies, we help businesses
                  harness the power of intelligent, scalable solutions to tackle
                  real-world challenges.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
                  We believe in the power of creativity and collaboration to
                  push technological boundaries and deliver impactful,
                  future-ready products. At Ombrio, we partner with businesses
                  to create tailored solutions that evolve with their needs,
                  empowering them to stay ahead in a fast-paced digital
                  landscape.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
                  As a dynamic and growing team, we foster a culture of
                  continuous learning and innovation, ensuring our clients and
                  employees thrive in an ever-changing technological world.
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default AboutCompany;
