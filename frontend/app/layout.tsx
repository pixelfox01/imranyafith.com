import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imran Yafith | Computer Science",
  description: "Imran is a Computer Science student at Sheridan College.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
