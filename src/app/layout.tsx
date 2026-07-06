import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghauri Dental Center - Premium Dental Care in DHA Lahore",
  description: "Trusted by 303+ patients. Premium dental implants, braces, cosmetic dentistry & smile makeovers in DHA Lahore. Book your appointment today.",
  keywords: ["dentist Lahore", "dental implants DHA", "best dentist Lahore", "cosmetic dentistry", "braces Lahore", "smile makeover"],
  authors: [{ name: "Ghauri Dental Center" }],
  openGraph: {
    title: "Ghauri Dental Center - Smile with Confidence",
    description: "Premium dental care in DHA Lahore with 4.9★ rating and 303+ happy patients",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
