import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalContactModal } from "@/components/GlobalContactModal";
import { BackToTop } from "@/components/BackToTop";
import { MotionEffects } from "@/components/MotionEffects";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZettaB | Seamless Software Experiences",
  description: "Strategy, Design, Engineering for modern B2B SaaS and technical products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={`${manrope.variable} antialiased font-sans flex flex-col min-h-screen bg-white text-slate-900`}>
        <MotionEffects />
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <GlobalContactModal />
        <BackToTop />
      </body>
    </html>
  );
}

