import React, { Suspense } from "react";
import { Metadata, NextPage } from "next";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import FadeInWrapper from "../../(main)/FadeInWrapper";
import BlogSearch from "./BlogSearch";

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
      <div className="py-8 px-4 text-black">
        {/* Blog Title */}
        <h1 className="text-4xl font-semibold mb-6">ZynoraX Blog</h1>

        <section className="mt-10">
          <Suspense fallback={<div>Loading search results...</div>}>
            <BlogSearch />
          </Suspense>
        </section>

        {/* Social Media Links */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-2"
            >
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-2"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </FadeInWrapper>
  );
};

export default Blog;
