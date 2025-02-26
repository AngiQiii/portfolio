import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
