'use client';

import { useState, useEffect } from 'react';
import { BlogCategory, useData } from '@/contexts/DataContext';
import BlogCategoryElement from './BlogCategoryElement';
import StandardContainer from '../StandardContainer';
import WideContainer from '../WideContainer';

interface BlogCategoriesProps {
  categories: BlogCategory[];
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories }) => {
  const [viewport, setViewport] = useState<string>('');
  const { websiteImages } = useData();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setViewport('960');
      } else if (window.innerWidth >= 640) {
        setViewport('640');
      } else {
        setViewport('0');
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = `url('https:${
    websiteImages.find((item) => item.slug === 'background-5')?.image ||
    'no.png'
  }')`;

  return (
    <WideContainer>
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-blue-300 bg-opacity-50" />

        <div className="relative">
          <StandardContainer>
            <div className="pb-[40px]">
              {categories.map((category) => (
                <BlogCategoryElement
                  key={category.slug}
                  category={category}
                  viewport={viewport}
                />
              ))}
            </div>
          </StandardContainer>
        </div>
      </div>
    </WideContainer>
  );
};

export default BlogCategories;
