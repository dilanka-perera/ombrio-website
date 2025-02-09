import Topic from "../Topic";
const AboutUs: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="About Us" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Welcome to ZynoraX. We are a leading AI and web development company
          committed to delivering innovative solutions that transform businesses
          worldwide. Our expertise spans artificial intelligence, machine
          learning, web technologies, and wireless solutions, enabling companies
          to thrive in an evolving digital landscape.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          Our services include AI-powered applications, custom web solutions,
          and wireless technologies that help businesses automate processes,
          improve user experiences, and enhance operational efficiency. Whether
          designing intelligent AI models, developing dynamic web platforms, or
          integrating smart wireless systems, our goal is to provide impactful
          solutions.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          At ZynoraX, we embrace innovation and problem-solving. We tackle
          complex challenges across industries, from optimizing operations with
          AI automation to crafting high-performance web applications. Our
          mission is to empower businesses with technology that drives
          productivity, enhances decision-making, and unlocks new opportunities
          for success.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          Our team of dedicated engineers, developers, and AI experts is
          passionate about pushing the boundaries of technology. By staying at
          the forefront of industry advancements, we ensure that our clients
          receive cutting-edge, future-ready solutions that position them ahead
          of the competition.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
