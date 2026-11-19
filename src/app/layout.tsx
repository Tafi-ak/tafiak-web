import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import "./globals.css";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    default: "Abdullahil Kafi",
    template: "%s \u2022 Abdullahil Kafi",
  },
  description: "This is the home page of Abdullahil Kafi (tafiak)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>

        <div className="page-container">

          <Header />
        
          <main className="content">
            {children}
          </main>

          <Footer />

        </div>

        
        
        
        </body>
    </html>
  );
}
