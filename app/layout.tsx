import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.bio,
  keywords: [
    "Java Developer",
    "Full Stack Developer",
    "Spring Boot",
    "Microservices",
    "AWS",
    "Docker",
    "Kubernetes",
    "React",
    "Next.js",
    "Senior Developer",
    "Chennai",
    "India",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.website,
    title: `${profile.name} | ${profile.title}`,
    description: profile.bio,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.bio,
    creator: "@sakthir",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-dvh antialiased bg-[--bg-primary] text-[--text-primary] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
