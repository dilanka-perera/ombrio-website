import ImageSnippets from "./ImageSnippets";
import Topic from "./Topic";

const WhyChooseUs: React.FC = () => {
  return (
    <div>
      {/* Section Title */}
      <div className="pt-10">
        <Topic text="Why Coose Us?" />
      </div>

      {/* Image Snippets */}
      <div className="pt-6">
        <ImageSnippets
          topics={[
            {
              title: "Innovative Approach",
              description:
                "At ZynoraX, we prioritize creativity and ingenuity, blending AI, web development, and wireless technology research.",
              imageSrc: "/We1.jpg",
            },
            {
              title: "Experienced Team",
              description:
                "Our experts bring years of industry experience in AI, web development, and wireless technology to deliver the best results.",
              imageSrc: "/We2.jpg",
            },
            {
              title: "Custom Solutions",
              description:
                "We tailor every project to fit your specific business needs and goals.",
              imageSrc: "/We3.jpg",
            },
            {
              title: "Quality & Support",
              description:
                "We ensure high-quality deliverables with ongoing support to ensure long-term success.",
              imageSrc: "/We4.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
