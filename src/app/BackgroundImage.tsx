'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type BackgroundImageProps = {
  imageUrl: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  // Track Scroll Position in Pixels
  const { scrollY } = useScroll();

  // Create an infinite scroll loop by mapping the scroll position to a repeating gradient cycle
  const scrollLoop = useTransform(scrollY, (value) => {
    // Use modulus to create a smooth looping effect (scrolling will repeat every 2500px)
    return (value % 5000) / 5000; // Maps scroll position from 0 to 1 continuously
  });

  // Interpolate the scroll position to transition smoothly between bluish gradients
  const gradientInterpolation = useTransform(
    scrollLoop,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'linear-gradient(45deg, rgba(100, 149, 237, 0.4), rgba(0, 191, 255, 0.4))', // Cornflower Blue to Deep Sky Blue
      'linear-gradient(45deg, rgba(0, 191, 255, 0.4), rgba(0, 255, 255, 0.4))', // Deep Sky Blue to Cyan
      'linear-gradient(45deg, rgba(0, 255, 255, 0.4), rgba(70, 130, 180, 0.4))', // Cyan to Steel Blue
      'linear-gradient(45deg, rgba(70, 130, 180, 0.4), rgba(135, 206, 235, 0.4))', // Steel Blue to Sky Blue
      'linear-gradient(45deg, rgba(135, 206, 235, 0.4), rgba(100, 149, 237, 0.4))', // Sky Blue to Cornflower Blue
      'linear-gradient(45deg, rgba(100, 149, 237, 0.4), rgba(0, 191, 255, 0.4))', // Cornflower Blue to Deep Sky Blue
    ],
  );

  return (
    <div className="fixed inset-0 max-w-[1920px] mx-auto pointer-events-none overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      ></div>

      {/* Smooth Infinite Bluish Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: gradientInterpolation, // Smoothly interpolating the bluish gradient
          transition: 'background 0.2s ease-in-out', // Smooth gradient transition over time
        }}
      />
    </div>
  );
};

export default BackgroundImage;
