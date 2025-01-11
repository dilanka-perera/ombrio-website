"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

interface TwoHalvesProps {
  imageSrc: string; // URL for the image
  title: string; // Title for the paragraph section
  content: ReactNode; // Paragraph text
  imageFirst?: boolean; // Option to place the image first (default: true)
}

const TwoHalves: React.FC<TwoHalvesProps> = ({
  imageSrc,
  title,
  content,
  imageFirst = true,
}) => {
  return (
    <div
      className={`flex flex-col py-8 ${
        imageFirst ? "md:flex-row" : "md:flex-row-reverse"
      } w-full h-auto`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative h-64 sm:h-96 md:h-auto">
        <Image
          src={imageSrc}
          alt="Side Image"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Text Side */}
      <div
        className={`w-full md:w-1/2 flex items-center ${
          imageFirst ? "justify-center" : ""
        } text-gray-100 p-8`}
      >
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
          <div className="text-base sm:text-lg text-gray-100">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default TwoHalves;
