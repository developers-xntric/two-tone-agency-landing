import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/navbar";


export const metadata: Metadata = {
  title: "Two Tone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="image/png" />
      <body
        className={`antialiased`}
      >
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
