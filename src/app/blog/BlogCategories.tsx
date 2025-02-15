import { useState, useEffect } from 'react';
import { BlogCategory, BlogPost } from '@/contexts/DataContext';
import BlogList from './BlogList';
import Topic from '@/app/Topic';
import MainButton from '../MainButton';

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

  // Define how many posts to show based on viewport size
  const postsToShow = (viewport: string, posts: BlogPost[]) => {
    switch (viewport) {
      case '960':
        return posts.slice(0, 3);
      case '640':
        return posts.slice(0, 4);
      case '0':
      default:
        return posts.slice(0, 3);
    }
  };

  return (
    <div className="pb-[20px]">
      {categories.map((category) => (
        <div key={category.slug} id={category.slug} className="pt-10 pb-8">
          <div>
            <Topic text={category.name} />
          </div>

          <div className="pt-6">
            <BlogList
              posts={postsToShow(viewport, category.blogPosts).map((post) => ({
                slug: post.slug,
                title: post.title,
                featuredImage: post.featuredImage,
                publishedDate: post.publishedDate,
                category: category.name,
                categorySlug: category.slug,
              }))}
            />
          </div>
          <p className="pt-6 px-8 text-base text-left sm:text-lg md:text-xl leading-relaxed">
            {`Discover more insights in our ${category.name} section!`}
          </p>
          <div className="pt-6 px-8 sm:flex items-end">
            <div className="mr-6 mb-4 sm:mb-0">
              <MainButton text="Read More" link={`/blog/${category.slug}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCategories;
