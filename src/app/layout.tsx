import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn KG - Knowledge Graph for LLM Developers",
  description: "LLM開発者がナレッジグラフを学ぶ12セッションの実践コース",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-gray-50">{children}</body>
    </html>
  );
}
