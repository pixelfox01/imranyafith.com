import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Imran Yafith | Computer Science",
  description: "Imran is a Computer Science student at Sheridan College.",
};

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          montserrat.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
