'use client';

import { notFound } from 'next/navigation';
import { useData } from '@/contexts/DataContext';
import { LayoutBreak, LayoutWrapper } from '@/app/LayoutWrapper';
import Breadcrumb from '@/app/Breadcrumb';
import ContactBanner from '@/app/ContactBanner';
import HeadBanner from '@/app/HeadBanner';
import TableOfContents from '@/app/TableOfContents';
import AboutCategory from './AboutCategory';
import ExploreOurBlogCategory from './ExploreOurBlogCategory';

export default function CategoryPage({ category }: { category: string }) {
  const { blogs } = useData();

  const blogData = blogs.find((blog) => blog.slug === 'blog');
  if (!blogData) return notFound();

  const categoryData = blogData.categories.find((cat) => cat.slug === category);
  if (!categoryData) return notFound();

  const sections = [
    { name: 'Intro', id: 'intro' },
    { name: 'Blog', id: 'blog' },
  ];

  const blogPostCards = categoryData.blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    featuredImage: post.featuredImage,
    publishedDate: post.publishedDate,
    category: categoryData.name,
    categorySlug: categoryData.slug,
  }));

  return (
    <LayoutWrapper>
      <Breadcrumb
        nameReplacer={{
          [categoryData.slug]: categoryData.name,
        }}
      />
      <HeadBanner slug={categoryData.headerImageSlug} />
      <TableOfContents sections={sections} />
      <AboutCategory description={categoryData.description} />
      <ExploreOurBlogCategory posts={blogPostCards} />
      <LayoutBreak />
      <ContactBanner />
    </LayoutWrapper>
  );
}
