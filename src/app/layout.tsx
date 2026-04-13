import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw Marketplace — Business-Ready AI Systems",
  description:
    "Pre-built, security-vetted OpenClaw packages for your specific business. Pick your use case. Install in minutes. Get results today.",
  openGraph: {
    title: "OpenClaw Marketplace",
    description:
      "Pre-built, security-vetted AI systems for your business. Install in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
