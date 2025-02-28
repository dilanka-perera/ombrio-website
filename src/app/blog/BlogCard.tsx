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
    <Link href={`/blog/${post.categorySlug}/${post.slug}`} className="block">
      <div className="bg-blue-100 shadow-md overflow-hidden max-w-[400px] justify-center group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            src={`https:${post.featuredImage}`}
            alt={post.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,white_50%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white_50%,transparent)] transition-transform duration-300 ease-in-out group-hover:scale-105"
            unoptimized
          />
        </div>

        <div className="-mt-[60px] p-4 relative">
          <div className="flex justify-between">
            <div className="bg-slate-300 text-xs font-semibold px-3 py-2 rounded-lg">
              Blog
            </div>
          </div>
          <div className="flex flex-col justify-between min-h-[150px] h-[150px] pt-4">
            <h3 className="text-lg font-medium mt-2 line-clamp-3">
              {post.title}
            </h3>
            <div className="flex">
              <span className="text-slate-600 hover:text-slate-500 font-medium mt-3 flex items-center gap-1">
                Learn more <ChevronRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
