import Topic from "./Topic";
import MainButton from "./MainButton";

const OurWork: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Our Work" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Check out our portfolio to see how we&apos;ve helped businesses thrive
          with our AI-driven, web development, and wireless technology
          solutions.
        </p>

        {/* Read Our Blog Link */}
        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="View Portfolio" link="/about" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Case studies and success stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
