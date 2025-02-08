import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { DataProvider } from "@/contexts/DataContext";
import {
  fetchCarousal,
  fetchHeadBanners,
  fetchTileCollections,
  fetchWebsiteImages,
} from "@/lib/contentful";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300"],
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

  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased text-black bg-slate-100`}
      >
        <div className="container flex flex-col min-h-screen bg-white ring-1 ring-gray-500/10 shadow-md">
          <Header />
          <main className="flex flex-grow">
            <div className="flex flex-col flex-grow max-w-[1920px] mx-auto pt-[80px] overflow-hidden">
              <DataProvider
                initialData={{
                  carousal,
                  websiteImages,
                  tileCollections,
                  headBanners,
                }}
              >
                {children}
              </DataProvider>
            </div>
          </main>
          <Footer
            fromColor="#ffffff" // slate-500 in hex
            toColor="#ffffff" // slate-950 in hex
            textColor="#000000" // white in hex
            textHoverColor="#d1d5db" // gray-300 in hex
          />
        </div>
      </body>
    </html>
  );
}
