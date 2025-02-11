import { fetchBlogs } from '@/lib/contentful';
import BlogPostPage from './BlogPostPage';
import { Metadata } from 'next';

interface BlogPostParams {
  category: string;
  blogPost: string;
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const blogs = await fetchBlogs();

  const categories =
    blogs.find((blog) => blog.slug === 'blog')?.categories ?? [];

  return categories.flatMap((category) =>
    category.blogPosts.map((blogPost) => ({
      category: category.slug,
      blogPost: blogPost.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogPostParams>;
}): Promise<Metadata> {
  const data = await params;
  return {
    title: `Blog | ${data.blogPost}`,
    description: 'Read the latest blog post.',
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<BlogPostParams>;
}) {
  const data = await params;

  return <BlogPostPage data={data} />;
}
