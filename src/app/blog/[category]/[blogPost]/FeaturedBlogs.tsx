import { useState, useEffect, useRef } from 'react';
import { BlogCategory, BlogPost } from '@/contexts/DataContext';
import BlogList from '../../BlogList';
import BlogTopic from './BlogTopic';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FeaturedBlogsProps {
  category: BlogCategory;
  slug: string;
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ category, slug }) => {
  const [viewport, setViewport] = useState<string>('');

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -500px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

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
        return posts.slice(0, 2);
      case '0':
      default:
        return posts.slice(0, 2);
    }
  };

  const filteredPosts = category.blogPosts.filter((post) => post.slug !== slug);

  return (
    <motion.div
      className="pt-10 pb-[60px]"
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
    >
      <div>
        <BlogTopic text={`Featured in ${category.name}`} />
      </div>

      <div className="pt-6">
        <BlogList
          posts={postsToShow(viewport, filteredPosts).map((post) => ({
            slug: post.slug,
            title: post.title,
            featuredImage: post.featuredImage,
            publishedDate: post.publishedDate,
            category: category.name,
            categorySlug: category.slug,
          }))}
        />
      </div>
    </motion.div>
  );
};

export default FeaturedBlogs;
