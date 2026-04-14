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

const siteUrl = "https://bakusoku-tau.vercel.app"

export const metadata: Metadata = {
  title: "bakusoku — AIで作ったアプリ、買い取ります",
  description:
    "AIバイブコーディングで作ったアプリを5万〜50万円以上で買い取り。査定無料、BuyApp.ai提携。実力を認めたビルダーにはグループ企業32社のリアルな事業課題をご紹介。",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "bakusoku — AIで作ったアプリ、買い取ります",
    description:
      "AIバイブコーディングで作ったアプリを5万〜50万円以上で買い取り。査定無料、BuyApp.ai提携。",
    url: siteUrl,
    siteName: "bakusoku",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bakusoku — AIで作ったアプリ、買い取ります",
    description:
      "AIバイブコーディングで作ったアプリを5万〜50万円以上で買い取り。査定無料、BuyApp.ai提携。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
