"use client";

import { notFound } from "next/navigation";
import { useData } from "@/contexts/DataContext";
import { LayoutBreak, LayoutWrapper } from "@/app/LayoutWrapper";
import WideContainer from "@/app/WideContainer";
import Breadcrumb from "@/app/Breadcrumb";
import ContactBanner from "@/app/ContactBanner";
import StandardContainer from "@/app/StandardContainer";
import HeadBanner from "@/app/HeadBanner";
import TableOfContents from "@/app/TableOfContents";
import AboutCategory from "./AboutCategory";
import ExploreOurBlog from "./ExploreOurBlog";

export default function CategoryPage({ category }: { category: string }) {
  const { blogs } = useData();

  const blogData = blogs.find((blog) => blog.slug === "blog");
  if (!blogData) return notFound();

  const categoryData = blogData.categories.find((cat) => cat.slug === category);
  if (!categoryData) return notFound();

  const sections = [
    { name: "Intro", id: "intro" },
    { name: "Blog", id: "blog" },
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
      <WideContainer>
        <Breadcrumb
          nameReplacer={{
            [categoryData.slug]: categoryData.name,
          }}
        />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug={categoryData.headerImageSlug} />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="intro">
        <AboutCategory description={categoryData.description} />
      </StandardContainer>

      <StandardContainer id="blog">
        <ExploreOurBlog posts={blogPostCards} />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
}
