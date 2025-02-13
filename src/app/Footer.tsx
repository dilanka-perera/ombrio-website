'use client';

import Link from 'next/link';

export default function Footer() {
  const links = [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms & Conditions' },
  ];

  return (
    <footer className="p-6 z-10 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between md:items-center">
        {/* Links Section - Stacked on small screens, horizontal on larger screens */}
        <div className="flex flex-col md:flex-row gap-6 text-base text-left mb-4 md:mb-0 text-slate-900 hover:text-slate-700">
          {links.map((link) => (
            <Link
              key={link.text} // or use href if text is not unique
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Copyright Section with a white border on small screens */}
        <div className="text-center border-t border-black md:border-none pt-2 text-slate-900">
          <p>© Ceynora 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
