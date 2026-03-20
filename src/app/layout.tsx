import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn KG - Knowledge Graph for LLM Developers",
  description: "A 12-session practical course for LLM developers to master Knowledge Graphs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
