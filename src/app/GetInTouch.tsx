import Topic from "./Topic";
import MainButton from "./MainButton";

const GetInTouch: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Get in Touch" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          We&apos;d love to hear from you! Whether you have a project in mind or
          just want to explore possibilities, feel free to contact us.
        </p>

        {/* Read Our Blog Link */}
        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="Contact Us" link="/contact" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Request a consultation, or ask any questions you might have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
