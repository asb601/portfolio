import Panel from "@/components/Panel";

const ROLES = [
  {
    org: "NCR Atleos",
    title: "Associate Software Engineer",
    dates: "Oct 2025 — Present",
    place: "Hyderabad",
    bullets: [
      "Building internal AI/automation tooling on production LLM and retrieval services.",
    ],
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
  },
];

export default function Experience() {
  return (
    <Panel id="experience" label="Experience" index="02">
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
    </Panel>
  );
}
