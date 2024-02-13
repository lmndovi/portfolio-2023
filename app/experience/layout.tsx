import type { Metadata } from "next";
import Link from "next/link";

import "../globals.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.webp",
      href: "/logo.webp",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1B7DE5]/60">
        <div>
          <Navbar />
        </div>

        {children}
        <footer className="sticky bottom-5 w-full">
          <div className="md:flex md:items-center md:justify-center hidden">
            <Link href="/" className="cursor-pointer">
              <HomeIcon className="h-10 bg-[#1B7DE5] w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer p-2" />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
