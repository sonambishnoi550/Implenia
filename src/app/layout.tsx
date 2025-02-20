import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Implenia",
  description: "WE ARE LOOKING FOR YOUR IDEA",
  openGraph: {
    title: "Implenia",
    description: "WE ARE LOOKING FOR YOUR IDEA",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
