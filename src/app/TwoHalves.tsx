'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TwoHalvesProps {
  imageSrc: string;
  title: string;
  content: React.ReactNode;
  imageFirst?: boolean;
}

const TwoHalves: React.FC<TwoHalvesProps> = ({
  imageSrc,
  title,
  content,
  imageFirst = true,
}) => {
  // Refs for Image and Text containers
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for Image
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  // Scroll tracking for Text
  const { scrollYProgress: textScroll } = useScroll({
    target: textRef,
    offset: ['start end', 'end start'],
  });

  // Animations for Image
  const imageOpacity = useTransform(imageScroll, [0, 0.3], [0, 1]);
  const imageSlide = useTransform(
    imageScroll,
    [0, 0.3],
    [imageFirst ? -100 : 100, 0],
  );

  // Animations for Text
  const textOpacity = useTransform(textScroll, [0, 0.3], [0, 1]);
  const textSlide = useTransform(textScroll, [0, 0.3], [100, 0]);

  return (
    <div
      className={`flex flex-col pt-8 ${
        imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } w-full h-full`}
    >
      {/* Image Side with Motion */}
      <motion.div
        ref={imageRef}
        className="h-full lg:h-auto lg:w-1/2"
        style={{ opacity: imageOpacity, x: imageSlide }}
      >
        <div className="h-full max-h-[700px]">
          <Image
            src={imageSrc}
            alt="Side Image"
            width={800}
            height={800}
            className={`w-full h-full object-cover 
              ${imageFirst ? 'lg:rounded-r-md' : 'lg:rounded-l-md'} 
              xl:rounded-md`}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Text Side with Motion */}
      <motion.div
        ref={textRef}
        className={`w-full lg:w-1/2 flex items-center justify-center ${
          imageFirst ? '' : 'lg:justify-start'
        } ${imageFirst ? 'pl-8 lg:pl-16 pr-8 py-8' : 'pr-8 lg:pr-16 pl-8 py-8'}`}
        style={{ opacity: textOpacity, y: textSlide }}
      >
        <div className="lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4">{title}</h2>
          <div className="text-base sm:text-lg">{content}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default TwoHalves;
