import React from 'react';
import Image from 'next/image';

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
  return (
    <div
      className={`flex flex-col pt-8 ${
        imageFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } w-full h-full`}
    >
      {/* Image Side */}
      <div className="h-full lg:h-auto lg:w-1/2">
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
      </div>

      {/* Text Side */}
      <div
        className={`w-full lg:w-1/2 flex items-center justify-center ${
          imageFirst ? '' : 'lg:justify-start'
        } ${imageFirst ? 'pl-8 lg:pl-16 pr-8 py-8' : 'pr-8 lg:pr-16 pl-8 py-8'}`}
      >
        <div className="lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-medium mb-4">{title}</h2>
          <div className="text-base sm:text-lg">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default TwoHalves;
