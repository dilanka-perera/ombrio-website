import Topic from '../Topic';
const AboutCompany: React.FC = () => {
  return (
    <div className="pt-10 pb-[60px]">
      {/* Section Title */}
      <div>
        <Topic text="About Ceynora" />
      </div>

      {/* Description Section */}
      <div className="pt-6 px-8">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Ceynora is a leading AI and web development company dedicated to
          providing innovative solutions that drive digital transformation. With
          expertise in artificial intelligence, machine learning, and web
          technologies, we help businesses harness the power of intelligent,
          scalable solutions to tackle real-world challenges.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          We believe in the power of creativity and collaboration to push
          technological boundaries and deliver impactful, future-ready products.
          At Ceynora, we partner with businesses to create tailored solutions
          that evolve with their needs, empowering them to stay ahead in a
          fast-paced digital landscape.
        </p>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed pt-5">
          As a dynamic and growing team, we foster a culture of continuous
          learning and innovation, ensuring our clients and employees thrive in
          an ever-changing technological world.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
