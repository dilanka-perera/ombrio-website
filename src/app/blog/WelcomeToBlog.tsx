import Topic from '../Topic';
const WelcomeToBlog: React.FC = () => {
  return (
    <div className="pt-10 pb-8">
      {/* Section Title */}
      <div>
        <Topic text="Welcome to ZynoraX Blog" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At ZynoraX, we are passionate about the ever-evolving world of
          Artificial Intelligence and Web Development. Our blog serves as a hub
          where we explore cutting-edge advancements in AI, innovative web
          technologies, and trends that are shaping the future of the tech
          industry. Whether you&apos;re a developer, a tech enthusiast, or
          someone curious about the potential of AI, we aim to bring you
          insightful articles, tutorials, and updates that will keep you
          informed and inspired. Join us as we dive deep into the exciting
          intersection of AI and web development!
        </p>
      </div>
    </div>
  );
};

export default WelcomeToBlog;
