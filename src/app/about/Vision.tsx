import Topic from "../Topic";

const Vision: React.FC = () => {
  return (
    <div className="pt-6 pb-8">
      {/* Section Title */}
      <div>
        <Topic text="Our Vision" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          To be the leading innovator in AI-driven solutions and web
          development, empowering businesses to transform through cutting-edge
          technologies, creativity, and seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default Vision;
