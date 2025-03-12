import type { Metadata } from "next";
import OgImg from "../og/about-us-bg.png"

const title = "Guten Capital | About us";
const description =
  "Reshaping the path to financial success for individuals and institutions";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBISTE_BASE_URL}`),
  title,
  description,
  keywords: "Guten, capital, wealth, partner, investment, growth, success",
  openGraph: {
    title,
    description,
    images: OgImg.src,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
