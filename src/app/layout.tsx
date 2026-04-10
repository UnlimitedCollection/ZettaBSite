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
        {/* Preconnect to Google Fonts for faster icon font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload Material Symbols to prevent flash of raw icon text on first paint */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
        {/* Reveal icons once Material Symbols font is loaded — prevents flash of raw text */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  function reveal(){ document.documentElement.classList.add('icons-ready'); }
  if(document.fonts && document.fonts.load){
    document.fonts.load('1em "Material Symbols Outlined"').then(reveal).catch(reveal);
    setTimeout(reveal, 2000);
  } else { reveal(); }
})();`
          }}
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

