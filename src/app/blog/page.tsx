import React, { Suspense } from "react";
import { Metadata, NextPage } from "next";
import FadeInWrapper from "../FadeInWrapper";
import BlogSearch from "./BlogSearch";
import StandardContainer from "../StandardContainer";
import WideContainer from "../WideContainer";
import ContactSalesBanner from "../ContactBanner";
import HeadBanner from "../HeadBanner";

const title = "Blog – ZynoraX";
const description =
  "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.";
const imageUrl = "/OG_BLOG.jpg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: "ZynoraX - AI and Web Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
  },
};

const Blog: NextPage = () => {
  return (
    <FadeInWrapper>
      <WideContainer>
        <HeadBanner slug="blog" />
      </WideContainer>
      <StandardContainer>
        <div className="py-8 px-4 text-black">
          <Suspense fallback={<div>Loading search results...</div>}>
            <BlogSearch />
          </Suspense>
        </div>
      </StandardContainer>
      <div className="flex-grow"></div>
      <WideContainer>
        <ContactSalesBanner />
      </WideContainer>
    </FadeInWrapper>
  );
};

export default Blog;
