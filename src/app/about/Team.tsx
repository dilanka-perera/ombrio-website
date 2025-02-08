import Topic from "../Topic";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Meat the Team" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Our team is a diverse group of talented professionals driven by
          curiosity and a passion for excellence. Meet the minds behind ZynoraX.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-4">
          <div className="flex flex-col items-center">
            <Image
              src="/Dilanka.jpg"
              alt="Team Member 1"
              width={300}
              height={300}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Dilanka Perera</h3>
            <p className="text-lg">Founder &amp; CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
