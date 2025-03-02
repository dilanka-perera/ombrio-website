'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const links = {
  company: [
    { href: '/about', text: 'About' },
    { href: '/careers', text: 'Careers' },
    { href: '/contact', text: 'Contact' },
  ],
  Learn: [
    { href: '/blog', text: 'Blog' },
    { href: '/blog/artificial-intelligence', text: 'Artificial Intelligence' },
    { href: '/blog/web-development', text: 'Web Development' },
  ],
  contact: [
    { href: '/contact/general-inquiries', text: 'General Inquiries' },
    { href: '/contact/contact-services', text: 'Contact Services' },
  ],
  legal: [
    { href: '/legal/privacy-policy', text: 'Privacy Policy' },
    { href: '/legal/terms-and-conditions', text: 'Terms & Conditions' },
  ],
};

export default function Footer() {
  return (
    <footer className="z-10">
      <div className="bg-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col justify-between px-6 py-10">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                className="drop-shadow-md"
                src="/Logo.png"
                alt="Logo"
                width={130}
                height={30}
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="pt-10 flex flex-wrap gap-10 text-base text-slate-900 justify-between lg:w-3/4">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className="w-[150px]">
                <h3 className="font-medium text-lg mb-2 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((link) => (
                    <li key={link.text}>
                      <Link
                        className="text-slate-900 hover:text-slate-700"
                        href={link.href}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="pt-10 font-medium text-lg mb-2 capitalize">
              Follow Us
            </h3>
            <div className="flex pt-2 gap-4 mb-2">
              <Link
                href="https://www.facebook.com/ombrio.io/"
                className="text-2xl text-slate-900 hover:text-slate-700"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ombrio-io"
                className="text-2xl text-slate-900 hover:text-slate-700"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-4 px-6">
          <p className="text-slate-900">©2025 Ombrio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
