"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Detect scroll direction and header visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Keep the header visible if less than 25% of the viewport has been scrolled
      if (scrollY < viewportHeight * 0.25) {
        setIsHeaderVisible(true);
      } else if (scrollY > prevScrollY) {
        setIsHeaderVisible(false); // Scrolling down
      } else if (scrollY < prevScrollY) {
        setIsHeaderVisible(true); // Scrolling up
      }

      setPrevScrollY(scrollY); // Update the scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-slate-600 via-slate-800 to-slate-950 h-20 flex items-center shadow-md ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500`}
      >
        <div className="flex-1 px-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex">
              <div className="flex h-18 items-center px-2">
                <Image
                  className="drop-shadow-md"
                  src="/LOGO1.gif"
                  alt="Next.js logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="flex h-18 items-center px-2">
                <Image
                  className="drop-shadow-md"
                  src="/LOGO2.png"
                  alt="Next.js logo"
                  width={150}
                  height={30}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-1 px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <svg
                className="size-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-16">
            <Link
              href="/"
              className="text-base/6 text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-base/6 text-white hover:text-gray-300"
            >
              Blog
            </Link>
            <Link
              href="/career"
              className="text-base/6 text-white hover:text-gray-300"
            >
              Career
            </Link>
            <Link
              href="/about-us"
              className="text-base/6 text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-base/6 text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div>
        {isSidebarOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <svg
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      href="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                    >
                      Home
                    </Link>
                    <Link
                      href="/blog"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                    >
                      Blog
                    </Link>
                    <Link
                      href="/career"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                    >
                      Career
                    </Link>
                    <Link
                      href="/about-us"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
