import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { DataProvider } from "@/contexts/DataContext";
import { fetchCarousal } from "@/lib/contentful";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const carousal = await fetchCarousal();
  const websiteImages = await fetchCarousal();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black bg-slate-100`}
      >
        <div className="container flex flex-col min-h-screen bg-white ring-1 ring-gray-500/10 shadow-md">
          <Header />
          <main className="flex-grow">
            <div className="max-w-[1920px] mx-auto pt-[80px]">
              <DataProvider initialData={{ carousal, websiteImages }}>
                {children}
              </DataProvider>
            </div>
          </main>
          <Footer
            fromColor="#64748b" // slate-500 in hex
            toColor="#020617" // slate-950 in hex
            textColor="#ffffff" // white in hex
            textHoverColor="#d1d5db" // gray-300 in hex
          />
        </div>
      </body>
    </html>
  );
}
