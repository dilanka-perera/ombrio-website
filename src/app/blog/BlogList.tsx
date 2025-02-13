import React from 'react';
import BlogCard, { BlogPostCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPostCard[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 [@media(min-width:640px)]:grid-cols-2 [@media(min-width:960px)]:grid-cols-3 gap-6 p-6 place-items-center">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
