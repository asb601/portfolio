import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A Sai Bharath | Software Engineer",
  description: "Software Engineer specializing in AI Systems and Backend Engineering. Building production LLM systems, Graph RAG pipelines, and agentic workflows.",
  keywords: ["AI Engineer", "Backend Engineer", "LangChain", "Graph RAG", "Python", "FastAPI", "Hyderabad", "LLM Developer"],
  authors: [{ name: "A Sai Bharath" }],
  openGraph: {
    title: "A Sai Bharath | Software Engineer",
    description: "Software Engineer specializing in AI Systems and Backend Engineering. Building production LLM systems, Graph RAG pipelines, and agentic workflows.",
    url: "https://asaibharath.dev",
    siteName: "A Sai Bharath Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A Sai Bharath | Software Engineer",
    description: "Software Engineer specializing in AI Systems and Backend Engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

