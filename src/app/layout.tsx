import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://in-tec.de"),
  title: {
    default: "In-Tec | Premium Gebäudereinigung & Facility Management Berlin",
    template: "%s | In-Tec Gebäudereinigung",
  },
  description:
    "Professionelle Gebäudereinigung & Facility Management in Berlin. Unterhaltsreinigung, Bauendreinigung, Glasreinigung, Praxisreinigung – über 15 Jahre Erfahrung.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "In-Tec Gebäudemanagement GmbH",
    title: "In-Tec | Premium Gebäudereinigung & Facility Management Berlin",
    description:
      "Professionelle Gebäudereinigung & Facility Management in Berlin. Über 15 Jahre Erfahrung, 250+ betreute Objekte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Tec | Premium Gebäudereinigung Berlin",
    description:
      "Professionelle Gebäudereinigung & Facility Management in Berlin.",
  },
  alternates: {
    canonical: "/",
  },
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
