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
      <WideContainer>
        <Breadcrumb
          nameReplacer={{
            [categoryData.slug]: categoryData.name,
            [post.slug]: post.title,
          }}
        />
      </WideContainer>

      <WideContainer>
        <BlogHero post={post} />
      </WideContainer>

      <StandardContainer>
        <BlogContent post={post} />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
}
