import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ReturnTop } from "@/components/ReturnTop"

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
})

export const metadata: Metadata = {
  title: "성민규 | 프론트엔드 개발자",
  description: "Mingyu's Web Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${pretendard.className}`}>
        <Header />
        {children}
        <Footer />
        <ReturnTop />
      </body>
    </html>
  )
}
