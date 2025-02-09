"use client";

import React from "react";
import TwoHalves from "./TwoHalves";
import Topic from "./Topic";
import { useData } from "@/contexts/DataContext";

const WhatWeDo: React.FC = () => {
  const websiteImages = useData().websiteImages;

  return (
    <div className="pb-8">
      <div className="pt-10">
        <Topic text="What we do" />
      </div>

      <TwoHalves
        title="AI Solutions"
        imageSrc={`https:${
          websiteImages.find((item) => item.slug === "home-ai-technology")
            ?.image || "/no.png"
        }`}
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
        imageSrc={`https:${
          websiteImages.find((item) => item.slug === "home-website-development")
            ?.image || "/no.png"
        }`}
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
    </div>
  );
};

export default WhatWeDo;
