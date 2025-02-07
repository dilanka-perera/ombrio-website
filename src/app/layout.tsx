import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { DataProvider } from "@/contexts/DataContext";
import {
  fetchCarousal,
  fetchTileCollections,
  fetchWebsiteImages,
} from "@/lib/contentful";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const carousal = await fetchCarousal();
  const websiteImages = await fetchWebsiteImages();
  const tileCollections = await fetchTileCollections();

  return (
    <html lang="en">
      <body className={` antialiased text-black bg-slate-100`}>
        <div className="container flex flex-col min-h-screen bg-white ring-1 ring-gray-500/10 shadow-md">
          <Header />
          <main className="flex-grow">
            <div className="max-w-[1920px] mx-auto pt-[80px]">
              <DataProvider
                initialData={{ carousal, websiteImages, tileCollections }}
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
