'use client';

import { notFound } from 'next/navigation';
import { useData } from '@/contexts/DataContext';
import { LayoutBreak, LayoutWrapper } from '@/app/LayoutWrapper';
import WideContainer from '@/app/WideContainer';
import Breadcrumb from '@/app/Breadcrumb';
import ContactBanner from '@/app/ContactBanner';
import BlogHero from './BlogHero';
import BlogContent from './BlogContent';
import StandardContainer from '@/app/StandardContainer';
import FeaturedBlogs from './FeaturedBlogs';

export default function BlogPostPage({
  data,
}: {
  data: { category: string; blogPost: string };
}) {
  const { blogs } = useData();
  const { category, blogPost } = data;

  const blogData = blogs.find((blog) => blog.slug === 'blog');
  if (!blogData) return notFound();

  const categoryData = blogData.categories.find((cat) => cat.slug === category);
  if (!categoryData) return notFound();

  const post = categoryData.blogPosts.find((blog) => blog.slug === blogPost);
  if (!post) return notFound();

  return (
    <LayoutWrapper>
      <Breadcrumb
        nameReplacer={{
          [categoryData.slug]: categoryData.name,
          [post.slug]: post.title,
        }}
      />

      <WideContainer>
        <BlogHero post={post} />
      </WideContainer>

      <StandardContainer>
        <BlogContent post={post} categoryName={categoryData.name} />
      </StandardContainer>

      <FeaturedBlogs category={categoryData} slug={post.slug} />

      <LayoutBreak />

      <ContactBanner />
    </LayoutWrapper>
  );
}
