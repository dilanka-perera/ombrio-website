import { useRef } from 'react';
import Topic from '../../Topic';
import { BlogPostCard } from '../BlogCard';
import BlogList from '../BlogList';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExploreOurBlogProps {
  posts: BlogPostCard[];
}

const ExploreOurBlog: React.FC<ExploreOurBlogProps> = ({ posts }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -100px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.div
      className="pt-10 pb-[60px]"
      ref={sectionRef}
      style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
    >
      <div>
        <Topic text="Explore Our Blog" />
      </div>

      <div className="pt-6">
        <BlogList posts={posts} />
      </div>
    </motion.div>
  );
};

export default ExploreOurBlog;
