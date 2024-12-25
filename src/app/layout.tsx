import type { Metadata } from "next";
import { Vollkorn, Open_Sans } from "next/font/google";
import React from "react";

import "@/styles/globals.css";

const vollkorn = Vollkorn({ subsets: ["latin"], variable: "--font-vollkorn" });
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Luna Travel Agent",
    default: "Luna Travel Agent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className={`${openSans.className} ${vollkorn.variable}`}>
        {children}
      </body>
    </html>
  );
}
