import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0F0E0C",
  colorScheme: "dark",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Sai Bharath — AI Backend Engineer",
  description:
    "AI Backend Engineer building production LLM systems — RAG pipelines, hybrid retrieval, and agentic orchestration. Ask this site anything.",
  keywords: [
    "AI Backend Engineer",
    "LLM systems",
    "RAG pipelines",
    "agentic workflows",
    "FastAPI",
    "LangGraph",
    "Python",
    "Hyderabad",
  ],
  authors: [{ name: "A Sai Bharath" }],
  openGraph: {
    title: "A Sai Bharath — AI Backend Engineer",
    description:
      "Production LLM systems — RAG pipelines, hybrid retrieval, agentic orchestration. Ask this site anything.",
    url: "https://portfolio.codeen.in.net",
    siteName: "A Sai Bharath",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Sai Bharath — AI Backend Engineer",
    description:
      "Production LLM systems — RAG, hybrid retrieval, agentic orchestration. Ask this site anything.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
