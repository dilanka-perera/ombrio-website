'use client';

import React from 'react';
import Image from 'next/image';
import { useData } from '@/contexts/DataContext';

interface HeadBannerProps {
  slug: string;
}

const HeadBanner: React.FC<HeadBannerProps> = ({ slug }) => {
  const { headBanners } = useData();
  const banner = headBanners.find((item) => item.slug === slug);

  if (!banner) {
    return null;
  }

  return (
    <div className="relative w-full h-[180px] sm:h-[285px] md:h-[285px]">
      <Image
        src={`https:${banner.image}`}
        alt={banner.text}
        width={1920}
        height={285}
        className={`w-full h-full object-cover [mask-image:linear-gradient(to_bottom,white_0%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white_0%,transparent)]`}
        unoptimized
      />
      <div className="absolute inset-0 bg-blue-700 opacity-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-normal">
          {banner.text}
        </h1>
      </div>
    </div>
  );
};

export default HeadBanner;
