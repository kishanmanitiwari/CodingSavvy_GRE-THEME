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
  openGraph: {
    title: "Coding Savvy",
    description: "Placement-first coding bootcamps for students.",
    url: "https://codingsavvy.in",
    siteName: "Coding Savvy",
    images: [
      {
        url: "https://1ea8f57ec50e.ngrok-free.app/images/coding-savvy.jpeg",
        width: 1200,
        height: 630,
        alt: "Coding Savvy",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding Savvy",
    description: "Placement-first coding bootcamps for students.",
    images: ["https://1ea8f57ec50e.ngrok-free.app/images/coding-savvy.jpeg"],
  },
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
