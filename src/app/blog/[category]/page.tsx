import { fetchBlogs } from '@/lib/contentful';
import CategoryPage from './CategoryPage';
import { Metadata } from 'next';

interface CategoryParams {
  category: string;
}

export async function generateStaticParams(): Promise<CategoryParams[]> {
  const blogs = await fetchBlogs();

  const categories =
    blogs.find((blog) => blog.slug === 'blog')?.categories ?? [];

  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CategoryParams>;
}): Promise<Metadata> {
  const data = await params;
  return {
    title: `Category | ${data.category}`,
    description: `Explore blog posts under the category: ${data.category}.`,
  };
}

export default async function Category({
  params,
}: {
  params: Promise<CategoryParams>;
}) {
  const data = await params;

  return <CategoryPage category={data.category} />;
}
