import './globals.css';
import Header from './Header';
import Footer from './Footer';
import { DataProvider } from '@/contexts/DataContext';
import {
  fetchBlogCollections,
  fetchBlogs,
  fetchCarousalCollections,
  fetchHeadBanners,
  fetchTeams,
  fetchTileCollections,
  fetchWebsiteImages,
} from '@/lib/contentful';
import { Roboto_Flex } from 'next/font/google';
import FadeInWrapper from './FadeInWrapper';
import BackgroundImage from './BackgroundImage';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: 'variable',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const carousalCollections = await fetchCarousalCollections();
  const websiteImages = await fetchWebsiteImages();
  const tileCollections = await fetchTileCollections();
  const headBanners = await fetchHeadBanners();
  const blogs = await fetchBlogs();
  const teams = await fetchTeams();
  const blogCollections = await fetchBlogCollections();

  // Get the background image URL
  const backgroundImageUrl = `https:${websiteImages.find((img) => img.slug === 'home-background-image')?.image || 'no.png'}`;

  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased text-black font-light bg-slate-100`}
      >
        <BackgroundImage imageUrl={backgroundImageUrl} />

        <div className="container flex flex-col min-h-screen bg-white ring-1 ring-gray-500/10 shadow-md">
          <DataProvider
            initialData={{
              carousalCollections,
              websiteImages,
              tileCollections,
              headBanners,
              blogs,
              teams,
              blogCollections,
            }}
          >
            <Header />
            <main className="relative flex flex-grow overflow-hidden w-full">
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
