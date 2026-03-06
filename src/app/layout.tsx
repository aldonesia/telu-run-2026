import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  title: "Tel-U Run 2026 - Satu hari. Satu ruang. Ribuan energi.",
  description: "Join Tel-U Run 2026- a community event promoting healthy living, togetherness, and celebration. Features Fun Run, Fun Walk, and exciting community activities.",
  keywords: ["Tel-U Run 2026", "fun run", "fun walk", "community event", "healthy living", "sports event"],
  authors: [{ name: "Tel-U Run 2026 Team" }],
  openGraph: {
    title: "Tel-U Run 2026 - Satu hari. Satu ruang. Ribuan energi.",
    description: "Join our community celebration of health, movement, and togetherness",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
                <WhatsAppButton /> 

      </body>
    </html>
  );
}