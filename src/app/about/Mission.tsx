import Topic from '../Topic';

const Mission: React.FC = () => {
  return (
    <div className="pt-6 pb-[60px]">
      {/* Section Title */}
      <div>
        <Topic text="Our Mission" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At Ceynora, our mission is to deliver intelligent, customized AI
          solutions and world-class web development services that help
          businesses thrive in a rapidly evolving digital world. We are
          committed to fostering creativity, providing robust support, and
          building lasting partnerships that drive success and growth.
        </p>
      </div>
    </div>
  );
};

export default Mission;
