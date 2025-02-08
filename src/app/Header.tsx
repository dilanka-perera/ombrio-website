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
    { href: "/careers", text: "Careers" },
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
        className={`z-30 left-0 w-full flex-col items-center ${
          isScrollOverflow
            ? "absolute translate-y-0"
            : "fixed translate-y-0 top-[-80px]"
        } transition-transform duration-500`}
      >
        <div className="bg-white max-w-[1920px] mx-auto ring-1 ring-gray-500/10 shadow-md">
          <div className={`${isScrollOverflow ? "h-[0px]" : "h-[80px]"}`}></div>
          <div className="max-w-7xl mx-auto h-[80px] flex items-center">
            <div className="flex-1">
              <div className="">
                <div className="flex">
                  <Link href="/" className="flex h-18 items-center px-4">
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
                {isSidebarOpen ? (
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
                ) : (
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
                )}
              </div>
              <div className="hidden lg:flex lg:gap-x-16">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="relative text-base font-medium text-slate-900 hover:text-slate-700">
                      {link.text}
                      {"/" + path === link.href ? (
                        <div className="bottom-0 w-7 h-1 bg-yellow-500" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 top-[70px] z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-500/10 shadow-md">
            <div className="flow-root">
              <div className="space-y-2 ">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`-mx-3 block px-3 py-2 text-base/7 text-gray-900 font-semibold  ${
                      "/" + path === link.href
                        ? "bg-slate-300 hover:bg-slate-400"
                        : "hover:bg-slate-200"
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
      )}
    </div>
  );
}
