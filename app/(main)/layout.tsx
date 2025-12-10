import type { Metadata } from "next";
import {
  Montserrat
} from "next/font/google";
import "../globals.css";
import Navbar, { FooterNav } from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Coding Savvy",
  description: "Placement-first coding bootcamps for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}`}
    >
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="antialiased font-montserrat">
        <Navbar />
        {children}
        <FooterNav />
      </body>
    </html>
  );
}
