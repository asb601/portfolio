// Tiny, honest, in-browser retrieval over A Sai Bharath's own content.
// No model, no server, no keys — token-overlap scoring against curated
// chunks. It's the same shape as a real RAG retriever (chunk → score →
// rank → cite), just without the GPU bill. Deterministic and offline.

export type Chunk = {
  id: string;
  /** DOM id of the section this chunk cites (for scroll-to). */
  section: string;
  /** Human label shown on the citation chip. */
  label: string;
  /** The answer text surfaced to the reader (real content, first person). */
  answer: string;
  /** Distinctive names/phrases that should decisively pick this chunk. */
  strong: string[];
  /** Extra searchable terms + synonyms that should match this chunk. */
  keywords: string[];
};

export type RetrievalResult = {
  query: string;
  matched: boolean;
  answer: string;
  /** Deduped sections to cite, most relevant first. */
  sources: { label: string; section: string }[];
};

export const CHUNKS: Chunk[] = [
  {
    id: "summary",
    section: "summary",
    label: "Summary",
    answer:
      "I'm A Sai Bharath, an AI Backend Engineer based in Hyderabad, India. I build production LLM systems — RAG pipelines, hybrid retrieval, and agentic orchestration. About 17 months in, I've shipped real AI: an enterprise analytics platform, Dockwave, and PhisX (56 users on the Chrome Web Store).",
    strong: [
      "who are you", "who is he", "what do you do", "about you", "about him",
      "about yourself", "tell me about you", "sai bharath", "bharath",
    ],
    keywords: [
      "who", "yourself", "bio", "intro", "introduce", "name", "summary",
      "overview", "role", "profession", "occupation", "engineer", "sai",
      "based", "located", "location", "hyderabad", "where", "background",
    ],
  },
  {
    id: "experience",
    section: "experience",
    label: "Experience",
    answer:
      "At NCR Atleos (Hyderabad, since Feb 2025) I built a Graph RAG pipeline on LangChain + Neo4j for internal developer tooling, engineered LLM services on Azure OpenAI with prompt pipelines and retrieval validation, and set up GitHub Actions CI/CD that removed manual deployment steps across the team.",
    strong: ["ncr atleos", "ncr", "atleos", "where does he work", "his job"],
    keywords: [
      "experience", "job", "company", "employer", "career",
      "currently", "current", "internship", "intern",
      "professional", "employed", "position", "history",
    ],
  },
  {
    id: "projects-overview",
    section: "work",
    label: "Selected Work",
    answer:
      "Live: the Enterprise AI Analytics Platform (a freelance RAG system), Dockwave (agentic document intelligence, dockwave.vercel.app), and PhisX (a real-time phishing detector with 56 users on the Chrome Web Store). In progress: Personal Investor, an AI-first finance tool.",
    strong: ["what has he shipped", "what has he built", "his projects", "his work"],
    keywords: [
      "projects", "project", "shipped", "ship", "built", "build", "building",
      "work", "portfolio", "made", "things", "everything", "deployed",
      "launched", "products", "apps", "recent",
    ],
  },
  {
    id: "enterprise",
    section: "work",
    label: "Work · Enterprise RAG",
    answer:
      "The Enterprise AI Analytics Platform (freelance) is a 13-stage async ingestion pipeline (Celery + Redis) that turns messy ERP/CSV data into hybrid OpenSearch indexes (BM25 + HNSW). Its query engine reranks with RRF and gates on a deterministic planner: simple queries take a fast DataFusion path (~1–2s, zero LLM calls); multi-hop queries fall back to a LangGraph agent loop bounded to ≤14 tool calls.",
    strong: [
      "enterprise", "analytics platform", "ingestion", "opensearch", "biggest project",
      "flagship", "hardest project", "best project", "most impressive",
    ],
    keywords: [
      "analytics", "pipeline", "bm25", "hnsw", "rrf", "rerank", "reranking",
      "datafusion", "celery", "redis", "planner", "biggest", "best", "hardest",
      "complex", "impressive", "erp", "parquet",
    ],
  },
  {
    id: "dockwave",
    section: "work",
    label: "Work · Dockwave",
    answer:
      "Dockwave is an agentic document-intelligence platform. It extracts entities into a Neo4j knowledge graph for context-aware Q&A across a whole workspace, and runs a retrieval-grading loop — 3–4 queries per question over 6–7 iterations, scored by confidence — to auto-pick the best answer. It's live at dockwave.vercel.app.",
    strong: ["dockwave", "document intelligence"],
    keywords: [
      "document", "documents", "docs", "knowledge", "graph", "neo4j",
      "grading", "entities", "workspace",
    ],
  },
  {
    id: "phisx",
    section: "work",
    label: "Work · PhisX",
    answer:
      "PhisX is a real-time phishing detector: an ML model at 95%+ accuracy served behind a live REST API (AWS EC2 + Docker), shipped as a Chrome extension with 56 real users on the Chrome Web Store.",
    strong: ["phisx", "phishing", "chrome extension"],
    keywords: [
      "ml", "machine", "learning", "model", "chrome",
      "extension", "users", "ec2", "flask", "accuracy", "security", "detector",
    ],
  },
  {
    id: "personal-investor",
    section: "work",
    label: "Work · Personal Investor",
    answer:
      "Personal Investor (in development) is an AI-first personal finance tool. It reads credit-card data from Gmail and uses an LLM tool-selection engine that autonomously picks the right financial tool per query — no fixed query structure. Roadmap: real-time stock analysis and AI portfolio insights.",
    strong: ["personal investor", "investor", "finance", "financial", "personal finance"],
    keywords: [
      "personal", "money", "gmail", "stock", "stocks", "portfolio",
      "banking", "expenses",
    ],
  },
  {
    id: "retrieval-approach",
    section: "work",
    label: "Work · Retrieval",
    answer:
      "My retrieval philosophy: do the expensive thinking at ingestion, not query time. Retrieve hybrid (keyword + vector), rerank with RRF, and gate with a deterministic planner so simple queries stay fast and cheap with zero LLM calls — only falling back to an agent loop, with a bounded tool budget, when a question genuinely needs multi-hop reasoning.",
    strong: ["rag", "retrieval", "agentic", "how does his retrieval work", "his approach"],
    keywords: [
      "retrieve", "agent", "agents", "hybrid", "vector", "vectors", "embedding",
      "embeddings", "reasoning", "multi-hop", "philosophy", "approach",
      "orchestration", "tool-calling", "tools",
    ],
  },
  {
    id: "skills",
    section: "skills",
    label: "Skills",
    answer:
      "Backend: Python + FastAPI (async), Celery/Redis, SQLAlchemy/asyncpg. AI layer: LangGraph, LangChain, hybrid retrieval (BM25 + vector/HNSW), RRF reranking, Neo4j Graph RAG, pgvector, OpenSearch. Data: PostgreSQL, MongoDB, Neo4j. Infra: Azure OpenAI, AWS, Docker, GitHub Actions. Frontend: React, Next.js, TypeScript.",
    strong: ["stack", "skills", "tech stack", "what does he use", "technologies"],
    keywords: [
      "tech", "tools", "languages", "language", "python", "fastapi", "langgraph",
      "langchain", "framework", "frameworks", "backend", "frontend", "cloud",
      "database", "databases", "expertise", "know", "use", "using", "proficient",
    ],
  },
  {
    id: "contact",
    section: "contact",
    label: "Contact",
    answer:
      "Yes — I'm open to roles and interesting projects. Email me at asb.bharath601@gmail.com, or find me on GitHub (asb601) and LinkedIn. There's a message form at the bottom of this page too.",
    strong: [
      "contact", "hire", "available", "is he available", "how to reach",
      "get in touch", "email", "resume", "cv",
    ],
    keywords: [
      "hiring", "availability", "reach", "touch", "opportunity", "opportunities",
      "roles", "connect", "message", "linkedin", "github", "freelance", "open",
    ],
  },
];

export const SUGGESTIONS: string[] = [
  "What has he shipped?",
  "What's his RAG stack?",
  "Tell me about Dockwave",
  "What did he do at NCR Atleos?",
  "Is he available to hire?",
];

const STOP = new Set([
  "the", "a", "an", "is", "are", "was", "were", "to", "of", "for", "and", "or",
  "in", "on", "at", "me", "my", "s", "please", "hey", "hi", "tell", "give",
  "show", "us", "this", "site", "that", "it", "with", "any", "some", "your",
  "does", "did", "can", "could", "would", "will", "have", "has",
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9+#.\- ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(s: string): string[] {
  return normalize(s)
    .split(" ")
    .filter((t) => t.length >= 2 && !STOP.has(t));
}

/** Score one chunk against a normalized query + its tokens. */
function scoreChunk(chunk: Chunk, qNorm: string, qTokens: string[]): number {
  let score = 0;
  const qSet = new Set(qTokens);

  // strong tier — distinctive names/phrases decide the winner
  for (const kw of chunk.strong) {
    const k = kw.toLowerCase();
    if (k.includes(" ")) {
      if (qNorm.includes(k)) score += 6;
    } else if (qSet.has(k)) {
      score += 6;
    }
  }

  // keyword tier
  const kwSet = new Set(chunk.keywords.map((k) => k.toLowerCase()));
  for (const kw of chunk.keywords) {
    const k = kw.toLowerCase();
    if ((k.includes(" ") || k.includes("-")) && qNorm.includes(k)) score += 4;
  }
  for (const t of qTokens) {
    if (kwSet.has(t)) score += 3;
    else if (t.length >= 5) {
      for (const k of kwSet) {
        if (k.length >= 5 && (k.startsWith(t.slice(0, 5)) || t.startsWith(k.slice(0, 5)))) {
          score += 1;
          break;
        }
      }
    }
  }

  // weak signal: answer-text mention (can't outweigh a keyword tie)
  const hay = normalize(chunk.answer);
  for (const t of qTokens) {
    if (t.length >= 5 && hay.includes(t)) score += 0.5;
  }
  return score;
}

export function retrieve(query: string): RetrievalResult {
  const qNorm = normalize(query);
  const qTokens = tokenize(query);

  if (!qNorm) {
    return {
      query,
      matched: false,
      answer: "Type a question above — or tap one of the suggestions.",
      sources: [],
    };
  }

  const ranked = CHUNKS.map((c) => ({ c, s: scoreChunk(c, qNorm, qTokens) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s);

  if (ranked.length === 0) {
    return {
      query,
      matched: false,
      answer:
        "I don't have a strong match for that one. I can answer about his work, experience, RAG/retrieval approach, stack, or how to reach him — try a suggestion below.",
      sources: [],
    };
  }

  const best = ranked[0];
  // Include a close-second answer only if it's from a different section and
  // genuinely competitive — keeps multi-part questions useful without rambling.
  const parts = [best.c.answer];
  const sources: { label: string; section: string }[] = [
    { label: best.c.label, section: best.c.section },
  ];
  const seenSections = new Set([best.c.section]);

  for (const r of ranked.slice(1)) {
    if (r.s >= Math.max(3, best.s * 0.7) && !seenSections.has(r.c.section)) {
      parts.push(r.c.answer);
      sources.push({ label: r.c.label, section: r.c.section });
      seenSections.add(r.c.section);
    }
    if (parts.length >= 2) break;
  }

  return {
    query,
    matched: true,
    answer: parts.join(" "),
    sources,
  };
}
