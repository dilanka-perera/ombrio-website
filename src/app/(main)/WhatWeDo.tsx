import React from "react";
import TwoHalves from "./TwoHalves";
import Topic from "./Topic";

const WhatWeDo: React.FC = () => {
  return (
    <div>
      <div className="pt-10">
        <Topic text="What we do" />
      </div>

      <TwoHalves
        title="AI Solutions"
        imageSrc="/Main1.jpg"
        imageFirst={true}
        content={
          <>
            <p>
              Harness the power of Artificial Intelligence to transform your
              business. From machine learning models to intelligent automation,
              we deliver custom AI-driven solutions that optimize your
              processes, improve decision-making, and create new growth
              opportunities:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Machine Learning Models:</strong> Building predictive
                models to forecast trends and behaviors.
              </li>
              <li>
                <strong>Natural Language Processing (NLP):</strong> Improving
                communication through smart chatbots and voice assistants.
              </li>
              <li>
                <strong>Data Analytics & Insights:</strong> Extracting valuable
                insights from your data to drive strategic decisions.
              </li>
              <li>
                <strong>AI-driven Automation:</strong> Streamlining business
                operations with AI-powered automation tools.
              </li>
            </ul>
          </>
        }
      />

      <TwoHalves
        title="Web Development"
        imageSrc="/Main2.jpg"
        imageFirst={false}
        content={
          <>
            <p>
              From design to deployment, our web development services ensure
              that your online presence stands out. We focus on creating fast,
              secure, and user-friendly websites that scale with your business:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Custom Web Development:</strong> Tailored solutions that
                align with your business goals.
              </li>
              <li>
                <strong>Responsive Design:</strong> Ensuring an optimal
                experience across all devices.
              </li>
              <li>
                <strong>E-Commerce Solutions:</strong> Building secure and
                feature-rich online stores.
              </li>
              <li>
                <strong>Website Maintenance & Support:</strong> Keeping your
                website updated, secure, and running smoothly.
              </li>
            </ul>
          </>
        }
      />

      <TwoHalves
        title="Wireless Technology Research"
        imageSrc="/Main3.jpg"
        imageFirst={true}
        content={
          <>
            <p>
              As the demand for faster and more reliable wireless communication
              continues to grow, we are at the forefront of research and
              innovation in wireless technology. We are dedicated to exploring
              the latest advancements in 5G, IoT, and beyond to shape the future
              of connectivity:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>5G Technology:</strong> Researching and developing
                next-generation wireless communication technologies to enable
                faster speeds, lower latency, and higher reliability.
              </li>
              <li>
                <strong>IoT Solutions:</strong> Developing wireless solutions to
                connect devices and optimize data exchange in industries like
                healthcare, smart cities, and manufacturing.
              </li>
              <li>
                <strong>Wireless Network Optimization:</strong> Improving the
                efficiency and performance of wireless networks with AI-driven
                solutions for better coverage, speed, and reliability.
              </li>
              <li>
                <strong>Emerging Technologies:</strong> Investigating the future
                of wireless communication technologies, including 6G, dynamic
                spectrum access, and edge computing.
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default WhatWeDo;
