type Link = { label: string; href: string };
type Project = {
  name: string;
  status: string;
  live?: boolean;
  stack: string;
  blurb: string;
  links: Link[];
};

const PROJECTS: Project[] = [
  {
    name: "Enterprise AI Analytics Platform",
    status: "Freelance · private",
    stack:
      "FastAPI · LangGraph · OpenSearch · Azure OpenAI · Celery/Redis · PostgreSQL · DataFusion · Docker",
    blurb:
      "A 13-stage async ingestion pipeline (Celery + Redis) that turns messy ERP/CSV into hybrid OpenSearch indexes (BM25 + HNSW) — intelligence computed at ingestion, never at query time. The query engine reranks with RRF and gates on a deterministic planner: high-confidence queries take a fast DataFusion path (~1–2s, zero LLM calls); multi-hop queries fall back to a LangGraph agent loop bounded to ≤14 tool calls. Value-validated joins via GIN-indexed array overlap, multi-tenant isolation at every layer.",
    links: [],
  },
  {
    name: "Dockwave",
    status: "Live",
    live: true,
    stack: "Next.js · FastAPI · LangChain · Neo4j · PostgreSQL · Azure OpenAI · AWS S3",
    blurb:
      "Agentic document intelligence. Extracts entities into a Neo4j knowledge graph for context-aware Q&A across a whole workspace — catching cross-document connections plain vector search misses. A retrieval-grading loop runs 3–4 queries per question over 6–7 iterations, scoring by confidence to auto-select the best answer.",
    links: [
      { label: "Live", href: "https://dockwave.vercel.app" },
      { label: "GitHub", href: "https://github.com/asb601/Dockwave" },
    ],
  },
  {
    name: "PhisX",
    status: "56 users · Chrome Web Store",
    live: true,
    stack: "Python · Flask · React · AWS EC2 · Docker",
    blurb:
      "Real-time phishing detection. An ML model at 95%+ accuracy served behind a live REST API (EC2 + Docker), shipped as a Chrome extension that flags phishing while you browse — 56 real users on the Chrome Web Store.",
    links: [
      {
        label: "Chrome Store",
        href: "https://chromewebstore.google.com/detail/phisx/jnbmnebokpebcplhgcmgleinlmmplfal",
      },
    ],
  },
  {
    name: "Personal Investor",
    status: "In development",
    stack: "Next.js · Python · LangChain · Gmail API · Vercel",
    blurb:
      "An AI-first personal finance tool. Reads credit-card data from Gmail and uses an LLM tool-selection engine that autonomously picks the right financial tool per query — no fixed query structure. Roadmap: real-time stock analysis and AI-generated portfolio insights.",
    links: [
      { label: "Live", href: "https://personal-investor-lxkn.vercel.app" },
      { label: "GitHub", href: "https://github.com/asb601/Personal-Investor" },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="section band">
      <div className="wrap">
        <p className="eyebrow">
          <span className="eyebrow__cmd">ls <b>./projects</b></span>
          <span className="eyebrow__meta">4 systems</span>
        </p>

        <div className="entries">
          {PROJECTS.map((p) => (
            <article key={p.name} className="entry proj">
              <div className="entry__head">
                <h3 className="entry__title">{p.name}</h3>
                <span className={`proj__status${p.live ? " proj__status--live" : ""}`}>
                  {p.live && <span className="proj__dot" aria-hidden="true" />}
                  {p.status}
                </span>
              </div>
              <p className="proj__stack mono">{p.stack}</p>
              <p className="proj__blurb">{p.blurb}</p>
              {p.links.length > 0 && (
                <div className="proj__links">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
