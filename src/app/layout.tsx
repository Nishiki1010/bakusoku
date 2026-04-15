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
  title: "bakusoku — 「作って終わり」を、終わりにする。",
  description:
    "AIで作ったアプリを見せてください。フィードバックします。買い取ります。仕事も渡します。認定ビルダーにはグループ企業32社の事業課題をご紹介。",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "bakusoku — 「作って終わり」を、終わりにする。",
    description:
      "腕試し、歓迎。AIで作ったアプリにフィードバック・買い取り・仕事を。",
    url: siteUrl,
    siteName: "bakusoku",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bakusoku — 「作って終わり」を、終わりにする。",
    description:
      "腕試し、歓迎。AIで作ったアプリにフィードバック・買い取り・仕事を。",
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
