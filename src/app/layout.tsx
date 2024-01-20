import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O mapas do dimas",
  description: "o mais bonito da aldeia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const extra = "bg-gray-200 font-sans leading-normal tracking-normal"
  return (
    <html lang="en">
      <body className={extra + ' '+ inter.className}>{children}</body>
    </html>
  );
}
