"use client";

import React from "react";
import TwoHalves from "../TwoHalves";
import Topic from "../Topic";
import { useData } from "@/contexts/DataContext";
import MainButton from "../MainButton";

const JoinUs: React.FC = () => {
  const websiteImages = useData().websiteImages;

  return (
    <div>
      <div className="pt-10">
        <Topic text="Join Us" />
      </div>

      <TwoHalves
        title="Join the Future of AI & Web Innovation at ZynoraX!"
        imageSrc={`https:${
          websiteImages.find((item) => item.slug === "careers-join-us")
            ?.image || "/no.png"
        }`}
        imageFirst={true}
        content={
          <>
            <p>
              At ZynoraX, we are driven by innovation, creativity, and
              cutting-edge technology. Our mission is to empower businesses with
              AI-driven solutions and advanced web development, transforming
              industries with intelligent, scalable, and future-ready digital
              experiences.
            </p>
            <p className="my-5">
              We believe in pushing the boundaries of artificial intelligence,
              machine learning, and custom web solutions to create impactful
              products that solve real-world challenges.
            </p>
            <MainButton text="Explore Open Roles" link="#" />
            <p className="mt-5">
              Don&apos;t see a role that fits? Send us your resume!
            </p>
            <p className="text-blue-600">Email: careers@zynorax.com</p>
          </>
        }
      />
    </div>
  );
};

export default JoinUs;
