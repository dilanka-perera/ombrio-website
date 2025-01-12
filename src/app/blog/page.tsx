import React from "react";
import { NextPage } from "next";
// import Image from "next/image";

const Blog: NextPage = () => {
  return (
    <div className="py-8 px-4 text-white">
      {/* Blog Title */}
      <h1 className="text-4xl font-semibold mb-6">ZynoraX Blog</h1>
      <p className="text-lg mb-8">
        Welcome to the ZynoraX Blog, where we share insights, updates, and
        stories about AI, web development, and technology trends. Stay tuned for
        exciting content!
      </p>

      {/* Blog Image
      <div className="my-8 flex justify-center">
        <Image
          src="/blog-placeholder.jpg" // Replace with your actual image path
          alt="Blog Placeholder"
          width={1024}
          height={600}
          className="rounded-lg shadow-lg w-full"
        />
      </div> */}

      {/* Stay Tuned Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
          Stay Tuned!
        </h2>
        <p className="text-lg mb-6">
          We&apos;re working on bringing you the latest insights and innovations
          from the world of AI and web development. Check back soon for updates!
        </p>
      </section>

      {/* Social Media Links */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
          Follow Us for Updates
        </h2>
        <div className="flex space-x-4">
          <a href="#" className="text-yellow-600 hover:text-yellow-700">
            Facebook
          </a>
          <a href="#" className="text-yellow-600 hover:text-yellow-700">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
