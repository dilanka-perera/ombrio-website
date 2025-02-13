import './globals.css';
import 'keen-slider/keen-slider.min.css';
import Header from './Header';
import Footer from './Footer';
import { DataProvider } from '@/contexts/DataContext';
import {
  fetchBlogCollections,
  fetchBlogs,
  fetchCarousal,
  fetchHeadBanners,
  fetchTeams,
  fetchTileCollections,
  fetchWebsiteImages,
} from '@/lib/contentful';
import { Ubuntu } from 'next/font/google';
import FadeInWrapper from './FadeInWrapper';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const carousal = await fetchCarousal();
  const websiteImages = await fetchWebsiteImages();
  const tileCollections = await fetchTileCollections();
  const headBanners = await fetchHeadBanners();
  const blogs = await fetchBlogs();
  const teams = await fetchTeams();
  const blogCollections = await fetchBlogCollections();

  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased text-black font-light bg-slate-100`}
      >
        <div className="container flex flex-col min-h-screen bg-white ring-1 ring-gray-500/10 shadow-md">
          <DataProvider
            initialData={{
              carousal,
              websiteImages,
              tileCollections,
              headBanners,
              blogs,
              teams,
              blogCollections,
            }}
          >
            <Header />
            <main className="flex flex-grow">
              <FadeInWrapper className="flex flex-grow overflow-hidden">
                <div className="flex flex-col flex-grow max-w-[1920px] mx-auto pt-[80px] overflow-hidden">
                  {children}
                </div>
              </FadeInWrapper>
            </main>
            <Footer />
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
