import type { Metadata } from "next";
import { noto_serif } from "../lib/fonts";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';



export const metadata: Metadata = {
  title: "Look at the page first",
  description: "Will you be my valentine💝?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_serif.className} >
      <body className={noto_serif.className}>{children}</body>
      <Analytics />
    </html>
  );
}
