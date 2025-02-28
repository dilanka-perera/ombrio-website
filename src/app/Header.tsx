'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import StandardContainer from './StandardContainer';
import WideContainer from './WideContainer';
import ContactNav from './ContactNav';
import { useData } from '@/contexts/DataContext';
import BlogNav from './BlogNav';

export default function Header() {
  const { blogs } = useData();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollOverflow, setIsScrollOverflow] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links = [
    {
      href: '/blog',
      text: 'Blog',
      ref: 'blog',
      dropdown:
        blogs
          .find((blog) => blog.slug === 'blog')
          ?.categories.map((category) => ({
            href: `/blog/${category.slug}`,
            text: category.name,
          })) || undefined,
    },
    { href: '/careers', text: 'Careers' },
    { href: '/about', text: 'About' },
    {
      href: '/contact',
      text: 'Contact',
      ref: 'contact',
      dropdown: [
        { href: '/contact/general-inquiries', text: 'General Inquiries' },
        { href: '/contact/contact-services', text: 'Contact Services' },
      ],
    },
  ];

  useEffect(() => {
    setIsDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 0) {
        setIsScrollOverflow(true);
      } else {
        setIsScrollOverflow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <header
        className={`${isDropdownOpen !== null ? 'z-50' : 'z-20'} left-0 w-full flex-col items-center ${
          isScrollOverflow
            ? 'absolute translate-y-0'
            : 'fixed translate-y-0 top-[-80px]'
        } transition-transform duration-500`}
      >
        <nav className="bg-blue-900 max-w-[1920px] mx-auto ring-1 ring-gray-500/10 shadow-md">
          <div className={`${isScrollOverflow ? 'h-[0px]' : 'h-[80px]'}`}></div>
          <div className="max-w-7xl mx-auto h-[80px] flex items-center">
            <div className="flex-1">
              <div className="">
                <div className="flex">
                  <Link
                    href="/"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      setIsDropdownOpen(null);
                    }}
                    className="flex h-18 items-center px-4"
                  >
                    <Image
                      className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                      src="/Logo-white.png"
                      alt="Logo"
                      width={150}
                      height={30}
                      priority
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="mx-auto flex max-w-7xl items-center justify-between p-1 px-8"
              aria-label="Global"
            >
              <div className="flex lg:hidden">
                {isSidebarOpen ? (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSidebarOpen(false);
                      setIsDropdownOpen(null);
                    }}
                    className="-m-2.5 inline-flex text-white hover:text-slate-200 items-center justify-center p-2.5 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
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
                    onClick={() => {
                      setIsSidebarOpen(true);
                      setIsDropdownOpen(null);
                    }}
                    className="-m-2.5 inline-flex text-white hover:text-slate-200 items-center justify-center p-2.5 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
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
              <div className="hidden lg:flex">
                {links.map((link, index) =>
                  link.dropdown ? (
                    <div
                      key={`dropdwn-${link.href}`}
                      className="group mx-[20px]"
                    >
                      <button
                        className="flex pt-2 justify-center w-[80px] h-[40px] text-base font-medium text-slate-900 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                        onClick={() =>
                          setIsDropdownOpen(
                            isDropdownOpen === index ? null : index,
                          )
                        }
                      >
                        <div>
                          {link.text}
                          <div
                            className={`bottom-0 ${isDropdownOpen === index ? 'w-7' : 'w-0'} group-hover:w-7 h-[3px] bg-yellow-500`}
                          />
                        </div>
                      </button>
                    </div>
                  ) : (
                    <Link
                      className="group mx-[20px]"
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setIsDropdownOpen(null);
                      }}
                    >
                      <div className="flex pt-2 justify-center w-[80px] h-[40px] text-base font-medium text-slate-900 text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                        <div>
                          {link.text}
                          <div className="bottom-0 w-0 group-hover:w-7 h-[3px] bg-yellow-500" />
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {isDropdownOpen !== null && (
        <div className="z-50 hidden lg:flex left-0 w-full flex-col items-center fixed transition-transform duration-500 translate-y-0 top-[79px]">
          <nav className="relative bg-blue-100 bg-opacity-0 backdrop-blur-lg w-full max-w-[1920px] mx-auto ring-1 ring-gray-500/10 shadow-md">
            {links[isDropdownOpen].ref === 'blog' ? (
              <BlogNav setIsDropdownOpen={setIsDropdownOpen} />
            ) : links[isDropdownOpen].ref === 'contact' ? (
              <ContactNav setIsDropdownOpen={setIsDropdownOpen} />
            ) : (
              <div className="relative w-full align-left bg-slate-200 bg-opacity-50">
                <StandardContainer>
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {links[isDropdownOpen]?.dropdown?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block"
                        onClick={() => {
                          setIsDropdownOpen(null);
                        }}
                      >
                        <div className="bg-blue-100 shadow-md p-4 hover:bg-white transition">
                          <p className="text-slate-900 font-normal">
                            {item.text}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </StandardContainer>
                <WideContainer>
                  <div className="relative w-full align-left bg-blue-300 bg-opacity-70 h-[40px]">
                    <StandardContainer>
                      <div className="ml-5 flex flex-row justify-between">
                        <Link
                          className="flex flex-row h-[40px] text-base font-medium text-slate-900 hover:text-slate-700 items-center"
                          key={links[isDropdownOpen].href}
                          href={links[isDropdownOpen].href}
                          onClick={() => {
                            setIsDropdownOpen(null);
                          }}
                        >
                          View {links[isDropdownOpen].text} Page
                          <ChevronDown className="w-5 h-5 -rotate-90" />
                        </Link>
                        <button
                          className="mr-5 text-slate-900 hover:text-slate-700"
                          onClick={() => setIsDropdownOpen(null)}
                        >
                          <ChevronDown className="w-5 h-5 rotate-180" />
                        </button>
                      </div>
                    </StandardContainer>
                  </div>
                </WideContainer>
              </div>
            )}
          </nav>
        </div>
      )}

      {isSidebarOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className={`fixed inset-y-0 right-0 top-[79px] z-[60] w-full overflow-y-auto bg-blue-100 px-3 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-500/10 shadow-md`}
          >
            <div className="flow-root">
              <div className="space-y-2">
                {links.map((link, index) =>
                  link.dropdown ? (
                    <div key={link.href}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-base/7 text-slate-900 font-semibold hover:bg-blue-200"
                        onClick={() =>
                          setIsDropdownOpen(
                            isDropdownOpen === index ? null : index,
                          )
                        }
                      >
                        <span>{link.text}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isDropdownOpen === index ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>
                      {isDropdownOpen === index && link.dropdown && (
                        <div className="ml-3 my-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block border-l-2 border-blue-900 px-3 py-2 text-base/7 text-slate-900 font-medium hover:bg-blue-200"
                              onClick={() => {
                                setIsSidebarOpen(false);
                                setIsDropdownOpen(null);
                              }}
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-base/7 text-slate-900 font-semibold hover:bg-blue-200"
                      onClick={() => {
                        setIsSidebarOpen(false);
                        setIsDropdownOpen(null);
                      }}
                    >
                      {link.text}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
