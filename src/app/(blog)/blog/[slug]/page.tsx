import React from "react";
import { Metadata } from "next";
import { Asset, createClient, Entry, EntrySkeletonType } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Node } from "@contentful/rich-text-types";
import Image from "next/image";
import FadeInWrapper from "@/app/(main)/FadeInWrapper";
import { AuthorSkeleton, BlogPostSkeleton, CategorySkeleton } from "../page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – Zynorax",
  description:
    "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.",
};

async function getBlogBySlug(slug: string) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ?? "",
  });

  const result = await client.getEntries<BlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  return result.items[0] || null;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
      <h3 className="text-2xl font-medium my-2">{children}</h3>
    ),
    // Render paragraphs with custom styling
    [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
      <p className="text-base leading-7 my-2">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
      <ul className="list-disc list-inside pl-4 my-4">{children}</ul>
    ),
    // Ordered list (numbering)
    [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
      <ol className="list-decimal list-inside pl-4 my-4">{children}</ol>
    ),
    // List item
    [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
      <li className="mb-2 text-base leading-7">{children}</li>
    ),
    [BLOCKS.HR]: () => {
      return <hr className="border-t-2 border-gray-600 mt-6 mb-10" />;
    },
    [INLINES.EMBEDDED_ENTRY]: (node: Node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a
            href={`/blog/${node.data.target.fields.slug}`}
            className="text-black"
          >
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <div className="flex py-8 justify-center">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.title}
          />
        </div>
      );
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEntry<T extends EntrySkeletonType>(item: any): item is Entry<T> {
  return item && "fields" in item;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsset(item: any): item is Asset {
  return item && "fields" in item && item.fields.file;
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = await getBlogBySlug(slug);

  if (!blogPost) {
    return (
      <FadeInWrapper>
        <div className="flex items-center justify-center text-center p-4">
          <div className="p-8 max-w-lg">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4 text-center">
              Blog Post Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-2 text-center">
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
            <Image
              src="/404.png"
              alt="Blog Post Not Found"
              width={900}
              height={900}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-500 text-center">
              You can go back to the{" "}
              <Link href="/blog" className="text-blue-500">
                Blog Home
              </Link>{" "}
              or try searching again.
            </p>
          </div>
        </div>
      </FadeInWrapper>
    );
  }

  const featuredImage = blogPost.fields.featuredImage;

  return (
    <FadeInWrapper>
      <div className="py-8 px-4 text-black">
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col lg:flex-row-reverse items-center justify-center gap-6 lg:gap-12">
          {/* Title and metadata */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4 lg:mb-6">
              {blogPost.fields.title}
            </h1>

            {/* Authors and Published Date */}
            <div className="flex flex-col gap-4 text-gray-600 text-sm lg:text-base">
              {/* Render each author */}
              {blogPost.fields.author.map((author, index) => {
                if (isEntry<AuthorSkeleton>(author)) {
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 justify-center lg:justify-start"
                    >
                      {/* Author's Image */}
                      {isAsset(author.fields.profilePicture) && (
                        <Image
                          src={`https:${author.fields.profilePicture.fields.file?.url}`}
                          alt={author.fields.firstName}
                          width={48}
                          height={48}
                          className="rounded-full shadow-md"
                        />
                      )}
                      {/* Author's Name and Email */}
                      <div className="text-center lg:text-left">
                        <p className="font-medium">
                          {`${author.fields.firstName} ${author.fields.lastName}`}
                        </p>
                        {author.fields.email && (
                          <p className="text-xs lg:text-sm">
                            {author.fields.email}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}

              {/* Published Date */}
              <p className="text-center lg:text-left mt-2">
                Published on{" "}
                {new Date(blogPost.fields.publishedDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Image */}
          {featuredImage && isAsset(featuredImage) ? (
            <div className="lg:w-1/2">
              <Image
                src={`https:${featuredImage.fields.file?.url}`}
                alt={featuredImage.fields.title ?? blogPost.fields.title}
                width={featuredImage.fields.file?.details.image?.width ?? 1280}
                height={featuredImage.fields.file?.details.image?.height ?? 720}
                className="rounded-lg shadow-md"
              />
            </div>
          ) : (
            <div className="lg:w-1/2"></div>
          )}
        </div>

        {/* Categories */}
        <div className="flex gap-4 flex-wrap mt-6">
          <h3 className="text-xl font-medium text-gray-700">Categories:</h3>
          {blogPost.fields.category.map((category, index) => {
            if (isEntry<CategorySkeleton>(category)) {
              return (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm"
                >
                  {category.fields.name}
                </span>
              );
            }
            return null;
          })}
        </div>

        {/* Content */}
        <div>
          {documentToReactComponents(blogPost.fields.content, renderOptions)}
        </div>
      </div>
    </FadeInWrapper>
  );
}
