import StandardContainer from '../StandardContainer';
import TopicWhite from '../TopicWhite';
import WideContainer from '../WideContainer';

const WelcomeToBlog: React.FC = () => {
  return (
    <WideContainer id="welcome-to-blog">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-900" />

        <div className="relative">
          <StandardContainer>
            <div className="pt-10 pb-8">
              <div>
                <TopicWhite text="Welcome to Ombrio Blog" />
              </div>

              <div className="pt-6 px-8 text-white">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                  At Ombrio, we are passionate about the ever-evolving world of
                  Artificial Intelligence and Web Development. Our blog serves
                  as a hub where we explore cutting-edge advancements in AI,
                  innovative web technologies, and trends that are shaping the
                  future of the tech industry. Whether you&apos;re a developer,
                  a tech enthusiast, or someone curious about the potential of
                  AI, we aim to bring you insightful articles, tutorials, and
                  updates that will keep you informed and inspired. Join us as
                  we dive deep into the exciting intersection of AI and web
                  development!
                </p>
              </div>
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default WelcomeToBlog;
