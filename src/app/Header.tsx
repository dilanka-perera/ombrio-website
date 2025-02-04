"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollOverflow, setIsScrollOverflow] = useState(true);
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const path = pathnameParts[1];

  const links = [
    { href: "/blog", text: "Blog" },
    { href: "/career", text: "Career" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY < viewportHeight * 0) {
        setIsScrollOverflow(true);
      } else {
        setIsScrollOverflow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`z-20 left-0 bg-white w-full flex-col items-center shadow-md ${
          isScrollOverflow
            ? "absolute translate-y-0"
            : "fixed translate-y-0 top-[-80px]"
        } transition-transform duration-500`}
      >
        <div className={`${isScrollOverflow ? "h-[0px]" : "h-[80px]"}`}></div>
        <div className="max-w-7xl mx-auto h-[80px] flex items-center">
          <div className="flex-1">
            <div className="-m-1.5 p-1.5">
              <div className="flex">
                <Link href="/" className="flex h-18 items-center px-2">
                  <Image
                    className="drop-shadow-md"
                    src="/LOGO1.gif"
                    alt="Logo 1"
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
                <Link href="/" className="flex h-18 items-center px-2">
                  <Image
                    className="drop-shadow-md"
                    src="/LOGO2.png"
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
                className="-m-2.5 inline-flex text-slate-900 hover:text-slate-700 items-center justify-center rounded-md p-2.5"
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
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium text-slate-900 hover:text-slate-700 ${
                    "/" + path === link.href
                      ? "underline underline-offset-8 decoration-4 decoration-yellow-500"
                      : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div>
        {isSidebarOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen(false)}
                  className="-m-2.5 p-2.5 text-gray-700"
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
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`-mx-3 block px-3 py-2 text-base/7 text-gray-900 font-semibold hover:bg-slate-100 ${
                          "/" + path === link.href ? "bg-slate-50" : ""
                        }`}
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicked
                      >
                        {link.text}
                      </Link>
                    ))}
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
