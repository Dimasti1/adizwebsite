import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AdizWebsite — Website Profesional untuk Kontraktor",
    template: "%s | AdizWebsite",
  },
  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "jasa website",
    "website bisnis",
    "web developer",
    "freelance web developer",
    "website profesional",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  openGraph: {
    title: "AdizWebsite — Website Profesional untuk Bisnis",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdizWebsite — Website Profesional untuk Bisnis",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children} <Footer />
      </body>
    </html>
  );
}
