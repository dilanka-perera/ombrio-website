import Topic from '../Topic';
const AboutCompany: React.FC = () => {
  return (
    <div className="pt-10 pb-[60px]">
      {/* Section Title */}
      <div>
        <Topic text="About Ceynora" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          At Ceynora, we are a pioneering AI and web development company
          dedicated to creating innovative solutions for businesses worldwide.
          Our expertise spans artificial intelligence, machine learning, web
          technologies, and wireless solutions, empowering companies to stay
          ahead in the digital landscape.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          We believe in fostering a collaborative and dynamic work environment
          where creativity and technology merge to solve real-world challenges.
          If you are passionate about innovation and eager to make an impact,
          Ceynora is the place for you.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          Join us and be part of a team that is shaping the future of AI and web
          development. Explore our career opportunities and start your journey
          with Ceynora today.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
