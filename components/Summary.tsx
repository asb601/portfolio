const FACTS: { k: string; v: string }[] = [
  { k: "role", v: "AI Backend Engineer" },
  { k: "focus", v: "LLM systems · RAG · agents" },
  { k: "shipping", v: "~17 months, production AI" },
  { k: "based", v: "Hyderabad, India" },
  { k: "status", v: "open to roles" },
];

export default function Summary() {
  return (
    <section id="summary" className="section">
      <div className="wrap">
        <p className="eyebrow">
          <span className="eyebrow__cmd">cat <b>summary.md</b></span>
          <span className="eyebrow__meta">whoami</span>
        </p>

        <div className="summary__grid">
          <div className="summary__prose">
            <p className="lede">
              AI Backend Engineer specializing in production LLM systems — RAG
              pipelines, hybrid retrieval, and agentic orchestration.
            </p>
            <p className="body">
              About 17 months building and shipping AI systems: an enterprise AI
              analytics platform (async ingestion, hybrid retrieval, an agentic
              query engine) and a live ML product with 56 real users on the
              Chrome Web Store. Strong in Python, FastAPI, LangGraph, Azure
              OpenAI, and vector/graph retrieval — and opinionated about doing
              the expensive thinking at ingestion so queries stay fast.
            </p>
          </div>

          <dl className="facts">
            {FACTS.map((f) => (
              <div key={f.k} className="facts__row">
                <dt className="facts__k">{f.k}</dt>
                <dd className="facts__v">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
