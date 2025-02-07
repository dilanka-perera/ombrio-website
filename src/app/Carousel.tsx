"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/contexts/DataContext";

const Carousel: React.FC = () => {
  const carousal = useData().carousal;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    defaultAnimation: { duration: 2000 },
    slideChanged: (s) => setCurrentSlide(s.track.details.rel), // Update current slide index on change
  });

  const handleDotClick = (index: number) => {
    if (instanceRef.current) {
      instanceRef.current.moveToIdx(index);
    }
  };

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

  return (
    <div className="relative text-white">
      {/* Keen Slider Container */}
      <div ref={sliderRef} className="keen-slider">
        {carousal.map((item) => (
          <div
            key={item.slug}
            className="keen-slider__slide flex items-center justify-center w-full"
          >
            <Image
              className="h-[360px] object-cover lg:h-auto lg:object-fill"
              src={`https:${item.image}`}
              alt={item.title}
              width={1920}
              height={720}
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 px-8 drop-shadow-lg">
                {item.title}
              </h1>
              <p className="text-xs sm:text-sm md:text-lg mb-6 px-8 text-center">
                {item.description}
              </p>
              <Link
                href={item.buttonUrl}
                className="px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-white bg-opacity-85 hover:bg-opacity-100 text-xs sm:text-sm md:text-lg text-black rounded font-semibold"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carousal.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-1 ${
              currentSlide === index ? "bg-yellow-500" : "bg-white"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
