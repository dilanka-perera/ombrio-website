"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  fromColor: string;
  toColor: string;
  logo1: string;
  logo1Link: string;
  logo2: string;
  logo2Link: string;
  textColor: string;
  textHoverColor: string;
}

export default function Header({
  fromColor,
  toColor,
  logo1,
  logo1Link,
  logo2,
  logo2Link,
  textColor,
  textHoverColor,
}: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrollOverflow, setIsScrollOverflow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < viewportHeight * 0) {
        setIsScrollOverflow(true);
      } else {
        setIsScrollOverflow(false);
      }

      if (scrollY < viewportHeight * 0.25) {
        setIsHeaderVisible(true);
      } else if (scrollY > prevScrollY) {
        setIsHeaderVisible(false);
      } else if (scrollY < prevScrollY) {
        setIsHeaderVisible(true);
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div>
      <header
        className={`z-10 left-0 w-full bg-gradient-to-r from-${fromColor} to-${toColor} flex-col items-center ${
          isScrollOverflow
            ? "absolute translate-y-0"
            : isHeaderVisible
            ? "fixed translate-y-0 top-[-80px]"
            : "fixed translate-y-[-80px] top-[-80px]"
        } transition-transform duration-500`}
      >
        <div className={`${isScrollOverflow ? "h-[0px]" : "h-[80px]"}`}></div>
        <div className="h-[80px] flex items-center">
          <div className="flex-1 px-6">
            <div className="-m-1.5 p-1.5">
              <div className="flex">
                <Link href={logo1Link} className="flex h-18 items-center px-2">
                  <Image
                    className="drop-shadow-md"
                    src={logo1}
                    alt="Logo 1"
                    width={50}
                    height={50}
                    priority
                  />
                </Link>

                <Link href={logo2Link} className="flex h-18 items-center px-2">
                  <Image
                    className="drop-shadow-md"
                    src={logo2}
                    alt="Logo 2"
                    width={150}
                    height={30}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-1 px-8"
            aria-label="Global"
          >
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              >
                <svg
                  className="size-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
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
                className={`text-base/6 text-${textColor} hover:text-${textHoverColor}`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`text-base/6 text-${textColor} hover:text-${textHoverColor}`}
              >
                Blog
              </Link>
              <Link
                href="/career"
                className={`text-base/6 text-${textColor} hover:text-${textHoverColor}`}
              >
                Career
              </Link>
              <Link
                href="/about"
                className={`text-base/6 text-${textColor} hover:text-${textHoverColor}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-base/6 text-${textColor} hover:text-${textHoverColor}`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
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
                      href="/about"
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
