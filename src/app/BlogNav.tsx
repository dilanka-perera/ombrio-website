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
        <div className="relative w-full align-left bg-blue-300 bg-opacity-70 h-[40px]">
          <StandardContainer>
            <div className="ml-5 flex flex-row justify-between">
              <Link
                className="flex flex-row h-[40px] text-base font-medium text-slate-900 hover:text-slate-700 items-center"
                href="/blog"
                onClick={() => setIsDropdownOpen(null)}
              >
                View Blog Page
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </Link>
              <button
                className="mr-5 text-slate-900 hover:text-slate-700"
                onClick={() => setIsDropdownOpen(null)}
              >
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
        <div className="relative w-full align-left bg-slate-200 bg-opacity-50">
          <StandardContainer>
            <div className="flex">
              <div className="w-1/4 py-4">
                <div>
                  {blogData.categories.map((category) => (
                    <div key={category.slug}>
                      <Link
                        href={`/blog/${category.slug}`}
                        onMouseEnter={() => setActiveCategory(category.slug)}
                        onClick={() => setIsDropdownOpen(null)}
                        className={`block group w-full h-[80px] text-left font-medium transition ${
                          activeCategory === category.slug
                            ? 'bg-blue-100 bg-opacity-50 border-l-2 border-yellow-500'
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

              <div className="w-3/4 p-4 bg-blue-100 bg-opacity-50">
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
                              <Link
                                href={`/blog/${category.slug}/${post.slug}`}
                                className="block"
                              >
                                <div className="bg-white shadow-md overflow-hidden max-w-[300px] justify-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                                  <div className="relative w-full h-50 overflow-hidden">
                                    <Image
                                      src={`https:${post.featuredImage}`}
                                      alt={post.title}
                                      width={1280}
                                      height={720}
                                      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,white_40%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent)] transition-transform duration-300 ease-in-out group-hover:scale-105"
                                      unoptimized
                                    />
                                  </div>

                                  <div className="-mt-[65px] p-4 relative">
                                    <div className="flex justify-between">
                                      <div className="bg-slate-300 text-xs font-semibold px-3 py-2 rounded-lg">
                                        Blog
                                      </div>
                                    </div>
                                    <div className="flex flex-col justify-between min-h-[140px] h-[140px] pt-4">
                                      <h3 className="text-md font-medium mt-2 line-clamp-3">
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
                              className="inline-block border-l-2 border-yellow-500 bg-white text-black font-normal text-sm text-lg px-3 py-3 shadow-lg hover:bg-slate-200 min-w-[200px] text-center rounded"
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
        <div className="relative w-full align-left bg-blue-300 bg-opacity-70 h-[40px]">
          <StandardContainer>
            <div className="ml-5 flex flex-row justify-between">
              <Link
                className="flex flex-row h-[40px] text-base font-medium text-slate-900 hover:text-slate-700 items-center"
                href="/blog"
                onClick={() => setIsDropdownOpen(null)}
              >
                View Blog Page
                <ChevronDown className="w-5 h-5 -rotate-90" />
              </Link>
              <button
                className="mr-5 text-slate-900 hover:text-slate-700"
                onClick={() => setIsDropdownOpen(null)}
              >
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
