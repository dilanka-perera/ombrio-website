'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BlogPost } from '@/contexts/DataContext';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Node } from '@contentful/rich-text-types';
import BlogTopic from './BlogTopic';
import { FiChevronDown } from 'react-icons/fi';

interface BlogHeroProps {
  post: BlogPost;
  categoryName: string;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
      <h1 className="text-3xl font-normal my-2">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
      <h2 className="text-2xl font-normal my-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
      <h3 className="text-xl font-normal my-2">{children}</h3>
    ),
    // Render paragraphs with custom styling
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
      <p className="text-base sm:text-lg  leading-7 my-2">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
      <ul className="list-disc pl-4 my-4">{children}</ul>
    ),
    // Ordered list (numbering)
    [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
      <ol className="list-decimal pl-4 my-4">{children}</ol>
    ),
    // List item
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
      <li className="mb-2 text-base sm:text-lg leading-7">{children}</li>
    ),
    [BLOCKS.HR]: () => {
      return <></>;
    },
    [BLOCKS.TABLE]: (node: Node, children: React.ReactNode) => (
      <div className="overflow-x-auto bg-slate-100 p-6 rounded-sm">
        <table className="table-auto border-collapse border border-slate-600 w-full">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node: Node, children: React.ReactNode) => (
      <tr className="border border-slate-600">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: Node, children: React.ReactNode) => (
      <th className="px-4 py-2 text-left border border-slate-600 bg-slate-400 font-normal">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node: Node, children: React.ReactNode) => (
      <td className="px-4 py-2 border border-slate-600">{children}</td>
    ),
    [INLINES.EMBEDDED_ENTRY]: (node: Node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === 'blogPost') {
        return (
          <a
            href={`/blog/${node.data.target.fields.slug}`}
            className="text-black"
          >
            {' '}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <div className="flex py-8 justify-center">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
            unoptimized
          />
        </div>
      );
    },
  },
};

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
        className={`md:hidden max-w-screen h-[40px] mx-auto bg-white ring-1 ring-gray-500/10 shadow-md transition-all duration-300 ${
          isFixed ? 'fixed top-[79px] left-0 w-full z-30 shadow-lg' : ''
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
          {isOpen && (
            <div className="absolute left-0 w-full mt-[40px] bg-white ring-1 ring-gray-500/10 shadow-md rounded-b-lg z-40 -translate-y-0.5">
              {post.content.map((section) => (
                <button
                  key={`mobile-${section.slug}`}
                  onClick={(e) => handleSectionClick(e, section.slug)}
                  className={`block w-full text-left px-4 py-2 text-black font-normal ${
                    section.slug === activeSectionM
                      ? 'bg-slate-200 hover:bg-slate-200'
                      : 'bg-white hover:bg-slate-100'
                  } overflow-hidden`}
                >
                  {section.subtitle}
                </button>
              ))}
              <button
                key={`mobile-featured`}
                onClick={(e) => handleSectionClick(e, 'featured')}
                className={`block w-full text-left px-4 py-2 text-black font-normal ${
                  'featured' === activeSectionM
                    ? 'bg-slate-200 hover:bg-slate-200'
                    : 'bg-white hover:bg-slate-100'
                } overflow-hidden rounded-b-lg`}
              >
                {`Featured in ${categoryName}`}
              </button>
            </div>
          )}
        </div>
      </div>

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
                <div className="flex flex-col max-h-[calc(100vh-200px)] overflow-y-auto">
                  {post.content.map((content) => {
                    return (
                      <button
                        key={`desktop-${content.slug}`}
                        onClick={(e) => handleSectionClick(e, content.slug)}
                        className={`p-4 border-l-2 hover:text-slate-700 text-left ${
                          content.slug === activeSectionD
                            ? 'font-medium border-yellow-500 bg-slate-200'
                            : 'font-normal border-slate-800 bg-slate-100'
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
          {post.content.map((content) => {
            return (
              <div key={content.slug} id={content.slug}>
                <div className="pt-10">
                  <BlogTopic text={content.subtitle} />
                </div>
                <div className="px-8 pt-4">
                  {documentToReactComponents(content.content, renderOptions)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
