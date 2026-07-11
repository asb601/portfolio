import Panel from "@/components/Panel";

const SPEC: { k: string; v: string }[] = [
  { k: "role", v: "AI Backend Engineer" },
  { k: "focus", v: "LLM · RAG · agents" },
  { k: "shipping", v: "~17 mo, production" },
  { k: "based", v: "Hyderabad, IN" },
  { k: "status", v: "open to roles" },
];

export default function Summary() {
  return (
    <Panel id="summary" label="Summary" index="01">
      <div className="split">
        <div>
          <p className="lede">
            AI Backend Engineer specializing in production LLM systems — RAG
            pipelines, hybrid retrieval, and agentic orchestration.
          </p>
          <p className="body">
            About 17 months building and shipping AI systems: an enterprise AI
            analytics platform (async ingestion, hybrid retrieval, an agentic
            query engine) and a live ML product with 56 real users on the Chrome
            Web Store. Strong in Python, FastAPI, LangGraph, Azure OpenAI, and
            vector/graph retrieval — and opinionated about doing the expensive
            thinking at ingestion so queries stay fast.
          </p>
        </div>

        <dl className="spec">
          {SPEC.map((s) => (
            <div className="spec__row" key={s.k}>
              <dt className="spec__k">{s.k}</dt>
              <dd className="spec__v">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Panel>
  );
}
