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
  title: "GRE",
  description: "Punit Mishra Prep: Your complete GRE prep solution. Join the GRE Universe Course or get 1:1 tutoring from Punit Mishra, a 337/340 GRE scorer.",
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
