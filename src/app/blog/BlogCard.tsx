import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BlogPostCard {
  slug: string;
  title: string;
  featuredImage: string;
  publishedDate: string;
  category: string;
  categorySlug: string;
}

export interface BlogCardProps {
  post: BlogPostCard;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-white border border-slate-100 shadow-md overflow-hidden">
      <div className="relative w-full h-40">
        <Image
          src={`https:${post.featuredImage}`}
          alt={post.title}
          width={1280}
          height={720}
          className="w-full h-40 object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          <div className="bg-slate-300 text-xs font-semibold px-3 py-2 rounded-lg">
            Blog
          </div>

          <p className="text-slate-500 font-normal text-md mt-2">
            {new Date(post.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="flex flex-col justify-between min-h-[150px] h-[150px] pt-4">
          <h3 className="text-lg font-medium mt-2 line-clamp-3">
            {post.title}
          </h3>

          <Link
            href={`/blog/${post.categorySlug}/${post.slug}`}
            className="text-blue-600 hover:text-blue-400 font-medium mt-3 flex items-center gap-1"
          >
            Learn more <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
