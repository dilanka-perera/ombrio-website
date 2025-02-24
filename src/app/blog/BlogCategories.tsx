import { useState, useEffect } from 'react';
import { BlogCategory } from '@/contexts/DataContext';
import BlogCategoryElement from './BlogCategoryElement';

interface BlogCategoriesProps {
  categories: BlogCategory[];
}

const BlogCategories: React.FC<BlogCategoriesProps> = ({ categories }) => {
  const [viewport, setViewport] = useState<string>('');

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

  return (
    <div className="pb-[40px]">
      {categories.map((category) => (
        <BlogCategoryElement
          key={category.slug}
          category={category}
          viewport={viewport}
        />
      ))}
    </div>
  );
};

export default BlogCategories;
