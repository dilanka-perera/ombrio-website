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
          fromColor="#cbd5e1" // slate-300 in hex
          toColor="#64748b" // slate-500 in hex
          logo1="/LOGO1.gif"
          logo1Link="/"
          logo2="/LOGO2.png"
          logo2Link="/"
          textColor="#000000" // black in hex
          textHoverColor="#374151" // gray-700 in hex
        />
        <main className="flex-grow">
          <div className="max-w-[1280px] mx-auto pt-[80px]">{children}</div>
        </main>
        <Footer
          fromColor="#cbd5e1" // slate-300 in hex
          toColor="#64748b" // slate-500 in hex
          textColor="#000000" // black in hex
          textHoverColor="#374151" // gray-700 in hex
        />
      </body>
    </html>
  );
}
