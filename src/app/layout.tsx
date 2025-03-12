import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Nav, Footer } from "./components";

const pangram = localFont({
  src: [
    {
      path: "./assets/fonts/pangram/Pangram-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./assets/fonts/pangram/Pangram-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./assets/fonts/pangram/Pangram-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./assets/fonts/pangram/Pangram-Bold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./assets/fonts/pangram/Pangram-ExtraBold.otf",
      style: "normal",
      weight: "800",
    },
  ],
});

const title = "Guten Capital | Home"
const description =  "Your Trusted Partner in Wealth Management"

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBISTE_BASE_URL}`),
  title,
  description,
  keywords: "Guten, capital, wealth, partner, investment, growth, success",
  openGraph:{
    title,
    description,
    images: '/og/header-bg.png',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pangram.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
