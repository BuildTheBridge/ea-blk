import type { Metadata } from "next";
import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const karla = Nanum_Gothic_Coding({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Education Alliance",
  description: "Education Alliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
