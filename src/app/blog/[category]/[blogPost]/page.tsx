import { fetchBlogCategories } from "@/lib/contentful";
import BlogPostPage from "./BlogPostPage";
import { Metadata } from "next";

interface BlogPostParams {
  category: string;
  blogPost: string;
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const categories = await fetchBlogCategories();

  return categories.flatMap((category) =>
    category.blogs.map((blog) => ({
      category: category.slug,
      blogPost: blog.slug,
    }))
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
    description: "Read the latest blog post.",
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
