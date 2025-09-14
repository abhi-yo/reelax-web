import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Reelax — Stop Doomscrolling",
  description:
  "Reelax is a Chrome extension that nudges mindful breaks from endless feeds with a minimalist overlay—no complex setup.",
  metadataBase: new URL("https://reelax.example.com"),
  icons: { icon: "/favicon.ico" },
  themeColor: "#ffffff",
  openGraph: {
    title: "Reelax — Stop Doomscrolling",
    description:
      "Take back your time. Set limits, add friction, and break infinite-scroll habits.",
    url: "https://reelax.example.com",
    siteName: "Reelax",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Reelax — Stop Doomscrolling",
    description:
      "A minimal, effective Chrome extension to curb doomscrolling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased font-sans bg-white text-black selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
