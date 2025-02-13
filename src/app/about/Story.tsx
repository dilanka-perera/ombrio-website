import Topic from '../Topic';

const Story: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Our Story" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Founded in 2025, <strong>Ceynora</strong> began as a small group of
          passionate engineers with a vision to revolutionize the way businesses
          use technology. Over the years, we&apos;ve grown into a global leader
          in AI and web development, delivering innovative solutions to hundreds
          of clients worldwide.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Our journey has been driven by a relentless commitment to innovation,
          collaboration, and delivering transformative results. We continuously
          learn and adapt to emerging trends, ensuring our clients benefit from
          the latest advancements in technology.
        </p>
      </div>
    </div>
  );
};

export default Story;
