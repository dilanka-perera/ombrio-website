'use client';

import React from 'react';
import StandardContainer from '@/app/StandardContainer';
import { BlogPost } from '@/contexts/DataContext';
import Image from 'next/image';

interface BlogHeroProps {
  post: BlogPost;
}

const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  return (
    <div className="bg-blue-500 bg-opacity-20 backdrop-blur-lg shadow-lg">
      <StandardContainer>
        <div className="p-8 flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12">
          {/* Title and metadata */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">
              {post.title}
            </h1>

            {/* Authors and Published Date */}
            <div className="flex flex-col gap-4 text-slate-800 text-sm sm:text-base">
              {/* Render each author */}
              {post.authors.map((author) => {
                return (
                  <div
                    key={author.slug}
                    className="flex items-center gap-4 justify-center md:justify-start"
                  >
                    {/* Author's Image */}

                    <Image
                      src={`https:${author.profilePicture}`}
                      alt={author.firstName}
                      width={48}
                      height={48}
                      className="rounded-full shadow-md"
                      unoptimized
                    />

                    {/* Author's Name and Email */}
                    <div className="text-center md:text-left">
                      <p className="font-medium">
                        {`${author.firstName} ${author.lastName}`}
                      </p>
                      {author.email && (
                        <p className="text-xs sm:text-sm">{author.email}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Published Date */}
              <p className="text-center md:text-left mt-2">
                Published on{' '}
                {new Date(post.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>

          {/* Image */}

          <div className="md:w-1/2">
            <Image
              src={`https:${post.featuredImage}`}
              alt={post.title}
              width={1280}
              height={720}
              className=" shadow-md"
              unoptimized
            />
          </div>
        </div>
      </StandardContainer>
    </div>
  );
};

export default BlogHero;
