import Gate from "@/components/Gate";

const STATS = [
  { num: "56", unit: "Users" },
  { num: "95%", unit: "Accuracy" },
  { num: "13", unit: "Stages" },
  { num: "≤14", unit: "Tool Calls" },
];

export default function Masthead() {
  return (
    <header className="masthead" id="top">
      <div className="masthead__bar">
        <span className="brand">
          A Sai Bharath
          <span className="brand__tag">ai-backend</span>
        </span>
        <a href="/resume.pdf" target="_blank" rel="noopener" className="btn">
          Résumé ↗
        </a>
      </div>

      <div className="masthead__body">
        <div className="masthead__id">
          <h1 className="mid__name">A Sai Bharath</h1>
          <div className="mid__role">
            <p className="mid__roleline">AI Backend Engineer</p>
            <p className="mid__sub silk">
              LLM Systems · RAG Pipelines · Agentic Workflows
            </p>
          </div>
          <span className="mid__status">
            <span className="mid__dot" aria-hidden="true" />
            <span className="silk">Available for roles · Hyderabad, IN</span>
          </span>
          <p className="mid__thesis">
            I build production LLM systems — retrieval that stays fast and cheap
            when it can, and goes agentic only when a question genuinely needs
            it.
          </p>
          <div className="mid__actions">
            <a href="#work" className="btn">
              View work
            </a>
            <a
              href="https://github.com/asb601"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="masthead__gate">
          <Gate />
        </div>
      </div>

      <div className="readouts" aria-label="System telemetry">
        {STATS.map((s) => (
          <div className="stat" key={s.unit}>
            <div className="stat__num">{s.num}</div>
            <span className="stat__unit silk">{s.unit}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
