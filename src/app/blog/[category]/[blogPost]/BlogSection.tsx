'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, Node, Document } from '@contentful/rich-text-types';
import BlogTopic from './BlogTopic';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BlogSectionProps {
  slug: string;
  subtitle: string;
  content: Document;
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

const BlogSection: React.FC<BlogSectionProps> = ({
  slug,
  subtitle,
  content,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start -100px'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <div key={slug} id={slug}>
      <motion.div
        ref={sectionRef}
        style={{ opacity, y: translateY, willChange: 'opacity, transform' }}
      >
        <div className="pt-10">
          <BlogTopic text={subtitle} />
        </div>
        <div className="px-8 pt-4">
          {documentToReactComponents(content, renderOptions)}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogSection;
