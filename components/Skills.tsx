"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  IconBrain,
  IconServer,
  IconBrandReact,
  IconCloud,
  IconDatabase,
} from "@tabler/icons-react";

const skillsRow1 = [
  { name: "LangChain" },
  { name: "Graph RAG" },
  { name: "LLM Agents" },
  { name: "Prompt Engineering" },
  { name: "Vector Embeddings" },
  { name: "Azure OpenAI" },
  { name: "Tool-Calling" },
  { name: "Retrieval Grading" },
];

const skillsRow2 = [
  { name: "Python" },
  { name: "FastAPI" },
  { name: "Node.js" },
  { name: "Flask" },
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "TailwindCSS" },
];

const categories = [
  {
    icon: IconBrain,
    title: "AI & LLM",
    skills: [
      "LangChain",
      "Graph RAG",
      "LLM Agents",
      "Azure OpenAI",
      "Prompt Engineering",
      "Vector Embeddings",
      "Multi-Agent Workflows",
      "Confidence Scoring",
    ],
  },
  {
    icon: IconServer,
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Flask",
      "Express",
      "REST APIs",
      "Microservices",
      "API Design",
    ],
  },
  {
    icon: IconBrandReact,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Admin Dashboards",
      "Framer Motion",
    ],
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "AWS S3",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Azure",
    ],
  },
  {
    icon: IconDatabase,
    title: "Data & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "Prisma ORM",
      "Vector Stores",
      "Knowledge Graphs",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 space-y-4"
        >
          <InfiniteMovingCards items={skillsRow1} direction="left" speed="slow" />
          <InfiniteMovingCards items={skillsRow2} direction="right" speed="slow" />
        </motion.div>

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="bg-surface border-border p-6 h-full hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-geist">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-background border-border text-textMuted hover:border-primary hover:text-primary transition-all"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
