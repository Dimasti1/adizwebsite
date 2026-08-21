import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";

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
  description:
    "AdizWebsite membantu kontraktor membangun website profesional untuk meningkatkan kepercayaan dan mendapatkan lebih banyak calon klien.",

  applicationName: "AdizWebsite",

  keywords: [
    "jasa website",
    "website bisnis",
    "web developer",
    "freelance web developer",
    "website profesional",
  ],

  authors: [
    {
      name: "AdizWebsite",
    },
  ],

  creator: "AdizWebsite",

  openGraph: {
    title: "AdizWebsite — Website Profesional untuk Bisnis",
    description:
      "AdizWebsite membantu bisnis membangun website profesional, terpercaya, dan dirancang untuk mengubah pengunjung menjadi calon pelanggan.",
    siteName: "AdizWebsite",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AdizWebsite — Website Profesional untuk Bisnis",
    description:
      "AdizWebsite membantu bisnis membangun website profesional, terpercaya, dan dirancang untuk mengubah pengunjung menjadi calon pelanggan.",
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
