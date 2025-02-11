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
import BlogCategories from "./BlogCategories";
import WelcomeToBlog from "./WelcomeToBlog";

export default function BlogPage() {
  const { blogs } = useData();

  const blogData = blogs.find((blog) => blog.slug === "blog");
  if (!blogData) return notFound();

  const sections = [
    { name: "Welcome", id: "welcome-to-blog" },
    ...blogData.categories.map((cat) => ({
      name: cat.name,
      id: cat.slug,
    })),
  ];

  return (
    <LayoutWrapper>
      <WideContainer>
        <Breadcrumb />
      </WideContainer>

      <WideContainer>
        <HeadBanner slug="blog" />
      </WideContainer>

      <TableOfContents sections={sections} />

      <StandardContainer id="welcome-to-blog">
        <WelcomeToBlog />
      </StandardContainer>

      <StandardContainer>
        <BlogCategories categories={blogData.categories} />
      </StandardContainer>

      <LayoutBreak />

      <WideContainer>
        <ContactBanner />
      </WideContainer>
    </LayoutWrapper>
  );
}
