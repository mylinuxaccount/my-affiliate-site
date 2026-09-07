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
  metadataBase: new URL("https://my-affiliate-site-liart-eta.vercel.app"),
  title: "ALI PICK | 알리익스프레스 초가성비 직구 픽",
  description:
    "실패 없는 입문자 & 가성비 장비 조합 가이드. 알리익스프레스 최저가 및 직구 추천!",
  openGraph: {
    type: "website",
    url: "https://my-affiliate-site-liart-eta.vercel.app",
    siteName: "ALI PICK (알리픽)",
    title: "ALI PICK | 알리익스프레스 초가성비 직구 픽",
    description:
      "실패 없는 입문자 & 가성비 장비 조합 가이드. 알리익스프레스 최저가 및 직구 추천!",
    locale: "ko_KR",
    images: [
      {
        url: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "ALI PICK 알리익스프레스 가성비 테크 장비 큐레이션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALI PICK | 알리익스프레스 초가성비 직구 픽",
    description:
      "실패 없는 입문자 & 가성비 장비 조합 가이드. 알리익스프레스 최저가 및 직구 추천!",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
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
