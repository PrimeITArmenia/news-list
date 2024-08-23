import type { Metadata } from "next";

import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Trading Bull",
  description: "Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Trading Bull</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
