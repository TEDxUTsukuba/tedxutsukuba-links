import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParallaxProviderWrapper from "@/components/provider/parallaxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDxUTsukuba 2023 万華鏡",
  description: "TEDxUTsukuba 2023 万華鏡のポータルサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ParallaxProviderWrapper>{children}</ParallaxProviderWrapper>
      </body>
    </html>
  );
}
