import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zynorax",
  description: "Innovating AI and Web Solutions for a Smarter Digital Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-r from-neutral-950 via-slate-950 to-neutral-950`}
      >
        <Header />
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto pt-[80px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
