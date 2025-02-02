import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Header";
import Footer from "../Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}
      >
        <Header
          fromColor="slate-300"
          toColor="slate-500"
          logo1="/LOGO1.gif"
          logo1Link="/"
          logo2="/LOGO_BLOG.png"
          logo2Link="/blog"
          textColor="black"
          textHoverColor="gray-700"
        />
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto pt-[80px]">{children}</div>
        </main>
        <Footer
          fromColor="slate-300"
          toColor="slate-500"
          textColor="black"
          textHoverColor="gray-700"
        />
      </body>
    </html>
  );
}
