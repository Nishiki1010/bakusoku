import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      className={`${montserrat.variable} ${notoSansJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto-sans-jp)]">{children}</body>
    </html>
  );
}
