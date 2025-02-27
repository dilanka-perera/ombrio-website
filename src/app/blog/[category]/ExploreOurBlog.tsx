import Topic from '../../Topic';
import { BlogPostCard } from '../BlogCard';
import BlogList from '../BlogList';

interface ExploreOurBlogProps {
  posts: BlogPostCard[];
}

const ExploreOurBlog: React.FC<ExploreOurBlogProps> = ({ posts }) => {
  return (
    <div className="pt-10 pb-[60px]">
      <div>
        <Topic text="Explore Our Blog" />
      </div>

      <div className="pt-6">
        <BlogList posts={posts} />
      </div>
    </div>
  );
};

export default ExploreOurBlog;
