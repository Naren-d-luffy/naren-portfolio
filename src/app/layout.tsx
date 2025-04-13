import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap", });

export const metadata: Metadata = {
  title: "RamNaren | Stack Hive",
  description: "Full Stack Developer | MERN | Next.js | Cloud",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased bg-violet-100 text-gray-900`}>
        <AOSProvider />
        <Header />
        <main className="container mx-auto px-4 overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
