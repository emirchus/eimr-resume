import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import cn from "classnames";
import { Footer } from "@/components/Footer";

const dankMono = localFont({
  src: "../fonts/Dank Mono Regular.otf",
  variable: "--font-dank",
});

export const metadata: Metadata = {
  title: "Emir's Resume",
  description: "Website for Emir's Resume",
  authors: [
    {
      name: "Emir",
      url: "https://www.github.com/emirchus",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(dankMono.className, "min-h-screen bg-base text-text")}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
