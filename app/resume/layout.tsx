import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./resume.css";

/* ACTIVE fonts (technical-elegant direction). next/font handles
   self-hosting + embedding, so nothing external is fetched at runtime. */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-resume-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-resume-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-resume-mono",
  display: "swap",
});

/* ---- Editorial-serif alternate ------------------------------------
   To switch font DIRECTION, comment out the three consts above and use:

   import { Fraunces, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
   const display = Fraunces({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-resume-display", display: "swap" });
   const body    = Source_Serif_4({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-resume-body", display: "swap" });
   const mono    = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-resume-mono", display: "swap" });
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "A Sai Bharath — Resume",
  description:
    "AI Backend Engineer · LLM Systems · RAG Pipelines · Agentic Workflows",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable} resume-root`}>
      {children}
    </div>
  );
}
