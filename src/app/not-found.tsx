import Link from "next/link";
import FadeInWrapper from "./(main)/FadeInWrapper";
import Image from "next/image";
import RootLayout from "./(main)/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page not found – ZynoraX",
  description:
    "Welcome to ZynoraX, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.",
};

export default function NotFound() {
  return (
    <RootLayout>
      <FadeInWrapper>
        <div className="flex items-center justify-center text-center p-4">
          <div className="p-8 max-w-lg">
            <h1 className="text-4xl font-semibold text-gray-300 mb-4 text-center">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-300 mb-2 text-center">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Image
              src="/404.png"
              alt="Blog Post Not Found"
              width={900}
              height={900}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-300 text-center">
              You can go back to the{" "}
              <Link href="/blog" className="text-blue-500">
                Home Page
              </Link>{" "}
              .
            </p>
          </div>
        </div>
      </FadeInWrapper>
    </RootLayout>
  );
}
