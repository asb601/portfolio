const ROLES = [
  {
    org: "NCR Atleos",
    title: "Associate Software Engineer",
    dates: "Oct 2025 — Present",
    place: "Hyderabad",
    bullets: [
      "Building internal AI and automation tooling on top of the retrieval and LLM services below.",
    ],
    note: true, // current role — kept light until real metrics land
  },
  {
    org: "NCR Atleos",
    title: "Software Developer Intern",
    dates: "Feb 2025 — Oct 2025",
    place: "Hyderabad",
    bullets: [
      "Built a Graph RAG pipeline (LangChain + Neo4j) for internal developer tooling — context-aware Q&A over company knowledge bases via multi-step reasoning.",
      "Engineered LLM services on Azure OpenAI with prompt pipelines, retrieval validation, and failure-handling for internal Q&A workflows.",
      "Set up GitHub Actions CI/CD that removed manual deployment steps and kept dev and staging consistent across the team.",
    ],
    note: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section band">
      <div className="wrap">
        <p className="eyebrow">
          <span className="eyebrow__cmd">cat <b>experience.log</b></span>
          <span className="eyebrow__meta">2025 → now</span>
        </p>

        <div className="entries">
          {ROLES.map((r, i) => (
            <article key={i} className="entry">
              <div className="entry__head">
                <h3 className="entry__title">
                  {r.org} <span className="entry__sep">—</span> {r.title}
                </h3>
                <span className="entry__dates">{r.dates}</span>
              </div>
              <p className="entry__meta">{r.place}</p>
              <ul className="bullets">
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
