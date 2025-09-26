import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "성민규 | 웹 포트폴리오",
  description: "Mingyu's Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
