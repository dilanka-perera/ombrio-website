'use client';

// Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StandardContainer from './StandardContainer';

interface BreadcrumbProps {
  nameReplacer?: Record<string, string>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ nameReplacer }) => {
  const pathname = usePathname();
  const pathnames = pathname?.split('/').filter((x) => x);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const replaceName = (name: string) => {
    if (nameReplacer && nameReplacer[name]) {
      return nameReplacer[name];
    }
    return capitalize(name);
  };

  return (
    <div className="bg-blue-200">
      <StandardContainer>
        <nav
          aria-label="Breadcrumb"
          className="px-6 py-2 min-h-[40px] font-normal flex items-center overflow-hidden"
        >
          <ul
            className="flex flex-wrap w-full max-w-full"
            style={{ listStyleType: 'none', padding: 0, margin: 0 }}
          >
            <li className="flex max-w-full truncate">
              <Link href="/" className="text-black hover:text-slate-700">
                Home
              </Link>
            </li>
            {pathnames?.map((pathname, index) => {
              const href = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = replaceName(pathname);
              return (
                <li key={href} className="flex max-w-full truncate">
                  <span className="mx-2 whitespace-nowrap">{' / '}</span>
                  {isLast ? (
                    <span className="truncate whitespace-nowrap">
                      {displayName}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="text-black hover:text-slate-700"
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </StandardContainer>
    </div>
  );
};

export default Breadcrumb;
