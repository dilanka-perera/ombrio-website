import Topic from "./Topic";
import MainButton from "./MainButton";

const OurJourney: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Our Journey" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Learn more about how we&apos;ve helped businesses thrive with our
          innovative AI solutions and expert web development.
        </p>

        {/* Read Our Blog Link */}
        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="View Our Story" link="/about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
