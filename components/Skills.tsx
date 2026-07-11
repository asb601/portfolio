import Panel from "@/components/Panel";

const GROUPS: { title: string; items: string }[] = [
  {
    title: "Techniques",
    items:
      "RAG · hybrid retrieval (BM25 + HNSW) · RRF reranking · semantic routing · Graph RAG · agentic workflows · tool-calling · evaluation & guardrails · prompt engineering",
  },
  {
    title: "Frameworks & Libraries",
    items:
      "LangGraph · LangChain · FastAPI (async) · Celery + Redis · Pydantic · SQLAlchemy 2.0 (async) · asyncpg · PyArrow · React · Next.js",
  },
  {
    title: "Datastores",
    items:
      "PostgreSQL (incl. pgvector) · OpenSearch · Neo4j · MongoDB · DuckDB · Parquet · DataFusion",
  },
  {
    title: "Languages & Infra",
    items:
      "Python · TypeScript · Node.js · Azure OpenAI · Azure Blob · AWS (EC2 / S3) · Docker · GitHub Actions · CI/CD · Vercel",
  },
];

export default function Skills() {
  return (
    <Panel id="stack" label="Stack" index="04">
      <dl className="stack">
        {GROUPS.map((g) => (
          <div key={g.title} className="stack__row">
            <dt className="stack__k">{g.title}</dt>
            <dd className="stack__v">{g.items}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
