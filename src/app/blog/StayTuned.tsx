import Topic from "../Topic";
const StayTuned: React.FC = () => {
  return (
    <div className="pt-10 pb-[60px]">
      {/* Section Title */}
      <div>
        <Topic text="Stay Tuned..." />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Stay tuned for our ZynoraX blog page.
        </p>
      </div>
    </div>
  );
};

export default StayTuned;
