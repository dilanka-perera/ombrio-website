import Topic from "@/app/Topic";

interface AboutCategoryProps {
  description: string;
}

const AboutCategory: React.FC<AboutCategoryProps> = ({ description }) => {
  return (
    <div className="pt-10 pb-8">
      {/* Category Title */}
      <div>
        <Topic text="Intro" />
      </div>

      {/* Category Description */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCategory;
