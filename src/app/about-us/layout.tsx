import type { Metadata } from "next";

const title = "Guten Capital | About us";
const description =
  "Reshaping the path to financial success for individuals and institutions";

export const metadata: Metadata = {
  title,
  description,
  keywords: "Guten, capital, wealth, partner, investment, growth, success",
  openGraph: {
    title,
    description,
    images: ["/images/about-us-bg.png"],
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
