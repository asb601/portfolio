// /resume — single source of truth for the resume.
// Renders one way on the web (fluid, fixed reading column) and prints to a
// one-page US Letter PDF (Chrome → Print → Save as PDF). Server component,
// plain semantic HTML: <h1> name, <h2> sections, <h3> roles/projects, <ul><li>.

export default function ResumePage() {
  return (
    <main className="resume">
      {/* ---------------- Header ---------------- */}
      <header className="resume__header">
        <h1>A Sai Bharath</h1>
        <p className="resume__title">
          AI Backend Engineer · LLM Systems · RAG Pipelines · Agentic Workflows
        </p>
        <p className="resume__contact">
          <a href="tel:+916300824195">+91 63008 24195</a>
          <span className="sep">·</span>
          <a href="mailto:asb.bharath601@gmail.com">asb.bharath601@gmail.com</a>
          <span className="sep">·</span>
          {/* TODO: replace slug with your real LinkedIn vanity URL. */}
          <a href="https://linkedin.com/in/asaibharath" target="_blank" rel="noreferrer">
            linkedin.com/in/asaibharath
          </a>
          <span className="sep">·</span>
          <a href="https://github.com/asb601" target="_blank" rel="noreferrer">
            github.com/asb601
          </a>
          <span className="sep">·</span>
          <a href="https://portfolio.codeen.in.net" target="_blank" rel="noreferrer">
            portfolio.codeen.in.net
          </a>
        </p>
      </header>

      {/* ---------------- Summary ---------------- */}
      <section aria-labelledby="summary">
        <h2 id="summary">Summary</h2>
        <p>
          AI Backend Engineer specializing in production LLM systems — RAG
          pipelines, hybrid retrieval, and agentic orchestration. ~17 months
          building and shipping AI systems, including an enterprise AI analytics
          platform (async ingestion + hybrid retrieval + agentic query engine)
          and a live ML product with 56 real users on the Chrome Web Store.
          Strong in Python, FastAPI, LangGraph, Azure OpenAI, and vector/graph
          retrieval.
        </p>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <ul className="resume__skills">
          <li>
            <strong>AI / LLM:</strong> LLM systems, Generative AI, RAG, LangGraph,
            LangChain, agentic workflows, tool-calling, hybrid retrieval (BM25 +
            vector/HNSW), RRF reranking, semantic routing, prompt engineering,
            Neo4j Graph RAG, pgvector, OpenSearch, evaluation &amp; guardrails
          </li>
          <li>
            <strong>Backend:</strong> Python, FastAPI (async), Celery + Redis,
            Node.js, REST APIs, microservices, asyncpg, SQLAlchemy 2.0 (async),
            Pydantic
          </li>
          <li>
            <strong>Data:</strong> PostgreSQL, MongoDB, Neo4j, Parquet/PyArrow,
            DataFusion, DuckDB, vector stores
          </li>
          <li>
            <strong>Cloud / DevOps:</strong> Azure OpenAI, Azure Blob, AWS
            (EC2/S3), Docker, GitHub Actions, CI/CD, Vercel
          </li>
          <li>
            <strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind
          </li>
        </ul>
      </section>

      {/* ---------------- Experience ---------------- */}
      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>

        <div className="entry">
          <div className="entry__head">
            <h3>NCR Atleos — Associate Software Engineer</h3>
            <span className="entry__dates">Oct 2025 – Present</span>
          </div>
          <p className="entry__meta">Hyderabad</p>
          {/* TODO: replace the two placeholder bullets below with real work
              (one measurable number each). Nothing here is fabricated. */}
          <ul>
            <li className="resume__todo">
              ADD: AI/automation you built here + one metric — hours saved / %
              faster / tickets deflected / volume / users
            </li>
            <li className="resume__todo">
              ADD: one line of real backend scope or reliability signal, with a
              number
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry__head">
            <h3>NCR Atleos — Software Developer Intern</h3>
            <span className="entry__dates">Feb 2025 – Oct 2025</span>
          </div>
          <p className="entry__meta">Hyderabad</p>
          <ul>
            <li>
              Built a Graph RAG pipeline (LangChain + Neo4j) for internal
              developer tooling, enabling context-aware Q&amp;A over company
              knowledge bases through multi-step reasoning.
            </li>
            <li>
              Engineered LLM services on Azure OpenAI with prompt pipelines,
              retrieval validation, and failure-handling logic for internal
              Q&amp;A workflows.
            </li>
            <li>
              Built GitHub Actions CI/CD that removed manual deployment steps and
              kept dev and staging environments consistent across the team.
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>

        <div className="entry">
          <div className="entry__head">
            <h3>Enterprise AI Analytics Platform</h3>
            <span className="entry__dates">Freelance</span>
          </div>
          <p className="entry__stack">
            FastAPI · LangGraph · OpenSearch · Azure OpenAI · Celery/Redis ·
            PostgreSQL · DataFusion · Docker
          </p>
          <ul>
            <li>
              Architected a 13-stage async ingestion pipeline (Celery + Redis)
              processing enterprise ERP/CSV data through encoding detection,
              Parquet conversion, LLM-based ontology resolution, and hybrid
              OpenSearch indexing (BM25 + HNSW) — intelligence computed at
              ingestion, never at query time.
            </li>
            <li>
              Built a hybrid-retrieval query engine with RRF reranking and a
              deterministic planner gate: high-confidence queries route to a
              DataFusion executor (~1–2s, zero LLM calls); complex multi-hop
              queries fall back to a LangGraph agent loop (≤14 tool calls).
            </li>
            <li>
              Designed value-validated join detection via GIN-indexed PostgreSQL
              array overlap (O(log N) relationship discovery), with multi-tenant
              isolation enforced at every layer.
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry__head">
            <h3>Dockwave — Agentic Document Intelligence</h3>
            <span className="entry__dates">
              <a href="https://dockwave.vercel.app" target="_blank" rel="noreferrer">
                dockwave.vercel.app
              </a>
            </span>
          </div>
          <p className="entry__stack">
            Next.js · FastAPI · LangChain · Neo4j · PostgreSQL · Azure OpenAI ·
            AWS S3
          </p>
          <ul>
            <li>
              Built a document platform extracting entities into a Neo4j
              knowledge graph for context-aware querying across workspaces,
              capturing cross-document connections plain vector search misses.
            </li>
            <li>
              Engineered a retrieval-grading loop generating 3–4 queries per
              question over 6–7 iterations, scoring by confidence and relevance
              to auto-select the best answer.
            </li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry__head">
            <h3>PhisX — Real-Time Phishing Detection</h3>
            <span className="entry__dates">Chrome Web Store · 56 users</span>
          </div>
          <p className="entry__stack">Python · Flask · React · AWS EC2 · Docker</p>
          <ul>
            <li>
              Trained and deployed an ML model at 95%+ detection accuracy behind a
              live REST API (EC2 + Docker), serving 56 real users through a Chrome
              extension with real-time phishing alerts.
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- Education (omitted by default) ----------------
          Uncomment this block to add the one quiet line you flagged as
          recommended. Adds a 5th <h2> — keep it last and minimal.

      <section aria-labelledby="education">
        <h2 id="education">Education</h2>
        <p className="resume__education">
          BE, Computer Science — Keshav Memorial Engineering College, Osmania
          University · 2021–2025
        </p>
      </section>
      ---------------------------------------------------------------- */}
    </main>
  );
}
