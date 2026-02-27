import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "In-Tec | Premium Gebäudereinigung & Facility Management",
  description:
    "Hochwertiges Facility Management für Immobilien, die mehr verlangen als nur den Standard. Unterhaltsreinigung, Bauendreinigung, Glasreinigung und mehr.",
  keywords: [
    "Gebäudereinigung",
    "Facility Management",
    "Unterhaltsreinigung",
    "Bauendreinigung",
    "Glasreinigung",
    "Berlin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
