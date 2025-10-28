import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeDIC Assets Viewer",
  description: "View and search through MeDIC's latest release assets with interactive tables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
