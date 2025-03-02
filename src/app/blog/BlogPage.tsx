'use client';

import { notFound } from 'next/navigation';
import { useData } from '@/contexts/DataContext';
import { LayoutBreak, LayoutWrapper } from '@/app/LayoutWrapper';
import Breadcrumb from '@/app/Breadcrumb';
import ContactBanner from '@/app/ContactBanner';
import HeadBanner from '@/app/HeadBanner';
import TableOfContents from '@/app/TableOfContents';
import BlogCategories from './BlogCategories';
import WelcomeToBlog from './WelcomeToBlog';

export default function BlogPage() {
  const { blogs } = useData();

  const blogData = blogs.find((blog) => blog.slug === 'blog');
  if (!blogData) return notFound();

  const sections = [
    { name: 'Welcome', id: 'welcome-to-blog' },
    ...blogData.categories.map((cat) => ({
      name: cat.name,
      id: cat.slug,
    })),
  ];

  return (
    <LayoutWrapper>
      <Breadcrumb />
      <HeadBanner slug="blog" />
      <TableOfContents sections={sections} />
      <WelcomeToBlog />
      <BlogCategories categories={blogData.categories} />
      <LayoutBreak />
      <ContactBanner />
    </LayoutWrapper>
  );
}
