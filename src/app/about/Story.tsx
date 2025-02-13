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
          Ceynora was founded in 2025 with the goal of revolutionizing the way
          businesses leverage technology. Starting from a small team of
          passionate engineers, we&apos;ve grown into a global leader in AI and
          web development. Over the years, we&apos;ve delivered cutting-edge
          solutions to hundreds of clients, helping them navigate the challenges
          of the digital world.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Our journey is marked by relentless innovation, collaboration, and a
          commitment to delivering transformative results. We believe in
          continuous learning and staying ahead of emerging trends, ensuring our
          clients benefit from the latest technological advancements.
        </p>
      </div>
    </div>
  );
};

export default Story;
