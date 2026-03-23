"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconChevronDown } from "@tabler/icons-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <BackgroundBeams />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TextGenerateEffect
            words="A Sai Bharath"
            className="text-5xl md:text-7xl font-bold font-geist mb-6 text-textPrimary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-3xl font-medium text-accent font-geist">
            Software Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Building software, backend systems, and AI-powered products that
          solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <a href="/bharath_resume.pdf" download>
              <IconDownload className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="https://github.com/asb601"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            <IconBrandGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/a-sai-bharath-b414662ab/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-textMuted hover:text-primary transition-colors"
          >
            <IconBrandLinkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <IconChevronDown className="w-8 h-8 text-textMuted" />
        </motion.div>
      </div>
    </section>
  );
}
