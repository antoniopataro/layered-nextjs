import type { Metadata } from "next";

import "@/styles/index.css";

export const metadata: Metadata = {
  description: "",
  title: "layered-next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
