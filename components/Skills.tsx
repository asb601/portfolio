const GROUPS: { title: string; items: string }[] = [
  {
    title: "AI / LLM",
    items:
      "LLM systems · RAG · LangGraph · LangChain · agentic workflows · tool-calling · hybrid retrieval (BM25 + vector/HNSW) · RRF reranking · semantic routing · prompt engineering · Neo4j Graph RAG · pgvector · OpenSearch · evaluation & guardrails",
  },
  {
    title: "Backend",
    items:
      "Python · FastAPI (async) · Celery + Redis · Node.js · REST APIs · microservices · asyncpg · SQLAlchemy 2.0 (async) · Pydantic",
  },
  {
    title: "Data",
    items:
      "PostgreSQL · MongoDB · Neo4j · Parquet / PyArrow · DataFusion · DuckDB · vector stores",
  },
  {
    title: "Cloud / DevOps",
    items:
      "Azure OpenAI · Azure Blob · AWS (EC2 / S3) · Docker · GitHub Actions · CI/CD · Vercel",
  },
  {
    title: "Frontend",
    items: "React · Next.js · TypeScript · Tailwind",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <p className="eyebrow">
          <span className="eyebrow__cmd">cat <b>stack.json</b></span>
          <span className="eyebrow__meta">tooling</span>
        </p>

        <dl className="skills">
          {GROUPS.map((g) => (
            <div key={g.title} className="skills__row">
              <dt className="skills__k">{g.title}</dt>
              <dd className="skills__v">{g.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
