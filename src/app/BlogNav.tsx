import { useState } from 'react';
import { useData } from '@/contexts/DataContext';
import StandardContainer from './StandardContainer';
import WideContainer from './WideContainer';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface BlogNavProps {
  setIsDropdownOpen: (value: number | null) => void;
}

const BlogNav: React.FC<BlogNavProps> = ({ setIsDropdownOpen }) => {
  const { blogs } = useData();
  const blogData = blogs.find((blog) => blog.slug === 'blog');

  // Ensure categories exist before accessing them
  const initialCategory = blogData?.categories[0]?.slug || null;
  const [activeCategory, setActiveCategory] = useState<string | null>(
    initialCategory,
  );

  if (!blogData || !blogData.categories.length) {
    return (
      <WideContainer>
        <div className="relative w-full align-left bg-slate-300 h-[40px]">
          <StandardContainer>
            <div className="ml-5 flex flex-row justify-between">
              <Link
                className="flex flex-row h-[40px] text-base font-medium text-slate-900 items-center"
                href="/blog"
                onClick={() => setIsDropdownOpen(null)}
              >
                View Blog Page
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </Link>
              <button className="mr-5" onClick={() => setIsDropdownOpen(null)}>
                <ChevronDown className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </StandardContainer>
        </div>
      </WideContainer>
    );
  }

  return (
    <div>
      <WideContainer>
        <div className="relative w-full align-left bg-slate-200">
          <StandardContainer>
            <div className="flex">
              <div className="w-1/4 bg-slate-200 py-4">
                <div>
                  {blogData.categories.map((category) => (
                    <div key={category.slug}>
                      <Link
                        href={`/blog/${category.slug}`}
                        onMouseEnter={() => setActiveCategory(category.slug)}
                        onClick={() => setIsDropdownOpen(null)}
                        className={`block group w-full h-[80px] text-left font-medium transition ${
                          activeCategory === category.slug
                            ? 'bg-slate-100 border-l-2 border-yellow-500'
                            : ''
                        }`}
                      >
                        <div className="flex px-5 flex-row space-x-4 items-center h-[80px]">
                          <Image
                            className="object-contain h-[60px] w-[60px]"
                            src={`https:${category.icon}`}
                            alt={category.name}
                            width={100}
                            height={100}
                            unoptimized
                          />
                          <p className="group-hover:underline">
                            {category.name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-3/4 p-4 bg-slate-100">
                {blogData.categories.map(
                  (category) =>
                    activeCategory === category.slug && (
                      <div key={category.slug}>
                        <div className="grid grid-cols-3 gap-4 justify-center items-center">
                          {category.blogPosts.slice(0, 2).map((post) => (
                            <div
                              key={post.slug}
                              className="flex justify-center items-center"
                            >
                              <div className="bg-white border border-slate-100 shadow-md overflow-hidden max-w-[300px] justify-center">
                                <div className="relative w-full h-30">
                                  <Image
                                    src={`https:${post.featuredImage}`}
                                    alt={post.title}
                                    width={1280}
                                    height={720}
                                    className="w-full h-30 object-cover"
                                    unoptimized
                                  />
                                </div>

                                <div className="p-4">
                                  <div className="flex justify-between">
                                    <div className="bg-slate-300 text-xs font-semibold px-3 py-2 rounded-lg">
                                      Blog
                                    </div>

                                    <p className="text-slate-500 font-normal text-sm mt-2">
                                      {new Date(
                                        post.publishedDate,
                                      ).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                      })}
                                    </p>
                                  </div>
                                  <div className="flex flex-col justify-between min-h-[140px] h-[140px] pt-4">
                                    <h3 className="text-md font-medium mt-2 line-clamp-3">
                                      {post.title}
                                    </h3>
                                    <div className="flex">
                                      <Link
                                        href={`/blog/${category.slug}/${post.slug}`}
                                        onClick={() => setIsDropdownOpen(null)}
                                        className="text-sm text-slate-600 hover:text-slate-500 font-medium mt-3 flex items-center gap-1"
                                      >
                                        Learn more <ChevronRight size={18} />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="flex flex-col justify-center w-full">
                            <Image
                              className="object-contain mx-auto pb-5"
                              src={`https:${category.icon}`}
                              alt={category.name}
                              width={100}
                              height={100}
                              unoptimized
                            />
                            <p className="pb-6 px-8 text-base text-left text-md leading-relaxed">
                              {`Discover more insights in our ${category.name} section!`}
                            </p>
                            <Link
                              href={`/blog/${category.slug}`}
                              onClick={() => setIsDropdownOpen(null)}
                              className="inline-block bg-slate-800 text-white font-normal text-sm text-lg px-3 py-3 shadow-lg hover:bg-slate-700 min-w-[200px] text-center rounded"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ),
                )}
              </div>
            </div>
          </StandardContainer>
        </div>
      </WideContainer>
      <WideContainer>
        <div className="relative w-full align-left bg-slate-300 h-[40px]">
          <StandardContainer>
            <div className="ml-5 flex flex-row justify-between">
              <Link
                className="flex flex-row h-[40px] text-base font-medium text-slate-900 items-center"
                href="/blog"
                onClick={() => setIsDropdownOpen(null)}
              >
                View Blog Page
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </Link>
              <button className="mr-5" onClick={() => setIsDropdownOpen(null)}>
                <ChevronDown className="w-5 h-5 rotate-180" />
              </button>
            </div>
          </StandardContainer>
        </div>
      </WideContainer>
    </div>
  );
};

export default BlogNav;
