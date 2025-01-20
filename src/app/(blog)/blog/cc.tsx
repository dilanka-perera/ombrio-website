import React from "react";
import { Metadata } from "next";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import FadeInWrapper from "../../(main)/FadeInWrapper";
import { Asset, createClient } from "contentful";
import { EntryFieldTypes } from "contentful";
import Image from "next/image";
import Link from "next/link";

export type AuthorSkeleton = {
  contentTypeId: "author";
  fields: {
    slug: EntryFieldTypes.Text;
    firstName: EntryFieldTypes.Text;
    lastName: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    profilePicture: EntryFieldTypes.AssetLink;
    bio: EntryFieldTypes.RichText;
  };
};

export type CategorySkeleton = {
  contentTypeId: "category";
  fields: {
    slug: EntryFieldTypes.Text;
    name: EntryFieldTypes.Text;
    categoryImage: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.RichText;
  };
};

export type BlogPostSkeleton = {
  contentTypeId: "blogPost";
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    publishedDate: EntryFieldTypes.Date;
    content: EntryFieldTypes.RichText;
    author: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<AuthorSkeleton>>;

    category: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CategorySkeleton>
    >;
  };
};

export const metadata: Metadata = {
  title: "Blog – Zynorax",
  description:
    "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.",
};

async function getBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ?? "",
  });

  const result = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
  });

  return result.items;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsset(item: any): item is Asset {
  return item && "fields" in item && item.fields.file;
}

export default async function Blog() {
  const blogPosts = await getBlogs();

  return (
    <FadeInWrapper>
      <div className="py-8 px-4 text-black">
        {/* Blog Title */}
        <h1 className="text-4xl font-semibold mb-6">ZynoraX Blog</h1>

        <p className="text-lg mb-8">
          Welcome to the ZynoraX Blog – your go-to resource for the latest
          developments in AI, web development, and the world of technology.
          Explore expert insights, industry updates, and innovative stories that
          are shaping the future. Stay connected and discover cutting-edge
          content that drives progress and growth!
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Latest Posts
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <div
                  key={post.fields.slug}
                  className="m-1 bg-gray-100 rounded-lg p-8 lg:w-1/2"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {post.fields.title}
                  </h3>

                  {post.fields.featuredImage &&
                    isAsset(post.fields.featuredImage) && (
                      <Image
                        src={`https:${post.fields.featuredImage.fields.file?.url}`}
                        alt={post.fields.title}
                        width={600}
                        height={400}
                        className="mb-4"
                      />
                    )}

                  <p className="text-xs lg:text-sm mb-4">
                    {post.fields.summary}
                  </p>

                  <Link
                    href={`/blog/${post.fields.slug}`} // Links to dynamic page
                    className="text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              ))
            ) : (
              <p>No blog posts available at the moment.</p>
            )}
          </div>
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
}
