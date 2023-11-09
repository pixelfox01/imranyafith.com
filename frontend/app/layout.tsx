import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Imran Yafith | Computer Science",
  description: "Imran is a Computer Science student at Sheridan College.",
};

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body className={montserrat.className}>
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
