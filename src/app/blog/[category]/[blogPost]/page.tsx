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
  const { category, blogPost } = await params;
  const blogs = await fetchBlogs();

  let blogPostTitle = '';
  let categoryName = '';
  let imageUrl = '/OG.jpg';
  let twitterImageUrl = '/Twitter.jpg';

  const blogData = blogs.find((blog) => blog.slug === 'blog');
  if (blogData) {
    const categoryData = blogData.categories.find(
      (cat) => cat.slug === category,
    );
    if (categoryData) {
      categoryName = categoryData.name;
      const post = categoryData.blogPosts.find(
        (blog) => blog.slug === blogPost,
      );
      if (post) {
        blogPostTitle = post.title;
        imageUrl = post.featuredImage || '/OG.jpg';
        twitterImageUrl = post.featuredImage || '/Twitter.jpg';
      }
    }
  }

  return {
    title: `${blogPostTitle} | Ombrio Blog`,
    description: `Read the full article on "${blogPostTitle}" and explore insights on ${categoryName}.`,
    openGraph: {
      title: `${blogPostTitle} | Ombrio Blog`,
      description: `Read the full article on "${blogPostTitle}" and explore insights on ${categoryName}.`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Ombrio - Blog Post: ${blogPostTitle}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPostTitle} - Ombrio Blog`,
      description: `Read the full article on "${blogPostTitle}".`,
      images: [twitterImageUrl],
    },
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
