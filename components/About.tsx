"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub, IconBrandLinkedin, IconMapPin } from "@tabler/icons-react";

const stats = [
  { value: 3, label: "Projects Deployed", suffix: "" },
  { value: 56, label: "Chrome Extension Users", suffix: "" },
  { value: 1, label: "Years Building", suffix: "+" },
  { value: 95, label: "PhisX Accuracy", suffix: "%" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Avatar and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold font-geist text-white shadow-2xl shadow-primary/50">
                ASB
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-50 animate-pulse" />
            </div>

            <Badge className="mb-4 bg-surface border-border text-textPrimary">
              <IconMapPin className="w-4 h-4 mr-2" />
              Hyderabad, India
            </Badge>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/asb601"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-textPrimary hover:text-primary hover:border-primary transition-all"
              >
                <IconBrandGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/a-sai-bharath-b414662ab/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-textPrimary hover:text-primary hover:border-primary transition-all"
              >
                <IconBrandLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 text-textMuted leading-relaxed"
          >
            <p className="text-lg">
              I build AI agent systems, LLM-powered backends, and Graph RAG
              pipelines. I&apos;ve shipped production systems on Azure OpenAI and AWS,
              and deployed projects with real users.
            </p>
            <p className="text-lg">
              I work across Python, FastAPI, LangChain, Node.js, and
              React/Next.js. I care about building things that are reliable,
              fast, and actually solve real problems — not just demos.
            </p>
            <p className="text-lg">
              Right now I&apos;m focused on agentic AI systems, document
              intelligence, and AI-powered finance tools.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  suffix,
  delay,
  isInView,
}: {
  value: number;
  label: string;
  suffix: string;
  delay: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-surface border-border p-6 text-center hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
        <div className="text-4xl md:text-5xl font-bold font-geist text-primary mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-sm text-textMuted font-medium">{label}</div>
      </Card>
    </motion.div>
  );
}
