import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALI PICK | 알리익스프레스 초가성비 직구 픽",
  description: "알리익스프레스에서 엄선한 초가성비 직구 상품 큐레이션",
  verification: {
    google: "jKmTwNzaH7zGNxHPtvFMTHOqR1V0OXGarjDQw250ilY",
    other: {
      "naver-site-verification": "e8aff9cc6a1352a87d07bd20cc5f0bb3e4cdae78",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
