import StandardContainer from '../StandardContainer';
import TopicWhite from '../TopicWhite';
import WideContainer from '../WideContainer';

const Mission: React.FC = () => {
  return (
    <WideContainer id="mission">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-950 " />

        <div className="relative">
          <StandardContainer>
            <div className="pt-10 pb-10">
              <div>
                <TopicWhite text="Our Mission" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  At Ombrio, our mission is to deliver intelligent, customized
                  AI solutions and world-class web development services that
                  help businesses thrive in a rapidly evolving digital world. We
                  are committed to fostering creativity, providing robust
                  support, and building lasting partnerships that drive success
                  and growth.
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default Mission;
