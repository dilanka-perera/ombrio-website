import Topic from "./Topic";

const StayAhead: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Stay Ahead with ZynoraX" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Join us on the journey of digital transformation and innovation. Let
          us help you make the most of AI, web technologies, and advanced
          wireless communication to stay ahead of the curve.
        </p>
      </div>
    </div>
  );
};

export default StayAhead;
