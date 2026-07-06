import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghauri Dental Center - Premium Dental Care in DHA Lahore",
  description: "Trusted by 300+ patients. Premium dental services including implants, braces, cosmetic dentistry, and emergency care in DHA Phase 6, Lahore.",
  keywords: ["dentist", "dental clinic", "DHA Lahore", "implants", "braces", "teeth whitening", "cosmetic dentistry"],
  authors: [{ name: "Ghauri Dental Center" }],
  openGraph: {
    title: "Ghauri Dental Center - Smile with Confidence",
    description: "Premium dental care in DHA Lahore with 4.9★ rating from 300+ reviews",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
