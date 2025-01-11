"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
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
        {/* Slide 1 */}
        <div className="keen-slider__slide flex items-center justify-center w-full">
          <Image
            className="h-[360px] object-cover sm:h-auto sm:object-fill"
            src="/Home1.jpg"
            alt="Next.js logo"
            width={1280}
            height={720}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 px-8">
              Future-Ready AI Solutions
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-6 px-8">
              Redefine possibilities with cutting-edge AI services tailored for
              your business success.
            </p>
            <button className="px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-slate-600 bg-opacity-50 hover:bg-slate-700 hover:bg-opacity-70 text-xs sm:text-sm md:text-lg text-white rounded">
              Our Work →
            </button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="keen-slider__slide flex items-center justify-center w-full">
          <Image
            className="h-[360px] object-cover sm:h-auto sm:object-fill"
            src="/Home2.jpg"
            alt="Next.js logo"
            width={1280}
            height={720}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 px-8">
              Your Website, Our Expertise
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-6 px-8">
              Build fast, secure, and scalable websites designed to grow with
              your business.
            </p>
            <button className="px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-slate-600 bg-opacity-50 hover:bg-slate-700 hover:bg-opacity-70 text-xs sm:text-sm md:text-lg text-white rounded">
              Our Work →
            </button>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="keen-slider__slide flex items-center justify-center w-full">
          <Image
            className="h-[360px] object-cover sm:h-auto sm:object-fill"
            src="/Home3.jpg"
            alt="Next.js logo"
            width={1280}
            height={720}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 px-8">
              Pioneering the Future of Connectivity
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-6 px-8">
              Exploring the latest in 5G, IoT, and beyond to shape the future of
              faster and more reliable communication.
            </p>
            <button className="px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-slate-600 bg-opacity-50 hover:bg-slate-700 hover:bg-opacity-70 text-xs sm:text-sm md:text-lg text-white rounded">
              Our Work →
            </button>
          </div>
        </div>
        {/* Slide 4 */}
        <div className="keen-slider__slide flex items-center justify-center w-full">
          <Image
            className="h-[360px] object-cover sm:h-auto sm:object-fill"
            src="/Home4.jpg"
            alt="Next.js logo"
            width={1280}
            height={720}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 px-8">
              Creating Positive Global Impact
            </h1>
            <p className="text-xs sm:text-sm md:text-lg mb-6 px-8">
              Leveraging AI, web development, and wireless technology to address
              global challenges and drive innovation for a sustainable future.
            </p>
            <button className="px-4 py-1 sm:px-5 sm:py-2 md:px-6 md:py-2 bg-slate-600 bg-opacity-50 hover:bg-slate-700 hover:bg-opacity-70 text-xs sm:text-sm md:text-lg text-white rounded">
              Our Work →
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            className={`w-5 h-1  ${
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
