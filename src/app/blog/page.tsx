import React from 'react';
import { Metadata, NextPage } from 'next';
import CategoryPage from './BlogPage';

const title = 'Blog | Ombrio';
const description =
  'Stay updated with the latest news, insights, and articles from Ombrio. Explore our blog for valuable content on AI, web development, and technology trends.';
const imageUrl = '/OG.jpg';
const twitterImageUrl = '/Twitter.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://ombrio-website.vercel.app/'),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Ombrio - Blog',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [twitterImageUrl],
  },
};

const Blog: NextPage = () => {
  return <CategoryPage />;
};

export default Blog;
