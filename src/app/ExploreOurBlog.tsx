import Topic from "./Topic";
import MainButton from "./MainButton";

const ExploreOurBlog: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Explore Our Blog" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Stay updated with the latest trends, insights, and breakthroughs in
          AI, web development, and wireless technology. Our blog features expert
          opinions, case studies, and in-depth articles to keep you ahead of the
          technology curve.
        </p>

        {/* Read Our Blog Link */}
        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="Read Our Blog" link="#" />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-400">
            Discover new ideas, innovations, and industry news.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurBlog;
