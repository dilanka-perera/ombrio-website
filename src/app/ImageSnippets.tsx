'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import ImageSnippetItem from './ImageSnippetItem'; // Import the new component

type Topic = {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
};

const ImageSnippets: React.FC<{ topics: Topic[] }> = ({ topics }) => {
  const length = topics.length;
  const [perView, setPerView] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: { perView, spacing: 15 },
    defaultAnimation: { duration: 2000 },
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
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

    updateSlidesPerView();
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
      }, 10000);

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
        {topics.map((topic) => (
          <ImageSnippetItem key={topic.slug} topic={topic} />
        ))}
      </div>
      <div className={`${mobileStyle} flex-col px-4`}>
        <div ref={sliderRef} className="keen-slider">
          {topics.map((topic) => (
            <div
              key={topic.slug}
              className="keen-slider__slide flex items-center justify-center w-full"
            >
              <ImageSnippetItem topic={topic} />
            </div>
          ))}
        </div>
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
