import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex flex-col justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
