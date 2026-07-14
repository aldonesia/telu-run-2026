import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Tel-U Run 2026 - Satu hari. Satu ruang. Ribuan energi.",
    template: "%s | Tel-U Run 2026",
  },
  description: "Join Tel-U Run 2026 - Official running race event by Telkom University Surabaya. 5K & 10K categories with total prize pool IDR 54 Million. Fun Run, Fun Walk, and exciting community activities.",
  keywords: [
    "Tel-U Run 2026",
    "Telkom University Surabaya",
    "lomba lari",
    "running race",
    "5K race",
    "10K race",
    "fun run",
    "fun walk",
    "event kampus",
    "Surabaya",
    "healthy living",
    "community event",
  ],
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  
  authors: [{ name: "Tel-U Run 2026 Team" }],
  
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://telurun.id", 
    siteName: "Tel-U Run 2026",
    title: "Tel-U Run 2026 - Satu hari. Satu ruang. Ribuan energi.",
    description: "Join Tel-U Run 2026 - Official running race event by Telkom University Surabaya. 5K & 10K categories with total prize pool IDR 54 Million.",
    images: [
      {
        url: "https://telurun.id/logo.png",
        width: 1200,
        height: 630,
        alt: "Tel-U Run 2026",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Tel-U Run 2026",
    description: "Official running race event by Telkom University Surabaya",
  },
  
  alternates: {
    canonical: "https://telurun.id",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> 
      <body className={`${poppins.variable} ${poppins.className}`}>
        {children}
        <WhatsAppButton /> 
      </body>
    </html>
  );
}