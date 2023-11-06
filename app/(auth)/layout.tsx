import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Husky Threads ",
  description: "A community communications platform for Houston Christian University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <ClerkProvider >
            <body className={`${inter.className} bg-slate-200`}>
                <div className='w-full flex justify-center items-center min-h-screen'>
                  {children}
                </div>
            </body>
          </ClerkProvider>
    </html>
  );
}
