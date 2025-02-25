'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

type Topic = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
};

const ImageSnippets: React.FC<{ topics: Topic[] }> = ({ topics }) => {
  const length = topics.length;
  const [perView, setPerView] = useState(2); // Default per view for larger screens
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView, spacing: 15 },
    defaultAnimation: { duration: 2000 },
    slideChanged: (s) => setCurrentSlide(s.track.details.rel), // Update current slide index on change
  });

  const handleDotClick = (index: number) => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(index);
    }
  };

  useEffect(() => {
    const updateSlidesPerView = () => {
      setPerView(
        window.innerWidth < 640
          ? 1
          : window.innerWidth < 960
            ? length >= 2
              ? 2
              : 1
            : window.innerWidth < 1280
              ? length >= 3
                ? 3
                : length >= 2
                  ? 2
                  : 1
              : length >= 4
                ? 4
                : length >= 3
                  ? 3
                  : length >= 2
                    ? 2
                    : 1,
      );
    };

    updateSlidesPerView(); // Initial check
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [length]);

  useEffect(() => {
    if (instanceRef.current) {
      const sliderInstance = instanceRef.current;

      const intervalId = setInterval(() => {
        if (sliderInstance) {
          const nextIndex = (currentSlide + 1) % sliderInstance.size;
          sliderInstance.moveToIdx(nextIndex);
        }
      }, 10000); // 10 seconds interval

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [instanceRef, currentSlide]);

  const desktopStyle =
    length <= 1
      ? 'grid grid-cols-1'
      : length === 2
        ? 'hidden [@media(min-width:640px)]:grid grid-cols-2'
        : length === 3
          ? 'hidden [@media(min-width:960px)]:grid grid-cols-3'
          : length === 4
            ? 'hidden [@media(min-width:1280px)]:grid grid-cols-4'
            : 'hidden';

  const mobileStyle =
    length <= 1
      ? 'hidden'
      : length === 2
        ? 'flex [@media(min-width:640px)]:hidden'
        : length === 3
          ? 'flex [@media(min-width:960px)]:hidden'
          : length === 4
            ? 'flex [@media(min-width:1280px)]:hidden'
            : 'flex';

  return (
    <div className="relative text-white pb-6 xl:pb-12">
      <div className={`${desktopStyle} gap-4 px-4 xl:px-0`}>
        {topics.map((topic, index) => (
          <div
            key={index}
            className="relative group overflow-hidden h-[360px] w-full"
          >
            <Image
              src={topic.imageSrc}
              alt={topic.title}
              width={720}
              height={360}
              className="w-full h-full object-cover"
              unoptimized
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-white text-xl font-medium group-hover:translate-y-[-150px] transition-transform duration-1000 ease-in-out">
                {topic.title}
              </h2>
            </div>

            {/* Description */}
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
              <p className="text-white text-left text-md">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${mobileStyle} flex-col px-4`}>
        <div ref={sliderRef} className="keen-slider">
          {topics.map((topic) => (
            <div
              key={topic.slug}
              className="keen-slider__slide flex items-center justify-center w-full"
            >
              <div
                key={`desktop-${topic.slug}`}
                className="relative group overflow-hidden h-[360px] w-full"
              >
                <Image
                  src={topic.imageSrc}
                  alt={topic.title}
                  width={240}
                  height={360}
                  className="w-full h-full object-cover"
                  unoptimized
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-white text-xl font-bold group-hover:translate-y-[-150px] transition-transform duration-1000 ease-in-out">
                    {topic.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out">
                  <p className="text-white text-left text-md">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center space-x-2 pt-5">
          {topics.map((topic, index) => (
            <button
              key={`mobile-${topic.slug}`}
              className={`w-5 h-1 ${
                currentSlide === index ? 'bg-yellow-500' : 'bg-white'
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSnippets;
