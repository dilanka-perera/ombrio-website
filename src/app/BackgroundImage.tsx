'use client';

import React, { useState, useEffect } from 'react';

type BackgroundImageProps = {
  imageUrl: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position (1 at top, 0.5 at 500px)
  const opacity = Math.max(0.5, 0.8 - scrollY / 1000);

  return (
    <div
      className="fixed inset-0 max-w-[1920px] mx-auto pointer-events-none"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity,
      }}
    ></div>
  );
};

export default BackgroundImage;
