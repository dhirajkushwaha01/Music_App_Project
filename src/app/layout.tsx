import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ScrollReveal } from "@/components/ui/scroll-reveal"; 
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music app",
  description: "music app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body>
        <SmoothScroll />
        <div className="relative w-full flex items-center justify-center">
          <Navbar/></div>
        {children} 
        <ScrollReveal>
        <Footer /> 
      </ScrollReveal>
      </body>

    </html>
  );
}
