import Link from 'next/link';
import { Metadata } from 'next';
import { LayoutWrapper } from './LayoutWrapper';
import StandardContainer from './StandardContainer';

const title = '404: Page not found – Ombrio';
const description =
  'Welcome to Ombrio, where innovation meets excellence. We are a forward-thinking AI and Web Development company dedicated to empowering businesses with cutting-edge technology solutions that drive growth and success.';
const imageUrl = '/OG.jpg';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: 'Ombrio - AI and Web Development',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [imageUrl],
  },
};

export default function NotFound() {
  return (
    <LayoutWrapper>
      <StandardContainer>
        <div className="flex items-center justify-center text-center p-4">
          <div className="p-8 max-w-lg">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Page Not Found
            </h1>
            <p className="text-lg mb-2 text-center">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div
              className="text-9xl font-extrabold mb-2 text-center py-20"
              style={{ fontFamily: 'Bahnschrift, sans-serif' }}
            >
              4<span className="text-yellow-500">0</span>4
            </div>
            <p className="text-sm text-center">
              You can go back to the{' '}
              <Link href="/" className="text-blue-500">
                Home Page
              </Link>{' '}
              .
            </p>
          </div>
        </div>
      </StandardContainer>
    </LayoutWrapper>
  );
}
