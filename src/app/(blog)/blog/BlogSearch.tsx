"use client";

import React, { useEffect, useState } from "react";
import { Asset, Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BlogPostSkeleton } from "@/app/api/blogs/route";

async function getBlogs(
  query: string = "",
  page: number = 1,
  limit: number = 10
) {
  try {
    const skip = (page - 1) * limit;
    const response = await fetch(
      `/api/blogs?query=${query}&skip=${skip}&limit=${limit}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Assuming the API returns PaginatedResponse<Entry<BlogPostSkeleton>>
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
    return { items: [], total: 0 }; // Return an empty response on error
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isAsset(item: any): item is Asset {
  return item && "fields" in item && item.fields.file;
}

const BlogSearch: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<Entry<BlogPostSkeleton>[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10; // Number of posts per page
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);

    setSearchQuery(query);
    setCurrentPage(page);

    const fetchBlogs = async () => {
      setLoading(true);
      const response = await getBlogs(query, page, postsPerPage);
      setBlogPosts(response.items);
      setTotalPosts(response.total);
      setLoading(false);
    };

    fetchBlogs();
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmitSearch = () => {
    const url = searchQuery
      ? `/blog?search=${encodeURIComponent(searchQuery)}&page=1`
      : `/blog?page=1`;
    router.push(url);
  };

  const handlePageChange = (page: number) => {
    const url = searchQuery
      ? `/blog?search=${encodeURIComponent(searchQuery)}&page=${page}`
      : `/blog?page=${page}`;
    router.push(url);
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmitSearch();
            }
          }}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button
          onClick={handleSubmitSearch}
          className="ml-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Search
        </button>
      </div>

      {/* Loading View */}
      {loading ? (
        <div role="status">
          <Image
            src="/search.gif" // Replace with the actual path to your image
            alt="Loading..."
            width={240} // Adjust width as needed
            height={240} // Adjust height as needed
          />
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <></>
      )}
      <div className={`content ${loading ? "" : "fade-in"}`}>
        {loading ? (
          <></>
        ) : (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 justify-items-center">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => {
                  const slug = post.fields.slug;

                  if (typeof slug !== "string" || !slug) return null;

                  return (
                    <div
                      key={slug}
                      className="m-1 bg-gray-100 rounded-lg p-8 max-w-[660px]"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {typeof post.fields.title === "string" &&
                        post.fields.title
                          ? post.fields.title
                          : ""}
                      </h3>

                      {post.fields.featuredImage &&
                        isAsset(post.fields.featuredImage) && (
                          <Image
                            src={`https:${post.fields.featuredImage.fields.file?.url}`}
                            alt={
                              typeof post.fields.title === "string" &&
                              post.fields.title
                                ? post.fields.title
                                : ""
                            }
                            width={600}
                            height={400}
                            className="mb-4"
                          />
                        )}

                      <p className="text-xs lg:text-sm mb-4">
                        {typeof post.fields.summary === "string" &&
                        post.fields.summary
                          ? post.fields.summary
                          : ""}
                      </p>

                      <Link
                        href={`/blog/${slug}`}
                        className="text-yellow-600 hover:text-yellow-700 font-semibold"
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="w-full">
                  <Image
                    src="/no-results.png" // Replace with the actual path to your image
                    alt="Loading..."
                    width={320} // Adjust width as needed
                    height={320} // Adjust height as needed
                  />
                  <p>
                    Sorry, we couldn&apos;t find any posts that match your
                    search. Stay tuned for new content!
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Bar */}
            <div className="mt-8 flex justify-center items-center gap-1 flex-wrap max-w-full overflow-x-auto">
              {/* First Button */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                First
              </button>

              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                Previous
              </button>

              {/* Numbered Page Buttons */}
              {(() => {
                const maxVisiblePages = 7;
                let startPage = Math.max(
                  currentPage - Math.floor(maxVisiblePages / 2),
                  1
                );
                const endPage = Math.min(
                  startPage + maxVisiblePages - 1,
                  totalPages
                );

                if (endPage - startPage + 1 < maxVisiblePages) {
                  startPage = Math.max(endPage - maxVisiblePages + 1, 1);
                }

                return Array.from(
                  { length: endPage - startPage + 1 },
                  (_, index) => (
                    <button
                      key={startPage + index}
                      onClick={() => handlePageChange(startPage + index)}
                      className={`px-3 py-2 rounded ${
                        currentPage === startPage + index
                          ? "bg-yellow-600 text-white"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {startPage + index}
                    </button>
                  )
                );
              })()}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages <= 1}
                className={`px-3 py-2 rounded ${
                  currentPage === totalPages || totalPages <= 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                Next
              </button>

              {/* Last Button */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages <= 1}
                className={`px-3 py-2 rounded ${
                  currentPage === totalPages || totalPages <= 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                Last
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
