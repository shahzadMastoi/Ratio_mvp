import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratio | Premium Leadership & Capability Training",
  description: "Build practical capability that lasts. Expert-led training programmes aligned to your organisation's needs.",
  keywords: ["training", "leadership", "capability development", "professional development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-navy-dark">{children}</body>
    </html>
  );
}
