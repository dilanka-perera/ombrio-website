import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-600 via-slate-800 to-slate-950 h-20 flex items-center">
      <div className="flex lg:flex-1 px-6">
        <Link href="#" className="-m-1.5 p-1.5">
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
                height={20}
                priority
              />
            </div>
          </div>
        </Link>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-base/6 text-gray-100">
            Blog
          </Link>
          <Link href="#" className="text-base/6 text-gray-100">
            Career
          </Link>
          <Link href="#" className="text-base/6 text-gray-100">
            About
          </Link>
          <Link href="#" className="text-base/6 text-gray-100">
            Contact
          </Link>
        </div>
      </nav>

      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Career
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
