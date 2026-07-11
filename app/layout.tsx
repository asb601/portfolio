import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-public-sans",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-martian",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0C0E",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "A Sai Bharath — AI Backend Engineer",
  description:
    "AI Backend Engineer building production LLM systems — RAG pipelines, hybrid retrieval, and a cost-aware planner gate. Ask this site anything.",
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
      "Production LLM systems — RAG, hybrid retrieval, and a cost-aware planner gate. Ask this site anything.",
    url: "https://portfolio.codeen.in.net",
    siteName: "A Sai Bharath",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Sai Bharath — AI Backend Engineer",
    description:
      "Production LLM systems — RAG, hybrid retrieval, and a cost-aware planner gate.",
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
      className={`${archivo.variable} ${publicSans.variable} ${martianMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
