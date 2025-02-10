"use client";

import { notFound } from "next/navigation";
import { useData } from "@/contexts/DataContext";
import { LayoutBreak, LayoutWrapper } from "@/app/LayoutWrapper";
import WideContainer from "@/app/WideContainer";
import Breadcrumb from "@/app/Breadcrumb";
import ContactBanner from "@/app/ContactBanner";
import BlogHero from "./BlogHero";
import BlogContent from "./Blogcontent";
import StandardContainer from "@/app/StandardContainer";

export default function BlogPostContent({
  data,
}: {
  data: { category: string; blogPost: string };
}) {
  const { blogCategories } = useData();
  const { category, blogPost } = data;

  const categoryData = blogCategories.find((cat) => cat.slug === category);
  if (!categoryData) return notFound();

  const post = categoryData.blogs.find((blog) => blog.slug === blogPost);
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
        <ContactBanner
          title="Join Our Team"
          buttonText="Explore Open Roles"
          href="https://www.linkedin.com/company/zynorax"
        />
      </WideContainer>
    </LayoutWrapper>
  );
}
