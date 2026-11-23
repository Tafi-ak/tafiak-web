import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  metadataBase: new URL("https://tafiak.com"),
  title: {
    default: "Abdullahil Kafi (tafiak) \u2022 Math Olympiad Instructor & Problem Solver",
    template: "%s \u2022 Abdullahil Kafi (tafiak)",
  },
  description:
    "Official website of Abdullahil Kafi (tafiak). International Olympiad math instructor, USEMO grader, and problem solver.",
  keywords: [
    "Abdullahil Kafi",
    "Tafiak",
    "Tafi",
    "Abdullahil",
    "Kafi",
    "Olympiad Math",
    "Mathematics",
    "OTIS Math",
  ],
  authors: [{ name: "Abdullahil Kafi", url: "https://tafiak.com" }],
  creator: "Abdullahil Kafi",
  openGraph: {
    title: "Abdullahil Kafi (tafiak)",
    description:
      "Official website of Abdullahil Kafi (tafiak). International Olympiad math instructor and analytical problem solver.",
    url: "https://tafiak.com",
    siteName: "Abdullahil Kafi (tafiak)",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Abdullahil Kafi (tafiak)",
    description:
      "Official website of Abdullahil Kafi (tafiak). International Olympiad math instructor and problem solver.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://tafiak.com",
        name: "Abdullahil Kafi",
        alternateName: ["Tafiak", "Tafi", "Kafi", "Abdullahil"],
        url: "https://tafiak.com",
        jobTitle: "Olympiad Math Instructor",
        description:
          "Abdullahil Kafi (Tafiak) is an Olympiad mathematics instructor, USEMO grader, and analytical problem solver.",
        knowsAbout: [
          "Olympiad Mathematics",
          "Euclidean Geometry",
          "Problem Solving",
          "Asymptote Vector Graphics",
        ],
        worksFor: {
          "@type": "Organization",
          name: "OTIS Math LLC",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Shahid Mamun Mahmud Police Lines School and College, Rajshahi",
        },
        sameAs: [
          "https://www.linkedin.com/in/abdullahilkafi",
          "https://github.com/Tafi-ak",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://tafiak.com",
        url: "https://tafiak.com",
        name: "Abdullahil Kafi (tafiak)",
        alternateName: ["Tafiak", "Tafi"],
        publisher: {
          "@id": "https://tafiak.com",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="page-container">
          <Header />

          <main className="content">
            <div className="each-page-box">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
