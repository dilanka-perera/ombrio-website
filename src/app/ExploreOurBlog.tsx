import Topic from './Topic';
import MainButton from './MainButton';

const ExploreOurBlog: React.FC = () => {
  return (
    <div className="pt-8 pb-[80px]">
      {/* Section Title */}
      <div>
        <Topic text="Explore Our Blog" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Stay updated with the latest trends, insights, and breakthroughs in
          AI, Web Development, and Wireless Technology.
        </p>

        {/* Read Our Blog Link */}
        <div className="pt-6 sm:flex items-end">
          <div className="mr-6 mb-4 sm:mb-0">
            <MainButton text="Read Our Blog" link="/blog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurBlog;
