import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#450099" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0033" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://telurun.id"),

  title: {
    default: "Tel-U Run 2026 Surabaya | Lomba Lari 5K, 10K & Kategori Inklusif",
    template: "%s | Tel-U Run 2026 Surabaya",
  },
  description:
    "Daftar Tel-U Run 2026 di Surabaya! Event lari resmi 5K, 10K, dan kategori inklusif 2.5K pasca stroke dengan teknologi Picobot oleh Telkom University Surabaya. Total hadiah Rp54 Juta. Race Day: 8 November 2026.",

  keywords: [
    "Tel-U Run 2026",
    "Telu Run Surabaya",
    "telurun.id",
    "pendaftaran Tel-U Run",
    "Tel-U Run Surabaya",

    "event lari inklusif Surabaya",
    "kategori lari pasca stroke",
    "teknologi Picobot",
    "kaki robot Picobot Telkom University",
    "lomba lari difabel Surabaya",
    "2.5K Post-Stroke Walk",

    "event lari Surabaya 2026",
    "jadwal lari Jawa Timur 2026",
    "lomba lari 5K 10K Surabaya",
    "running event Surabaya",
    "info race lari Surabaya",
    "lomba lari November 2026",
    "fun run Surabaya 2026",
    "marathon Surabaya 2026",
    "lomba lari Surabaya",
    "event olahraga Surabaya",

    "lomba lari Surabaya Barat",
    "event lari Telkom University Surabaya",
    "lomba lari Jawa Timur",
    "running event Jawa Timur 2026",

    "daftar lomba lari Surabaya 2026",
    "biaya pendaftaran Tel-U Run",
    "lomba lari hadiah jutaan",
    "race pack Tel-U Run 2026",
    "jersey official Tel-U Run",

    "komunitas lari Surabaya",
    "lomba lari sehat Surabaya",
    "fun run Indonesia 2026",
    "lomba lari untuk pemula Surabaya",
    "event lari keluarga Surabaya",
  ],

  authors: [
    { name: "Tel-U Run 2026 Team", url: "https://telurun.id" },
    { name: "Telkom University Surabaya", url: "https://surabaya.telkomuniversity.ac.id" },
  ],
  creator: "Tel-U Run 2026 Committee",
  publisher: "Telkom University Surabaya",

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

  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/logo.png"],
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Tel-U Run 2026",
  },

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://telurun.id",
    siteName: "Tel-U Run 2026 Surabaya",
    title: "Tel-U Run 2026 Surabaya | Lomba Lari 5K, 10K & Kategori Inklusif",
    description:
      "Daftar Tel-U Run 2026 di Surabaya! Event lari resmi 5K, 10K, dan kategori inklusif 2.5K pasca stroke dengan teknologi Picobot. Total hadiah Rp54 Juta. 8 November 2026.",
    images: [
      {
        url: "https://telurun.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tel-U Run 2026 Surabaya - Lomba Lari 5K, 10K & Kategori Inklusif",
        type: "image/jpeg",
      },
      {
        url: "https://telurun.id/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Tel-U Run 2026",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tel-U Run 2026 Surabaya | Lomba Lari 5K, 10K & Inklusif",
    description:
      "Daftar sekarang! Event lari resmi 5K, 10K, dan kategori inklusif 2.5K pasca stroke dengan teknologi Picobot. Total hadiah Rp54 Juta. 8 November 2026.",
    images: ["https://telurun.id/og-image.jpg"],
    creator: "@TelU_Run",
    site: "@TelU_Run",
  },

  alternates: {
    canonical: "https://telurun.id",
    languages: {
      "id-ID": "https://telurun.id",
    },
  },

  verification: {
    google: "your-google-verification-code", // Ganti dengan kode dari Google Search Console
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  other: {
    "geo.region": "ID-JI",
    "geo.placename": "Surabaya",
    "geo.position": "-7.294721;112.784431",
    ICB: "1",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Tel-U Run 2026",
  alternateName: "Tel-U Run Surabaya 2026",
  description:
    "Event lari resmi 5K, 10K, dan kategori inklusif 2.5K pasca stroke dengan teknologi Picobot oleh Telkom University Surabaya.",
  startDate: "2026-11-08T05:00:00+07:00",
  endDate: "2026-11-08T12:00:00+07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Telkom University Surabaya",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Lontar No.100",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60226",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.294721,
      longitude: 112.784431,
    },
  },
  image: [
    "https://telurun.id/og-image.jpg",
    "https://telurun.id/logo.png",
  ],
  organizer: {
    "@type": "EducationalOrganization",
    name: "Telkom University Surabaya",
    url: "https://surabaya.telkomuniversity.ac.id",
  },
  sponsor: {
    "@type": "Organization",
    name: "Telkom University Surabaya",
    url: "https://surabaya.telkomuniversity.ac.id",
  },
  offers: [
    {
      "@type": "Offer",
      name: "5K Race - Normal Price",
      price: "300000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-07-01T00:00:00+07:00",
      url: "https://telurun.id/#events",
      category: "5K Race",
    },
    {
      "@type": "Offer",
      name: "10K Race - Normal Price",
      price: "400000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-07-01T00:00:00+07:00",
      url: "https://telurun.id/#events",
      category: "10K Race",
    },
  ],
  performer: {
    "@type": "Organization",
    name: "Tel-U Run 2026 Committee",
  },
  totalPrize: "Rp54.000.000",
  keywords: "lomba lari surabaya, event lari 2026, 5K race, 10K race, kategori inklusif",
  sameAs: [
    "https://www.instagram.com/telu_run",
    "https://www.tiktok.com/@telu_run",
    "https://www.facebook.com/telurun",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}