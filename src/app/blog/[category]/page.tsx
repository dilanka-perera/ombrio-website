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
  const { category } = await params;
  const blogs = await fetchBlogs();

  let categoryName = '';
  const imageUrl = '/OG.png';
  const twitterImageUrl = '/Twitter.png';

  const blogData = blogs.find((blog) => blog.slug === 'blog');
  if (blogData) {
    const categoryData = blogData.categories.find(
      (cat) => cat.slug === category,
    );
    if (categoryData) {
      categoryName = categoryData.name;
    }
  }

  return {
    title: `${categoryName} | Ceynora Blog`,
    description: `Explore posts in the ${categoryName} category.`,
    openGraph: {
      title: `${categoryName} | Ceynora Blog`,
      description: `Explore posts in the ${categoryName} category.`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Ceynora - Category: ${categoryName}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} - Ceynora Blog`,
      description: `Explore posts in the ${categoryName} category.`,
      images: [twitterImageUrl],
    },
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
