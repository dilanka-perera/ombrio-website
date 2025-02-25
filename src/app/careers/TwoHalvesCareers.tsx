'use client';

import React, { ReactNode, RefObject } from 'react';
import Image from 'next/image';
import { motion, MotionValue } from 'framer-motion';

interface TwoHalvesCareersProps {
  imageSrc: string; // URL for the image
  title: string; // Title for the paragraph section
  content: ReactNode; // Paragraph text
  imageFirst?: boolean; // Option to place the image first (default: true)
  imageRef: RefObject<HTMLDivElement | null>;
  textRef: RefObject<HTMLDivElement | null>;
  imageOpacity: MotionValue<number>;
  imageSlide: MotionValue<number>;
  textOpacity: MotionValue<number>;
  textSlide: MotionValue<number>;
}

const TwoHalvesCareers: React.FC<TwoHalvesCareersProps> = ({
  imageSrc,
  title,
  content,
  imageFirst = true,
  imageRef,
  textRef,
  imageOpacity,
  imageSlide,
  textOpacity,
  textSlide,
}) => {
  return (
    <div
      className={`flex flex-col pt-8 ${
        imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } w-full h-full`}
    >
      {/* Image Side */}
      <motion.div
        ref={imageRef}
        className={`h-full lg:h-auto lg:w-1/2`}
        style={{
          opacity: imageOpacity,
          y: imageSlide,
          willChange: 'opacity, transform',
        }}
      >
        <div className="h-full">
          <Image
            src={imageSrc}
            alt="Side Image"
            width={800}
            height={800}
            className={`w-full h-full object-cover 
              ${imageFirst ? 'lg:rounded-r-md' : 'lg:rounded-l-md'} 
              xl:rounded-md max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px] object-cover`}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Text Side */}
      <motion.div
        ref={textRef}
        className={`w-full lg:w-1/2 flex items-center justify-center ${
          imageFirst ? '' : 'lg:justify-start'
        } p-8`}
        style={{
          opacity: textOpacity,
          y: textSlide,
          willChange: 'opacity, transform',
        }}
      >
        <div className="lg:max-w-md lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4">{title}</h2>
          <div className="text-base sm:text-lg">{content}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default TwoHalvesCareers;
