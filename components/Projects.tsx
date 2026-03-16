"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "Dockwave",
    badge: { text: "Featured", color: "bg-primary/10 text-primary border-primary/20" },
    description:
      "Agentic document intelligence platform. Upload files in folder structures — AI extracts entities, builds a Neo4j knowledge graph, and enables context-aware Q&A across your entire workspace. Multi-iteration retrieval grading with 6-7 passes per query and confidence scoring picks the best answer automatically.",
    tech: [
      "Next.js",
      "Python",
      "FastAPI",
      "LangChain",
      "Neo4j",
      "PostgreSQL",
      "Azure OpenAI",
      "AWS S3",
      "Vercel",
    ],
    github: "https://github.com/asb601/Dockwave",
    demo: "https://dockwave.vercel.app",
  },
  {
    title: "Personal Investor",
    badge: { text: "In Development", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    description:
      "AI-first personal finance platform. Tracks expenses, reads credit card data from Gmail, and uses an LLM tool-selection engine that autonomously picks the right financial tool per query — no fixed query structure needed. Roadmap includes real-time stock analysis and AI-generated portfolio insights.",
    tech: ["Next.js", "Python", "LangChain", "Gmail API", "Vercel"],
    github: "https://github.com/asb601/Personal-Investor",
    demo: "https://personal-investor-lxkn.vercel.app",
  },
  {
    title: "PhisX",
    badge: { text: "56 Active Users", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    description:
      "Real-time phishing detection platform. ML model with 95%+ accuracy served via live REST API on AWS EC2 with Docker. Chrome extension delivers real-time phishing alerts while browsing — 56 real users on Chrome Web Store.",
    tech: ["Python", "Flask", "React", "TypeScript", "AWS EC2", "Docker"],
    chromeStore: "https://chromewebstore.google.com/detail/phisx/jnbmnebokpebcplhgcmgleinlmmplfal",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-4">
            <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-textMuted">Things I&apos;ve built and shipped</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-surface border-border p-6 h-full flex flex-col hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold font-geist">{project.title}</h3>
                  <Badge className={project.badge.color}>
                    {project.badge.text}
                  </Badge>
                </div>

                <p className="text-textMuted leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-background border-border text-xs text-textMuted"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-border hover:border-primary hover:text-primary"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.chromeStore && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a
                        href={project.chromeStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink className="w-4 h-4 mr-2" />
                        Chrome Store
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
