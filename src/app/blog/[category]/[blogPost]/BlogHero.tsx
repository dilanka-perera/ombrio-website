'use client';

import React from 'react';
import StandardContainer from '@/app/StandardContainer';
import { BlogPost, useData } from '@/contexts/DataContext';
import Image from 'next/image';
import WideContainer from '@/app/WideContainer';

interface BlogHeroProps {
  post: BlogPost;
}

const BlogHero: React.FC<BlogHeroProps> = ({ post }) => {
  const { websiteImages } = useData();

  const backgroundImage = `url('https:${
    websiteImages.find((item) => item.slug === 'background-2')?.image ||
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
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute inset-0 bg-blue-900 bg-opacity-80" />

        <div className="relative">
          <StandardContainer>
            <div className="p-8 flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12">
              {/* Title and metadata */}
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 md:mb-6">
                  {post.title}
                </h1>

                {/* Authors and Published Date */}
                <div className="flex flex-col gap-4 text-white text-sm sm:text-base">
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
      </div>
    </WideContainer>
  );
};

export default BlogHero;
