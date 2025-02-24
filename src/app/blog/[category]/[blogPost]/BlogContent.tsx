'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BlogPost } from '@/contexts/DataContext';
import { FiChevronDown } from 'react-icons/fi';
import BlogSection from './BlogSection';

interface BlogHeroProps {
  post: BlogPost;
  categoryName: string;
}

const BlogContent: React.FC<BlogHeroProps> = ({ post, categoryName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [activeSectionD, setActiveSectionD] = useState(
    post.content[0]?.slug || '',
  );
  const [activeSectionM, setActiveSectionM] = useState(
    post.content[0]?.slug || '',
  );

  const tocRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (tocRef.current && contentRef.current && tableRef.current) {
        const tocTop = tocRef.current.offsetTop - 79;
        const contentBottom = contentRef.current.getBoundingClientRect().bottom;
        const tableBottom = tableRef.current.getBoundingClientRect().bottom;
        const tableTop = tableRef.current.getBoundingClientRect().top;
        const tableHeight = tableBottom - tableTop;

        if (window.scrollY > tocTop) {
          setIsFixed(true); // Stick to the top until the bottom of the content
        } else {
          setIsFixed(false); // Revert to normal flow once it's beyond content
        }

        if (contentBottom < 210 + tableHeight) {
          setIsAbsolute(true);
        } else {
          setIsAbsolute(false);
        }

        // Detect the current section in view
        for (const section of post.content) {
          const element = document.getElementById(section.slug);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSectionD(section.slug);
              break;
            }
          }
        }

        const sectionSlugs = post.content.map((section) => section.slug);
        sectionSlugs.push('featured');

        for (const sectionSlug of sectionSlugs) {
          const element = document.getElementById(sectionSlug);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSectionM(sectionSlug);
              break;
            }
          }
        }
      }
    };

    // Initial call to handle scroll position
    handleScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post]);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offset = window.innerWidth >= 768 ? 77 : 117; // Adjust as needed

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setIsOpen(false); // Close dropdown after selection
    }
  };

  return (
    <div ref={tocRef}>
      <div className="md:hidden">
        {isFixed && <div style={{ height: '40px' }}></div>}
      </div>

      <div
        id="toc-container"
        className={`md:hidden max-w-screen h-[40px] mx-auto bg-blue-100 ring-1 ring-gray-500/10 shadow-md ${
          isFixed
            ? 'fixed top-[79px] right-1/2 transform translate-x-1/2 w-full z-30 shadow-lg'
            : 'bg-opacity-20 backdrop-blur-lg'
        }`}
      >
        <div className="md:hidden flex px-6 h-[40px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center text-black font-medium"
          >
            <div className="truncate whitespace-nowrap">
              {post.content.find((section) => section.slug === activeSectionM)
                ?.subtitle ?? `Featured in ${categoryName}`}
            </div>

            <FiChevronDown
              className={`transition-transform ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`${
            isFixed ? 'fixed top-[119px]' : 'absolute'
          } sm:hidden right-0 w-full bg-slate-300 bg-opacity-40 backdrop-blur-lg ring-1 ring-gray-500/10 shadow-md rounded-b-lg z-40`}
        >
          {post.content.map((section) => (
            <button
              key={`mobile-${section.slug}`}
              onClick={(e) => handleSectionClick(e, section.slug)}
              className={`block w-full text-left px-4 py-2 text-slate-900 font-normal ${
                section.slug === activeSectionM
                  ? 'bg-slate-100 bg-opacity-50'
                  : 'hover:bg-white hover:bg-opacity-20'
              } overflow-hidden`}
            >
              {section.subtitle}
            </button>
          ))}
          <button
            key={`mobile-featured`}
            onClick={(e) => handleSectionClick(e, 'featured')}
            className={`block w-full text-left px-4 py-2 text-slate-900 font-normal ${
              'featured' === activeSectionM
                ? 'bg-slate-100 bg-opacity-50'
                : 'hover:bg-white hover:bg-opacity-20'
            } overflow-hidden rounded-b-lg`}
          >
            {`Featured in ${categoryName}`}
          </button>
        </div>
      )}

      <div ref={contentRef} className="md:grid grid-cols-4 md:pb-10 ">
        <div className="hidden md:flex flex-col col-span-1 relative">
          <div className="h-[50px]"></div>
          <div className="h-full ">
            <div
              ref={tableRef}
              className={` max-w-[25vw] xl:max-w-[320px] w-[25vw] xl:w-[320px] max-h-screen ${
                isAbsolute
                  ? 'absolute bottom-0'
                  : isFixed
                    ? 'fixed top-[129px]  left-auto right-auto'
                    : ''
              }`}
            >
              <div className="flex flex-col pl-5">
                {/* <div className="h-[20px]"></div> */}
                <p className="pb-5 font-medium text-xl h-[50px]">
                  Table of Content
                </p>
                <div className="flex flex-col max-h-[calc(100vh-200px)] bg-slate-400 bg-opacity-20 backdrop-blur-lg overflow-y-auto">
                  {post.content.map((content) => {
                    return (
                      <button
                        key={`desktop-${content.slug}`}
                        onClick={(e) => handleSectionClick(e, content.slug)}
                        className={`p-4 border-l-2 hover:text-slate-800 text-left ${
                          content.slug === activeSectionD
                            ? 'font-medium border-yellow-500 bg-slate-100 bg-opacity-40'
                            : 'font-normal border-slate-800'
                        }`}
                      >
                        {content.subtitle}
                      </button>
                    );
                  })}
                </div>

                {/* <div className="h-[20px]"></div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          {post.content.map((content) => (
            <BlogSection
              key={content.slug}
              slug={content.slug}
              subtitle={content.subtitle}
              content={content.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
