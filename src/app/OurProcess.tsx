import ImageSnippets from "./ImageSnippets";
import Topic from "./Topic";

const OurProcess: React.FC = () => {
  return (
    <div className="pb-8">
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Our Process" />
      </div>

      {/* Image Snippets */}
      <div className="pt-6">
        <ImageSnippets
          topics={[
            {
              title: "Discovery",
              description: "Understanding your vision, goals, and challenges.",
              imageSrc: "/Process1.jpg",
            },
            {
              title: "Strategy",
              description:
                "Crafting a roadmap to deliver value through AI, web technologies, and wireless technology research.",
              imageSrc: "/Process2.jpg",
            },
            {
              title: "Execution",
              description:
                "Building innovative solutions with precision and expertise.",
              imageSrc: "/Process3.jpg",
            },
            {
              title: "Optimization",
              description:
                "Continuous improvement through analytics and user feedback.",
              imageSrc: "/Process4.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default OurProcess;
