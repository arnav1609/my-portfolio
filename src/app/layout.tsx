// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnav Bhandari | Full-Stack & IoT Developer",
  description: "Portfolio of Arnav Bhandari — Full-Stack Developer, IoT Engineer, and 6× Hackathon Winner. Building web apps, AI platforms, and embedded systems.",
  openGraph: {
    title: "Arnav Bhandari | Full-Stack & IoT Developer",
    description: "6× Hackathon Winner. Building NeuroFin, Kanda Krates, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CursorSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
